import { Component, OnInit} from '@angular/core';
import { AlertController, LoadingController, ActionSheetController} from '@ionic/angular';
import { Router } from '@angular/router';
import { NavparamService } from 'src/app/services/navparam.service';
import { AulavirtualrestProvider } from '../../providers/aulavirtualrest';
import { LogoutProvider } from '../../providers/logout';
import { Storage } from '@ionic/storage-angular';
import { DecimalPipe, NumberSymbol } from '@angular/common';
import { Device } from '@awesome-cordova-plugins/device/ngx';
import { GoogleAnalytics } from '@awesome-cordova-plugins/google-analytics/ngx';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { AppConfig } from  '../../../app/app.config';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/services/event.service';
import { Events } from 'src/app/services/events';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  darkMode = false;

  idAcademia: number;
  nombreAcademia: string;
  curso: any;
  idCurso: number;
  idOposicion: number;
  tipoCurso: number; // 0 = Presencial, 1 = Online
  imagen: number;
  mesAcceso: number; // Mes de acceso del alumno en el curso
  accesoModulos: number;
  accesoTest: number;
  accesoDocs: number;
  accesoVideos: number;
  accesoForo: number;
  accesoEventos: number;
  accesoClases: number;
  accesoNotificaciones: number;
  accesoOrtografia: number;
  accesoIngles: number;
  accesoPersonalidad: number;
  accesoSimulacros: number;
  accesoCasosPracticos: number;
  accesoPsicotecnicos: number;
  accesoLegislacion: number;
  accesoNivelPro: number;  
  
  usuario: any = [];
  cursos: any = [];  
  allCursos: any[];
  searchQuery: string = '';
  nombreCurso: string;
  nick: string;
  nombre: string;
  oposicion: any;
  resultados: number;
  aprobados: number;
  media: string;
  semanal: number;
  contactoSeleccionado: any;
  asunto: string;
  mensaje: string;
  destinatario: string;
  infoDispositivo: string;
  posicion: number;
  refrescar: boolean = false;

  constructor(private router: Router, private navParamService: NavparamService, public proveedor: AulavirtualrestProvider, public proveedorLogout: LogoutProvider, public events: Events, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public actionSheetCtrl: ActionSheetController, private storage: Storage, private device: Device, private decimalPipe: DecimalPipe, private ga: GoogleAnalytics, private callNumber: CallNumber, private themeService: ThemeService) { 
    this.ga.startTrackerWithId(AppConfig.googleAnalytics)
    .then(() => {
      //console.log('Google analytics is ready now');
       this.ga.trackView('test');
      // Tracker is ready
      // You can now track pages or set additional information such as AppVersion or UserId
    })
    .catch(e => console.log('Error starting GoogleAnalytics', e));  

    // console.log('[i] Constructor: Se obtienen los datos del usuario de la memoria');
    // Se obtienen los datos del usuario de la memoria
    storage.get('usuario').then((val) => {
      if (val != null && val != undefined){
        this.usuario = JSON.parse(val);

        // console.log('[i] AuthorizationToken: ' + this.usuario.Mensaje.AuthorizationToken);
        // console.log('[i] Nick: ' + this.usuario.Mensaje.Nick);
        // console.log('[i] Oposicion: ' + this.usuario.Mensaje.NombreOposicion);

        this.inicializarPerfil();
      }
      else{
        // Si no se han recuperado los datos se vuelve a la página de login
        console.log('[!] Constructor: No se ha recuperado el usuario de la memoria');
        //this.logout();
        this.proveedorLogout.logout()
      }
    });    
  }

  ngOnInit() {    
  }

  // ionViewWillEnter() {
  //   // Remember me
  //   this.storage.get('idCurso').then((val) => {
  //     if (val != null && val != undefined){
  //       this.navCtrl.push(TabsPage);
  //     }
  //   }, (error) => {
  //     console.log('login is required');
  //   });
  // }

  ionViewWillEnter() {        

    this.storage.get('selected-app-theme').then(theme => {
      this.darkMode = theme;
    });

    // if (this.curso != null)
    //   this.cargarCurso(this.curso);

    //this.obtenerEstadisticas();
    //this.refrescar = false;
  }

  ionViewDidLoad(){    
    // console.log('ionViewDidLoad');
    // this.obtenerEstadisticas();
  }

  async ayudaMenu() {
    const alert = await this.alertCtrl.create({
      header: 'Selecciona un curso',
      subHeader: 'Elige un curso de la lista para poder acceder al menú',
      buttons: ['Entendido']
    });
    await alert.present();
  }

  // obtenerEstadisticasHome(){

  //   // Se obtienen los datos del usuario de la memoria
  //   this.storage.get('usuario').then((val) => {
  //     if (val != null && val != undefined){
  //       this.usuario = JSON.parse(val);

  //       // Se obtienen el id del curso de la memoria
  //       this.storage.get('idCurso').then((val) => {
  //         if (val != null && val != undefined){
  //           this.idCurso = val;  

  //           //console.log('idCurso = ' + this.idCurso);
            
  //           // Se consultan las estadísticas del alumno en el curso
  //           this.proveedor.consultarEstadisticasCurso(this.usuario.Mensaje.AuthorizationToken, this.idCurso)
  //           .subscribe(
  //             (data)=>{this.actualizarEstadisticas(data);},
  //             (error)=>{console.log(error);}
  //           )
  //         }
  //         else{
  //           // Se consultan las estadísticas del alumno
  //           this.proveedor.consultarEstadisticas(this.usuario.Mensaje.AuthorizationToken)
  //           .subscribe(
  //             (data)=>{this.actualizarEstadisticas(data);},
  //             (error)=>{console.log(error);}
  //           )
  //         }          
  //       });        
  //     }
  //   });
  // }

  // obtenerEstadisticas(){

  //   // // Se obtienen los datos del usuario de la memoria
  //   // await this.storage.get('usuario').then((val) => {
  //   //   if (val != null && val != undefined){
  //   //     this.usuario = JSON.parse(val);

  //   //     // Se obtienen el id del curso de la memoria
  //   //     this.storage.get('idCurso').then((val) => {
  //   //       if (val != null && val != undefined){
  //   //         this.idCurso = val;  
            
  //   //         // Se consultan las estadísticas del alumno en el curso
  //   //         this.proveedor.consultarEstadisticasCurso(this.usuario.Mensaje.AuthorizationToken, this.idCurso)
  //   //         .subscribe(
  //   //           (data)=>{this.actualizarEstadisticas(data);},
  //   //           (error)=>{console.log(error);}
  //   //         )
  //   //       }
  //   //       else{
  //   //         // Se consultan las estadísticas del alumno
  //   //         this.proveedor.consultarEstadisticas(this.usuario.Mensaje.AuthorizationToken)
  //   //         .subscribe(
  //   //           (data)=>{this.actualizarEstadisticas(data);},
  //   //           (error)=>{console.log(error);}
  //   //         )
  //   //       }          
  //   //     });        
  //   //   }
  //   // });

  //   // Se consultan las estadísticas del alumno en el curso
  //   this.proveedor.consultarEstadisticasCurso(this.usuario.Mensaje.AuthorizationToken, this.idCurso)
  //   .subscribe(
  //     (data)=>{this.actualizarEstadisticas(data);},
  //     (error)=>{console.log(error);}
  //   )

  // }


  // actualizarEstadisticas(data: any){

  //   // console.log ('actualizarEstadisticas');
  //   // console.log (data);

  //   if (data.Error == 0){
  //     // Se inicializan las estadísticas del perfil del alumno
  //     this.resultados = data.Mensaje.Estadisticas.NumResultados;
  //     this.aprobados = data.Mensaje.Estadisticas.Aprobados;
  //     this.media = this.decimalPipe.transform(data.Mensaje.Estadisticas.Media/10, '1.2-2');
  //     this.semanal = data.Mensaje.Estadisticas.Semanales;
  //   }
  //   // Acceso denegado
  //   else if (data.Error == -10){
  //     console.log('[!] ActualizarEstadisticas: Acceso denegado');
  //     //this.logout();
  //     this.proveedorLogout.logout()
  //   }
  // }

  // ionViewWillEnter(){

  //   if (this.usuario.length == 0){

  //     console.log('[i] Se obtienen los datos del usuario de la memoria');

  //     // Se obtienen los datos del usuario de la memoria
  //     this.storage.get('usuario').then((val) => {
  //       if (val != null && val != undefined){
  //         this.usuario = JSON.parse(val);

  //         console.log('[i] AuthorizationToken: ' + this.usuario.Mensaje.AuthorizationToken);
              
  //         this.nick = this.usuario.Mensaje.Nick;
  //         this.oposicion = this.usuario.Mensaje.NombreOposicion;
  //         this.resultados = this.usuario.Mensaje.Estadisticas.NumResultados;
  //         this.aprobados = this.usuario.Mensaje.Estadisticas.Aprobados;
  //         this.media = this.decimalPipe.transform(this.usuario.Mensaje.Estadisticas.Media/10, '1.2-2');
  //         this.semanal = this.usuario.Mensaje.Estadisticas.Semanales;

  //         // Se obtienen los cursos del usuario
  //         this.obtenerCursos();
  //       }
  //       else{
  //         // Si no se han recuperado los datos se vuelve a la página de login
  //         console.log('[!] No se ha recuperado el usuario de la memoria');
  //         this.logout.logout();
  //       }
  //     });
  //   }
  //   else{
  //     // Se actualiza la información del perfil usuario
  //     this.actualizarPerfil();
  //   }
  // }

  inicializarPerfil(){

    // console.log('[i] Inicializando perfil');

    // Se inicializan los datos del perfil del alumno
    this.nick = this.usuario.Mensaje.Nick;
    this.nombre = this.usuario.Mensaje.Nombre;
    this.oposicion = this.usuario.Mensaje.NombreOposicion;
    this.nombreAcademia = this.usuario.Mensaje.NombreAcademia;
    // this.resultados = this.usuario.Mensaje.Estadisticas.NumResultados;
    // this.aprobados = this.usuario.Mensaje.Estadisticas.Aprobados;
    // this.media = this.decimalPipe.transform(this.usuario.Mensaje.Estadisticas.Media/10, '1.2-2');
    // this.semanal = this.usuario.Mensaje.Estadisticas.Semanales;

    // Se obtienen los cursos del usuario
    this.obtenerCursos();
  }

  // actualizarPerfil(){

  //   // console.log('[i] Actualizando perfil');

  //   const loader = this.loadingCtrl.create({
  //     content: "Cargando..."
  //   });
  //   loader.present();

  //   // Se obtienen los datos del perfil del usuario
  //   // console.log('[i] AuthorizationToken: ' + this.usuario.Mensaje.AuthorizationToken);
  //   this.proveedor.obtenerPerfil(this.usuario.Mensaje.AuthorizationToken, AppConfig.id)
  //   .subscribe(
  //     (data)=>{this.parsePerfilJson(data);},
  //     (error)=>{console.log(error);},
  //     () =>{loader.dismiss()}
  //   )
  // }

  // parsePerfilJson(data)
  // {
  //   if (data.Error == 0){

  //     // Se actualiza la información del usuario
  //     this.nick = data.Mensaje.Nick;
  //     this.oposicion = data.Mensaje.NombreOposicion;
  //     this.resultados = data.Mensaje.Estadisticas.NumResultados;
  //     this.aprobados = data.Mensaje.Estadisticas.Aprobados;
  //     this.media = this.decimalPipe.transform(data.Mensaje.Estadisticas.Media/10, '1.2-2');
  //     this.semanal = data.Mensaje.Estadisticas.Semanales;     
  //   }
  //   // Acceso denegado
  //   else if (data.Error == -10){
  //     console.log('[!] parsePerfilJson: Acceso denegado');
  //     this.logout();
  //   }
  //   else{
  //     // Si no se han recuperado los datos se vuelve a la página de login
  //     console.log('[!] No se han recuperado los datos del usuario');
  //     this.logout();
  //   }
  // }

  obtenerCursos(){

    //console.log('obteniendo cursos...');
    // console.log('[i] Obteniendo cursos');

    // const loader = this.loadingCtrl.create({
    //   content: "Cargando...",
    //   duration: 500
    // });
    // loader.present();

    // Se obtienen los cursos del usuario
    // console.log('[i] AuthorizationToken: ' + this.usuario.Mensaje.AuthorizationToken);
    this.proveedor.consultarCursos(this.usuario.Mensaje.AuthorizationToken)
    .subscribe(
      (data)=>{this.parseCursoJson(data);},
      (error)=>{console.log(error);}
    )
  }

  parseCursoJson(data)
  {
    if (data.Error == 0){

      this.cursos = [];
      this.allCursos = [];

      let jsonArray = data.Mensaje;

      for(let i=0; i < jsonArray.length; i++)
      {
        let jsonObject = jsonArray[i];
        this.cursos.push(jsonObject);
        this.allCursos.push(jsonObject);
      }

      if (this.cursos.length > 0){

        // // Por defecto se inicializa la posicion al primer curso
        // this.posicion = 0;

        // // Se comprueba si había un curso cargado en memoria
        // this.storage.get('idCurso').then((val) => {

        //   if (val != null && val != undefined){   
            
        //     // Se busca el curso por su ID -- SI EL ALUMNO HA SIDO DESMATRICULADO DEL CURSO GENERA ERROR
        //     //let curso = this.cursos.find(c=>c.IdCurso == val)

        //     // Se busca el curso dentro del listado para saber la posición en la lista
        //     this.obtenerPosicionCurso(val); 
          
        //     // // Se carga el curso
        //     // this.refrescar = true;
        //     // this.cargarCurso(val)
        //   }

        // }, (error) => {
        //   console.log('login is required');
        // });

        // // Se inicializa el curso
        // this.idCurso = this.cursos[this.posicion].IdCurso;
        // this.idOposicion = this.cursos[this.posicion].IdOposicion;
        // this.nombreCurso = this.cursos[this.posicion].Nombre;
        // this.tipoCurso = this.cursos[this.posicion].Tipo;
        // this.imagen = this.cursos[this.posicion].Imagen;
        // this.mesAcceso = this.cursos[this.posicion].MesAcceso;
        // this.accesoModulos = this.cursos[this.posicion].Modulos;
        // this.accesoTest = this.cursos[this.posicion].Test;
        // this.accesoDocs = this.cursos[this.posicion].Documentos;
        // this.accesoVideos = this.cursos[this.posicion].Videos;
        // this.accesoForo = this.cursos[this.posicion].Foro;
        // this.accesoEventos = this.cursos[this.posicion].Eventos;
        // this.accesoOrtografia = this.cursos[this.posicion].Ortografia;
        // this.accesoIngles = this.cursos[this.posicion].Ingles;
        // this.accesoPersonalidad = this.cursos[this.posicion].Personalidad;
        
        // this.accesoPsicotecnicos = this.cursos[this.posicion].Psicotecnicos;
        // this.accesoCasosPracticos = this.cursos[this.posicion].CasosPracticos;
        // this.accesoLegislacion = this.cursos[this.posicion].Legislacion;
        // this.accesoNivelPro = this.cursos[this.posicion].NivelPRO;

        // // Se almacena en memoria el id del curso 
        // this.storage.set('idCurso', this.idCurso);

        // // Se almacena en memoria el id de la oposicion del curso
        // this.storage.set('idOposicion', this.idOposicion);

        // // Se almacena en memoria el tipo de curso
        // this.storage.set('tipoCurso', this.tipoCurso);

        // // Se almacena en memoria el mes de acceso al curso
        // this.storage.set('mesAcceso', this.mesAcceso);

        // // Se almacena en memoria los permisos de acceso a módulos
        // this.storage.set('accesoModulos', this.accesoModulos);

        // // Se almacena en memoria los permisos de acceso a test
        // this.storage.set('accesoTest', this.accesoTest);

        // // Se almacena en memoria los permisos de acceso a documentos
        // this.storage.set('accesoDocs', this.accesoDocs);

        // // Se almacena en memoria los permisos de acceso a videos
        // this.storage.set('accesoVideos', this.accesoVideos);

        // // Se almacena en memoria los permisos de acceso al foro
        // this.storage.set('accesoForo', this.accesoForo);

        // // Se almacena en memoria los permisos de acceso a eventos
        // this.storage.set('accesoEventos', this.accesoEventos);

        // // Se almacena en memoria los permisos de acceso a test de ortografía
        // this.storage.set('accesoOrtografia', this.accesoOrtografia);

        // // Se almacena en memoria los permisos de acceso a test de inglés
        // this.storage.set('accesoIngles', this.accesoIngles);

        // // Se almacena en memoria los permisos de acceso a test de personalidad
        // this.storage.set('accesoPersonalidad', this.accesoPersonalidad);

        // // // Si es un curso online
        // // if (this.tipoCurso == 1)
        // // {
        // //   // Se almacena el mes de acceso al curso en memoria
        // //   this.storage.set('mesAcceso', this.mesAcceso);
        // // }
        // // else
        // // {
        // //   // Se almacena el mes de acceso a 0 en memoria
        // //   this.storage.set('mesAcceso', 0);
        // // }

        // // Se obtienen las estadísticas del alumno en ese curso
        // this.obtenerEstadisticas();

        // // Se refresca el menú para mostrar/ocultar opciones según permisos
        // this.events.publish('tabs:reload');

        // // if (this.refrescar)
        // // {
        // //   //console.log('Refresca');
        // //   //const observer = new Observable()

        // //   // https://ionicframework.com/docs/v3/api/util/Events/
        // //   //this.events.publish('tabs:reload');
          
        // //   // this.events.publishSomeData({
        // //   //   tabs: 'reload'
        // //   // });

        // //   this.events.publish('tabs:reload');
        // // }
      }
      else{
        // Si no se han recuperado los datos se vuelve a la página de login
        console.log('[!] No se ha recuperado ningún curso');
        //this.logout();
        this.proveedorLogout.logout()
      }
    }
    // Acceso denegado
    else if (data.Error == -10){
      console.log('[!] parseCursoJson: Acceso denegado');
      //this.logout();
      this.proveedorLogout.logout()
    }
    else{
      // Si no se han recuperado los datos se vuelve a la página de login
      console.log('[!] No se han recuperado los datos de cursos');
      //this.logout();
      this.proveedorLogout.logout()
    }
  }

  getCursos(ev: any) {

    if (this.allCursos != null && this.allCursos != undefined){
      // Reset items back to all of the items
      this.cursos = this.allCursos;

      this.searchQuery = '';

      // set val to the value of the searchbar
      const val = ev.target.value;

      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.searchQuery = val;
        this.cursos = this.cursos.filter((curso) => {
          return ((curso.Nombre.toLowerCase().indexOf(val.toLowerCase()) > -1));
        })
      }
    }
  }

  obtenerPosicionCurso(idCurso: number){

    //console.log('obtenerPosicionCurso - idCurso = ' + idCurso);

    if (this.cursos.length > 1){
      for(let i=0; i < this.cursos.length; i++)
      {
        let curso = this.cursos[i];

        if (curso.IdCurso == idCurso)
          this.posicion = i;
      }
    }
    else{
      this.posicion = 0;
    }

    //console.log('obtenerPosicionCurso - posicion = ' + this.posicion);

  }

  async verCursos() {

    if (this.cursos.length > 1){

      let radio_options = [];
      for(let i=0; i < this.cursos.length; i++)
      {
        let curso = this.cursos[i];

        radio_options.push({
          type: 'radio',
          label : curso.Nombre,
          value : curso.IdCurso,
          checked : curso.IdCurso === this.idCurso
        });
      }    

      let alert = await this.alertCtrl.create({
        header: 'Mis Cursos:',
        inputs : radio_options,
        buttons: [
          {
            text: 'Cancelar',  
            handler: () => {            
            }          
          },
          {
            text: 'Seleccionar',
            handler: data => {
              //this.refrescar = true;
              this.cargarCurso(data);
            }
          }
        ]
      });
      
      await alert.present();

    }
  }

  async seleccionarCurso(curso: any)
  {
    const loading = await this.loadingCtrl.create({
      message: "Cargando curso...",
      duration: 500
    });
    await loading.present();

    // this.curso = curso;
    
    // console.log(this.curso);

    // // Se almacena en memoria el curso 
    // await this.storage.set('curso', this.curso);

    //this.refrescar = true;
    this.cargarCurso(curso);
  }

  async cargarCurso(curso: any){

    const loading = await this.loadingCtrl.create({
      message: "Cargando curso...",
      duration: 500
    });
    await loading.present();

    // this.curso = curso;
    
    // console.log(this.curso);
    console.log(curso.IdCurso);

    // // Se almacena en memoria el curso 
    // await this.storage.set('curso', this.curso);

    // Se busca el curso
    //let curso = this.cursos.find(c=>c.IdCurso == idCurso)    

    // Se carga la información del curso    
    this.idCurso = curso.IdCurso;
    this.idOposicion = curso.IdOposicion;
    this.nombreCurso = curso.Nombre;
    this.tipoCurso = curso.Tipo;
    this.imagen = curso.Imagen;
    this.mesAcceso = curso.MesAcceso;
    this.accesoModulos = curso.Modulos;
    this.accesoTest = curso.Test;
    this.accesoDocs = curso.Documentos;
    this.accesoVideos = curso.Videos;
    this.accesoClases = curso.Clases;
    this.accesoForo = curso.Foro;
    this.accesoEventos = curso.Eventos;
    this.accesoNotificaciones = curso.Notificaciones;
    this.accesoOrtografia = curso.Ortografia;
    this.accesoIngles = curso.Ingles;
    this.accesoSimulacros = curso.Simulacros;
    this.accesoPersonalidad = curso.Personalidad;
    this.accesoPsicotecnicos = curso.Psicotecnicos;
    this.accesoCasosPracticos = curso.CasosPracticos;
    this.accesoLegislacion = curso.Legislacion;
    this.accesoNivelPro = curso.NivelPRO;

    // Se almacena en memoria el id del curso 
    await this.storage.set('idCurso', this.idCurso);

    // Se almacena en memoria el nombre del curso 
    await this.storage.set('nombreCurso', this.nombreCurso);

    // Se almacena en memoria el id de la oposicion del curso
    await this.storage.set('idOposicion', this.idOposicion);

    // Se almacena en memoria el tipo de curso
    await this.storage.set('tipoCurso', this.tipoCurso);

    // Se almacena en memoria el mes de acceso al curso
    await this.storage.set('mesAcceso', this.mesAcceso);

    // Se almacena en memoria los permisos de acceso a módulos
    await this.storage.set('accesoModulos', this.accesoModulos);

    // Se almacena en memoria los permisos de acceso a test
    await this.storage.set('accesoTest', this.accesoTest);

    // Se almacena en memoria los permisos de acceso a documentos
    await this.storage.set('accesoDocs', this.accesoDocs);

    // Se almacena en memoria los permisos de acceso a videos
    await this.storage.set('accesoVideos', this.accesoVideos);

    // Se almacena en memoria los permisos de acceso a clases
    await this.storage.set('accesoClases', this.accesoClases);

    // Se almacena en memoria los permisos de acceso al foro
    await this.storage.set('accesoForo', this.accesoForo);

    // Se almacena en memoria los permisos de acceso a eventos
    await this.storage.set('accesoEventos', this.accesoEventos);

    // Se almacena en memoria los permisos de acceso a notificaciones
    await this.storage.set('accesoNotificaciones', this.accesoNotificaciones);

    // Se almacena en memoria los permisos de acceso a test de ortografía
    await this.storage.set('accesoOrtografia', this.accesoOrtografia);

    // Se almacena en memoria los permisos de acceso a test de inglés
    await this.storage.set('accesoIngles', this.accesoIngles);

    // Se almacena en memoria los permisos de acceso a test de personalidad
    await this.storage.set('accesoPersonalidad', this.accesoPersonalidad);

    // Se almacena en memoria los permisos de acceso a test de simulacros
    await this.storage.set('accesoSimulacros', this.accesoSimulacros);

    // Se obtienen las estadísticas del alumno en ese curso
    //this.obtenerEstadisticas();

    // Se refresca el menú para mostrar/ocultar opciones según permisos
    this.events.publish('tabs:reload');

    // if (this.refrescar)
    // {
    //   //console.log('Refresca');
    //   //const observer = new Observable()

    //   // https://ionicframework.com/docs/v3/api/util/Events/
    //   //this.events.publish('tabs:reload');
      
    //   // this.events.publishSomeData({
    //   //   tabs: 'reload'
    //   // });

    //   this.events.publish('tabs:reload');

    // }

    // Se redirecciona al usuario a la página correspondiente
    // if (this.accesoModulos === 1)
    //   this.router.navigate(['/modules']);
    // else if (this.accesoDocs === 1)
    //   this.router.navigate(['/docs']);
    // else if (this.accesoVideos === 1)
    //   this.router.navigate(['/videos']);
    // else if (this.accesoTest === 1)
    //   this.router.navigate(['/test']);
    // else if (this.accesoForo === 1)
    //   this.router.navigate(['/forum']);

    //console.log(this.idCurso);

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

  // logout()
  // {
  //   // // Se limpia toda la memoria
  //   // this.storage.clear();
  //   // // Se elimina el usuario de la memoria
  //   // //this.storage.remove('usuario');

  //   // this.ocultarMenu();

  //   this.proveedorLogout.logout()

  //   //const root = this.app.getRootNav();    
  //   //root.popToRoot();
  //   //this.navCtrl.setRoot(LoginPage);
  //   //this.router.navigate(['/login']);
  // }

  async ayudaCursos()
  {
    const alert = await this.alertCtrl.create({
      header: 'Selecciona un curso',
      subHeader: 'Elige un curso de la lista para acceder a sus contenidos',
      buttons: ['Entendido']
    });
    await alert.present();
  }

  async sinCursos()
  {
    const alert = await this.alertCtrl.create({
      header: 'Sin Cursos',
      subHeader: 'Actualmente no estás matriculado en ningún curso. Contacta con tu centro para más información',
      buttons: ['Entendido']
    });
    await alert.present();
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

}
