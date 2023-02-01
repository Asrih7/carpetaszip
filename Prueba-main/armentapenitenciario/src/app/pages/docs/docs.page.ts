import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavparamService } from 'src/app/services/navparam.service';
import { AulavirtualrestProvider } from '../../providers/aulavirtualrest';
import { LogoutProvider } from '../../providers/logout';
import { Storage } from '@ionic/storage-angular';
import { Fancybox } from "@fancyapps/ui";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.page.html',
  styleUrls: ['./docs.page.scss'],
})
export class DocsPage implements OnInit {

  idCurso: number;
  tipoCurso: number;
  mesAcceso: number;
  accesoDocs: number;
  usuario: any = [];    
  items: any[];
  allitems: any[];
  searchQuery: string = '';
  docs: string = "docs";

  isAscendic: boolean = true;
  currentDate = new Date();
  lastMonthDate = new Date(new Date().setMonth(new Date().getMonth() - 1));

  constructor(private router: Router, private navParamService: NavparamService, public proveedor: AulavirtualrestProvider, public proveedorLogout: LogoutProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public actionSheetCtrl: ActionSheetController, private storage: Storage, private datePipe: DatePipe) { }

  ngOnInit() {
    //this.initializeItems();
  }

  ionViewWillEnter() {
    this.initializeItems();
  }

  // ionViewDidLoad() {
  //   this.initializeItems();
  // }

  async initializeItems() {

    const loading = await this.loadingCtrl.create({
      message: "Cargando...",
      duration: 500
    });
    await loading.present();

    // Se obtienen el id del curso de la memoria
    this.storage.get('idCurso').then((val) => {
      if (val != null && val != undefined){
        this.idCurso = val;       
      }
      else{
        // Si no se han recuperado los datos se vuelve a la página de login
        loading.dismiss();
        this.proveedorLogout.logout();
      }
    });

    // Se obtiene el mes de acceso al curso de la memoria
    this.storage.get('mesAcceso').then((val) => {
      if (val != null && val != undefined){
        this.mesAcceso = val;       
      }
      else{
        // Si no se han recuperado los datos se vuelve a la página de login
        loading.dismiss();
        this.proveedorLogout.logout();
      }
    });

    // Se obtienen los datos del usuario de la memoria
    this.storage.get('usuario').then((val) => {
      if (val != null && val != undefined){
        this.usuario = JSON.parse(val);

        //this.proveedor.consultarDocsCurso(this.usuario.Mensaje.AuthorizationToken, this.idCurso)
        this.proveedor.consultarDocsCursoMes(this.usuario.Mensaje.AuthorizationToken, this.idCurso, this.mesAcceso)
        .subscribe(
          (data)=>{this.parseJson(data);},
          (error)=>{console.log(error);},
          () =>{loading.dismiss()}
        )        
      }
      else{
        // Si no se han recuperado los datos se vuelve a la página de login
        loading.dismiss();
        this.proveedorLogout.logout();
      }
    });
  }

  parseJson(data)
  {
    if (data.Error == 0){
      let jsonArray = data.Mensaje;

      this.items = [];
      this.allitems = [];

      for(let i=0; i < jsonArray.length; i++)
      {
        let jsonObject = jsonArray[i];
        this.items.push(jsonObject);
        this.allitems.push(jsonObject);
      }
    }
    // Acceso denegado
    else if (data.Error == -10){
      this.proveedorLogout.logout()
    }
    else{
      this.items = [];
      //this.alert('Sin Documentos', 'Este curso no contiene documentos');      
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
          return ((item.Nombre.toLowerCase().indexOf(val.toLowerCase()) > -1) || (item.IdTema == val));
        })
      }
    }
  }

  view(item: any)
  {
    this.marcarComoVisto(item.ID);

    //this.navCtrl.push(DocViewerPage, {item: item});
    this.navParamService.setNavData(item);
    this.router.navigate(['/doc-viewer']);    
  }

  viewFancy(item: any, id: number)
  {
    var url;

    if (item.Fuente == "local"){
      
      // VISUALIZACIÓN
      url = "http://aulavirtualctp.com/Academias/VisorDocumentos/Web/ViewerMobile.aspx?file=" + item.ID;

      // DESCARGA
      // TODO: Comprobar si la descarga está habilitada y si es encriptado o no
      //this.url = "http://aulavirtualctp.com/Academias/docCurso.ashx?Id=" + this.item.ID;      
    }
    else if (item.Fuente == "dropbox"){
      url = item.URL + "&raw=1";
    }
    else if (item.Fuente == "genially"){
      url = item.URL;
    }

    Fancybox.show(
      // Array containing gallery items
      [
        // Gallery item
        {
          src: url,
          type: "iframe",
          preload: false,
          protect: true,
          caption: item.Nombre
        },
      ],
      // Gallery options
      {
        mainClass: "myFancybox",
      }
    );
    
    this.marcarComoVisto(id);
  }

  marcarComoVisto(idDoc: number)
  {    
      // console.log(idDoc);
      // console.log(this.usuario.Mensaje.AuthorizationToken);

      // Se marca el documento como visto en base de datos
      this.proveedor.marcarDocVisto(this.usuario.Mensaje.AuthorizationToken, idDoc)
      .subscribe(
        //(data)=>{console.log(data);},
        (data)=>{},
        (error)=>{console.log(error);}
      )          
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
          handler: () => {
            this.items = this.allitems;
          }
        },
        {
          text: 'Vistos',
          icon: 'eye',
          handler: () => {
            this.items = this.allitems;
            this.items = this.items.filter((item) => {
              return ((item.Visto == 1));
            })
          }
        },{
          text: 'No Vistos',
          icon: 'eye-off',
          handler: () => {
            this.items = this.allitems;
            this.items = this.items.filter((item) => {
              return ((item.Visto == 0));
            })
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    await actionSheet.present();
  }

  async ordenar()
  {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Ordenar por:',
      buttons: [
        {
          text: 'Título',
          icon: 'text',
          handler: () => {
            this.isAscendic?this.ordenarTituloASC():this.ordenarTituloDESC();
          }
        },        
        {
          text: 'Tema',
          icon: 'book-outline',
          handler: () => {
            this.isAscendic?this.ordenarTemaASC():this.ordenarTemaDESC();
          }
        },
        {
          text: 'Fecha',
          icon: 'calendar-outline',
          handler: () => {
            this.isAscendic?this.ordenarFechaASC():this.ordenarFechaDESC();
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    await actionSheet.present();
  }

  ordenarTituloASC(){
    this.isAscendic = false;
    this.items = this.items.sort((a,b) => {
        if (a.Nombre < b.Nombre) {
            return 1;
        }
        if (a.Nombre > b.Nombre) {
            return -1;
        }
        return 0;
    });
  }

  ordenarTituloDESC(){
    this.isAscendic = true;
    this.items = this.items.sort((a,b) => {
        if (a.Nombre > b.Nombre) {
            return 1;
        }
        if (a.Nombre < b.Nombre) {
            return -1;
        }
        return 0;
    });
  }

  ordenarTemaASC(){
    this.isAscendic = false;
    this.items = this.items.sort((a,b) => {
        if (a.IdTema < b.IdTema) {
            return 1;
        }
        if (a.IdTema > b.IdTema) {
            return -1;
        }
        return 0;
    });
  }

  ordenarTemaDESC(){
    this.isAscendic = true;
    this.items = this.items.sort((a,b) => {
        if (a.IdTema > b.IdTema) {
            return 1;
        }
        if (a.IdTema < b.IdTema) {
            return -1;
        }
        return 0;
    });
  }

  ordenarFechaASC(){
    this.isAscendic = false;
    this.items = this.items.sort((a,b) => {
        if (this.esMayor(a.FechaPublicacion, b.FechaPublicacion) === false) {
            return 1;
        }
        if (this.esMayor(a.FechaPublicacion, b.FechaPublicacion) === true) {
            return -1;
        }
        return 0;
    });
  }

  ordenarFechaDESC(){
    this.isAscendic = true;
    this.items = this.items.sort((a,b) => {
        if (this.esMayor(a.FechaPublicacion, b.FechaPublicacion) === true) {
            return 1;
        }
        if (this.esMayor(a.FechaPublicacion, b.FechaPublicacion) === false) {
            return -1;
        }
        return 0;
    });
  }

  esReciente(date: string) {
    //return dateString1 >= dateString2 // sólo funciona con formato YYYY/MM/DD y MM/DD/YYY
    var parts1 = date.split('/');
    var parts2 = this.datePipe.transform(this.lastMonthDate, 'dd/MM/yyyy').split('/');

    var latest = false;

    if (parseInt(parts1[2]) > parseInt(parts2[2])) {
        latest = true;
    } else if (parseInt(parts1[2]) == parseInt(parts2[2])) {
        if (parseInt(parts1[1]) > parseInt(parts2[1])) {
            latest = true;
        } else if (parseInt(parts1[1]) == parseInt(parts2[1])) {
            if (parseInt(parts1[0]) >= parseInt(parts2[0])) {
                latest = true;
            } 
        }
    }

    return latest;
  }

  esMayor(date1: string, date2: string) {
    //return dateString1 >= dateString2 // sólo funciona con formato YYYY/MM/DD y MM/DD/YYY
    var parts1 = date1.split('/');
    var parts2 = date2.split('/');;

    var latest = false;

    if (parseInt(parts1[2]) > parseInt(parts2[2])) {
        latest = true;
    } else if (parseInt(parts1[2]) == parseInt(parts2[2])) {
        if (parseInt(parts1[1]) > parseInt(parts2[1])) {
            latest = true;
        } else if (parseInt(parts1[1]) == parseInt(parts2[1])) {
            if (parseInt(parts1[0]) >= parseInt(parts2[0])) {
                latest = true;
            } 
        }
    }

    return latest;
  }

  segmentChanged(ev: any) {
    switch(ev.detail.value)
    {
      case 'docs':
        this.items = this.allitems;
        break;
      case 'vistos':
        this.items = this.allitems;
        this.items = this.items.filter((item) => {
          return ((item.Visto == 1));
        })
        break;
      case 'no-vistos':
        this.items = this.allitems;
        this.items = this.items.filter((item) => {
          return ((item.Visto == 0));
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
