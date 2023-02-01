"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_home_home_module_ts"],{

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
class HomePageRoutingModule {
}
HomePageRoutingModule.ɵfac = function HomePageRoutingModule_Factory(t) { return new (t || HomePageRoutingModule)(); };
HomePageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomePageRoutingModule });
HomePageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 6610);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 678);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class HomePageModule {
}
HomePageModule.ɵfac = function HomePageModule_Factory(t) { return new (t || HomePageModule)(); };
HomePageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomePageModule });
HomePageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomePageModule, { declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule] }); })();


/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app/app.config */ 9670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_navparam_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navparam.service */ 7495);
/* harmony import */ var _providers_aulavirtualrest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/aulavirtualrest */ 4313);
/* harmony import */ var _providers_logout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/logout */ 8599);
/* harmony import */ var src_app_services_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/events */ 579);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/device/ngx */ 4701);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _awesome_cordova_plugins_google_analytics_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/google-analytics/ngx */ 5892);
/* harmony import */ var _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/call-number/ngx */ 3622);
/* harmony import */ var src_app_services_theme_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/theme.service */ 8140);

















function HomePage_ion_img_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-img", 17);
  }
}

function HomePage_ion_img_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-img", 18);
  }
}

function HomePage_ion_icon_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomePage_ion_icon_12_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r9.ayudaCursos());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function HomePage_img_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 20);
  }
}

function HomePage_img_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 21);
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate1"]("src", "https://aulavirtualctp.com/Academias/Cursos/imgCurso.ashx?ID=", ctx_r4.idCurso, "", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
  }
}

function HomePage_h5_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Selecciona un curso...");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function HomePage_h5_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, ctx_r6.nombreCurso));
  }
}

function HomePage_ion_list_23_ion_item_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 20);
  }
}

function HomePage_ion_list_23_ion_item_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 21);
  }

  if (rf & 2) {
    const curso_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate1"]("src", "https://aulavirtualctp.com/Academias/Cursos/imgCurso.ashx?ID=", curso_r12.IdCurso, "", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
  }
}

function HomePage_ion_list_23_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomePage_ion_list_23_ion_item_1_Template_ion_item_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r19);
      const curso_r12 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r18.cargarCurso(curso_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-avatar", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, HomePage_ion_list_23_ion_item_1_img_2_Template, 1, 0, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, HomePage_ion_list_23_ion_item_1_img_3_Template, 1, 1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "ion-label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const curso_r12 = ctx.$implicit;
    const isOdd_r13 = ctx.odd;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("odd", isOdd_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", curso_r12.IdCurso == ctx_r11.idCurso ? "curso-activo" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", curso_r12.Imagen == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", curso_r12.Imagen == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](curso_r12.Nombre);
  }
}

function HomePage_ion_list_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-list", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HomePage_ion_list_23_ion_item_1_Template, 6, 6, "ion-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r7.cursos);
  }
}

function HomePage_section_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "section", 26)(1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomePage_section_24_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r20.sinCursos());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}

class HomePage {
  constructor(router, navParamService, proveedor, proveedorLogout, events, alertCtrl, loadingCtrl, actionSheetCtrl, storage, device, decimalPipe, ga, callNumber, themeService) {
    this.router = router;
    this.navParamService = navParamService;
    this.proveedor = proveedor;
    this.proveedorLogout = proveedorLogout;
    this.events = events;
    this.alertCtrl = alertCtrl;
    this.loadingCtrl = loadingCtrl;
    this.actionSheetCtrl = actionSheetCtrl;
    this.storage = storage;
    this.device = device;
    this.decimalPipe = decimalPipe;
    this.ga = ga;
    this.callNumber = callNumber;
    this.themeService = themeService;
    this.darkMode = false;
    this.usuario = [];
    this.cursos = [];
    this.searchQuery = '';
    this.refrescar = false;
    this.ga.startTrackerWithId(_app_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.googleAnalytics).then(() => {
      //console.log('Google analytics is ready now');
      this.ga.trackView('test'); // Tracker is ready
      // You can now track pages or set additional information such as AppVersion or UserId
    }).catch(e => console.log('Error starting GoogleAnalytics', e)); // console.log('[i] Constructor: Se obtienen los datos del usuario de la memoria');
    // Se obtienen los datos del usuario de la memoria

    storage.get('usuario').then(val => {
      if (val != null && val != undefined) {
        this.usuario = JSON.parse(val); // console.log('[i] AuthorizationToken: ' + this.usuario.Mensaje.AuthorizationToken);
        // console.log('[i] Nick: ' + this.usuario.Mensaje.Nick);
        // console.log('[i] Oposicion: ' + this.usuario.Mensaje.NombreOposicion);

        this.inicializarPerfil();
      } else {
        // Si no se han recuperado los datos se vuelve a la página de login
        console.log('[!] Constructor: No se ha recuperado el usuario de la memoria'); //this.logout();

        this.proveedorLogout.logout();
      }
    });
  }

  ngOnInit() {} // ionViewWillEnter() {
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
    }); // if (this.curso != null)
    //   this.cargarCurso(this.curso);
    //this.obtenerEstadisticas();
    //this.refrescar = false;
  }

  ionViewDidLoad() {// console.log('ionViewDidLoad');
    // this.obtenerEstadisticas();
  }

  ayudaMenu() {
    var _this = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertCtrl.create({
        header: 'Selecciona un curso',
        subHeader: 'Elige un curso de la lista para poder acceder al menú',
        buttons: ['Entendido']
      });
      yield alert.present();
    })();
  } // obtenerEstadisticasHome(){
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


  inicializarPerfil() {
    // console.log('[i] Inicializando perfil');
    // Se inicializan los datos del perfil del alumno
    this.nick = this.usuario.Mensaje.Nick;
    this.nombre = this.usuario.Mensaje.Nombre;
    this.oposicion = this.usuario.Mensaje.NombreOposicion;
    this.nombreAcademia = this.usuario.Mensaje.NombreAcademia; // this.resultados = this.usuario.Mensaje.Estadisticas.NumResultados;
    // this.aprobados = this.usuario.Mensaje.Estadisticas.Aprobados;
    // this.media = this.decimalPipe.transform(this.usuario.Mensaje.Estadisticas.Media/10, '1.2-2');
    // this.semanal = this.usuario.Mensaje.Estadisticas.Semanales;
    // Se obtienen los cursos del usuario

    this.obtenerCursos();
  } // actualizarPerfil(){
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


  obtenerCursos() {
    //console.log('obteniendo cursos...');
    // console.log('[i] Obteniendo cursos');
    // const loader = this.loadingCtrl.create({
    //   content: "Cargando...",
    //   duration: 500
    // });
    // loader.present();
    // Se obtienen los cursos del usuario
    // console.log('[i] AuthorizationToken: ' + this.usuario.Mensaje.AuthorizationToken);
    this.proveedor.consultarCursos(this.usuario.Mensaje.AuthorizationToken).subscribe(data => {
      this.parseCursoJson(data);
    }, error => {
      console.log(error);
    });
  }

  parseCursoJson(data) {
    if (data.Error == 0) {
      this.cursos = [];
      this.allCursos = [];
      let jsonArray = data.Mensaje;

      for (let i = 0; i < jsonArray.length; i++) {
        let jsonObject = jsonArray[i];
        this.cursos.push(jsonObject);
        this.allCursos.push(jsonObject);
      }

      if (this.cursos.length > 0) {// // Por defecto se inicializa la posicion al primer curso
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
      } else {
        // Si no se han recuperado los datos se vuelve a la página de login
        console.log('[!] No se ha recuperado ningún curso'); //this.logout();

        this.proveedorLogout.logout();
      }
    } // Acceso denegado
    else if (data.Error == -10) {
      console.log('[!] parseCursoJson: Acceso denegado'); //this.logout();

      this.proveedorLogout.logout();
    } else {
      // Si no se han recuperado los datos se vuelve a la página de login
      console.log('[!] No se han recuperado los datos de cursos'); //this.logout();

      this.proveedorLogout.logout();
    }
  }

  getCursos(ev) {
    if (this.allCursos != null && this.allCursos != undefined) {
      // Reset items back to all of the items
      this.cursos = this.allCursos;
      this.searchQuery = ''; // set val to the value of the searchbar

      const val = ev.target.value; // if the value is an empty string don't filter the items

      if (val && val.trim() != '') {
        this.searchQuery = val;
        this.cursos = this.cursos.filter(curso => {
          return curso.Nombre.toLowerCase().indexOf(val.toLowerCase()) > -1;
        });
      }
    }
  }

  obtenerPosicionCurso(idCurso) {
    //console.log('obtenerPosicionCurso - idCurso = ' + idCurso);
    if (this.cursos.length > 1) {
      for (let i = 0; i < this.cursos.length; i++) {
        let curso = this.cursos[i];
        if (curso.IdCurso == idCurso) this.posicion = i;
      }
    } else {
      this.posicion = 0;
    } //console.log('obtenerPosicionCurso - posicion = ' + this.posicion);

  }

  verCursos() {
    var _this2 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.cursos.length > 1) {
        let radio_options = [];

        for (let i = 0; i < _this2.cursos.length; i++) {
          let curso = _this2.cursos[i];
          radio_options.push({
            type: 'radio',
            label: curso.Nombre,
            value: curso.IdCurso,
            checked: curso.IdCurso === _this2.idCurso
          });
        }

        let alert = yield _this2.alertCtrl.create({
          header: 'Mis Cursos:',
          inputs: radio_options,
          buttons: [{
            text: 'Cancelar',
            handler: () => {}
          }, {
            text: 'Seleccionar',
            handler: data => {
              //this.refrescar = true;
              _this2.cargarCurso(data);
            }
          }]
        });
        yield alert.present();
      }
    })();
  }

  seleccionarCurso(curso) {
    var _this3 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this3.loadingCtrl.create({
        message: "Cargando curso...",
        duration: 500
      });
      yield loading.present(); // this.curso = curso;
      // console.log(this.curso);
      // // Se almacena en memoria el curso 
      // await this.storage.set('curso', this.curso);
      //this.refrescar = true;

      _this3.cargarCurso(curso);
    })();
  }

  cargarCurso(curso) {
    var _this4 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this4.loadingCtrl.create({
        message: "Cargando curso...",
        duration: 500
      });
      yield loading.present(); // this.curso = curso;
      // console.log(this.curso);

      console.log(curso.IdCurso); // // Se almacena en memoria el curso 
      // await this.storage.set('curso', this.curso);
      // Se busca el curso
      //let curso = this.cursos.find(c=>c.IdCurso == idCurso)    
      // Se carga la información del curso    

      _this4.idCurso = curso.IdCurso;
      _this4.idOposicion = curso.IdOposicion;
      _this4.nombreCurso = curso.Nombre;
      _this4.tipoCurso = curso.Tipo;
      _this4.imagen = curso.Imagen;
      _this4.mesAcceso = curso.MesAcceso;
      _this4.accesoModulos = curso.Modulos;
      _this4.accesoTest = curso.Test;
      _this4.accesoDocs = curso.Documentos;
      _this4.accesoVideos = curso.Videos;
      _this4.accesoClases = curso.Clases;
      _this4.accesoForo = curso.Foro;
      _this4.accesoEventos = curso.Eventos;
      _this4.accesoNotificaciones = curso.Notificaciones;
      _this4.accesoOrtografia = curso.Ortografia;
      _this4.accesoIngles = curso.Ingles;
      _this4.accesoSimulacros = curso.Simulacros;
      _this4.accesoPersonalidad = curso.Personalidad;
      _this4.accesoPsicotecnicos = curso.Psicotecnicos;
      _this4.accesoCasosPracticos = curso.CasosPracticos;
      _this4.accesoLegislacion = curso.Legislacion;
      _this4.accesoNivelPro = curso.NivelPRO; // Se almacena en memoria el id del curso 

      yield _this4.storage.set('idCurso', _this4.idCurso); // Se almacena en memoria el nombre del curso 

      yield _this4.storage.set('nombreCurso', _this4.nombreCurso); // Se almacena en memoria el id de la oposicion del curso

      yield _this4.storage.set('idOposicion', _this4.idOposicion); // Se almacena en memoria el tipo de curso

      yield _this4.storage.set('tipoCurso', _this4.tipoCurso); // Se almacena en memoria el mes de acceso al curso

      yield _this4.storage.set('mesAcceso', _this4.mesAcceso); // Se almacena en memoria los permisos de acceso a módulos

      yield _this4.storage.set('accesoModulos', _this4.accesoModulos); // Se almacena en memoria los permisos de acceso a test

      yield _this4.storage.set('accesoTest', _this4.accesoTest); // Se almacena en memoria los permisos de acceso a documentos

      yield _this4.storage.set('accesoDocs', _this4.accesoDocs); // Se almacena en memoria los permisos de acceso a videos

      yield _this4.storage.set('accesoVideos', _this4.accesoVideos); // Se almacena en memoria los permisos de acceso a clases

      yield _this4.storage.set('accesoClases', _this4.accesoClases); // Se almacena en memoria los permisos de acceso al foro

      yield _this4.storage.set('accesoForo', _this4.accesoForo); // Se almacena en memoria los permisos de acceso a eventos

      yield _this4.storage.set('accesoEventos', _this4.accesoEventos); // Se almacena en memoria los permisos de acceso a notificaciones

      yield _this4.storage.set('accesoNotificaciones', _this4.accesoNotificaciones); // Se almacena en memoria los permisos de acceso a test de ortografía

      yield _this4.storage.set('accesoOrtografia', _this4.accesoOrtografia); // Se almacena en memoria los permisos de acceso a test de inglés

      yield _this4.storage.set('accesoIngles', _this4.accesoIngles); // Se almacena en memoria los permisos de acceso a test de personalidad

      yield _this4.storage.set('accesoPersonalidad', _this4.accesoPersonalidad); // Se almacena en memoria los permisos de acceso a test de simulacros

      yield _this4.storage.set('accesoSimulacros', _this4.accesoSimulacros); // Se obtienen las estadísticas del alumno en ese curso
      //this.obtenerEstadisticas();
      // Se refresca el menú para mostrar/ocultar opciones según permisos

      _this4.events.publish('tabs:reload'); // if (this.refrescar)
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

    })();
  }

  configuracion() {
    this.router.navigate(['/account-settings']);
  }

  salir() {
    var _this5 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const confirm = yield _this5.alertCtrl.create({
        header: '¿Deseas salir?',
        message: 'Se cerrará tu sesión en la app',
        buttons: [{
          text: 'Cancelar',
          handler: () => {}
        }, {
          text: 'Aceptar',
          handler: () => {
            //this.logout();
            _this5.proveedorLogout.logout();
          }
        }]
      });
      yield confirm.present();
    })();
  } // logout()
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


  ayudaCursos() {
    var _this6 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this6.alertCtrl.create({
        header: 'Selecciona un curso',
        subHeader: 'Elige un curso de la lista para acceder a sus contenidos',
        buttons: ['Entendido']
      });
      yield alert.present();
    })();
  }

  sinCursos() {
    var _this7 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this7.alertCtrl.create({
        header: 'Sin Cursos',
        subHeader: 'Actualmente no estás matriculado en ningún curso. Contacta con tu centro para más información',
        buttons: ['Entendido']
      });
      yield alert.present();
    })();
  }

  miCuenta() {
    var _this8 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this8.actionSheetCtrl.create({
        header: 'MI CUENTA',
        cssClass: 'my-custom-class',
        buttons: [{
          text: 'Configurar',
          icon: 'settings-outline',
          handler: () => {
            _this8.configuracion();
          }
        }, {
          text: 'Cerrar sesión',
          icon: 'power-outline',
          handler: () => {
            _this8.salir();
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
      yield actionSheet.present();
    })();
  }

}

HomePage.ɵfac = function HomePage_Factory(t) {
  return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_navparam_service__WEBPACK_IMPORTED_MODULE_2__.NavparamService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_providers_aulavirtualrest__WEBPACK_IMPORTED_MODULE_3__.AulavirtualrestProvider), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_providers_logout__WEBPACK_IMPORTED_MODULE_4__.LogoutProvider), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_events__WEBPACK_IMPORTED_MODULE_5__.Events), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_13__.Storage), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_6__.Device), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.DecimalPipe), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_awesome_cordova_plugins_google_analytics_ngx__WEBPACK_IMPORTED_MODULE_7__.GoogleAnalytics), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__.CallNumber), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_theme_service__WEBPACK_IMPORTED_MODULE_9__.ThemeService));
};

HomePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: HomePage,
  selectors: [["app-home"]],
  decls: 25,
  vars: 13,
  consts: [["color", "primary", 1, "ion-text-center"], ["slot", "start"], ["slot", "primary"], [1, "ion-text-center", 3, "scrollY"], [1, "ion-padding"], ["class", "logo image-center", "src", "../assets/imgs/logo.png", 4, "ngIf"], ["class", "logo image-center", "src", "../assets/imgs/logo-dark.png", 4, "ngIf"], [1, "image-center"], ["name", "alert-circle-outline", "class", "icon-avatar", "button", "true", 3, "click", 4, "ngIf"], ["src", "../assets/imgs/icon.png", 4, "ngIf"], [3, "src", 4, "ngIf"], [4, "ngIf"], ["expand", "full", 1, "ion-text-wrap", 3, "click"], ["slot", "icon-only", "name", "person-circle-outline"], ["placeholder", "Buscar curso", 3, "ionInput"], ["class", "ion-list-cursos", 4, "ngIf"], ["class", "ion-padding ion-text-center", 4, "ngIf"], ["src", "../assets/imgs/logo.png", 1, "logo", "image-center"], ["src", "../assets/imgs/logo-dark.png", 1, "logo", "image-center"], ["name", "alert-circle-outline", "button", "true", 1, "icon-avatar", 3, "click"], ["src", "../assets/imgs/icon.png"], [3, "src"], [1, "ion-list-cursos"], ["button", "true", 3, "odd", "ngClass", "click", 4, "ngFor", "ngForOf"], ["button", "true", 3, "ngClass", "click"], [1, "ion-text-wrap"], [1, "ion-padding", "ion-text-center"], ["width", "200", "src", "../assets/imgs/empty.png", 3, "click"]],
  template: function HomePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "ion-buttons", 1)(3, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Inicio");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ion-content", 3)(7, "header", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, HomePage_ion_img_8_Template, 1, 0, "ion-img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, HomePage_ion_img_9_Template, 1, 0, "ion-img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "ion-avatar", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, HomePage_ion_icon_12_Template, 1, 0, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, HomePage_img_13_Template, 1, 0, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, HomePage_img_14_Template, 1, 1, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, HomePage_h5_15_Template, 2, 0, "h5", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, HomePage_h5_16_Template, 3, 3, "h5", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "section")(18, "ion-button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_18_listener() {
        return ctx.miCuenta();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "ion-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](21, "uppercase");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "ion-searchbar", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionInput", function HomePage_Template_ion_searchbar_ionInput_22_listener($event) {
        return ctx.getCursos($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, HomePage_ion_list_23_Template, 2, 1, "ion-list", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, HomePage_section_24_Template, 2, 0, "section", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("scrollY", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.darkMode == null || ctx.darkMode == false);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.darkMode == true);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.idCurso == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.idCurso != null && ctx.imagen == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.idCurso != null && ctx.imagen == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.idCurso == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.idCurso != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](21, 11, ctx.nick), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.cursos != null && ctx.cursos.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.cursos != null && ctx.cursos.length < 1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.TextValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_14__.UpperCasePipe],
  styles: ["header[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  margin-bottom: 1em;\n}\n\n.logo[_ngcontent-%COMP%] {\n  max-width: 300px;\n  max-height: 100px;\n  background-color: transparent;\n}\n\n.image-center[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.icon-avatar[_ngcontent-%COMP%] {\n  font-size: 4em;\n  color: var(--ion-color-secondary);\n}\n\n.ion-list-cursos[_ngcontent-%COMP%] {\n  max-height: 55%;\n  overflow-y: auto;\n}\n\n.my-custom-menu[_ngcontent-%COMP%] {\n  --width: 500px;\n}\n\n.curso-activo[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\n.odd[_ngcontent-%COMP%] {\n  --ion-item-background: var(--ion-color-light) ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxpQ0FBQTtBQURGOztBQUtBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBU0E7RUFDRSxjQUFBO0FBTkY7O0FBU0E7RUFDRSwrQkFBQTtFQUNBLGlCQUFBO0FBTkY7O0FBU0E7RUFDRSw4Q0FBQTtBQU5GIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIC8vIGJhY2tncm91bmQ6ICM3MDE0ZTg7XG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2RvdG5ldC5taWNyb3NvZnQuY29tL3N0YXRpYy9pbWFnZXMvcmVkZXNpZ24vaG9tZS1oZXJvLWJnLnBuZyksbGluZWFyLWdyYWRpZW50KDE4MGRlZywjNzAxNGU4IDMwLjEyJSwjMGU1ZWNmIDE5Mi40NyUpO1xufVxuXG4ubG9nb3tcbiAgbWF4LXdpZHRoOiAzMDBweDsgXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmltYWdlLWNlbnRlcntcbiAgbWFyZ2luOjAgYXV0bztcbn1cblxuLmljb24tYXZhdGFyIHsgXG4gIGZvbnQtc2l6ZTogNGVtOyBcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAvL21hcmdpbi1ib3R0b206IC0xMHB4OyAgICBcbn1cblxuLmlvbi1saXN0LWN1cnNvcyB7XG4gIG1heC1oZWlnaHQ6IDU1JTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLy8gICBpb24tY29udGVudCB7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWdzL3BhdHRlcm4tZ3JleS5wbmcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbi8vIH1cblxuLm15LWN1c3RvbS1tZW51IHtcbiAgLS13aWR0aDogNTAwcHg7XG59XG5cbi5jdXJzby1hY3Rpdm97XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ub2Rke1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodClcbn0iXX0= */"]
});

/***/ }),

/***/ 8140:
/*!*******************************************!*\
  !*** ./src/app/services/theme.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage-angular */ 190);



const THEME_KEY = "selected-app-theme";
class ThemeService {
    constructor(plt, storage) {
        this.plt = plt;
        this.storage = storage;
        this.darkMode = false;
        this.plt.ready().then(() => {
            this.storage.get(THEME_KEY).then(theme => {
                this.setAppTheme(theme);
            });
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
            // deprecated
            // prefersDark.addListener(e => {
            //   this.setAppTheme(e.matches);
            // });
            prefersDark.addEventListener('change', e => {
                this.setAppTheme(e.matches);
            });
        });
    }
    toggleAppTheme() {
        this.darkMode = !this.darkMode;
        this.setAppTheme(this.darkMode);
    }
    setAppTheme(dark) {
        this.darkMode = dark;
        if (this.darkMode) {
            document.body.classList.add('dark');
        }
        else {
            document.body.classList.remove('dark');
        }
        this.storage.set(THEME_KEY, this.darkMode);
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__.Storage)); };
ThemeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_home_home_module_ts.js.map