import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavparamService } from 'src/app/services/navparam.service';
import { AulavirtualrestProvider } from '../../providers/aulavirtualrest';
import { LogoutProvider } from '../../providers/logout';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})
export class ForumPage implements OnInit {

  idCurso: number;
  usuario: any = [];
  items: any[];
  allitems: any[];
  titulo: string;
  comentario: string;
  searchQuery: string = '';
  accesoForo: number;
  foros: string = "foros";

  constructor(private router: Router, private navParamService: NavparamService, public proveedor: AulavirtualrestProvider, public proveedorLogout: LogoutProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public actionSheetCtrl: ActionSheetController, private storage: Storage) { }

  ngOnInit() {
    //this.initializeItems();
  }

  ionViewWillEnter() {
    this.initializeItems();
  }

  async initializeItems() {

    const loading = await this.loadingCtrl.create({
      message: "Cargando..."
    });
    await loading.present();

    // Se obtienen el id del curso de la memoria
    this.storage.get('idCurso').then((val) => {
      if (val != null && val != undefined){
        this.idCurso = val;       
      }
      else{
        // Si no se han recuperado los datos se vuelve a la página de login
        this.proveedorLogout.logout()
      }
    });

    // Se obtienen los datos del usuario de la memoria
    this.storage.get('usuario').then((val) => {
      if (val != null && val != undefined){
        this.usuario = JSON.parse(val);

        this.proveedor.obtenerTemasForo(this.usuario.Mensaje.AuthorizationToken, this.idCurso)
        .subscribe(
          //(data)=>{this.tests = data;},
          (data)=>{this.parseJson(data);},
          (error)=>{console.log(error);},
          () =>{loading.dismiss()}
        )
      }
      else{
        // Si no se han recuperado los datos se vuelve a la página de login
        this.proveedorLogout.logout()
      }
    });
  }

  parseJson(data)
  {
    if (data.Error == 0){
      let jsonArray = data.Mensaje;

      this.items = [];
      this.allitems = [];

      if (jsonArray.length > 0){
        for(let i=0; i < jsonArray.length; i++)
        {
          let jsonObject = jsonArray[i];
          this.items.push(jsonObject);
          this.allitems.push(jsonObject);
        }
      }
      else{
        // const alert = this.alertCtrl.create({
        //   title: 'Sin Temas',
        //   subTitle: 'El foro del curso todavía no contiene temas. ¡Se el primero en añadir uno! :)',
        //   buttons: ['OK']
        // });
        // alert.present();
        //this.alert('Sin Temas', 'Este foro todavía no contiene temas. ¡Se el primero en añadir uno! :)');
      }
    }
    // Acceso denegado
    else if (data.Error == -10){
      this.proveedorLogout.logout()
    }
    else{
      this.items = [];
      //this.alert('Sin Temas', 'Este foro todavía no contiene temas. ¡Se el primero en añadir uno! :)');
      // const alert = this.alertCtrl.create({
      //   title: 'Sin Temas',
      //   subTitle: 'El foro del curso todavía no contiene temas. ¡Se el primero en añadir uno! :)',
      //   buttons: ['OK']
      // });
      // alert.present();
    }
  }

  getItems(ev: any) {

    if (this.allitems != null && this.allitems != undefined){
      // Reset items back to all of the items
      this.items = this.allitems;

      this.searchQuery = '';

      // set val to the value of the searchbar
      const val = ev.target.value;

      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.searchQuery = val;
        this.items = this.items.filter((item) => {
          return ((item.Titulo.toLowerCase().indexOf(val.toLowerCase()) > -1) || (item.Comentario.toLowerCase().indexOf(val.toLowerCase()) > -1));
        })
      }
    }
  }

  leerTema(tema: any){
    //this.navCtrl.push(ForoTemaPage, {tema: tema});
    this.navParamService.setNavData(tema);
    this.router.navigate(['/forum-topic']);
  }

  async nuevoTema() {
    const prompt = await this.alertCtrl.create({
      header: 'Nuevo Tema',
      //message: "Introduce los datos del nuevo tema:",
      inputs: [
        {
          name: 'titulo',
          placeholder: 'Título'
        },
        {
          name: 'mensaje',
          placeholder: 'Mensaje',
          max: '1000'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            // console.log('Cancel clicked');            
          }
        },
        {
          text: 'Enviar',
          handler: data => {
            this.titulo = data.titulo;
            this.comentario = data.mensaje;
            this.insertarTema();
          }
        }
      ]
    });
    await prompt.present();
  } 

  // nuevoTemaPaso1() {
  //   const prompt = this.alertCtrl.create({
  //     title: 'Nuevo Tema - Paso 1',
  //     message: "Introduce el título del nuevo tema:",
  //     inputs: [
  //       {
  //         name: 'titulo',
  //         placeholder: 'Título',
  //         max: '300'
  //       },
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancelar',
  //         handler: data => {
  //           // console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Siguiente',
  //         handler: data => {
  //           this.titulo = data.titulo;
  //           this.nuevoTemaPaso2();
  //         }
  //       }
  //     ]
  //   });
  //   prompt.present();
  // } 

  // nuevoTemaPaso2() {
  //   const prompt = this.alertCtrl.create({
  //     title: 'Nuevo Tema - Paso 2',
  //     message: "Introduce el mensaje del nuevo tema:",
  //     inputs: [
  //       {
  //         name: 'mensaje',
  //         placeholder: 'Mensaje',
  //         max: '1000'
  //       },
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancelar',
  //         handler: data => {
  //           // console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Guardar',
  //         handler: data => {
  //           this.comentario = data.mensaje;
  //           this.insertarTema();
  //         }
  //       }
  //     ]
  //   });
  //   prompt.present();
  // } 

  async insertarTema()
  {
    if (this.titulo != "" && this.comentario != ""){
      const loading = await this.loadingCtrl.create({
        message: "Creando tema..."
      });
      await loading.present();

      // Se inserta el nuevo tema en base de datos
      this.proveedor.nuevoTema(this.usuario.Mensaje.AuthorizationToken, this.idCurso, this.titulo, this.comentario)
      .subscribe(
        //(data)=>{console.log(data);},
        (data)=>{this.nuevoTemaCreado(data);},
        (error)=>{console.log(error);},
        () =>{loading.dismiss()}
      )    
    }
    else{
      // const alert = this.alertCtrl.create({
      //   title: 'ATENCIÓN',
      //   subTitle: 'Debes introducir título y mensaje para crear un nuevo tema',
      //   buttons: ['OK']
      // });
      // alert.present();

      this.alert('ATENCIÓN', 'Debes introducir título y mensaje para crear un nuevo tema');
    }

  }

  nuevoTemaCreado(data: any){
    // const alert = this.alertCtrl.create({
    //   title: '¡Tema Creado!',
    //   subTitle: data.Mensaje,
    //   buttons: ['OK']
    // });
    // alert.present();

    this.alert('¡Tema Creado!', data.Mensaje);

    this.initializeItems();
  }

  ayuda()
  {
    //this.navCtrl.push(FaqPage);
    this.router.navigate(['/faq']);
  }

  async filtro()
  {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Filtrar por:',
      buttons: [
        {
          text: 'Todos',
          icon: 'chatbubbles-outline',
          handler: () => {
            this.items = this.allitems;
          }
        },
        {
          text: 'Abiertos',
          icon: 'lock-open-outline',
          handler: () => {
            this.items = this.allitems;
            this.items = this.items.filter((item) => {
              return ((item.Estado == 0));
            })
          }
        },{
          text: 'Cerrados',
          icon: 'lock-closed-outline',
          handler: () => {
            this.items = this.allitems;
            this.items = this.items.filter((item) => {
              return ((item.Estado == 1));
            })
          }
        },{
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
    switch(ev.detail.value)
    {
      case 'foros':
        this.items = this.allitems;
        break;
      case 'abiertos':
        this.items = this.allitems;
        this.items = this.items.filter((item) => {
          return ((item.Estado == 0));
        })
        break;
      case 'cerrados':
        this.items = this.allitems;
        this.items = this.items.filter((item) => {
          return ((item.Estado == 1));
        })
        break;
    }
  }

  async alert(cabecera: string, mensaje: string) {
    const alert = await this.alertCtrl.create({
      header: cabecera,
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

}
