import { AfterContentChecked, Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, LoadingController, PopoverController, IonicSafeString} from '@ionic/angular';
import { MenuController} from '@ionic/angular';
import { Router } from '@angular/router';
import { NavparamService } from 'src/app/services/navparam.service';
import { AulavirtualrestProvider } from '../../providers/aulavirtualrest';
import { LogoutProvider } from '../../providers/logout';
import { Storage } from '@ionic/storage-angular';
import { DecimalPipe } from '@angular/common';
import { SwiperComponent } from 'swiper/angular';
import { SwiperOptions } from 'swiper';
import SwiperCore, { Virtual, Pagination, Scrollbar, EffectCube } from 'swiper';
import { BehaviorSubject } from 'rxjs';
import { TestIndexPage } from '../test-index/test-index.page';

// install Swiper modules https://swiperjs.com/angular#virtual-slides
SwiperCore.use([Virtual]);

@Component({
  selector: 'app-test-do',
  templateUrl: './test-do.page.html',
  styleUrls: ['./test-do.page.scss'],
})
export class TestDoPage implements AfterContentChecked {

  @ViewChild('swiper') swiper: SwiperComponent;

  // config: SwiperOptions = {
  //   pagination: false,
  //   scrollbar: false
  //   //effect: 'cube',
  // };

  test: any;
  tipoTest: number;
  idOposicion : number;
  numMinutos: number = 0;
  numPreguntas: number = 0;
  // instrucciones: string = null;
  continuar: number = 0;
  posicion: number = 0;
  usuario: any = [];
  listaPreguntas: any[];
  listaRespuestas: any[];
  numeroPreguntas: any;
  numeroRespuestasCorrectas: number = 0;
  aciertos: number = 0;
  fallos: number = 0;
  blancos: number = 0;
  dudosas: number = 0;
  dudosasAcierto: number = 0;
  dudosasFallo: number = 0;
  aciertosTemp: number = 0;
  fallosTemp: number = 0;
  blancosTemp: number = 0;
  tiempo: number = 0;
  intervalo: any;
  allChecked: boolean = false;
  origen: any[];
  etiqueta: string;
  navParams: any;

  // Adding Timing Functionality (https://www.youtube.com/watch?v=aOHJRqvcjTI)
  time: BehaviorSubject<string> = new BehaviorSubject('00:00');
  timer: number; // in seconds
  interval: any;

  constructor(private router: Router, private navParamService: NavparamService, public proveedor: AulavirtualrestProvider, public proveedorLogout: LogoutProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController, private storage: Storage, private decimalPipe: DecimalPipe, public popoverCtrl: PopoverController, private menu: MenuController) { 
    this.navParams = JSON.parse(this.navParamService.getNavData());
    //console.log(this.navParams);
    this.idOposicion = this.navParams['idOposicion'];
    this.test = this.navParams['test']; 
    this.tipoTest = this.test['Tipo'];
    this.numMinutos = this.navParams['numMinutos']; 
    this.numPreguntas = this.navParams['numPreguntas']; 
    // this.instrucciones = this.navParams['Instrucciones']; 
    this.continuar = this.navParams['continuar']; 
    this.origen = this.navParams['origen']; 
    this.etiqueta = this.navParams['etiqueta']; 

    this.initializaTest();
  }

  ngOnInit() {
    //this.ocultarMenu();
  }

  ionViewWillEnter() {
    //this.ocultarMenu();
  }

  ngAfterContentChecked(): void {
    // if (this.swiper) {
    //   this.swiper.updateSwiper({});
    // }
  }

  swiperSlideChanged(e) {
    //console.log('changed: ', e);
  }

  // ionViewWillEnter() {
  //   this.ocultarMenu();
  // }

  // public ionViewWillEnter(){
  //   this.slides.update();
  // }

  // ionViewWillLeave(){
  //   this.slides.stopAutoplay();
  // }

  // ionViewDidEnter() {
  //   this.slides.startAutoplay();
  // }

  // mostrarMenu(){
  //   let tabs = document.querySelectorAll('.tabbar');
  //   if ( tabs !== null ) {
  //     Object.keys(tabs).map((key) => {
  //       tabs[ key ].style.display = 'block';
  //     });
  //   } // end if

  //   // let tabBar = document.getElementById('app-tab-bar'); 
  //   // if (tabBar !== null) { tabBar.style.display = 'block'; }
  // }

  // ocultarMenu(){
  //   let tabs = document.querySelectorAll('.tabbar');
  //   if ( tabs !== null ) {
  //     Object.keys(tabs).map((key) => {
  //       tabs[ key ].style.transform = 'translateY(56px)';        
  //     });
  //   } // end if

  //   // let tabBar = document.getElementById('app-tab-bar'); 
  //   // if (tabBar !== null) { tabBar.style.display = 'none'; }
  // }

  async initializaTest() {

    //console.log(this.test.IdTest);

    this.listaPreguntas = [];
    this.aciertos = 0;
    this.fallos = 0;
    this.blancos = 0;
    this.dudosas = 0;
    this.dudosasAcierto = 0;
    this.dudosasFallo = 0;

    const loading = await this.loadingCtrl.create({
      message: "Cargando preguntas..."
    });
    loading.present();

    // Si el test tiene instrucciones se muestran al empezar el test
    if (this.test.Instrucciones != null && this.test.Instrucciones != '' && this.test.Instrucciones != ' ')
      this.info();

    // Se obtienen los datos del usuario de la memoria
    this.storage.get('usuario').then((val) => {
      if (val != null && val != undefined){
        this.usuario = JSON.parse(val);

        // Si se empieza el test desde el principio
        if (this.continuar == 0) 
        {
          // Si no se ha configurado el test ni por tiempo ni por nº de preguntas
          if (this.numMinutos == 0 && this.numPreguntas == 0)
          {
            // Se guarda el estado inicial de la revisión del test
            // this.proveedor.insertarRevisionTest(this.usuario.Mensaje.AuthorizationToken, this.test.IdTest)
            // .subscribe(
            //   //(data)=>{console.log(data);},
            //   (data)=>{},
            //   (error)=>{console.log(error);}
            // ) 
            this.proveedor.insertarRevisionTestOposicion(this.usuario.Mensaje.AuthorizationToken, this.test['IdTest'], this.idOposicion)
            .subscribe(
              //(data)=>{console.log(data);},
              (data)=>{},
              (error)=>{console.log(error);}
            ) 

            // Se obtiene el test original
            this.proveedor.obtenerTest(this.usuario.Mensaje.AuthorizationToken, this.test['IdTest'])
            .subscribe(
              (data)=>{this.parseTestJson(data);},
              (error)=>{console.log(error);},
              () =>{
                loading.dismiss();
                if (this.numMinutos > 0)
                  this.startTimer(this.numMinutos);
                }
            )
            this.iniciarTiempo();            
          }
          else{
            // Se obtiene el test configurado
            this.proveedor.configurarTest(this.usuario.Mensaje.AuthorizationToken, this.test['IdTest'], this.numPreguntas, this.numMinutos, true)
            .subscribe(
              (data)=>{this.parseTestJson(data);},
              (error)=>{console.log(error);},
              () =>{
                loading.dismiss();                
                if (this.numMinutos > 0)
                  this.startTimer(this.numMinutos);
              }
            )
            this.iniciarTiempo();
          }
        }
        // Si el test estaba PAUSADO y se continúa
        else
        {
          // Se recupera el test pausado
          this.proveedor.recuperarTest(this.usuario.Mensaje.AuthorizationToken, this.test['IdTest'], this.idOposicion)
          .subscribe(
            (data)=>{this.parseTestJson(data);},
            (error)=>{console.log(error);},
            () =>{
              loading.dismiss();    
              this.swiper.swiperRef.slideTo(this.posicion, 1000);         
              if (this.numMinutos > 0)
                this.startTimer(this.numMinutos);              
            }
          )
          this.iniciarTiempo();
          
        }
      }
      else{
        // Si no se han recuperado los datos se vuelve a la página de test
        //this.navCtrl.push(TestPage);
        this.router.navigate(['/test']);
      }
    });
    
  }

  parseTestJson(data){

    //console.log(data);

    let jsonArray = data.Mensaje.Preguntas;

    this.listaPreguntas = [];

    for(let i=0; i < jsonArray.length; i++)
    {
      let jsonObject = jsonArray[i];
      //jsonObject.IdPregunta = i+1;
      this.listaPreguntas.push(jsonObject);

      // for(let j=0; j < this.listaPreguntas.length; j++)
      // {
      //   let jsonArray = this.listaPreguntas[j].Respuestas;
      // }
    }

    //console.log(this.listaPreguntas);

    this.numeroPreguntas = this.listaPreguntas.length;

    if (this.numMinutos == 0)
    {
      this.numMinutos = data.Mensaje.Tiempo / 60;
    }

    this.posicion = data.Mensaje.Posicion;


    //console.log('posición: ' + this.posicion);

  }

  // seleccionar(respuesta){
    
  //   // Se guarda la respuesta seleccionada
  //   respuesta.Seleccionada = 1;

  //   // Se contabilizan los aciertos y fallos
  //   if (respuesta.RespuestaCorrecta == 1)
  //     this.aciertos++;
  //   else
  //     this.fallos++;

  //   this.next();
  // }

  seleccionar(pregunta, respuesta, respuestas, index){ 

    //console.log('seleccionar');

    // Si es un test SIN respuesta múltiple
    if (this.test['Multirespuesta'] == 0){

      // Se reinician todas las respuestas menos la seleccionada
      for(let i=0; i<respuestas.length; i++){

        if(index != i){

          // Si la respuesta había sido seleccionada
          if (respuestas[i].Seleccionada == 1){

            // Se descontabilizan los aciertos y fallos
            if (respuestas[i].RespuestaCorrecta == 1){
              if (this.aciertos > 0) 
                this.aciertos--;
            }
            else{
              if (this.fallos > 0) 
                this.fallos--;
            }
          }
          
          // Se reinicia la selección de la respuesta
          respuestas[i].Seleccionada = 0;    
        }
      }
    }

    // Se marca la respuesta como seleccionada si NO estaba seleccionada previamente
    if (respuesta.Seleccionada == 0){
      
      // Se marca la pregunta como contestada
      pregunta.Contestada = 1;

      // Se marca la respuesta como seleccionada
      respuesta.Seleccionada = 1;

      // Si es un test SIN respuesta múltiple
      if (this.test['Multirespuesta'] == 0){

        // Se contabilizan los aciertos y fallos 
        if (respuesta.RespuestaCorrecta == 1)
        {
          pregunta.Acertada = 1;
          pregunta.Fallada = 0;

          if (pregunta.Dudosa == 1)
            this.blancos++;
          else
            this.aciertos++;
        }
        else
        {
          pregunta.Fallada = 1;
          pregunta.Acertada = 0;

          if (pregunta.Dudosa == 1)
            this.blancos++;
          else
            this.fallos++;
        }

        // Se contabilizan las dudosas
        if (pregunta.Dudosa == 1)
        {
          this.dudosas++;

          if (respuesta.RespuestaCorrecta == 1)
          {
            this.dudosasAcierto++;
          }
          else
          {
            this.dudosasFallo++;
          }
        }

      }
      // Si es un test CON respuesta múltiple
      else{
        // Se contabilizan los aciertos y fallos al finalizar
      }

    }
    // Si la respuesta seleccionada YA estaba seleccionada previamente
    else{

      // Se marca la pregunta como NO contestada
      pregunta.Contestada = 0;
      pregunta.Fallada = 0;
      pregunta.Acertada = 0;

      // Se marca la respuesta como NO seleccionada
      respuesta.Seleccionada = 0;

      // Si es un test SIN respuesta múltiple
      if (this.test['Multirespuesta'] == 0){

        // Se descontabilizan los aciertos y fallos
        if (respuesta.RespuestaCorrecta == 1){
          if (this.aciertos > 0) 
            this.aciertos--;
        }
        else{
          if (this.fallos > 0 ) 
            this.fallos--;
        }

        // Se descontabilizan las dudosas
        if (pregunta.Dudosa == 1)
        {
          this.dudosas--;

          if (respuesta.RespuestaCorrecta == 1)
          {
            if (this.dudosasAcierto > 0) 
              this.dudosasAcierto--;
          }
          else
          {
            if (this.dudosasFallo > 0) 
              this.dudosasFallo--;
          }
        }
      }      
    }
    

    // console.log("aciertos: " + this.aciertos);
    // console.log("fallos: " + this.fallos);

    // Si es un test SIN respuesta múltiple y la pregunta ha sido contestada
    if (this.test['Multirespuesta'] == 0 && pregunta.Contestada > 0){
      this.next();
    }
  }

  prev()
  {
    this.swiper.swiperRef.slidePrev(1000);
  }

  next()
  {
    this.swiper.swiperRef.slideNext(1000);
  }

  goTo(position: number)
  {
    this.swiper.swiperRef.slideTo(position, 500);
  }

  limpiar(pregunta)
  {
    if (pregunta != null)
    {
        pregunta.Contestada = 0;

        for(let j=0; j < pregunta.Respuestas.length; j++){
          pregunta.Respuestas[j].Seleccionada = 0;     
        }  

        //pregunta.Dudosa = 0;
    }
  }

  marcarDudosa(pregunta)
  {
    pregunta.Dudosa = 1;

    // Si es un test SIN respuesta múltiple
    if (this.test['Multirespuesta'] == 0){
      if (pregunta.Contestada)
      {    
        this.dudosas++;
        this.blancos++;
        
        if (pregunta.Acertada == 1)
        {
          this.dudosasAcierto++;

          if (this.aciertos > 0)
            this.aciertos--;
        }
        else if (pregunta.Fallada == 1)
        {
          this.dudosasFallo++;

          if (this.fallos > 0)
            this.fallos--;
        }

      }
    }
    // Si es un test CON respuesta múltiple
    else{
      // Se contabilizan los aciertos y fallos al finalizar
    }
  }

  desmarcarDudosa(pregunta)
  {
    pregunta.Dudosa = 0;
    
    // Si es un test SIN respuesta múltiple
    if (this.test['Multirespuesta'] == 0){
      if (pregunta.Contestada)
      {
        if (this.dudosas > 0)
          this.dudosas--;

        if (this.blancos > 0)
          this.blancos--;

        if (pregunta.Acertada == 1)
        {
          if (this.dudosasAcierto > 0)
            this.dudosasAcierto--;

          this.aciertos++;
        }
        else if (pregunta.Fallada == 1)
        {
          if (this.dudosasFallo > 0)
            this.dudosasFallo--;

          this.fallos++;
        }
      }
    }
    // Si es un test CON respuesta múltiple
    else{
      // Se contabilizan los aciertos y fallos al finalizar
    }
  }

  restart() {
    //this.swiper.swiperRef.lockSwipes(false);
    this.swiper.swiperRef.slideTo(0, 500);
    //this.swiper.swiperRef.lockSwipes(true);
  }

  async info(){    
    //this.navCtrl.push(TestInfoPage, {idTest: this.test.IdTest});
    const alert = await this.alertCtrl.create({
      header: 'Instrucciones',
      message: new IonicSafeString(this.test.Instrucciones), 
      buttons: ['Entendido']
    });
    await alert.present();
  }

  async terminar(){
    const confirm = await this.alertCtrl.create({
      header: '¿Has terminado?',
      message: 'Al finalizar el test se calculará tu resultado',
      buttons: [
        {
          text: 'No',
          handler: () => {

          }
        },
        {
          text: 'Si',
          handler: () => {
            this.stopTimer();
            this.pararTiempo();
            this.obtenerResultado();            
          }
        }
      ]
    });
    await confirm.present();
  }

  async cancelar(){
    const confirm = await this.alertCtrl.create({
      header: 'Cancelar Test',
      message: 'Se perderán todos los datos ¿Seguro que deseas cancelar el test?',
      buttons: [
        {
          text: 'No',
          handler: () => {

          }
        },
        {
          text: 'Si',
          handler: () => {

            // Se elimina el estado de la revisión del test
            this.proveedor.eliminarRevisionTest(this.usuario.Mensaje.AuthorizationToken, this.test['IdTest'])
            .subscribe(
              //(data)=>{console.log(data);},
              (data)=>{},
              (error)=>{console.log(error);}
            ) 
            
            // Se para el tiempo
            this.stopTimer();
            this.pararTiempo();

            // Se vuelve a mostrar el menú
            //this.mostrarMenu();

            // Se redirecciona a la página de origen
            if (this.origen != null) {
              //this.navCtrl.push(ModuleDetailPage, {modulo: this.origen});
              this.navParamService.setNavData(this.origen);
              this.router.navigate(['/module-detail']);
            }
            else if (this.etiqueta != null)
            {
              this.navParamService.setNavData(this.etiqueta);

              if (this.etiqueta === 'Simulacros')
                this.router.navigate(['/test']);
              else
                this.router.navigate(['/specific-content']);
            }
            else {
              //this.navCtrl.push(TestPage);   
              this.router.navigate(['/tabs/test']);
            }

              // no sirve porque recarga la página y perdemos el menú
              // this.router.navigate(['/tabs/test'])
              // .then(() => {
              //   window.location.reload();
              // });
          }
        }
      ]
    });
    await confirm.present();
  }

  async obtenerResultado()
  {
    const loading = await this.loadingCtrl.create({
      message: "Calculando..."
    });
    loading.present();

    var multirespuesta = this.test['Multirespuesta'];
    
    // Si es un test SIN multirespuesta
    if (multirespuesta == 0){
      this.blancos = this.numeroPreguntas - this.aciertos - this.fallos;
    }
    // Si es un test CON multirespuesta
    else{

      // Se recorren todas las preguntas y respuestas del test
      for(let i=0; i < this.listaPreguntas.length; i++){

        // Se inicializan la variables temporales
        this.aciertosTemp = 0;
        this.fallosTemp = 0;
        this.blancosTemp = 0;
        this.numeroRespuestasCorrectas = 0;

        for(let j=0; j < this.listaPreguntas[i].Respuestas.length; j++){

          if (this.listaPreguntas[i].Respuestas[j].RespuestaCorrecta == 1)
            this.numeroRespuestasCorrectas++;

          // Si la respuesta había sido seleccionada
          if (this.listaPreguntas[i].Respuestas[j].Seleccionada == 1){

            // Si la respuesta es correcta
            if (this.listaPreguntas[i].Respuestas[j].RespuestaCorrecta == 1){              
              this.aciertosTemp++;
            }
            // si la respuesta es incorrecta
            else{              
              this.fallosTemp++;
            }
          }
          // Si la respuesta no ha sido seleccionada
          else {            
            this.blancosTemp++;
          }          
        }

        // Se contabilizan los aciertos, fallos y dudosas
        if (this.aciertosTemp == this.numeroRespuestasCorrectas){
          if (this.listaPreguntas[i].Dudosa == 1)
          {
            this.dudosasAcierto++;
            this.blancos++;
          }
          else
            this.aciertos++;
        
        }else if (this.blancosTemp == this.listaPreguntas[i].Respuestas.length){
          this.blancos++;
        }else {
          if (this.listaPreguntas[i].Dudosa == 1)
          {
            this.dudosasFallo++;
            this.blancos++;
          }
          else
            this.fallos++;
          
        }

        // Se contabiliza el número total de dudosas
        if (this.listaPreguntas[i].Dudosa == 1)
          this.dudosas++;
      }

    }

    // Si es un test de PERSONALIDAD
    if (this.test['Tipo'] == 4)
      multirespuesta = 1; // CASO PARTICULAR: El test no es multirespuesta pero las preguntas sí

    // Se actualiza la revisión de preguntas del test      
    this.proveedor.actualizarRevisionPreguntasTest(this.usuario.Mensaje.AuthorizationToken, this.listaPreguntas, this.test['IdTest'], multirespuesta)
    .subscribe(
      // (data)=>{console.log(data);},
      (data)=>{},
      (error)=>{console.log(error);}
    ) 

    // Se obtiene el resultado y se guarda en base de datos

    // this.proveedor.nuevoResultadoOposicion(this.usuario.Mensaje.AuthorizationToken, this.idOposicion, this.test.IdTest, this.test.IdTema, this.test.IdTemario, this.aciertos, this.fallos, this.blancos, this.tiempo)
    // .subscribe(
    //   //(data)=>{console.log(data);},
    //   (data)=>{this.mostrarResultado(data);},
    //   (error)=>{console.log(error);},
    //   () =>{loader.dismiss()}
    // )     
    
    this.proveedor.nuevoResultadoOposicionTipoTest(this.usuario.Mensaje.AuthorizationToken, this.idOposicion, this.test['IdTest'], this.test['Tipo'], this.test['IdTema'], this.test['IdTemario'], this.aciertos, this.fallos, this.blancos, this.dudosas, this.dudosasAcierto, this.dudosasFallo, this.tiempo)
    .subscribe(
      //(data)=>{console.log(data);},
      (data)=>{this.irAResultado(data);},
      (error)=>{console.log(error);},
      () =>{loading.dismiss()}
    ) 
  }

  // mostrarResultado(resultado: any){
  //   const confirm = this.alertCtrl.create({
  //     title: 'Resultado: ' + this.decimalPipe.transform(resultado.Mensaje.Resultado/10, '1.2-2'),
  //     message: "Detalles del resultado: <br><br>Aciertos: " + this.aciertos + "<br><br>Fallos: " + this.fallos + "<br><br>Sin contestar: " + this.blancos + "</b><br><br> Mi media: " + this.decimalPipe.transform(resultado.Mensaje.MediaUsuario/10, '1.2-2') + "<br><br> Media alumnos: " + this.decimalPipe.transform(resultado.Mensaje.MediaOpositores/10, '1.2-2'),
  //     buttons: [
  //       {
  //         text: 'Revisar',
  //         handler: () => {
  //           this.navCtrl.push(TestReviewPage, {test: this.test, preguntas: this.listaPreguntas, respuestas: this.listaRespuestas, aciertos: this.aciertos, fallos: this.fallos, blancos: this.blancos, resultado: resultado});          
  //         }
  //       },
  //       {
  //         text: 'Salir',
  //         handler: () => {
  //           this.mostrarMenu();
  //           this.navCtrl.push(TestPage);
  //         }
  //       }
  //     ]
  //   });
  //   confirm.present();
  // }

  irAResultado(resultado: any){
    //console.log(resultado);
    //console.log(resultado);
    //this.navCtrl.push(TestScorePage, {test: this.test, listaPreguntas: this.listaPreguntas, listaRespuestas: this.listaRespuestas, aciertos: this.aciertos, fallos: this.fallos, blancos: this.blancos, nota: this.decimalPipe.transform(resultado.Mensaje.Resultado/10, '1.2-2'), mediaAlumnos: this.decimalPipe.transform(resultado.Mensaje.MediaOpositores/10, '1.2-2'), origen: this.origen});
    this.navParamService.setNavData(JSON.stringify({idOposicion: this.idOposicion, test: this.test, tipoTest: this.test['Tipo'], valorFallo: resultado.Mensaje.ValorFallo, listaPreguntas: this.listaPreguntas, listaRespuestas: this.listaRespuestas, aciertos: this.aciertos, fallos: this.fallos, blancos: this.blancos, dudosas: this.dudosas, dudosasAcierto: this.dudosasAcierto, dudosasFallo: this.dudosasFallo, nota: this.decimalPipe.transform(resultado.Mensaje.Resultado/10, '1.2-2'), notaRiesgo: this.decimalPipe.transform(resultado.Mensaje.ResultadoRiesgo/10, '1.2-2'), mediaAlumnos: this.decimalPipe.transform(resultado.Mensaje.MediaOpositores/10, '1.2-2'), origen: this.origen, etiqueta: this.etiqueta, revisar: false}));
    this.router.navigate(['/test-review']);
  }

  iniciarTiempo(){
    clearInterval(this.intervalo);
    this.intervalo = setInterval(function(){
      this.tiempo++;
    }.bind(this), 1000)
  }

  pararTiempo(){
    clearInterval(this.intervalo);
  }

  startTimer(duration: number)
  {
    clearInterval(this.interval);
    this.timer = duration * 60;
    this.interval = setInterval( () => {
      this.updateTimeValue()
    }, 1000);
  }

  stopTimer(){
    clearInterval(this.interval);
    this.time.next('00:00');
  }

  updateTimeValue() {
    let minutes: any = this.timer / 60;
    let seconds: any = this.timer % 60;

    if (Math.floor(minutes) < 100)
      minutes = String('0' + Math.floor(minutes)).slice(-2);    
    else
      minutes = String(Math.floor(minutes));

    seconds = String('0' + Math.floor(seconds)).slice(-2);

    const text = minutes + ':' + seconds;
    this.time.next(text);

    --this.timer;

    if (this.timer < 0){
      this.stopTimer();
      this.pararTiempo();
      this.obtenerResultado();
    }
  }

  async verIndice(ev: any) {

    const popover = await this.popoverCtrl.create({
      component: (TestIndexPage),
      componentProps: {preguntas: this.listaPreguntas, swiper: this.swiper},
      event: ev,
      translucent: true
    });
    await popover.present();
        
  }

  openMenu() {
    this.menu.enable(true, 'indicePreguntas');
    this.menu.open('indicePreguntas');
  }

  closeMenu() {
    this.menu.close('indicePreguntas');
  }

}
