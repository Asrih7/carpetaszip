import { Component } from '@angular/core';
import { AlertController, LoadingController, ActionSheetController } from '@ionic/angular';
import { MenuController} from '@ionic/angular';
import { Router, NavigationStart } from '@angular/router';
import { NavparamService } from 'src/app/services/navparam.service';
import { AulavirtualrestProvider } from '../providers/aulavirtualrest';
import { LogoutProvider } from '../providers/logout';
import { Storage } from '@ionic/storage-angular';
import { DecimalPipe, NumberSymbol } from '@angular/common';
import { Observable } from 'rxjs';
import { EventService } from '../services/event.service';
import { Device } from '@awesome-cordova-plugins/device/ngx';
import { GoogleAnalytics } from '@awesome-cordova-plugins/google-analytics/ngx';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { AppConfig } from  '../../app/app.config';
import { Events } from '../services/events';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  titulo: string = "Inicio";
  idCurso: number;
  nombreCurso: string;
  accesoModulos: boolean;
  accesoTest: boolean;
  accesoDocs: boolean;
  accesoVideos: boolean;
  accesoForo: boolean;
  accesoEventos: boolean;
  accesoClases: boolean;
  accesoNotificaciones: boolean;
  accesoOrtografia: boolean;
  accesoIngles: boolean;
  accesoPersonalidad: boolean;
  accesoSimulacros: boolean;
  accesoCasosPracticos: boolean;
  accesoPsicotecnicos: boolean;
  accesoLegislacion: boolean;
  accesoNivelPro: boolean;

  usuario: any = [];

  resultados: number;
  aprobados: number;
  media: string;
  semanal: number;
  
  contactoSeleccionado: any;
  asunto: string;
  mensaje: string;
  destinatario: string;
  infoDispositivo: string;

  possibleButtons = [{ icon: 'calendar-outline', text: 'Eventos', page: '/events' }];

  
  constructor(private router: Router, private navParamService: NavparamService, private storage: Storage, private events : Events, public alertCtrl: AlertController,  public loadingCtrl: LoadingController, public actionSheetCtrl: ActionSheetController, private menu: MenuController, public proveedorLogout: LogoutProvider, public proveedor: AulavirtualrestProvider, private device: Device, public decimalPipe: DecimalPipe, private callNumber: CallNumber) {

    // https://ionicframework.com/docs/v3/api/util/Events/
    //  this.events.subscribe('tabs:reload', eventData => { 
    //   this.initialize();
    // });    

    //https://angular.io/guide/observables#defining-observers
    // this.events.getObservable().subscribe((data) => {
    //   console.log('Data received', data);
    //   this.initialize();
    // });

    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((route: NavigationStart) => {
        //console.log('Route: '+route.url)
        switch (route.url){
          case '/tabs/tab1':
            this.titulo = "Inicio";
            break;
          case '/tabs/modulos':
            this.titulo = "Temario";
            break;
          case '/tabs/docs':
            this.titulo = "Documentos";
            break;
          case '/tabs/videos':
            this.titulo = "Vídeos";
            break;
          case '/tabs/test':
            this.titulo = "Test";
            break;
          case '/tabs/foro':
            this.titulo = "Foro";
          break;
        }
    })

    this.events.subscribe('tabs:reload', (data: any) => {
      this.initialize();
    });

  }

  // ionViewWillEnter() {
  //   this.initialize();
  // }

  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  closeMenu() {
    this.menu.close('first');
  }

  initialize() {

    // Se obtiene de la memoria el curso
    // this.storage.get('curso').then((val) => {
    //   console.log(val);
    // });

    // Se obtienen los datos del usuario de la memoria
    this.storage.get('usuario').then((val) => {
      if (val != null && val != undefined){
        this.usuario = JSON.parse(val);
      }
      else{
        // Si no se han recuperado los datos se vuelve a la página de login
        console.log('[!] Constructor: No se ha recuperado el usuario de la memoria');
        //this.logout();
        this.proveedorLogout.logout()
      }
    });


    // Se obtiene de la memoria el id del curso
    this.storage.get('idCurso').then((val) => {
      if (val != null && val != undefined)
        this.idCurso = val;      
      else
        this.idCurso = 0;
    });

    // Se obtiene de la memoria el nombre del curso
    this.storage.get('nombreCurso').then((val) => {
      if (val != null && val != undefined)
        this.nombreCurso = val;
      else
        this.nombreCurso = "";
    });

    // // Si hay un curso seleccionado
    // if (this.idCurso != null && this.idCurso != undefined && this.idCurso != 0) {

      // Se obtiene de la memoria los permisos de acceso
      this.storage.get('accesoModulos').then((val) => {
        if (val != null && val != undefined){
          if (val == 0)
            this.accesoModulos = false;
          else
            this.accesoModulos = true;
          // console.log("accesoModulos: " + this.accesoModulos);        
        }
      });
      this.storage.get('accesoTest').then((val) => {
        if (val != null && val != undefined){
          if (val == 0)
            this.accesoTest = false;
          else
            this.accesoTest = true;
          // console.log("accesoTest: " + this.accesoTest);
        }      
      });
      this.storage.get('accesoDocs').then((val) => {
        if (val != null && val != undefined){
          if (val == 0)
            this.accesoDocs = false;
          else
            this.accesoDocs = true;
          // console.log("accesoDocs: " + this.accesoDocs);
        }
      });
      this.storage.get('accesoVideos').then((val) => {
        if (val != null && val != undefined){
          if (val == 0)
            this.accesoVideos = false;
          else
            this.accesoVideos = true;
          // console.log("accesoVideos: " + this.accesoVideos);
        }
      });
      this.storage.get('accesoForo').then((val) => {
        if (val != null && val != undefined){
          if (val == 0)
            this.accesoForo = false;
          else
            this.accesoForo = true;
          // console.log("accesoForo: " + this.accesoForo);
        }
      });
      this.storage.get('accesoEventos').then((val) => {
        if (val != null && val != undefined){
          if (val == 0)
            this.accesoEventos = false;
          else
            this.accesoEventos = true;
          // console.log("accesoEventos: " + this.accesoEventos);
        }
      });
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

      // // Se obtienen el id del curso de la memoria
      // this.storage.get('idCurso').then((val) => {
      //   if (val != null && val != undefined){
      //     if (val > 0)
      //       this.menu = true;
      //     else
      //       this.menu = false;
      //   }
      //   else{
      //     this.menu = false;
      //   }
      // });

    // }
    // // Si no hay ningún curso seleccionado se desactivan todos los módulos
    // else{
    //   this.accesoModulos = false;
    //   this.accesoTest = false;
    //   this.accesoDocs = false;
    //   this.accesoVideos = false;
    //   this.accesoForo = false;
    //   this.accesoEventos = false;
    // }
  }

  async mas() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'MÁS',
      cssClass: 'my-custom-class',
      buttons: this.createButtons()
    });
    await actionSheet.present();
  }

  createButtons() {
    let buttons = [];
    for (var index in this.possibleButtons) {
      let button = {
        text: this.possibleButtons[index].text,
        icon: this.possibleButtons[index].icon,
        handler: () => {
          this.router.navigate([this.possibleButtons[index].page]);
          return true;
        }
      }
      buttons.push(button);
    }

    buttons.push(
      {
        text: 'Cerrar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      } 
    );

    // let buttons = [
    //     {
    //     text: 'Configurar',
    //     icon: 'settings-outline',        
    //     handler: () => {
    //       //this.configuracion();
    //     }
    //   }, 
    //   {
    //     text: 'Cerrar sesión',
    //     icon: 'power-outline',        
    //     handler: () => {
    //       //this.salir();
    //     }
    //   }, {
    //     text: 'Cancelar',
    //     icon: 'close',
    //     role: 'cancel',
    //     handler: () => {
    //       console.log('Cancel clicked');
    //     }
    //   }]

    return buttons;
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

  faq()
  {
    //this.navCtrl.push(FaqPage);
    this.router.navigate(['/faq']);
  }

  async contacto()
  {
    let radio_options = [];

    radio_options.push({
      type: 'radio',
      label : 'Centro',
      value : 'Academia',
      checked : true
    });

    radio_options.push({
      type: 'radio',
      label : 'Soporte Técnico',
      value : 'Soporte',
      checked : false
    });

    let alert = await this.alertCtrl.create({
      header: 'Contacto',
      message: '¿Con quién quieres contactar?',
      inputs : radio_options,
      buttons: [
        {
          text: 'Cancelar',  
          handler: () => {            
          }  
        },
        {
          text: 'Siguiente',
          handler: data => {
            this.contactoSeleccionado = data;
            this.formularioContacto();
          }
        }
      ]
    });

    await alert.present();
  }

  async formularioContacto()
  {
    const prompt = await this.alertCtrl.create({
      header: 'Mensaje',
      message: "¿En qué podemos ayudarte?",            
      inputs: [        
        {
          name: 'asunto',
          placeholder: 'Asunto'
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
          }
        },
        {
          text: 'Enviar',
          handler: data => {
            this.asunto = data.asunto;
            this.mensaje = data.mensaje;
            this.enviarMensaje();
          }
        }
      ]
    });
    prompt.present();
  }

  async enviarMensaje()
  {
    if (this.asunto != "" && this.mensaje != ""){
      const loading = await this.loadingCtrl.create({
        message: "Enviando mensaje..."
      });
      loading.present();

      // Se recopila la información del dispositivo (https://ionicframework.com/docs/native/device/)
      //this.infoDispositivo = "<br/><br/>App version: " + AppConfig.version + "<br/>Cordova version: " + this.device.cordova + "<br/>UUID: " + this.device.uuid + "<br/>Model: " + this.device.model + "<br/>Platform: " + this.device.platform + "<br/>Version: "  + this.device.version + "<br/>Manufacturer: " + this.device.manufacturer + "<br/>Is Virtual: " + this.device.isVirtual + "<br/>Serial: " + this.device.serial;
      this.infoDispositivo = "<br/><br/>App version: " + AppConfig.version + "<br/>Model: " + this.device.model + "<br/>Platform: " + this.device.platform + "<br/>Version: "  + this.device.version + "<br/>Manufacturer: " + this.device.manufacturer + "<br/>Is Virtual: " + this.device.isVirtual;
      //this.infoDispositivo = "<br/><br/>App version: " + AppConfig.version;

      // Se envia el mensaje
      this.proveedor.contacto(this.usuario.Mensaje.AuthorizationToken, this.contactoSeleccionado, this.contactoSeleccionado == "Academia" ? AppConfig.email : "soporte." + AppConfig.nombre + "@aulavirtualctp.es", this.mensaje, this.nombreCurso, AppConfig.id, AppConfig.nombre, AppConfig.subdominio, this.infoDispositivo)
      .subscribe(
        (data)=>{this.mensajeEnviado(data);},
        (error)=>{console.log(error);},
        () =>{loading.dismiss()}
      )    
    }
    else{
      const alert = await this.alertCtrl.create({
        header: 'ATENCIÓN',
        subHeader: 'Debes introducir asunto y mensaje para poder enviarlo',
        buttons: ['OK']
      });
      await alert.present();
    }

  }

  async mensajeEnviado(data: any){

    if (data.Error == 0){
      const alertOK = await this.alertCtrl.create({
        header: '¡Mensaje Enviado!',
        subHeader: data.Mensaje,
        buttons: ['OK']
      });
      await alertOK.present();
    }
    else{
      const alertKO = await this.alertCtrl.create({
        header: 'Ooops!',
        subHeader: data.Mensaje,
        buttons: ['OK']
      });
      await alertKO.present();
    }
  }

  async ayuda() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'AYUDA',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'FAQs',
        icon: 'help-outline',        
        handler: () => {
          this.faq();
        }      
      }, {
        text: 'Contacto',
        icon: 'mail-outline',        
        handler: () => {
          this.contacto();
        }
      },
      {
      text: 'Llamar al centro',
      icon: 'call-outline',        
      data: '',
      handler: () => {
        this.callNumber.callNumber(AppConfig.telefono, true)
          .then(res => console.log('Launched dialer!', res))
          .catch(err => console.log('Error launching dialer', err));
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

  async misEstadisticas() {

    this.obtenerEstadisticas();

    // const alert = await this.alertCtrl.create({
    //   header: 'Estadísticas',
    //   message: "<h2> Nota Media: " + this.media + "</h2><br><ion-badge item-end>" + this.resultados + "</ion-badge><span> Test Realizados</span><br><br><ion-badge item-end>" + this.semanal + "</ion-badge><span> Test Semanales</span><br><br><ion-badge item-end>" + this.aprobados + "</ion-badge><span> Test Aprobados</span>",
    //   buttons: ['Cerrar']
    // });
    // await alert.present();
  }

  obtenerEstadisticas(){

    // Se consultan las estadísticas del alumno en el curso
    this.proveedor.consultarEstadisticasCurso(this.usuario.Mensaje.AuthorizationToken, this.idCurso)
    .subscribe(
      (data)=>{this.actualizarEstadisticas(data);},
      (error)=>{console.log(error);}
    )

  }

  actualizarEstadisticas(data: any){

    // console.log ('actualizarEstadisticas');
    // console.log (data);

    if (data.Error == 0){
      // Se inicializan las estadísticas del perfil del alumno
      this.resultados = data.Mensaje.Estadisticas.NumResultados;
      this.aprobados = data.Mensaje.Estadisticas.Aprobados;
      this.media = this.decimalPipe.transform(data.Mensaje.Estadisticas.Media/10, '1.2-2');
      this.semanal = data.Mensaje.Estadisticas.Semanales;

      this.mostrarEstadisticas();
      
    }
    // Acceso denegado
    else if (data.Error == -10){
      console.log('[!] ActualizarEstadisticas: Acceso denegado');
      //this.logout();
      this.proveedorLogout.logout()
    }
  }

  async mostrarEstadisticas(){
    const alert = await this.alertCtrl.create({
      header: 'Estadísticas',
      message: "<h2> Nota Media: " + this.media + "</h2><br><ion-badge item-end>" + this.resultados + "</ion-badge><span> Test Realizados</span><br><br><ion-badge item-end>" + this.semanal + "</ion-badge><span> Test Semanales</span><br><br><ion-badge item-end>" + this.aprobados + "</ion-badge><span> Test Aprobados</span>",
      buttons: ['Cerrar']
    });
    await alert.present();
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
