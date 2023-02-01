import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavparamService } from 'src/app/services/navparam.service';
import { AulavirtualrestProvider } from '../../providers/aulavirtualrest';
import { LogoutProvider } from '../../providers/logout';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-forum-topic',
  templateUrl: './forum-topic.page.html',
  styleUrls: ['./forum-topic.page.scss'],
})
export class ForumTopicPage implements OnInit {

  idCurso: number;
  tema: any;
  usuario: any = [];
  items: any[];
  comentario: string;

  constructor(private router: Router, private navParamService: NavparamService, public proveedor: AulavirtualrestProvider, public proveedorLogout: LogoutProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public actionSheetCtrl: ActionSheetController, private storage: Storage) { 

    this.tema = this.navParamService.getNavData();
    this.initializeItems();

  }

  ngOnInit() {
    // this.tema = this.navParamService.getNavData();
    // this.initializeItems();
  }

  // ionViewWillEnter() {
  //   this.tema = this.navParamService.getNavData();
  //   this.initializeItems();
  // }

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

        this.proveedor.obtenerRespuestasTemasForo(this.usuario.Mensaje.AuthorizationToken, this.tema.IdTema)
        .subscribe(
          //(data)=>{this.tests = data;},
          (data)=>{this.parseJson(data);},
          (error)=>{console.log(error);},
          () =>{loading.dismiss()}
        )
      }
      else{
        // Si no se han recuperado los datos se vuelve a la página del foro
        //this.navCtrl.push(ForoPage);
        this.router.navigate(['/forum']);
      }
    });
  }

  parseJson(data)
  {
    let jsonArray = data.Mensaje;

    this.items = [];

    for(let i=1; i < jsonArray.length; i++)
    {
      let jsonObject = jsonArray[i];
      this.items.push(jsonObject);
    }
  }

  temaCerrado() {
    // const alert = this.alertCtrl.create({
    //   title: 'Tema Cerrado',
    //   subTitle: 'Este tema está cerrado y no se pueden añadir más comentarios',
    //   buttons: ['OK']
    // });
    // alert.present();
    this.alert('Tema Cerrado', 'Este tema está cerrado y no se pueden añadir más comentarios');
  }

  async nuevoComentario() {
    const prompt = await this.alertCtrl.create({
      header: 'Nuevo Comentario',
      message: "Haz un comentario sobre este tema:",
      inputs: [
        {
          name: 'comentario',
          placeholder: 'Comentario',
          max: '1000'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: 'Enviar',
          handler: data => {
            this.comentario = data.comentario;
            this.insertarComentario();
          }
        }
      ]
    });
    await prompt.present();
  } 

  async insertarComentario()
  {
    if (this.comentario != ""){
      const loading = await this.loadingCtrl.create({
        message: "Añadiendo comentario..."
      });
      await loading.present();

      // Se inserta el nuevo comentario en base de datos
      this.proveedor.nuevaRespuesta(this.usuario.Mensaje.AuthorizationToken, this.idCurso, this.tema.IdTema, this.comentario)
      .subscribe(
        //(data)=>{console.log(data);},
        (data)=>{this.nuevoComentarioCreado(data);},
        (error)=>{console.log(error);},
        () =>{loading.dismiss()}
      )   
    }
    else{
      // const alert = this.alertCtrl.create({
      //   title: 'ATENCIÓN',
      //   subTitle: 'Debes introducir un comentario para poder añadirlo al tema',
      //   buttons: ['OK']
      // });
      // alert.present();
      this.alert('ATENCIÓN', 'Debes introducir un comentario para poder añadirlo al tema');
    }       
  }

  nuevoComentarioCreado(data: any){
    // const alert = this.alertCtrl.create({
    //   title: '¡Comentario Añadido!',
    //   subTitle: data.Mensaje,
    //   buttons: ['OK']
    // });
    // alert.present();
    this.alert('Comentario Añadido', data.Mensaje);

    this.initializeItems();
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
