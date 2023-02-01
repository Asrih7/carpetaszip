import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavparamService } from 'src/app/services/navparam.service';
import { AulavirtualrestProvider } from '../../providers/aulavirtualrest';
import { LogoutProvider } from '../../providers/logout';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  idCurso: number;
  accesoClases: boolean;
  accesoNotificaciones: boolean;
  accesoEventos: boolean;
  accesoTest: boolean;
  accesoSimulacros: boolean;
  accesoOrtografia: boolean;
  accesoIngles: boolean;
  accesoPersonalidad: boolean;
  accesoCasosPracticos: boolean;
  accesoPsicotecnicos: boolean;
  accesoLegislacion: boolean;
  accesoNivelPro: boolean;

  constructor(private router: Router, private navParamService: NavparamService, private storage: Storage, public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController, public proveedor: AulavirtualrestProvider, public proveedorLogout: LogoutProvider) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.initializeItems();
  }

  initializeItems() {

    // Se obtiene de la memoria el identificador del curso
    this.storage.get('idCurso').then((val) => {
      if (val != null && val != undefined){
        this.idCurso = val; 
      }
    });

    // Se obtiene de la memoria los permisos de acceso
    this.storage.get('accesoClases').then((val) => {
      if (val != null && val != undefined){
        if (val == 0)
          this.accesoClases = false;
        else
          this.accesoClases = true;
      }
    });
    this.storage.get('accesoNotificaciones').then((val) => {
      if (val != null && val != undefined){
        if (val == 0)
          this.accesoNotificaciones = false;
        else
          this.accesoNotificaciones = true;
      }
    });
    this.storage.get('accesoEventos').then((val) => {
      if (val != null && val != undefined){
        if (val == 0)
          this.accesoEventos = false;
        else
          this.accesoEventos = true;
      }
    });
    this.storage.get('accesoTest').then((val) => {
      if (val != null && val != undefined){
        if (val == 0)
          this.accesoTest = false;
        else
          this.accesoTest = true;
      }
    });
    this.storage.get('accesoSimulacros').then((val) => {
      if (val != null && val != undefined){
        if (val == 0)
          this.accesoSimulacros = false;
        else
          this.accesoSimulacros = true;
      }
    });
    this.storage.get('accesoOrtografia').then((val) => {
      if (val != null && val != undefined){
        if (val == 0)
          this.accesoOrtografia = false;
        else
          this.accesoOrtografia = true;
      }
    });
    this.storage.get('accesoIngles').then((val) => {
      if (val != null && val != undefined){
        if (val == 0)
          this.accesoIngles = false;
        else
          this.accesoIngles = true;
      }
    });
    this.storage.get('accesoPersonalidad').then((val) => {
      if (val != null && val != undefined){
        if (val == 0)
          this.accesoPersonalidad = false;
        else
          this.accesoPersonalidad = true;
      }
    });
    this.storage.get('accesoCasosPracticos').then((val) => {
      if (val != null && val != undefined){
        if (val == 0)
          this.accesoCasosPracticos = false;
        else
          this.accesoCasosPracticos = true;
      }
    });
    this.storage.get('accesoPsicotecnicos').then((val) => {
      if (val != null && val != undefined){
        if (val == 0)
          this.accesoPsicotecnicos = false;
        else
          this.accesoPsicotecnicos = true;
      }
    });
    this.storage.get('accesoLegislacion').then((val) => {
      if (val != null && val != undefined){
        if (val == 0)
          this.accesoLegislacion = false;
        else
          this.accesoLegislacion = true;
      }
    });
    this.storage.get('accesoNivelPro').then((val) => {
      if (val != null && val != undefined){
        if (val == 0)
          this.accesoNivelPro = false;
        else
          this.accesoNivelPro = true;
      }
    });
    
  }

  async miCuenta() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'MI CUENTA',
      cssClass: 'my-custom-class',
      buttons: [
        {
        text: 'Configurar',
        icon: 'settings-outline',        
        handler: () => {
          this.configuracion();
        }
      }, 
      {
        text: 'Cerrar sesión',
        icon: 'power-outline',        
        handler: () => {
          this.salir();
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  configuracion()
  {
    this.router.navigate(['/account-settings']);
  }

  async salir() {
    const confirm = await this.alertCtrl.create({
      header: '¿Deseas salir?',
      message: 'Se cerrará tu sesión en la app',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            //this.logout();
            this.proveedorLogout.logout()
          }
        }
      ]
    });
    await confirm.present();
  }

  notificaciones()
  {
    this.router.navigate(['/notifications']);
  }

  eventos() {
    this.router.navigate(['/events']);
  }

  misResultados() {
    this.router.navigate(['/test-score']);
  }

  clases() {
    this.navParamService.setNavData('Clases');
    this.router.navigate(['/videos']);
  }

  simulacros() {
    this.navParamService.setNavData('Simulacros');
    this.router.navigate(['/test']);
  }

  materiaEspecifica(etiqueta: string) {
    this.navParamService.setNavData(etiqueta);
    this.router.navigate(['/specific-content']);
  }

}
