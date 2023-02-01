import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ActionSheetController } from '@ionic/angular';
import { Router, NavigationStart } from '@angular/router';
import { NavparamService } from 'src/app/services/navparam.service';
import { AulavirtualrestProvider } from '../../providers/aulavirtualrest';
import { LogoutProvider } from '../../providers/logout';
import { Storage } from '@ionic/storage-angular';
import { Fancybox } from "@fancyapps/ui";
import { DatePipe } from '@angular/common';
import { filter } from 'rxjs/operators'
import { StreamingMedia, StreamingVideoOptions } from '@awesome-cordova-plugins/streaming-media/ngx';

import {Capacitor} from '@capacitor/core';
import * as WebVPPlugin from 'capacitor-video-player';
import {CapacitorVideoPlayer} from 'capacitor-video-player';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements AfterViewInit {

  idCurso: number;
  tipoCurso: number;
  mesAcceso: number;
  accesoVideos: number;
  usuario: any = [];  
  items: any[];
  allitems: any[];
  itemsClases: any[];
  allitemsClases: any[];
  videos: string = "videos";
  searchQuery: string = '';
  searchQueryClases: string = '';
  videoPlayer: any;

  clases: boolean = false;

  isAscendic: boolean = true;
  currentDate = new Date();
  lastMonthDate = new Date(new Date().setMonth(new Date().getMonth() - 1));

  constructor(private router: Router, private navParamService: NavparamService, public proveedor: AulavirtualrestProvider, public proveedorLogout: LogoutProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public actionSheetCtrl: ActionSheetController, private storage: Storage, private streamingMedia: StreamingMedia, private datePipe: DatePipe) { 

    this.clases = this.navParamService.getNavData() == 'Clases';

    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((route: NavigationStart) => {
        // console.log('Route: '+route.url)
        if (route.url == '/tabs/videos') {
          this.initialize();
          this.clases = false;
        }
    })

  }

  ionViewWillEnter() {
      this.initialize();
  }

  ngAfterViewInit() {
    
    // Initialise the video plugin player
    if (Capacitor.isNativePlatform) {
      this.videoPlayer = CapacitorVideoPlayer;
    } else {
      this.videoPlayer = WebVPPlugin.CapacitorVideoPlayer;
    }
  }

  // ionViewDidLoad() {
  //   this.initialize();
  // }

  initialize() {

    // Se cargan los vídeos
    if (this.searchQuery == ''){
      this.initializeItems();
    }
    // Se cargan las clases
    if (this.searchQueryClases == ''){
      this.initializeItemsClases();
    }
  }

  // VIDEOS
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
        this.proveedorLogout.logout()
      }
    });

    // Se obtiene el mes de acceso al curso de la memoria
    this.storage.get('mesAcceso').then((val) => {
      if (val != null && val != undefined){
        this.mesAcceso = val;       
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

        if (this.clases) {
          this.proveedor.consultarVideosClasesCurso(this.usuario.Mensaje.AuthorizationToken, this.idCurso)
          .subscribe(
            (data)=>{this.parseJson(data);},
            (error)=>{console.log(error);},
            () =>{loading.dismiss()}
          )
        }
        else{
          //this.proveedor.consultarVideosCurso(this.usuario.Mensaje.AuthorizationToken, this.idCurso)
          this.proveedor.consultarVideosCursoMes(this.usuario.Mensaje.AuthorizationToken, this.idCurso, this.mesAcceso)
          .subscribe(
            (data)=>{this.parseJson(data);},
            (error)=>{console.log(error);},
            () =>{loading.dismiss()}
          )
        }
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

  // CLASES
  initializeItemsClases() {

    // const loader = this.loadingCtrl.create({
    //   content: "Cargando..."
    // });
    // loader.present();

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

        this.proveedor.consultarVideosClasesCurso(this.usuario.Mensaje.AuthorizationToken, this.idCurso)
        .subscribe(
          (data)=>{this.parseClaseJson(data);},
          (error)=>{console.log(error);}//,
          // () =>{loader.dismiss()}
        )
      }
      else{
        // Si no se han recuperado los datos se vuelve a la página de login
        this.proveedorLogout.logout()
      }
    });
  }

  parseClaseJson(data)
  {
    if (data.Error == 0){
      let jsonArray = data.Mensaje;

      this.itemsClases = [];
      this.allitemsClases = [];

      for(let i=0; i < jsonArray.length; i++)
      {
        let jsonObject = jsonArray[i];
        this.itemsClases.push(jsonObject);
        this.allitemsClases.push(jsonObject);
      }
    }
    // Acceso denegado
    else if (data.Error == -10){
      this.proveedorLogout.logout()
    }
    else{
      this.itemsClases = [];
      // const alert = this.alertCtrl.create({
      //   title: 'Sin Clases',
      //   subTitle: 'Este curso no contiene clases',
      //   buttons: ['OK']
      // });
      // alert.present();
    }
  }

  getItemsClases(ev: any) {

    if (this.allitemsClases != null && this.allitemsClases != undefined){
      // Reset items back to all of the items
      this.itemsClases = this.allitemsClases;

      this.searchQueryClases = '';

      // set val to the value of the searchbar
      const val = ev.target.value;

      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.searchQueryClases = val;
        this.itemsClases = this.itemsClases.filter((itemClase) => {
          return ((itemClase.Nombre.toLowerCase().indexOf(val.toLowerCase()) > -1) || (itemClase.IdTema == val));
        })
      }
    }
  }

  play(item: any) {

    this.proveedor.obtenerUrlVideo(this.usuario.Mensaje.AuthorizationToken, item.ID, this.idCurso)
        .subscribe(
          (data)=>{this.playVideo(data, item);},
          //(data)=>{this.openVideoPlayer(data, item);},
          //(data)=>{this.showVideo(data, item);},
          //(data)=>{this.playMedia(data, item);},
          (error)=>{console.log(error);}
        )    
  }

  async playVideo(data: any, item: any){

    //console.log(data.Mensaje["URL"]);
    //console.log(data.Mensaje);
    //console.log(item);

    if (data.Error == 0){
      this.marcarComoVisto(item.ID);

      if (item.Tipo === "local"){
        // Show the player fullscreen
        await this.videoPlayer.initPlayer({
          mode: 'fullscreen',
          url: data.Mensaje["URL"],
          playerId: 'fullscreenVideos',
          componentTag: 'app-videos'
        });
      }
      else{
        //this.navParamService.setNavData(data.Mensaje["URL"]);
        //this.navParamService.setNavData(JSON.stringify({titulo: item.Nombre, tipo: item.Tipo, url: data.Mensaje["URL"]}));
        this.navParamService.setNavData(JSON.stringify({titulo: item.Nombre, id: item.ID}));
        this.router.navigate(['/video-player']);
      }
    }
  }

  openVideoPlayer(data: any, item: any)
  {
    if (data.Error == 0){
      
      this.marcarComoVisto(item.ID);

      //console.log(item.Nombre);
      //console.log(data.Mensaje["URL"]);

      this.navParamService.setNavData(data.Mensaje["URL"]);
      //this.navParamService.setNavData(JSON.stringify({titulo: item.Nombre, url: data.Mensaje["URL"]}));      
      this.router.navigate(['/video-player']);

    }
  }

  showVideo(data: any, item: any)
  {
    if (data.Error == 0){
      
      this.marcarComoVisto(item.ID);
      
      Fancybox.show(
        // Array containing gallery items
        [
          // Gallery item
          {
            src: data.Mensaje["URL"]+"#toolbar=0",
            type: "iframe",
            preload: false,
            protect: true,
            caption: item.Nombre,
            placeFocusBack: false
          },
        ],
        // Gallery options
        {
          mainClass: "myFancybox",
        }
      );
    }    
  }

  playMedia(data:any, item: any) {

    this.marcarComoVisto(item.ID);

    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      orientation: 'landscape',
      shouldAutoClose: true,
      controls: false
    };
    
    this.streamingMedia.playVideo(data.Mensaje["URL"], options);

  }

  marcarComoVisto(idVideo: number)
  {    
      //console.log('marcar como visto: ' + idVideo)

      // Se marca el video como visto en base de datos
      this.proveedor.marcarVideoVisto(this.usuario.Mensaje.AuthorizationToken, idVideo)
      .subscribe(
        // (data)=>{console.log(data);},
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
      case 'videos':
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
