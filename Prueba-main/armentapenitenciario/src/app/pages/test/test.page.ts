import { Component, OnInit} from '@angular/core';
import { AlertController, LoadingController, ActionSheetController } from '@ionic/angular';
import { Router, NavigationStart } from '@angular/router';
import { NavparamService } from 'src/app/services/navparam.service';
import { AulavirtualrestProvider } from '../../providers/aulavirtualrest';
import { LogoutProvider } from '../../providers/logout';
import { Storage } from '@ionic/storage-angular';
import { DecimalPipe, DatePipe } from '@angular/common';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  idCurso: number;
  idOposicion: number;
  tipoCurso: number;
  mesAcceso: number;
  accesoTest: number;
  usuario: any = [];  
  listaTest: any[];
  listaTestTemp: any[];
  listaResultados: any[];
  searchQuery: string = '';
  searchQuerySimulacros: string = '';
  all: string = "all";
  done: string = "done";
  undone: string = "undone";
  paused: string = "paused";
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

  reload: boolean = true;
  simulacros: boolean = false;

  isAscendic: boolean = true;
  isRecent: boolean = true;
  currentDate = new Date();
  lastMonthDate = new Date(new Date().setMonth(new Date().getMonth() - 1));


  constructor(private router: Router, private navParamService: NavparamService, public proveedor: AulavirtualrestProvider, public proveedorLogout: LogoutProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public actionSheetCtrl: ActionSheetController, private storage: Storage, private decimalPipe: DecimalPipe,  private datePipe: DatePipe) { 

    this.simulacros = this.navParamService.getNavData() == 'Simulacros';

    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((route: NavigationStart) => {
        //console.log('Route: '+route.url)
        if (route.url == '/tabs/test') {
          this.simulacros = false;
          this.initialize();
          this.reload = false;
        }
    })

  }

  ngOnInit() {
    //console.log('ngOnInit');
    // this.initialize();
    // this.mostrarMenu();    
  }

  ionViewWillEnter() {    
    if (this.reload) {
      this.initialize();
    }
    //this.mostrarMenu();
  }

  // mostrarMenu(){
  //   let tabs = document.querySelectorAll('.tabbar');
  //   if ( tabs !== null ) {
  //     Object.keys(tabs).map((key) => {
  //       tabs[ key ].style.transform = 'translateY(0)';
  //     });
  //   } // end if
  // }

  // ocultarMenu(){
  //   let tabs = document.querySelectorAll('.tabbar');
  //   if ( tabs !== null ) {
  //     Object.keys(tabs).map((key) => {
  //       tabs[ key ].style.transform = 'translateY(56px)';
  //     });
  //   } // end if
  // }

  initialize() {

    // Se cargan los test
    this.initializeTest();

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

  async initializeTest() {

    const loading = await this.loadingCtrl.create({
      message: "Cargando..."
    });
    await loading.present();

    // Se obtiene el id del curso de la memoria
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

        // Se consultan todos los test del curso
        //this.proveedor.consultarTestCurso(this.usuario.Mensaje.AuthorizationToken, this.idCurso)
        //console.log('curso: ' + this.idCurso);
        //console.log('mes: ' + this.mesAcceso);

        if (this.simulacros) {
          this.proveedor.consultarSimulacrosCursoMes(this.usuario.Mensaje.AuthorizationToken, this.idCurso, this.mesAcceso)
          .subscribe(
            (data)=>{this.parseListaTestJson(data);},
            (error)=>{console.log(error);},
            () =>{loading.dismiss()}
          )
        }
        else {
          this.proveedor.consultarTestCursoMes(this.usuario.Mensaje.AuthorizationToken, this.idCurso, this.mesAcceso)
          .subscribe(
            (data)=>{this.parseListaTestJson(data);},
            (error)=>{console.log(error);},
            () =>{loading.dismiss()}
          )
        }
      }
      else{
        // Si no se han recuperado los datos se vuelve a la página de login
        loading.dismiss();
        this.proveedorLogout.logout()
      }
    });
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

      // // Se filtra por los no realizados
      // this.listaTest = this.listaTestTemp;
      //       this.listaTest = this.listaTest.filter((test) => {
      //         return ((test.Pendiente == 0 && test.Realizado == 0));
      //       })
    }
    // Acceso denegado
    else if (data.Error == -10){
      this.proveedorLogout.logout()
    }
    else{
      this.listaTest = [];
      //this.alert('Sin Test', 'Este curso no contiene test de teoría');
    }
  }

  getTest(ev: any) {

    if (this.listaTestTemp != null && this.listaTestTemp != undefined){
      // Reset items back to all of the items
      this.listaTest = this.listaTestTemp;

      this.searchQuery = '';

      // set val to the value of the searchbar
      const val = ev.target.value;

      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.searchQuery = val;
        this.listaTest = this.listaTest.filter((item) => {
          return ((item.Nombre.toLowerCase().indexOf(val.toLowerCase()) > -1) || (item.IdTema == val));
        })
      }
    }
  }

  initializeResultados() {

  // const loader = this.loadingCtrl.create({
  //   content: "Cargando...",
  //   duration: 500
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

  // Se obtienen los datos del usuario de la memoria
  this.storage.get('usuario').then((val) => {
      if (val != null && val != undefined){
        this.usuario = JSON.parse(val);
        // Se consultan los resultados del alumno
        this.proveedor.consultarResultadosCurso(this.usuario.Mensaje.AuthorizationToken, this.idCurso)
        .subscribe(
          (data)=>{this.parseResultadosJson(data);},
          (error)=>{console.log(error);}
        )
      }
      // else{
      //   // Si no se han recuperado los datos se vuelve a la página de login
      //   this.logout();
      // }
    });
  }

  parseResultadosJson(data)
    {
    let jsonArray = data.Mensaje;

    this.listaResultados = [];

    for(let i=0; i < jsonArray.length; i++)
    {
      let jsonObject = jsonArray[i];
      this.listaResultados.push(jsonObject);
    }
  }

  hacerTest(item) {

    // console.log(item);
    // console.log(this.idOposicion);
    // console.log('idTest: ' + item.IdTest);
    // console.log('idOposicion: ' + this.idOposicion);

    // Si el test estaba en PAUSA
    if (item.Pendiente > 0)
    {
        // Se continúa
        this.continuar = 1;
        //this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas, continuar: this.continuar, origen: null});
        if (this.simulacros)
          this.navParamService.setNavData(JSON.stringify({idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas, continuar: this.continuar, origen: null, etiqueta: 'Simulacros', revisar: false}));
        else
          this.navParamService.setNavData(JSON.stringify({idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas, continuar: this.continuar, origen: null, etiqueta: null, revisar: false}));
        
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
        //this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas, continuar: this.continuar, origen: null});
        if (this.simulacros)
          this.navParamService.setNavData(JSON.stringify({idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas, continuar: this.continuar, origen: null, etiqueta: 'Simulacros', revisar: false}));
        else
          this.navParamService.setNavData(JSON.stringify({idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas, continuar: this.continuar, origen: null, etiqueta: null, revisar: false}));
        
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

            //console.log(item.IdTest, this.idOposicion);

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
              // Se inicializa el tiempo
              this.continuar = 0;
              this.numMinutos = 0;
              this.numPreguntas = 0;
              //this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas, continuar: this.continuar, origen: null});
              this.navParamService.setNavData(JSON.stringify({idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas, continuar: this.continuar, origen: null, etiqueta: null, revisar: false}));
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
    actionSheet.present();
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
        var res_fallos = (this.fallos + this.dudosasFallo) * data.Mensaje.ValorFallo;
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
      
      // Se envía al usuario a la página de revisión
      //this.navCtrl.push(TestReviewPage, {test: this.test, preguntas: this.listaPreguntas, respuestas: this.listaRespuestas, aciertos: this.aciertos, fallos: this.fallos, blancos: this.blancos, nota: nota, mediaAlumnos: mediaAlumnos, origen: null });
      //this.navParamService.setNavData(item);
      //this.router.navigate(['/test-review'], {test: this.test, preguntas: this.listaPreguntas, respuestas: this.listaRespuestas, aciertos: this.aciertos, fallos: this.fallos, blancos: this.blancos, nota: nota, mediaAlumnos: mediaAlumnos, origen: null });

      //this.navParamService.setNavData(JSON.stringify({test: this.test, listaPreguntas: this.listaPreguntas, listaRespuestas: this.listaRespuestas, aciertos: this.aciertos, fallos: this.fallos, blancos: this.blancos, nota: this.decimalPipe.transform(nota/10, '1.2-2'), mediaAlumnos: this.decimalPipe.transform(mediaAlumnos/10, '1.2-2'), origen: this.test}));
      this.navParamService.setNavData(JSON.stringify({idOposicion: this.idOposicion, test: this.test, tipoTest: this.tipoTest, valorFallo: data.Mensaje.ValorFallo, listaPreguntas: this.listaPreguntas, listaRespuestas: this.listaRespuestas, aciertos: this.aciertos, fallos: this.fallos, blancos: this.blancos, dudosas: this.dudosas, dudosasAcierto: this.dudosasAcierto, dudosasFallo: this.dudosasFallo, nota: this.decimalPipe.transform(this.nota/10, '1.2-2'), notaRiesgo: this.decimalPipe.transform(this.notaRiesgo/10, '1.2-2'), mediaAlumnos: mediaAlumnos, origen: null, etiqueta: null, revisar: true}));      
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

  async configurarTest(item) {

    // Se obtiene el id del curso de la memoria
    this.storage.get('idOposicion').then((val) => {
      if (val != null && val != undefined){
        this.idOposicion = val;              
      }
      else{
        // Si no se han recuperado los datos se vuelve a la página de login
        this.proveedorLogout.logout()
      }
    });

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Selecciona la configuración del test:',
      buttons: [
        {
          text: 'Original',
          icon: 'checkbox-outline',
          handler: () => {
            this.numMinutos = 0;
            this.numPreguntas = 0;
            //this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas, origen: null});
            this.navParamService.setNavData(JSON.stringify({idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas, origen: null, etiqueta: null, revisar: false}));
            this.router.navigate(['/test-do']);
          }
        },
        // {
        //   text: 'Aleatorio',
        //   icon: !this.platform.is('ios') ? 'shuffle' : null,
        //   handler: () => {
        //     this.navCtrl.push(DoTestPage, {item: item});
        //   }
        // },
        {
          text: 'Configurar tiempo',
          icon: 'time-outline',
          handler: () => {
            this.configurarTiempo(item);
          }
        },{
          text: 'Configurar nº de preguntas',
          icon: 'list-outline',
          handler: () => {
            this.configurarNumeroPreguntas(item);
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            this.numMinutos = 0;
            this.numPreguntas = 0;
          }
        }
      ]
    });
    await actionSheet.present();
  }

  async configurarTiempo(item) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Seleccionar la duración del test:',
      buttons: [
        {
          text: '20 minutos',
          icon: 'time-outline',
          handler: () => {
            this.numMinutos = 20;
            //this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas});
            this.navParamService.setNavData(item);
            this.router.navigate(['/test-do']);
          }
        },{
          text: '30 minutos',
          icon: 'time-outline',
          handler: () => {
            this.numMinutos = 30;
            //this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas});
            this.navParamService.setNavData(item);
            this.router.navigate(['/test-do']);
          }
        },{
          text: '45 minutos',
          icon: 'time-outline',
          handler: () => {
            this.numMinutos = 45;
            //this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas});
            this.navParamService.setNavData(item);
            this.router.navigate(['/test-do']);
          }
        },{
          text: '60 minutos',
          icon: 'time-outline',
          handler: () => {
            this.numMinutos = 60;
            //this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas});
            this.navParamService.setNavData(item);
            this.router.navigate(['/test-do']);
          }
        },{
          text: '90 minutos',
          icon: 'time-outline',
          handler: () => {
            this.numMinutos = 90;
            //this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas});
            this.navParamService.setNavData(item);
            this.router.navigate(['/test-do']);
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            this.configurarTest(item);
          }
        }
      ]
    });
    await actionSheet.present();
  }

  async configurarNumeroPreguntas(item) {

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Selecciona el nº de preguntas del test:',
      buttons: [
        {
          text: '10 preguntas',
          icon: 'list',
          handler: () => {
            this.numPreguntas = 10;
            //this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas});
            this.navParamService.setNavData(item);
            this.router.navigate(['/test-do']);
          }
        },{
          text: '25 preguntas',
          icon: 'list',
          handler: () => {
            this.numPreguntas = 25;
            //this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas});
            this.navParamService.setNavData(item);
            this.router.navigate(['/test-do']);
          }
        },{
          text: '50 preguntas',
          icon: 'list',
          handler: () => {
            this.numPreguntas = 50;
            //this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas});
            this.navParamService.setNavData(item);
            this.router.navigate(['/test-do']);
          }
        },{
          text: '75 preguntas',
          icon: 'list',
          handler: () => {
            this.numPreguntas = 75;
            //this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas});
            this.navParamService.setNavData(item);
            this.router.navigate(['/test-do']);
          }
        },{
          text: '100 preguntas',
          icon: 'list',
          handler: () => {
            this.numPreguntas = 100;
            //this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas});
            this.navParamService.setNavData(item);
            this.router.navigate(['/test-do']);
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            this.configurarTest(item);
          }
        }
      ]
    });
    await actionSheet.present();
  }

  async filtro()
  {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Filtrar por:',
      buttons: [
        {
          text: 'Todos',
          handler: () => {
            this.listaTest = this.listaTestTemp;
          }
        },
        {
          text: 'Realizados',
          icon: 'checkbox-outline',
          handler: () => {
            this.listaTest = this.listaTestTemp;
            this.listaTest = this.listaTest.filter((test) => {
              return ((test.Pendiente == 0 && test.Realizado == 1));
            })
          }
        },{
          text: 'No Realizados',
          icon: 'square-outline',
          handler: () => {
            this.listaTest = this.listaTestTemp;
            this.listaTest = this.listaTest.filter((test) => {
              return ((test.Pendiente == 0 && test.Realizado == 0));
            })
          }
        },{
          text: 'En Pausa',
          icon: 'pause-outline',
          handler: () => {
            this.listaTest = this.listaTestTemp;
            this.listaTest = this.listaTest.filter((test) => {
              return ((test.Pendiente > 0));
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
        // {
        //   text: 'Reciente',
        //   icon: 'time-outline',
        //   handler: () => {
        //     this.isRecent?this.ordenarRecienteON():this.ordenarRecienteOFF();            
        //   }
        // }
        {
          text: 'Fecha',
          icon: 'calendar-outline',
          handler: () => {
            this.isAscendic?this.ordenarFechaASC():this.ordenarFechaDESC();
          }
        }
        ,{
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
    this.listaTest = this.listaTest.sort((a,b) => {
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
    this.listaTest = this.listaTest.sort((a,b) => {
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
    this.listaTest = this.listaTest.sort((a,b) => {
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
    this.listaTest = this.listaTest.sort((a,b) => {
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
    this.listaTest = this.listaTest.sort((a,b) => {
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
    this.listaTest = this.listaTest.sort((a,b) => {
        if (this.esMayor(a.FechaPublicacion, b.FechaPublicacion) === true) {
            return 1;
        }
        if (this.esMayor(a.FechaPublicacion, b.FechaPublicacion) === false) {
            return -1;
        }
        return 0;
    });
  }

  ordenarRecienteON(){
    this.isRecent = false;
    this.listaTest = this.listaTestTemp;
    this.listaTest = this.listaTest.filter((test) => {
      return ((this.esReciente(test.FechaPublicacion) === true));
    })
  }

  ordenarRecienteOFF(){
    this.isRecent = true;
    this.listaTest = this.listaTestTemp;
    this.listaTest = this.listaTest.filter((test) => {
      return ((this.esReciente(test.FechaPublicacion) === false));
    })
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

  do(item){
    //this.navCtrl.push(DoTestPage, {item: item});
    this.navParamService.setNavData(item);
    this.router.navigate(['/test-do']);
  }

  async repeat(item){
    const confirm = await this.alertCtrl.create({
      header: 'Repetir Test',
      message: '¿Deseas volver a hacer este test?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            //console.log('Agree clicked');
            //this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, item: item});
            this.navParamService.setNavData(JSON.stringify({idOposicion: this.idOposicion, item: item}));
            this.router.navigate(['/doc-viewer']);
          }
        }
      ]
    });
    await confirm.present();    
  }

  ayuda(){
    //this.navCtrl.push(FaqPage);
    this.router.navigate(['/faq']);
  }

  resultados() {
    //this.navCtrl.push(StatsPage);
    this.router.navigate(['/test-score']);
  }

  segmentChanged(ev: any) {
    switch(ev.detail.value)
    {
      case 'all':
        this.listaTest = this.listaTestTemp;
        break;
      case 'undone':
        this.listaTest = this.listaTestTemp;
        this.listaTest = this.listaTest.filter((test) => {
          return ((test.Pendiente == 0 && test.Realizado == 0));
        })
        break;
      case 'done':
        this.listaTest = this.listaTestTemp;
        this.listaTest = this.listaTest.filter((test) => {
          return ((test.Pendiente == 0 && test.Realizado == 1));
        })
        break;
      case 'paused':
        this.listaTest = this.listaTestTemp;
        this.listaTest = this.listaTest.filter((test) => {
          return ((test.Pendiente > 0));
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
