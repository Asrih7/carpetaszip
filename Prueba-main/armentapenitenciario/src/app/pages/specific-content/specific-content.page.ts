import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavparamService } from 'src/app/services/navparam.service';
import { AulavirtualrestProvider } from '../../providers/aulavirtualrest';
import { LogoutProvider } from '../../providers/logout';
import { Storage } from '@ionic/storage-angular';
import { DecimalPipe } from '@angular/common';

import {Capacitor} from '@capacitor/core';
import * as WebVPPlugin from 'capacitor-video-player';
import {CapacitorVideoPlayer} from 'capacitor-video-player';

@Component({
  selector: 'app-specific-content',
  templateUrl: './specific-content.page.html',
  styleUrls: ['./specific-content.page.scss'],
})
export class SpecificContentPage implements AfterViewInit {

  etiqueta: string;

  idCurso: number;
  idOposicion: number;
  tipoCurso: number;
  mesAcceso: number;
  usuario: any = [];    
  listaDocs: any[];
  listaDocsTemp: any[];
  listaVideos: any[];
  listaVideosTemp: any[];
  listaTest: any[];
  listaTestTemp: any[];
  searchQueryDocs: string = '';
  searchQueryVideos: string = '';
  searchQueryTest: string = '';
  docs: string = "docs";
  videos: string = "videos";
  teoria: string = "teoria";
  numMinutos: number = 0;
  numPreguntas: number = 0;
  continuar: number = 0;

  test: any;
  tipoTest: number;
  listaPreguntas: any[];
  listaRespuestas: any[];
  numeroPreguntas: any;
  aciertos: number;
  fallos: number;
  blancos: number;
  dudosas: number;
  dudosasAcierto: number;
  dudosasFallo: number;
  nota: number;
  notaRiesgo: number;
  videoPlayer: any;

  constructor(private router: Router, private navParamService: NavparamService, public proveedor: AulavirtualrestProvider, public proveedorLogout: LogoutProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public actionSheetCtrl: ActionSheetController, private storage: Storage, private decimalPipe: DecimalPipe) { 
    //this.modulo = this.navParamService.getNavData();
    this.etiqueta = this.navParamService.getNavData();
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

  initialize() {

    // Se cargan los documentos
    if (this.searchQueryDocs == ''){
      this.initializeDocs();
    }

    // Se cargan los vídeos
    if (this.searchQueryVideos == ''){
      this.initializeVideos();
    }

    // Se cargan los test de teoria
    if (this.searchQueryTest == ''){
      this.initializeTest();
    }

    // Se obtiene el id de la oposición del curso de la memoria
    this.storage.get('idOposicion').then((val) => {
      if (val != null && val != undefined){
        this.idOposicion = val;              
      }
      else{
        // Si no se han recuperado los datos se vuelve a la página de login
        this.proveedorLogout.logout()
      }
    });

  }

  async initializeDocs() {

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

        //this.proveedor.consultarDocsCurso(this.usuario.Mensaje.AuthorizationToken, this.idCurso)
        this.proveedor.consultarDocsCursoMesEtiqueta(this.usuario.Mensaje.AuthorizationToken, this.idCurso, this.mesAcceso, this.etiqueta)
        .subscribe(
          (data)=>{this.parseDocsJson(data);},
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

  initializeVideos() {

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

        //this.proveedor.consultarVideosCurso(this.usuario.Mensaje.AuthorizationToken, this.idCurso)
        this.proveedor.consultarVideosCursoMesEtiqueta(this.usuario.Mensaje.AuthorizationToken, this.idCurso, this.mesAcceso, this.etiqueta)
        .subscribe(
          (data)=>{this.parseVideosJson(data);},
          (error)=>{console.log(error);}//,
          //() =>{loader.dismiss()}
        )
      }
      else{
        // Si no se han recuperado los datos se vuelve a la página de login
        this.proveedorLogout.logout()
      }
    });
  }

  initializeTest() {

    // const loader = this.loadingCtrl.create({
    //   content: "Cargando..."
    // });
    // loader.present();

    // Se obtiene el id del curso de la memoria
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
        // Se consultan todos los test del curso
        //this.proveedor.consultarTestCurso(this.usuario.Mensaje.AuthorizationToken, this.idCurso)
        this.proveedor.consultarTestCursoMesEtiqueta(this.usuario.Mensaje.AuthorizationToken, this.idCurso, this.mesAcceso, this.etiqueta)
        .subscribe(
          (data)=>{this.parseListaTestJson(data);},
          (error)=>{console.log(error);}//,
          //() =>{loader.dismiss()}
        )
      }
      else{
        // Si no se han recuperado los datos se vuelve a la página de login
        this.proveedorLogout.logout()
      }
    });
  }

  parseDocsJson(data)
  {
    if (data.Error == 0){
      let jsonArray = data.Mensaje;

      this.listaDocs = [];
      this.listaDocsTemp = [];

      for(let i=0; i < jsonArray.length; i++)
      {
        let jsonObject = jsonArray[i];
        this.listaDocs.push(jsonObject);
        this.listaDocsTemp.push(jsonObject);
      }
    }
    // Acceso denegado
    else if (data.Error == -10){
      this.proveedorLogout.logout()
    }
    else{
      this.listaDocs = [];
      // const alert = this.alertCtrl.create({
      //   title: 'Sin Docs',
      //   subTitle: 'Este tema no contiene documentos',
      //   buttons: ['OK']
      // });
      // alert.present();
    }
  }

  parseVideosJson(data)
  {
    //console.log(data);

    if (data.Error == 0){
      let jsonArray = data.Mensaje;

      this.listaVideos = [];
      this.listaVideosTemp = [];

      for(let i=0; i < jsonArray.length; i++)
      {
        let jsonObject = jsonArray[i];
        this.listaVideos.push(jsonObject);
        this.listaVideosTemp.push(jsonObject);
      }
    }
    // Acceso denegado
    else if (data.Error == -10){
      this.proveedorLogout.logout()
    }
    else{
      this.listaVideos = [];
      // const alert = this.alertCtrl.create({
      //   title: 'Sin Vídeos',
      //   subTitle: 'Este tema no contiene vídeos',
      //   buttons: ['OK']
      // });
      // alert.present();
    }
  }

  parseListaTestJson(data)
  {
    if (data.Error == 0){
      let jsonArray = data.Mensaje;

      this.listaTest = [];
      this.listaTestTemp = [];

      for(let i=0; i < jsonArray.length; i++)
      {
        let jsonObject = jsonArray[i];
        this.listaTest.push(jsonObject);
        this.listaTestTemp.push(jsonObject);
      }
    }
    // Acceso denegado
    else if (data.Error == -10){
      this.proveedorLogout.logout()
    }
    else{
      this.listaTest = [];
      // const alert = this.alertCtrl.create({
      //   title: 'Sin Test',
      //   subTitle: 'Este curso no contiene test de teoría',
      //   buttons: ['OK']
      // });
      // alert.present();
    }
  }

  getDocs(ev: any) {

    if (this.listaDocsTemp != null && this.listaDocsTemp != undefined){
      // Reset items back to all of the items
      this.listaDocs = this.listaDocsTemp;

      this.searchQueryDocs = '';

      // set val to the value of the searchbar
      const val = ev.target.value;

      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.searchQueryDocs = val;
        this.listaDocs = this.listaDocs.filter((item) => {
          return ((item.Nombre.toLowerCase().indexOf(val.toLowerCase()) > -1) || (item.Tipo.toLowerCase().indexOf(val.toLowerCase()) > -1));
        })
      }
    }
  }

  getVideos(ev: any) {

    if (this.listaVideosTemp != null && this.listaVideosTemp != undefined){
      // Reset items back to all of the items
      this.listaVideos = this.listaVideosTemp;

      this.searchQueryVideos = '';

      // set val to the value of the searchbar
      const val = ev.target.value;

      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.searchQueryVideos = val;
        this.listaVideos = this.listaVideos.filter((item) => {
          return ((item.Nombre.toLowerCase().indexOf(val.toLowerCase()) > -1));
        })
      }
    }
  }

  getTest(ev: any) {

    if (this.listaTestTemp != null && this.listaTestTemp != undefined){
      // Reset items back to all of the items
      this.listaTest = this.listaTestTemp;

      // set val to the value of the searchbar
      const val = ev.target.value;

      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.listaTest = this.listaTest.filter((item) => {
          return ((item.Nombre.toLowerCase().indexOf(val.toLowerCase()) > -1) || (item.IdTema == val));
        })
      }
    }
  }

  async info(instrucciones: string){    
    //this.navCtrl.push(TestInfoPage, {idTest: this.test.IdTest});
    const alert = await this.alertCtrl.create({
      header: 'Instrucciones',
      message: instrucciones, 
      buttons: ['Entendido']
    });
    await alert.present();
  }

  hacerTest(item) {

    //console.log('idTest: ' + item.IdTest);

    // Si el test estaba en PAUSA
    if (item.Pendiente > 0)
    {
        // Se continúa
        this.continuar = 1;
        ///this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas, continuar: this.continuar, origen: this.modulo});
        this.navParamService.setNavData(JSON.stringify({idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas, continuar: this.continuar, origen: null, etiqueta: this.etiqueta, revisar: false}));
        this.router.navigate(['/test-do']);
    }
    else
    {
      // Si es la primera vez que va a hacer el test
      if (item.Realizado == 0)
      {
        // Se inicializa el tiempo a cero
        this.continuar = 0;   
        this.numMinutos = 0;
        this.numPreguntas = 0; 
        ///this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas, continuar: this.continuar, origen: this.modulo});
        this.navParamService.setNavData(JSON.stringify({idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas, continuar: this.continuar, origen: null, etiqueta: this.etiqueta, revisar: false}));
        this.router.navigate(['/test-do']);
      }
      // Si ya ha realizado el test
      else
      {
          // Se muestran las opciones
          this.mostrarOpciones(item);
      }

    }

  }

  async mostrarOpciones(item) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: '¿Qué quieres hacer?',
      buttons: [
        {
          text: 'Revisar',
          icon: 'eye-outline',
          handler: () => {

            // Se recupera el test
            this.proveedor.recuperarTest(this.usuario.Mensaje.AuthorizationToken, item.IdTest, this.idOposicion)
            .subscribe(
              (data)=>{this.parseTestJson(data, item.Nombre, item.Media);},
              (error)=>{console.log(error);},
              () =>{
                }
            )
          }
        },
        {
          text: 'Repetir',
          icon: 'repeat-outline',
          handler: () => {

            // Si hay limite de ejecuciones se valida que no se haya superado
            if (item.Limite > 0 && item.Realizado >= item.Limite)
            {
              this.alert('Límite superado', 'Has superado el número de veces que el centro permite realizar este test'); 
            }
            else{
              this.continuar = 0;
              this.numMinutos = 0;
              this.numPreguntas = 0;
              ///this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas, continuar: this.continuar, origen: this.modulo});
              this.navParamService.setNavData(JSON.stringify({idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas, continuar: this.continuar, origen: null, etiqueta: this.etiqueta, revisar: false}));
              this.router.navigate(['/test-do']);
            }
          }
        },
        // {
        //   text: 'Configurar',
        //   icon: 'options-outline',
        //   handler: () => {

        //     this.alert('PRÓXIMAMENTE', 'Muy pronto podrás configurar los test también desde la app');

        //   }
        // },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    await actionSheet.present();
  }

  parseTestJson(data, nombre, mediaAlumnos)
  {  
    if (data.Error == 0){

      // Test
      this.test = data;
      this.tipoTest = data.Mensaje.Tipo;
      this.test.Nombre = nombre;

      // Preguntas
      let jsonArray = data.Mensaje.Preguntas;

      this.listaPreguntas = [];
      this.listaRespuestas = [];
      this.aciertos = 0;
      this.fallos = 0;
      this.blancos = 0;
      this.dudosas = 0;
      this.dudosasAcierto = 0;
      this.dudosasFallo = 0

      for(let i=0; i < jsonArray.length; i++)
      {
        let jsonObject = jsonArray[i];
        //jsonObject.IdPregunta = i+1;
        this.listaPreguntas.push(jsonObject);

        if (jsonObject.Contestada == 0)
          this.blancos++;
        else
        {
          if (jsonObject.Acertada == 1)
          {
            if (jsonObject.Dudosa == 1)
            {
              this.dudosasAcierto++;
              this.blancos++;
            }
            else
              this.aciertos++;
          }

          if (jsonObject.Fallada == 1)
          {
            if (jsonObject.Dudosa == 1)
            {
              this.dudosasFallo++;
              this.blancos++
            }
            else
              this.fallos++;
          }
        }

        if (jsonObject.Dudosa == 1)
        {
          this.dudosas++;
        }

      }

      this.numeroPreguntas = this.listaPreguntas.length;

      // Se calcula la nota

      // Si es un test de PERSONALIDAD
      if (this.tipoTest == 4)
      {
        // Porcentaje por defecto para el apto
        var porcentaje_apto = 85; 

        if (this.idOposicion == 63) // POLICÍA NACIONAL CORPOREPOL
        porcentaje_apto = 70;

        if (this.idOposicion == 189) // POLICÍA MUNICIPAL CORPOREPOL
          porcentaje_apto = 85;        

        var res_aciertos = this.aciertos;
        var res_maximo = this.aciertos + this.fallos + this.blancos;

        var porcentaje_acierto = (res_aciertos) * 100 / (res_maximo);

        if (porcentaje_acierto >= porcentaje_apto)
          res_obtenido = 100;
        else
          res_obtenido = 0;

        this.nota = res_obtenido;

        // Se calcula la nota con riesgo
        if (this.dudosas > 0)
        {
          var res_aciertos = this.aciertos + this.dudosasAcierto;
          var res_maximo = this.aciertos + this.fallos + this.blancos;

          var porcentaje_acierto = (res_aciertos) * 100 / (res_maximo);

          if (porcentaje_acierto >= porcentaje_apto)
            res_obtenido = 100;
          else
            res_obtenido = 0;

          this.notaRiesgo = res_obtenido;
        }              
      }
      // Para el resto de test
      else
      {
        var res_aciertos = this.aciertos;
        var res_fallos = this.fallos * data.Mensaje.ValorFallo;
        var res_maximo = this.aciertos + this.fallos + this.blancos;
        var res_obtenido = res_aciertos - res_fallos;

        if (res_maximo > 0)
            res_obtenido = (100 * res_obtenido) / res_maximo;
        else
            res_obtenido = 0;

        if (res_obtenido < 0)
            res_obtenido = 0;

        this.nota = res_obtenido;

        // Se calcula la nota con riesgo
        if (this.dudosas > 0)
        {
          var res_aciertos = this.aciertos + this.dudosasAcierto;
          var res_fallos = this.fallos + (this.dudosasFallo * data.Mensaje.ValorFallo);
          var res_maximo = this.aciertos + this.fallos + this.blancos;
          var res_obtenido = res_aciertos - res_fallos;

          if (res_maximo > 0)
              res_obtenido = (100 * res_obtenido) / res_maximo; //Math.Round((decimal)((100 * res_obtenido) / res_maximo), 2);
          else
              res_obtenido = 0;

          if (res_obtenido < 0)
              res_obtenido = 0;

          this.notaRiesgo = res_obtenido;
        }
      }

      // Se envía al usuario a la página de revisión
      ///this.navCtrl.push(TestReviewPage, {test: this.test, preguntas: this.listaPreguntas, respuestas: this.listaRespuestas, aciertos: this.aciertos, fallos: this.fallos, blancos: this.blancos, nota: nota, mediaAlumnos: mediaAlumnos, origen: this.modulo });
      // this.navParamService.setNavData(JSON.stringify({test: this.test, listaPreguntas: this.listaPreguntas, listaRespuestas: this.listaRespuestas, aciertos: this.aciertos, fallos: this.fallos, blancos: this.blancos, nota: this.decimalPipe.transform(nota/10, '1.2-2'), mediaAlumnos: this.decimalPipe.transform(mediaAlumnos/10, '1.2-2'), origen: this.modulo})); 
      this.navParamService.setNavData(JSON.stringify({idOposicion: this.idOposicion, test: this.test, tipoTest: this.tipoTest, valorFallo: data.Mensaje.ValorFallo, listaPreguntas: this.listaPreguntas, listaRespuestas: this.listaRespuestas, aciertos: this.aciertos, fallos: this.fallos, blancos: this.blancos, dudosas: this.dudosas, dudosasAcierto: this.dudosasAcierto, dudosasFallo: this.dudosasFallo, nota: this.decimalPipe.transform(this.nota/10, '1.2-2'), notaRiesgo: this.decimalPipe.transform(this.notaRiesgo/10, '1.2-2'), mediaAlumnos: mediaAlumnos, origen: null, etiqueta: this.etiqueta, revisar: true}));    
      this.router.navigate(['/test-review']);
    }
    // Acceso denegado
    else if (data.Error == -10){
      this.proveedorLogout.logout()
    }
    else{    
      this.alert('Ooops!', 'La revisión de este test sólo está disponible en la plataforma web.');      
    }    
  }

  view(item: any, id: number)
  {
    ///this.navCtrl.push(DocViewerPage, {item: item});
    this.navParamService.setNavData(item);
    this.router.navigate(['/doc-viewer']);

    this.marcarDocComoVisto(id);
  }

  marcarDocComoVisto(idDoc: number)
  {    
      // Se marca el documento como visto en base de datos
      this.proveedor.marcarDocVisto(this.usuario.Mensaje.AuthorizationToken, idDoc)
      .subscribe(
        (data)=>{console.log(data);},
        (error)=>{console.log(error);}
      )          
  }

  play(item: any)
  {
    ///this.navCtrl.push(VideoPlayerPage, {item: item});
    //this.marcarVideoComoVisto(id);

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

    //console.log(item);

    if (data.Error == 0){
      this.marcarVideoComoVisto(item.ID);

      if (item.Tipo === "local"){
        // Show the player fullscreen
        await this.videoPlayer.initPlayer({
          mode: 'fullscreen',
          url: data.Mensaje["URL"],
          playerId: 'fullscreenSpecificContent',
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

  marcarVideoComoVisto(idVideo: number)
  {    
      // Se marca el video como visto en base de datos
      this.proveedor.marcarVideoVisto(this.usuario.Mensaje.AuthorizationToken, idVideo)
      .subscribe(
        // (data)=>{console.log(data);},
        (data)=>{},
        (error)=>{console.log(error);}
      )          
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
