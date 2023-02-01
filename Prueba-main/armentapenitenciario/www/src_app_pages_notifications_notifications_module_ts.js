"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_notifications_notifications_module_ts"],{

/***/ 4114:
/*!*********************************************************************!*\
  !*** ./src/app/pages/notifications/notifications-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPageRoutingModule": () => (/* binding */ NotificationsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.page */ 4462);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_0__.NotificationsPage
    }
];
class NotificationsPageRoutingModule {
}
NotificationsPageRoutingModule.ɵfac = function NotificationsPageRoutingModule_Factory(t) { return new (t || NotificationsPageRoutingModule)(); };
NotificationsPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NotificationsPageRoutingModule });
NotificationsPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NotificationsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 9843:
/*!*************************************************************!*\
  !*** ./src/app/pages/notifications/notifications.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPageModule": () => (/* binding */ NotificationsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications-routing.module */ 4114);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.page */ 4462);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class NotificationsPageModule {
}
NotificationsPageModule.ɵfac = function NotificationsPageModule_Factory(t) { return new (t || NotificationsPageModule)(); };
NotificationsPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NotificationsPageModule });
NotificationsPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationsPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NotificationsPageModule, { declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_1__.NotificationsPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationsPageRoutingModule] }); })();


/***/ }),

/***/ 4462:
/*!***********************************************************!*\
  !*** ./src/app/pages/notifications/notifications.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPage": () => (/* binding */ NotificationsPage)
/* harmony export */ });
/* harmony import */ var _Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_navparam_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/navparam.service */ 7495);
/* harmony import */ var _providers_aulavirtualrest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/aulavirtualrest */ 4313);
/* harmony import */ var _providers_logout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/logout */ 8599);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);










function NotificationsPage_ion_card_8_ion_icon_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-icon", 17);
  }
}

function NotificationsPage_ion_card_8_ion_icon_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-icon", 18);
  }
}

function NotificationsPage_ion_card_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NotificationsPage_ion_card_8_Template_ion_card_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const i_r3 = restoredCtx.index;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.leerNotificacion(ctx_r6.items[i_r3]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-card-header")(2, "ion-card-subtitle", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-card-content", 10)(6, "h3")(7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-row")(10, "ion-col")(11, "ion-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NotificationsPage_ion_card_8_Template_ion_button_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const i_r3 = restoredCtx.index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.leerNotificacion(ctx_r8.items[i_r3]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, NotificationsPage_ion_card_8_ion_icon_12_Template, 1, 0, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, NotificationsPage_ion_card_8_ion_icon_13_Template, 1, 0, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ion-col", 14)(15, "ion-note")(16, "ion-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NotificationsPage_ion_card_8_Template_ion_button_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const i_r3 = restoredCtx.index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.leerNotificacion(ctx_r9.items[i_r3]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " Leer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r0.items[i_r3].Reciente == true ? "reciente" : "normal");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r0.items[i_r3].Reciente == true ? "reciente" : "normal");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.items[i_r3].FechaEnvio, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.items[i_r3].Asunto);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.items[i_r3].Reciente == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.items[i_r3].Reciente == false);
  }
}

function NotificationsPage_section_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

class NotificationsPage {
  constructor(router, navParamService, proveedor, proveedorLogout, alertCtrl, loadingCtrl, storage) {
    this.router = router;
    this.navParamService = navParamService;
    this.proveedor = proveedor;
    this.proveedorLogout = proveedorLogout;
    this.alertCtrl = alertCtrl;
    this.loadingCtrl = loadingCtrl;
    this.storage = storage;
    this.usuario = [];
    this.searchQuery = '';
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.initialize(); // if (this.searchQuery == ''){
    //   this.initializeItems();
    // }
  }

  initialize() {
    // Se cargan las notificaciones
    if (this.searchQuery == '') {
      this.initializeItems();
    }
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
          //this.logout();
          _this.proveedorLogout.logout();
        }
      }); // Se obtienen los datos del usuario de la memoria


      _this.storage.get('usuario').then(val => {
        if (val != null && val != undefined) {
          _this.usuario = JSON.parse(val); //console.log(this.idCurso);

          _this.proveedor.consultarNotificaciones(_this.usuario.Mensaje.AuthorizationToken, _this.idCurso).subscribe( //(data)=>{this.tests = data;},
          data => {
            _this.parseJson(data);
          }, error => {
            console.log(error);
          }, () => {
            loading.dismiss();
          });
        } else {
          // Si no se han recuperado los datos se vuelve a la página de login
          //this.logout();
          _this.proveedorLogout.logout();
        }
      });
    })();
  }

  parseJson(data) {
    //console.log(data);
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
        //   this.Alert('Sin Notificaciones', 'No hay ninguna notificación publicada en tu curso.'); 
        //   title: 'Sin Notificaciones',
        //   subTitle: 'No hay ninguna notificación publicada en tu curso.',
        //   buttons: ['OK']
        // });
        // alert.present();
        //this.sinNotificacionesAlert();
      }
    } // Acceso denegado
    else if (data.Error == -10) {
      //this.logout();
      this.proveedorLogout.logout();
    } else {
      this.items = []; // const alert = this.alertCtrl.create({
      //   title: 'Sin Notificaciones',
      //   subTitle: 'No hay ninguna notificación publicada en tu curso.',
      //   buttons: ['OK']
      // });
      // alert.present();
      //this.sinNotificacionesAlert();
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
          //return ((item.Asunto.toLowerCase().indexOf(val.toLowerCase()) > -1) || (item.Autor.toLowerCase().indexOf(val.toLowerCase()) > -1));
          return item.Asunto.toLowerCase().indexOf(val.toLowerCase()) > -1;
        });
      }
    }
  }

  leerNotificacion(notificacion) {
    //console.log(notificacion);
    //this.navCtrl.push(NotificationDetailPage, {notificacion: notificacion});
    //this.router.navigateByUrl('notification-detail/(notificacion:/${notificacion})');    
    //this.router.navigate(['/notification-detail', {notificacion: notificacion}]);
    this.navParamService.setNavData(notificacion);
    this.router.navigate(['/notification-detail']);
  } // logout()
  // {
  //   // const root = this.app.getRootNav();
  //   // root.popToRoot();
  //   this.proveedorLogout.logout();
  //   //this.navCtrl.setRoot(LoginPage);
  //   this.router.navigate(['/login']);
  // }


  sinNotificacionesAlert() {
    var _this2 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertCtrl.create({
        header: 'Sin Notificaciones',
        message: 'No hay ninguna notificación publicada en tu curso.',
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

}

NotificationsPage.ɵfac = function NotificationsPage_Factory(t) {
  return new (t || NotificationsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_navparam_service__WEBPACK_IMPORTED_MODULE_1__.NavparamService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_providers_aulavirtualrest__WEBPACK_IMPORTED_MODULE_2__.AulavirtualrestProvider), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_providers_logout__WEBPACK_IMPORTED_MODULE_3__.LogoutProvider), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage));
};

NotificationsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: NotificationsPage,
  selectors: [["app-notifications"]],
  decls: 10,
  vars: 2,
  consts: [["color", "primary", 1, "ion-text-center"], ["slot", "start"], ["text", "Volver"], ["fullscreen", ""], ["id", "input", "placeholder", "Buscar por asunto", 3, "ionInput"], ["button", "true", 3, "click", 4, "ngFor", "ngForOf"], ["class", "ion-padding ion-text-center", 4, "ngIf"], ["button", "true", 3, "click"], [3, "ngClass"], ["name", "time-outline", 3, "ngClass"], [1, "ion-text-wrap"], ["size", "small", "fill", "clear", "icon-start", "", 3, "click"], ["name", "notifications", 4, "ngIf"], ["name", "notifications-outline", 4, "ngIf"], [1, "ion-text-right"], ["size", "small", "icon-start", "", 3, "click"], ["name", "eye"], ["name", "notifications"], ["name", "notifications-outline"], [1, "ion-padding", "ion-text-center"], ["width", "200", "src", "../assets/imgs/empty.png"]],
  template: function NotificationsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Notificaciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "ion-back-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-content", 3)(7, "ion-searchbar", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ionInput", function NotificationsPage_Template_ion_searchbar_ionInput_7_listener($event) {
        return ctx.getItems($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, NotificationsPage_ion_card_8_Template, 19, 6, "ion-card", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, NotificationsPage_section_9_Template, 2, 0, "section", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.items);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.items != null && ctx.items.length < 1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonNote, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonBackButtonDelegate],
  styles: [".social-cards[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.notificacion[_ngcontent-%COMP%] {\n  white-space: normal !important;\n  text-align: justify;\n}\n\n.reciente[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\n.normal[_ngcontent-%COMP%] {\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksVUFBQTtBQUhKOztBQU1BO0VBQ0ksOEJBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU1BO0VBQ0ksK0JBQUE7QUFISjs7QUFNQTtFQUNJLFdBQUE7QUFISiIsImZpbGUiOiJub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1jb250ZW50IHtcbi8vICAgICAtLWJhY2tncm91bmQ6IHVybCgnaHR0cDovL2RlbW8uYXVsYXZpcnR1YWxjdHAuY29tL2ltYWdlcy9iYWNrZ3JvdW5kcy9wYXR0ZXJuX2dyZXkucG5nJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7IFxuLy8gfVxuXG4uc29jaWFsLWNhcmRzIGlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDA7XG59ICAgIFxuICBcbi5ub3RpZmljYWNpb257XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50OyBcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4ucmVjaWVudGV7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLm5vcm1hbHtcbiAgICBjb2xvcjogZ3JheTtcbn0iXX0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_notifications_notifications_module_ts.js.map