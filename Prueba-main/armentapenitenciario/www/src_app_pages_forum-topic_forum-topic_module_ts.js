"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_forum-topic_forum-topic_module_ts"],{

/***/ 3497:
/*!*****************************************************************!*\
  !*** ./src/app/pages/forum-topic/forum-topic-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForumTopicPageRoutingModule": () => (/* binding */ ForumTopicPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _forum_topic_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forum-topic.page */ 9484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _forum_topic_page__WEBPACK_IMPORTED_MODULE_0__.ForumTopicPage
    }
];
class ForumTopicPageRoutingModule {
}
ForumTopicPageRoutingModule.ɵfac = function ForumTopicPageRoutingModule_Factory(t) { return new (t || ForumTopicPageRoutingModule)(); };
ForumTopicPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ForumTopicPageRoutingModule });
ForumTopicPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ForumTopicPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 7195:
/*!*********************************************************!*\
  !*** ./src/app/pages/forum-topic/forum-topic.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForumTopicPageModule": () => (/* binding */ ForumTopicPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 5503);
/* harmony import */ var _forum_topic_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forum-topic-routing.module */ 3497);
/* harmony import */ var _forum_topic_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forum-topic.page */ 9484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);







class ForumTopicPageModule {
}
ForumTopicPageModule.ɵfac = function ForumTopicPageModule_Factory(t) { return new (t || ForumTopicPageModule)(); };
ForumTopicPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ForumTopicPageModule });
ForumTopicPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
        _forum_topic_routing_module__WEBPACK_IMPORTED_MODULE_1__.ForumTopicPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ForumTopicPageModule, { declarations: [_forum_topic_page__WEBPACK_IMPORTED_MODULE_2__.ForumTopicPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
        _forum_topic_routing_module__WEBPACK_IMPORTED_MODULE_1__.ForumTopicPageRoutingModule] }); })();


/***/ }),

/***/ 9484:
/*!*******************************************************!*\
  !*** ./src/app/pages/forum-topic/forum-topic.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForumTopicPage": () => (/* binding */ ForumTopicPage)
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
/* harmony import */ var _pipes_safe_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/safe-html */ 6124);











function ForumTopicPage_ion_icon_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 15);
  }
}

function ForumTopicPage_ion_icon_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 16);
  }
}

function ForumTopicPage_ion_card_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-card")(1, "ion-card-header")(2, "ion-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-card-title")(6, "ion-chip")(7, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.items[i_r6].Fecha, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 3, ctx_r2.items[i_r6].Usuario));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 5, ctx_r2.items[i_r6].Comentario), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
  }
}

function ForumTopicPage_ion_fab_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-fab-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ForumTopicPage_ion_fab_button_33_Template_ion_fab_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.nuevoComentario());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function ForumTopicPage_ion_fab_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-fab-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ForumTopicPage_ion_fab_button_34_Template_ion_fab_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.temaCerrado());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

class ForumTopicPage {
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
    this.tema = this.navParamService.getNavData();
    this.initializeItems();
  }

  ngOnInit() {// this.tema = this.navParamService.getNavData();
    // this.initializeItems();
  } // ionViewWillEnter() {
  //   this.tema = this.navParamService.getNavData();
  //   this.initializeItems();
  // }


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

          _this.proveedor.obtenerRespuestasTemasForo(_this.usuario.Mensaje.AuthorizationToken, _this.tema.IdTema).subscribe( //(data)=>{this.tests = data;},
          data => {
            _this.parseJson(data);
          }, error => {
            console.log(error);
          }, () => {
            loading.dismiss();
          });
        } else {
          // Si no se han recuperado los datos se vuelve a la página del foro
          //this.navCtrl.push(ForoPage);
          _this.router.navigate(['/forum']);
        }
      });
    })();
  }

  parseJson(data) {
    let jsonArray = data.Mensaje;
    this.items = [];

    for (let i = 1; i < jsonArray.length; i++) {
      let jsonObject = jsonArray[i];
      this.items.push(jsonObject);
    }
  }

  temaCerrado() {
    // const alert = this.alertCtrl.create({
    //   title: 'Tema Cerrado',
    //   subTitle: 'Este tema está cerrado y no se pueden añadir más comentarios',
    //   buttons: ['OK']
    // });
    // alert.present();
    this.alert('Tema Cerrado', 'Este tema está cerrado y no se pueden añadir más comentarios');
  }

  nuevoComentario() {
    var _this2 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const prompt = yield _this2.alertCtrl.create({
        header: 'Nuevo Comentario',
        message: "Haz un comentario sobre este tema:",
        inputs: [{
          name: 'comentario',
          placeholder: 'Comentario',
          max: '1000'
        }],
        buttons: [{
          text: 'Cancelar',
          handler: data => {//console.log('Cancel clicked');
          }
        }, {
          text: 'Enviar',
          handler: data => {
            _this2.comentario = data.comentario;

            _this2.insertarComentario();
          }
        }]
      });
      yield prompt.present();
    })();
  }

  insertarComentario() {
    var _this3 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.comentario != "") {
        const loading = yield _this3.loadingCtrl.create({
          message: "Añadiendo comentario..."
        });
        yield loading.present(); // Se inserta el nuevo comentario en base de datos

        _this3.proveedor.nuevaRespuesta(_this3.usuario.Mensaje.AuthorizationToken, _this3.idCurso, _this3.tema.IdTema, _this3.comentario).subscribe( //(data)=>{console.log(data);},
        data => {
          _this3.nuevoComentarioCreado(data);
        }, error => {
          console.log(error);
        }, () => {
          loading.dismiss();
        });
      } else {
        // const alert = this.alertCtrl.create({
        //   title: 'ATENCIÓN',
        //   subTitle: 'Debes introducir un comentario para poder añadirlo al tema',
        //   buttons: ['OK']
        // });
        // alert.present();
        _this3.alert('ATENCIÓN', 'Debes introducir un comentario para poder añadirlo al tema');
      }
    })();
  }

  nuevoComentarioCreado(data) {
    // const alert = this.alertCtrl.create({
    //   title: '¡Comentario Añadido!',
    //   subTitle: data.Mensaje,
    //   buttons: ['OK']
    // });
    // alert.present();
    this.alert('Comentario Añadido', data.Mensaje);
    this.initializeItems();
  }

  alert(cabecera, mensaje) {
    var _this4 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertCtrl.create({
        header: cabecera,
        message: mensaje,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

}

ForumTopicPage.ɵfac = function ForumTopicPage_Factory(t) {
  return new (t || ForumTopicPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_navparam_service__WEBPACK_IMPORTED_MODULE_1__.NavparamService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_providers_aulavirtualrest__WEBPACK_IMPORTED_MODULE_2__.AulavirtualrestProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_providers_logout__WEBPACK_IMPORTED_MODULE_3__.LogoutProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__.Storage));
};

ForumTopicPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ForumTopicPage,
  selectors: [["app-forum-topic"]],
  decls: 35,
  vars: 15,
  consts: [["color", "primary", 1, "ion-text-center"], ["slot", "start"], ["text", "Volver"], [1, "cards-bg", "social-cards"], ["size", "10"], ["name", "time-outline"], ["size", "2", 1, "ion-text-right"], ["name", "chatbubbles", 4, "ngIf"], ["name", "chatbubbles-outline", 4, "ngIf"], ["src", "../assets/imgs/icon.png"], [1, "comentario", 3, "innerHTML"], [4, "ngFor", "ngForOf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], [3, "click", 4, "ngIf"], ["color", "danger", 3, "click", 4, "ngIf"], ["name", "chatbubbles"], ["name", "chatbubbles-outline"], [3, "click"], ["name", "create-outline"], ["color", "danger", 3, "click"], ["name", "lock-closed"]],
  template: function ForumTopicPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-back-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-content", 3)(7, "ion-card")(8, "ion-card-header")(9, "ion-card-subtitle")(10, "ion-row")(11, "ion-col", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "ion-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-col", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, ForumTopicPage_ion_icon_15_Template, 1, 0, "ion-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ForumTopicPage_ion_icon_16_Template, 1, 0, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "ion-card-title")(19, "ion-chip")(20, "ion-avatar");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](24, "uppercase");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "h2")(26, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "ion-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "section", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](30, "safeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, ForumTopicPage_ion_card_31_Template, 15, 7, "ion-card", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "ion-fab", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, ForumTopicPage_ion_fab_button_33_Template, 2, 0, "ion-fab-button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, ForumTopicPage_ion_fab_button_34_Template, 2, 0, "ion-fab-button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.tema.Titulo);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.tema.Fecha, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.tema.Respuestas > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.tema.Respuestas == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.tema.Respuestas, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](24, 11, ctx.tema.Usuario));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.tema.Titulo);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](30, 13, ctx.tema.Comentario), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.items);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.tema.Estado == false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.tema.Estado == true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonBackButtonDelegate, _angular_common__WEBPACK_IMPORTED_MODULE_9__.UpperCasePipe, _pipes_safe_html__WEBPACK_IMPORTED_MODULE_4__.SafeHtmlPipe],
  styles: [".card-header-ios[_ngcontent-%COMP%] {\n  font-size: small;\n  font-weight: 500;\n  color: #333;\n  padding: 16px;\n}\n\n.card-ios[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 2px 0;\n  font-size: 1.6rem;\n  font-weight: bold;\n}\n\n.comentario[_ngcontent-%COMP%] {\n  white-space: normal !important;\n  text-align: justify;\n}\n\n.cerrado[_ngcontent-%COMP%] {\n  background-color: red;\n}\n\nion-col[_ngcontent-%COMP%] {\n  color: gray;\n}\n\nion-chip[_ngcontent-%COMP%] {\n  font-size: xx-small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcnVtLXRvcGljLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLDhCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKIiwiZmlsZSI6ImZvcnVtLXRvcGljLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWhlYWRlci1pb3Mge1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uY2FyZC1pb3MgaDIge1xuICAgIG1hcmdpbjogMnB4IDA7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7ICAgICAgICBcbn1cblxuLmNvbWVudGFyaW97XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50OyBcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uY2VycmFkb3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcbn1cblxuaW9uLWNvbHtcbiAgICBjb2xvcjogZ3JheTtcbn1cblxuaW9uLWNoaXB7XG4gICAgZm9udC1zaXplOiB4eC1zbWFsbDtcbn0iXX0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_forum-topic_forum-topic_module_ts.js.map