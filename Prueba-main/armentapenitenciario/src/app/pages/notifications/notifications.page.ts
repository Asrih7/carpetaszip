import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavparamService } from 'src/app/services/navparam.service';
import { AulavirtualrestProvider } from '../../providers/aulavirtualrest';
import { LogoutProvider } from '../../providers/logout';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  idCurso: number;
  usuario: any = [];
  items: any[];
  allitems: any[];
  titulo: string;
  notificacion: string;
  searchQuery: string = '';

  constructor(private router: Router, private navParamService: NavparamService, public proveedor: AulavirtualrestProvider, public proveedorLogout: LogoutProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController, private storage: Storage) { }

  ngOnInit() {
  }

  ionViewWillEnter() {

    this.initialize();

    // if (this.searchQuery == ''){
    //   this.initializeItems();
    // }
  }

  initialize() {

    // Se cargan las notificaciones
    if (this.searchQuery == ''){
      this.initializeItems();
    }
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
        //this.logout();
        this.proveedorLogout.logout();
      }
    });

    // Se obtienen los datos del usuario de la memoria
    this.storage.get('usuario').then((val) => {
      if (val != null && val != undefined){
        this.usuario = JSON.parse(val);

        //console.log(this.idCurso);

        this.proveedor.consultarNotificaciones(this.usuario.Mensaje.AuthorizationToken, this.idCurso)
        .subscribe(
          //(data)=>{this.tests = data;},
          (data)=>{this.parseJson(data);},
          (error)=>{console.log(error);},
          () =>{loading.dismiss()}
        )
      }
      else{
        // Si no se han recuperado los datos se vuelve a la página de login
        //this.logout();
        this.proveedorLogout.logout();
      }
    });
  }

  parseJson(data)
  {
    //console.log(data);

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
        //   this.Alert('Sin Notificaciones', 'No hay ninguna notificación publicada en tu curso.'); 
        //   title: 'Sin Notificaciones',
        //   subTitle: 'No hay ninguna notificación publicada en tu curso.',
        //   buttons: ['OK']
        // });
        // alert.present();
        //this.sinNotificacionesAlert();
      }
    }
    // Acceso denegado
    else if (data.Error == -10){
      //this.logout();
      this.proveedorLogout.logout();
    }
    else{
      this.items = [];
      // const alert = this.alertCtrl.create({
      //   title: 'Sin Notificaciones',
      //   subTitle: 'No hay ninguna notificación publicada en tu curso.',
      //   buttons: ['OK']
      // });
      // alert.present();
      //this.sinNotificacionesAlert();
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
          //return ((item.Asunto.toLowerCase().indexOf(val.toLowerCase()) > -1) || (item.Autor.toLowerCase().indexOf(val.toLowerCase()) > -1));
          return ((item.Asunto.toLowerCase().indexOf(val.toLowerCase()) > -1));
        })
      }
    }
  }

  leerNotificacion(notificacion: any){
    //console.log(notificacion);
    //this.navCtrl.push(NotificationDetailPage, {notificacion: notificacion});
    //this.router.navigateByUrl('notification-detail/(notificacion:/${notificacion})');    
    //this.router.navigate(['/notification-detail', {notificacion: notificacion}]);
    this.navParamService.setNavData(notificacion);
    this.router.navigate(['/notification-detail']);
  }

  // logout()
  // {
  //   // const root = this.app.getRootNav();
  //   // root.popToRoot();
  //   this.proveedorLogout.logout();
  //   //this.navCtrl.setRoot(LoginPage);
  //   this.router.navigate(['/login']);
  // }

  async sinNotificacionesAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Sin Notificaciones',
      message: 'No hay ninguna notificación publicada en tu curso.',
      buttons: ['OK']
    });
    await alert.present();
  }

}
