"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_forum_forum_module_ts"],{

/***/ 5129:
/*!*****************************************************!*\
  !*** ./src/app/pages/forum/forum-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForumPageRoutingModule": () => (/* binding */ ForumPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _forum_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forum.page */ 5194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _forum_page__WEBPACK_IMPORTED_MODULE_0__.ForumPage
    }
];
class ForumPageRoutingModule {
}
ForumPageRoutingModule.ɵfac = function ForumPageRoutingModule_Factory(t) { return new (t || ForumPageRoutingModule)(); };
ForumPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ForumPageRoutingModule });
ForumPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ForumPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 9397:
/*!*********************************************!*\
  !*** ./src/app/pages/forum/forum.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForumPageModule": () => (/* binding */ ForumPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ 6328);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 5503);
/* harmony import */ var _forum_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forum-routing.module */ 5129);
/* harmony import */ var _forum_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forum.page */ 5194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);








class ForumPageModule {
}
ForumPageModule.ɵfac = function ForumPageModule_Factory(t) { return new (t || ForumPageModule)(); };
ForumPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ForumPageModule });
ForumPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__.ScrollingModule,
        src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
        _forum_routing_module__WEBPACK_IMPORTED_MODULE_1__.ForumPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ForumPageModule, { declarations: [_forum_page__WEBPACK_IMPORTED_MODULE_2__.ForumPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__.ScrollingModule,
        src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
        _forum_routing_module__WEBPACK_IMPORTED_MODULE_1__.ForumPageRoutingModule] }); })();


/***/ }),

/***/ 5194:
/*!*******************************************!*\
  !*** ./src/app/pages/forum/forum.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForumPage": () => (/* binding */ ForumPage)
/* harmony export */ });
/* harmony import */ var _Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_navparam_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/navparam.service */ 7495);
/* harmony import */ var _providers_aulavirtualrest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/aulavirtualrest */ 4313);
/* harmony import */ var _providers_logout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/logout */ 8599);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/scrolling */ 6328);
/* harmony import */ var _pipes_safe_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/safe-html */ 6124);












function ForumPage_ion_card_7_ion_icon_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 22);
  }
}

function ForumPage_ion_card_7_ion_icon_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 23);
  }
}

function ForumPage_ion_card_7_ion_icon_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 24);
  }
}

function ForumPage_ion_card_7_ion_icon_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 25);
  }
}

function ForumPage_ion_card_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ForumPage_ion_card_7_Template_ion_card_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const i_r4 = restoredCtx.index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.leerTema(ctx_r9.items[i_r4]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-card-header")(2, "ion-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-card-title")(6, "ion-chip")(7, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-card-content", 12)(13, "h3")(14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "ion-row")(18, "ion-col")(19, "ion-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ForumPage_ion_card_7_Template_ion_button_click_19_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const i_r4 = restoredCtx.index;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.leerTema(ctx_r11.items[i_r4]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, ForumPage_ion_card_7_ion_icon_20_Template, 1, 0, "ion-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, ForumPage_ion_card_7_ion_icon_21_Template, 1, 0, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, ForumPage_ion_card_7_ion_icon_23_Template, 1, 0, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, ForumPage_ion_card_7_ion_icon_24_Template, 1, 0, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "ion-col", 19)(26, "ion-note")(27, "ion-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ForumPage_ion_card_7_Template_ion_button_click_27_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const i_r4 = restoredCtx.index;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.leerTema(ctx_r12.items[i_r4]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, " Leer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const isOdd_r3 = ctx.odd;
    const i_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("odd", isOdd_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.items[i_r4].Fecha, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 10, ctx_r0.items[i_r4].Usuario));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 12, ctx_r0.items[i_r4].Titulo), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.items[i_r4].Respuestas > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.items[i_r4].Respuestas == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.items[i_r4].Respuestas, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.items[i_r4].Anclado == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.items[i_r4].Estado == true);
  }
}

function ForumPage_section_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

class ForumPage {
  constructor(router, navParamService, proveedor, proveedorLogout, alertCtrl, loadingCtrl, actionSheetCtrl, storage) {
    this.router = router;
    this.navParamService = navParamService;
    this.proveedor = proveedor;
    this.proveedorLogout = proveedorLogout;
    this.alertCtrl = alertCtrl;
    this.loadingCtrl = loadingCtrl;
    this.actionSheetCtrl = actionSheetCtrl;
    this.storage = storage;
    this.usuario = [];
    this.searchQuery = '';
    this.foros = "foros";
  }

  ngOnInit() {//this.initializeItems();
  }

  ionViewWillEnter() {
    this.initializeItems();
  }

  initializeItems() {
    var _this = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingCtrl.create({
        message: "Cargando..."
      });
      yield loading.present(); // Se obtienen el id del curso de la memoria

      _this.storage.get('idCurso').then(val => {
        if (val != null && val != undefined) {
          _this.idCurso = val;
        } else {
          // Si no se han recuperado los datos se vuelve a la página de login
          _this.proveedorLogout.logout();
        }
      }); // Se obtienen los datos del usuario de la memoria


      _this.storage.get('usuario').then(val => {
        if (val != null && val != undefined) {
          _this.usuario = JSON.parse(val);

          _this.proveedor.obtenerTemasForo(_this.usuario.Mensaje.AuthorizationToken, _this.idCurso).subscribe( //(data)=>{this.tests = data;},
          data => {
            _this.parseJson(data);
          }, error => {
            console.log(error);
          }, () => {
            loading.dismiss();
          });
        } else {
          // Si no se han recuperado los datos se vuelve a la página de login
          _this.proveedorLogout.logout();
        }
      });
    })();
  }

  parseJson(data) {
    if (data.Error == 0) {
      let jsonArray = data.Mensaje;
      this.items = [];
      this.allitems = [];

      if (jsonArray.length > 0) {
        for (let i = 0; i < jsonArray.length; i++) {
          let jsonObject = jsonArray[i];
          this.items.push(jsonObject);
          this.allitems.push(jsonObject);
        }
      } else {// const alert = this.alertCtrl.create({
        //   title: 'Sin Temas',
        //   subTitle: 'El foro del curso todavía no contiene temas. ¡Se el primero en añadir uno! :)',
        //   buttons: ['OK']
        // });
        // alert.present();
        //this.alert('Sin Temas', 'Este foro todavía no contiene temas. ¡Se el primero en añadir uno! :)');
      }
    } // Acceso denegado
    else if (data.Error == -10) {
      this.proveedorLogout.logout();
    } else {
      this.items = []; //this.alert('Sin Temas', 'Este foro todavía no contiene temas. ¡Se el primero en añadir uno! :)');
      // const alert = this.alertCtrl.create({
      //   title: 'Sin Temas',
      //   subTitle: 'El foro del curso todavía no contiene temas. ¡Se el primero en añadir uno! :)',
      //   buttons: ['OK']
      // });
      // alert.present();
    }
  }

  getItems(ev) {
    if (this.allitems != null && this.allitems != undefined) {
      // Reset items back to all of the items
      this.items = this.allitems;
      this.searchQuery = ''; // set val to the value of the searchbar

      const val = ev.target.value; // if the value is an empty string don't filter the items

      if (val && val.trim() != '') {
        this.searchQuery = val;
        this.items = this.items.filter(item => {
          return item.Titulo.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.Comentario.toLowerCase().indexOf(val.toLowerCase()) > -1;
        });
      }
    }
  }

  leerTema(tema) {
    //this.navCtrl.push(ForoTemaPage, {tema: tema});
    this.navParamService.setNavData(tema);
    this.router.navigate(['/forum-topic']);
  }

  nuevoTema() {
    var _this2 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const prompt = yield _this2.alertCtrl.create({
        header: 'Nuevo Tema',
        //message: "Introduce los datos del nuevo tema:",
        inputs: [{
          name: 'titulo',
          placeholder: 'Título'
        }, {
          name: 'mensaje',
          placeholder: 'Mensaje',
          max: '1000'
        }],
        buttons: [{
          text: 'Cancelar',
          handler: data => {// console.log('Cancel clicked');            
          }
        }, {
          text: 'Enviar',
          handler: data => {
            _this2.titulo = data.titulo;
            _this2.comentario = data.mensaje;

            _this2.insertarTema();
          }
        }]
      });
      yield prompt.present();
    })();
  } // nuevoTemaPaso1() {
  //   const prompt = this.alertCtrl.create({
  //     title: 'Nuevo Tema - Paso 1',
  //     message: "Introduce el título del nuevo tema:",
  //     inputs: [
  //       {
  //         name: 'titulo',
  //         placeholder: 'Título',
  //         max: '300'
  //       },
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancelar',
  //         handler: data => {
  //           // console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Siguiente',
  //         handler: data => {
  //           this.titulo = data.titulo;
  //           this.nuevoTemaPaso2();
  //         }
  //       }
  //     ]
  //   });
  //   prompt.present();
  // } 
  // nuevoTemaPaso2() {
  //   const prompt = this.alertCtrl.create({
  //     title: 'Nuevo Tema - Paso 2',
  //     message: "Introduce el mensaje del nuevo tema:",
  //     inputs: [
  //       {
  //         name: 'mensaje',
  //         placeholder: 'Mensaje',
  //         max: '1000'
  //       },
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancelar',
  //         handler: data => {
  //           // console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Guardar',
  //         handler: data => {
  //           this.comentario = data.mensaje;
  //           this.insertarTema();
  //         }
  //       }
  //     ]
  //   });
  //   prompt.present();
  // } 


  insertarTema() {
    var _this3 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.titulo != "" && _this3.comentario != "") {
        const loading = yield _this3.loadingCtrl.create({
          message: "Creando tema..."
        });
        yield loading.present(); // Se inserta el nuevo tema en base de datos

        _this3.proveedor.nuevoTema(_this3.usuario.Mensaje.AuthorizationToken, _this3.idCurso, _this3.titulo, _this3.comentario).subscribe( //(data)=>{console.log(data);},
        data => {
          _this3.nuevoTemaCreado(data);
        }, error => {
          console.log(error);
        }, () => {
          loading.dismiss();
        });
      } else {
        // const alert = this.alertCtrl.create({
        //   title: 'ATENCIÓN',
        //   subTitle: 'Debes introducir título y mensaje para crear un nuevo tema',
        //   buttons: ['OK']
        // });
        // alert.present();
        _this3.alert('ATENCIÓN', 'Debes introducir título y mensaje para crear un nuevo tema');
      }
    })();
  }

  nuevoTemaCreado(data) {
    // const alert = this.alertCtrl.create({
    //   title: '¡Tema Creado!',
    //   subTitle: data.Mensaje,
    //   buttons: ['OK']
    // });
    // alert.present();
    this.alert('¡Tema Creado!', data.Mensaje);
    this.initializeItems();
  }

  ayuda() {
    //this.navCtrl.push(FaqPage);
    this.router.navigate(['/faq']);
  }

  filtro() {
    var _this4 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this4.actionSheetCtrl.create({
        header: 'Filtrar por:',
        buttons: [{
          text: 'Todos',
          icon: 'chatbubbles-outline',
          handler: () => {
            _this4.items = _this4.allitems;
          }
        }, {
          text: 'Abiertos',
          icon: 'lock-open-outline',
          handler: () => {
            _this4.items = _this4.allitems;
            _this4.items = _this4.items.filter(item => {
              return item.Estado == 0;
            });
          }
        }, {
          text: 'Cerrados',
          icon: 'lock-closed-outline',
          handler: () => {
            _this4.items = _this4.allitems;
            _this4.items = _this4.items.filter(item => {
              return item.Estado == 1;
            });
          }
        }, {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {}
        }]
      });
      actionSheet.present();
    })();
  }

  segmentChanged(ev) {
    console.log('Segment changed', ev.detail.value);

    switch (ev.detail.value) {
      case 'foros':
        this.items = this.allitems;
        break;

      case 'abiertos':
        this.items = this.allitems;
        this.items = this.items.filter(item => {
          return item.Estado == 0;
        });
        break;

      case 'cerrados':
        this.items = this.allitems;
        this.items = this.items.filter(item => {
          return item.Estado == 1;
        });
        break;
    }
  }

  alert(cabecera, mensaje) {
    var _this5 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this5.alertCtrl.create({
        header: cabecera,
        message: mensaje,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

}

ForumPage.ɵfac = function ForumPage_Factory(t) {
  return new (t || ForumPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_navparam_service__WEBPACK_IMPORTED_MODULE_1__.NavparamService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_providers_aulavirtualrest__WEBPACK_IMPORTED_MODULE_2__.AulavirtualrestProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_providers_logout__WEBPACK_IMPORTED_MODULE_3__.LogoutProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__.Storage));
};

ForumPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ForumPage,
  selectors: [["app-forum"]],
  decls: 12,
  vars: 4,
  consts: [["color", "primary", 1, "ion-text-center"], ["fullscreen", "", 3, "scrollY"], ["itemSize", "56", "minBufferPx", "900", "maxBufferPx", "1350"], ["id", "input", "placeholder", "Buscar por t\u00EDtulo o comentario", 3, "ionInput"], ["button", "true", 3, "odd", "click", 4, "cdkVirtualFor", "cdkVirtualForOf"], ["class", "ion-padding ion-text-center", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], [3, "disabled", "click"], ["name", "create-outline"], ["button", "true", 3, "click"], ["name", "time-outline"], ["src", "../assets/imgs/icon.png"], [1, "ion-text-wrap"], [3, "innerHTML"], ["size", "small", "fill", "clear", "icon-start", "", 3, "click"], ["name", "chatbubbles", 4, "ngIf"], ["name", "chatbubbles-outline", 4, "ngIf"], ["name", "flag", "class", "anclado", 4, "ngIf"], ["name", "lock-closed", "class", "cerrado", 4, "ngIf"], [1, "ion-text-right"], ["size", "small", "icon-start", "", 3, "click"], ["name", "eye"], ["name", "chatbubbles"], ["name", "chatbubbles-outline"], ["name", "flag", 1, "anclado"], ["name", "lock-closed", 1, "cerrado"], [1, "ion-padding", "ion-text-center"], ["width", "200", "src", "../assets/imgs/empty.png"]],
  template: function ForumPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Foro");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-content", 1)(5, "cdk-virtual-scroll-viewport", 2)(6, "ion-searchbar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionInput", function ForumPage_Template_ion_searchbar_ionInput_6_listener($event) {
        return ctx.getItems($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ForumPage_ion_card_7_Template, 30, 14, "ion-card", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ForumPage_section_8_Template, 2, 0, "section", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-fab", 6)(10, "ion-fab-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ForumPage_Template_ion_fab_button_click_10_listener() {
        return ctx.nuevoTema();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("scrollY", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cdkVirtualForOf", ctx.items);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.items != null && ctx.items.length < 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.accesoForo == 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonNote, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.TextValueAccessor, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.CdkFixedSizeVirtualScroll, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.CdkVirtualForOf, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.CdkVirtualScrollViewport, _angular_common__WEBPACK_IMPORTED_MODULE_9__.UpperCasePipe, _pipes_safe_html__WEBPACK_IMPORTED_MODULE_4__.SafeHtmlPipe],
  styles: ["ion-chip[_ngcontent-%COMP%] {\n  font-size: xx-small;\n}\n\n.social-cards[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.comentario[_ngcontent-%COMP%] {\n  white-space: normal !important;\n  text-align: justify;\n}\n\n.anclado[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  color: orange;\n}\n\n.cerrado[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  color: red;\n}\n\ncdk-virtual-scroll-viewport[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.odd[_ngcontent-%COMP%] {\n  --ion-item-background: var(--ion-color-light) ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcnVtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLDhDQUFBO0FBQ0oiLCJmaWxlIjoiZm9ydW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNoaXB7XG4gICAgZm9udC1zaXplOiB4eC1zbWFsbDtcbn1cblxuLnNvY2lhbC1jYXJkcyBpb24tY29sIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9ICAgIFxuICBcbi5jb21lbnRhcmlve1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDsgXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmFuY2xhZG97XG4gICAgcGFkZGluZy1sZWZ0OjEwcHg7XG4gICAgY29sb3I6b3JhbmdlO1xufVxuXG4uY2VycmFkb3tcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcbiAgICBjb2xvcjpyZWQ7XG59XG5cbmNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ub2Rke1xuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KVxufSJdfQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_forum_forum_module_ts.js.map