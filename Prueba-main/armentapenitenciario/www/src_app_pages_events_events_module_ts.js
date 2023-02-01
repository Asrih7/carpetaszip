"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_events_events_module_ts"],{

/***/ 5358:
/*!*******************************************************!*\
  !*** ./src/app/pages/events/events-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsPageRoutingModule": () => (/* binding */ EventsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _events_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.page */ 4637);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _events_page__WEBPACK_IMPORTED_MODULE_0__.EventsPage
    }
];
class EventsPageRoutingModule {
}
EventsPageRoutingModule.ɵfac = function EventsPageRoutingModule_Factory(t) { return new (t || EventsPageRoutingModule)(); };
EventsPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: EventsPageRoutingModule });
EventsPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EventsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5105:
/*!***********************************************!*\
  !*** ./src/app/pages/events/events.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsPageModule": () => (/* binding */ EventsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _events_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events-routing.module */ 5358);
/* harmony import */ var _events_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.page */ 4637);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class EventsPageModule {
}
EventsPageModule.ɵfac = function EventsPageModule_Factory(t) { return new (t || EventsPageModule)(); };
EventsPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EventsPageModule });
EventsPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _events_routing_module__WEBPACK_IMPORTED_MODULE_0__.EventsPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EventsPageModule, { declarations: [_events_page__WEBPACK_IMPORTED_MODULE_1__.EventsPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _events_routing_module__WEBPACK_IMPORTED_MODULE_0__.EventsPageRoutingModule] }); })();


/***/ }),

/***/ 4637:
/*!*********************************************!*\
  !*** ./src/app/pages/events/events.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsPage": () => (/* binding */ EventsPage)
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);











function EventsPage_ion_card_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-card", 13)(1, "ion-card-header")(2, "ion-row")(3, "ion-col", 14)(4, "ion-avatar", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-col")(7, "ion-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ion-card-content")(16, "ion-row")(17, "ion-col")(18, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "ion-col", 22)(28, "ion-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EventsPage_ion_card_16_Template_ion_button_click_28_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const i_r3 = restoredCtx.index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.info(ctx_r4.items[i_r3].Descripcion));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "ion-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EventsPage_ion_card_16_Template_ion_button_click_30_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const i_r3 = restoredCtx.index;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.borrar(ctx_r6.items[i_r3].IdCurso, ctx_r6.items[i_r3].FechaFinEvento, ctx_r6.items[i_r3].FechaHoy));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "ion-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EventsPage_ion_card_16_Template_ion_button_click_32_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const i_r3 = restoredCtx.index;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.meApunto(ctx_r7.items[i_r3].IdCurso, ctx_r7.items[i_r3].Codigo));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "ion-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " ME APUNTO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "ion-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EventsPage_ion_card_16_Template_ion_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.completo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, " COMPLETO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "ion-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EventsPage_ion_card_16_Template_ion_button_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.apuntado());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, " APUNTADO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.items[i_r3].FechaInicioEvento, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r0.items[i_r3].FechaFinEvento == "" || ctx_r0.items[i_r3].FechaFinEvento == " " || ctx_r0.items[i_r3].FechaFinEvento == null || ctx_r0.items[i_r3].FechaFinEvento == "31/12/9999 23:59:59" ? "hidden" : "visible");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.items[i_r3].FechaFinEvento, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.items[i_r3].Nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r0.items[i_r3].Ubicacion == "" || ctx_r0.items[i_r3].Ubicacion == " " || ctx_r0.items[i_r3].Ubicacion == null ? "hidden" : "visible");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.items[i_r3].Ubicacion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r0.items[i_r3].Aforo > 0 ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" Plazas limitadas: ", ctx_r0.items[i_r3].NumAlumnos, " / ", ctx_r0.items[i_r3].Aforo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r0.items[i_r3].Aforo == 0 ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.items[i_r3].NumAlumnos, " alumnos apuntados ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r0.items[i_r3].Apuntado == true || ctx_r0.items[i_r3].Descripcion == "" || ctx_r0.items[i_r3].Descripcion == " " || ctx_r0.items[i_r3].Descripcion == null ? "hidden" : "visible");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r0.items[i_r3].Apuntado == true ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r0.items[i_r3].Apuntado == false && (ctx_r0.items[i_r3].Aforo == 0 || ctx_r0.items[i_r3].Aforo > 0 && ctx_r0.items[i_r3].Aforo > ctx_r0.items[i_r3].NumAlumnos) ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r0.items[i_r3].Apuntado == false && ctx_r0.items[i_r3].Aforo > 0 && ctx_r0.items[i_r3].Aforo > 0 && ctx_r0.items[i_r3].NumAlumnos >= ctx_r0.items[i_r3].Aforo ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r0.items[i_r3].Apuntado == true ? "visible" : "hidden");
  }
}

function EventsPage_section_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

class EventsPage {
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
    this.searchQueryMisEventos = '';
    this.eventos = "eventos";
    this.misEventos = "misEventos";
    this.currentDate = new Date();
  }

  ngOnInit() {}

  ionViewWillEnter() {
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
      yield loading.present(); // Se obtienen los datos del usuario de la memoria

      _this.storage.get('usuario').then(val => {
        if (val != null && val != undefined) {
          _this.usuario = JSON.parse(val);

          _this.proveedor.consultarEventos(_this.usuario.Mensaje.AuthorizationToken).subscribe( //(data)=>{this.tests = data;},
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
    //console.log(data);
    if (data.Error == 0) {
      let jsonArray = data.Mensaje;
      this.items = [];
      this.allitems = []; // this.itemsMisEventos = [];
      // this.allitemsMisEventos = [];

      if (jsonArray.length > 0) {
        for (let i = 0; i < jsonArray.length; i++) {
          let jsonObject = jsonArray[i];
          this.items.push(jsonObject);
          this.allitems.push(jsonObject); // this.itemsMisEventos.push(jsonObject);
          // this.allitemsMisEventos.push(jsonObject);
        }
      } else {//this.alert('Sin Eventos', 'Permanece atento a los próximos eventos del centro');
      }
    } // Acceso denegado
    else if (data.Error == -10) {
      this.proveedorLogout.logout();
    } else {
      this.items = []; // this.itemsMisEventos = [];
      //this.alert('Sin Eventos', 'Permanece atento a los próximos eventos del centro');
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
          return item.Nombre.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.FechaInicioEvento.toLowerCase().indexOf(val.toLowerCase()) > -1;
        });
      }
    }
  } // getItemsMisEventos(ev: any) {
  //   if (this.allitemsMisEventos != null && this.allitemsMisEventos != undefined){
  //     // Reset items back to all of the items
  //     this.itemsMisEventos = this.allitemsMisEventos;
  //     this.searchQueryMisEventos = '';
  //     // set val to the value of the searchbar
  //     const valMisEventos = ev.target.value;
  //     // if the value is an empty string don't filter the items
  //     if (valMisEventos && valMisEventos.trim() != '') {
  //       this.searchQueryMisEventos = valMisEventos;
  //       this.itemsMisEventos = this.itemsMisEventos.filter((item) => {
  //         return ((item.Nombre.toLowerCase().indexOf(valMisEventos.toLowerCase()) > -1) || (item.FechaInicioEvento.toLowerCase().indexOf(valMisEventos.toLowerCase()) > -1));
  //       })
  //     }
  //   }
  // }


  info(descripcion) {
    //this.navCtrl.push(TestInfoPage, {idTest: this.test.IdTest});
    this.alert('Información', descripcion);
  }

  meApunto(idEvento, codigo) {
    // Se valida e inscribe al usuario en el evento
    this.proveedor.validarAsociarEvento(this.usuario.Mensaje.AuthorizationToken, idEvento, codigo).subscribe(data => {
      this.eventoValidadoAsociado(data);
    }, error => {
      console.log(error);
    });
  }

  eventoValidadoAsociado(data) {
    if (data.Error == 0) {
      this.alert('¡Enhorabuena!', 'Te has apuntado al evento');
      this.initializeItems();
    } // Acceso denegado
    else if (data.Error == -10) {
      // this.proveedorLogout.logout();
      this.proveedorLogout.logout();
    } // Aforo completo
    else if (data.Error == -20) {
      this.alert('Aforo Completo', data.Mensaje);
    } // Plazo finalizado
    else if (data.Error == -30) {
      this.alert('Plazo Finalizado', data.Mensaje);
    } // Límite superado
    else if (data.Error == -40) {
      this.alert('Límite Superado', data.Mensaje);
    } else {
      this.items = [];
      this.alert('Error', 'Lo sentimos, ha ocurrido un error y no has podido ser apuntado en el evento. Por favor, inténtalo más tarde');
    }
  }
  /********************* ANTIGUA FORMA DE VALIDAR LOS EVENTOS, AHORA SE HACE TODO EN SERVIDOR *********************/
  // meApunto(codigo: string, fechaFinEvento: DateTime, fechaHoy: DateTime){
  //     // var myDate = new Date().toISOString();
  //     // var date = new Date();
  //     // let latest_date =this.datePipe.transform(date, 'yyyy-MM-dd');
  //     // let latest_fin =this.datePipe.transform(fechaFinEvento, 'yyyy-MM-dd');
  //     // console.log('Fecha Hoy ISO:' + myDate);
  //     //console.log('Fecha Hoy (rest):' + fechaHoy);
  //     // console.log('Fecha Hoy (ionic):' + latest_date);
  //     //console.log('Fecha Fin (rest):' + fechaFinEvento);
  //     // console.log('Fecha Fin (ionic):' + latest_fin);
  //     // console.log('Fecha Hoy (segundos):' + Date.parse(myDate));
  //     // console.log('Fecha Fin (segundos):' + Date.parse(fechaFinEvento.toString()));
  //     // Si ha terminado el plazo de inscripción
  //     if (fechaFinEvento != null && fechaFinEvento < fechaHoy){
  //       const alert = this.alertCtrl.create({
  //         title: 'Plazo Finalizado',
  //         message: 'Lo sentimos, el plazo de inscripción al evento ha finalizado y ya no puedes apuntarte', 
  //         buttons: ['OK']
  //       });
  //       alert.present();
  //     }
  //     // Si no ha terminado el plazo de inscripción
  //     else{
  //       this.inscribirUsuario(codigo);
  //     }
  // }
  // inscribirUsuario(codigo: string)
  // {
  //     // const loader = this.loadingCtrl.create({
  //     //   content: "Solicitando acceso..."
  //     // });
  //     // loader.present();
  //     // Se inscribe al usuario en el evento
  //     this.proveedor.asociarEvento(this.usuario.Mensaje.AuthorizationToken, codigo)
  //     .subscribe(
  //       //(data)=>{console.log(data);},
  //       (data)=>{this.eventoAsociado(data);},
  //       (error)=>{console.log(error);}
  //       //() =>{loader.dismiss()}
  //     )     
  // }
  // eventoAsociado(data: any){
  //   if (data.Error == 0){
  //     const alert = this.alertCtrl.create({
  //       title: '¡Enhorabuena!',
  //       subTitle: 'Te has apuntado al evento',
  //       buttons: ['OK']
  //     });
  //     alert.present();
  //     this.initializeItems();
  //   }
  //   // Acceso denegado
  //   else if (data.Error == -10){
  //     this.proveedorLogout.logout();
  //   }
  //   else{
  //     this.items = [];
  //     const alert = this.alertCtrl.create({
  //       title: 'Error',
  //       subTitle: 'Lo sentimos, ha ocurrido un error y no has podido ser apuntado en el evento. Por favor, inténtalo más tarde',
  //       buttons: ['OK']
  //     });
  //     alert.present();
  //   }
  // }

  /****************************************************************************************************************/


  borrar(idEvento, fechaFinEvento, fechaHoy) {
    var _this2 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Si ha terminado el plazo de inscripción
      if (fechaFinEvento != null && fechaFinEvento < fechaHoy) {
        _this2.alert('Plazo Finalizado', 'Lo sentimos, una vez finalizado el plazo de inscripción al evento ya no puedes darte de baja');
      } // Si no ha terminado el plazo de inscripción
      else {
        const confirm = yield _this2.alertCtrl.create({
          header: 'Baja del Evento',
          message: 'Vas a darte de baja en este evento y tu plaza quedará libre para otro alumno. <br/><br/> ¿Deseas darte de baja?',
          buttons: [{
            text: 'No',
            handler: () => {}
          }, {
            text: 'Si',
            handler: () => {
              _this2.borrarUsuario(idEvento);
            }
          }]
        });
        yield confirm.present();
      }
    })();
  }

  borrarUsuario(idEvento) {
    // const loader = this.loadingCtrl.create({
    //   content: "Tramitando baja..."
    // });
    // loader.present();
    // Se eliminar al usuario en el evento
    this.proveedor.desasociarEvento(this.usuario.Mensaje.AuthorizationToken, idEvento).subscribe( //(data)=>{console.log(data);},
    data => {
      this.eventoDesasociado(data);
    }, error => {
      console.log(error);
    } //() =>{loader.dismiss()}
    );
  }

  eventoDesasociado(data) {
    if (data.Error == 0) {
      this.alert('Baja completada', 'Has sido eliminado del evento');
      this.initializeItems();
    } // Acceso denegado
    else if (data.Error == -10) {
      this.proveedorLogout.logout();
    } else {
      this.items = [];
      this.alert('Error', 'Lo sentimos, ha ocurrido un error y no has podido ser eliminado en el evento. Por favor, inténtalo más tarde');
    }
  }

  completo() {
    this.alert('Aforo Completo', 'Lo sentimos, actualmente no quedan plazas libres en este evento');
  }

  apuntado() {
    this.alert('Apuntado', 'Ya estás apuntado a este evento');
  }

  segmentChanged(ev) {
    switch (ev.detail.value) {
      case 'eventos':
        this.items = this.allitems;
        break;

      case 'misEventos':
        this.items = this.allitems;
        this.items = this.items.filter(item => {
          return item.Apuntado == true;
        });
        break;
    }
  }

  alert(cabecera, mensaje) {
    var _this3 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertCtrl.create({
        header: cabecera,
        message: mensaje,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  volver() {
    this.router.navigate(['/tabs/tab1']);
  }

}

EventsPage.ɵfac = function EventsPage_Factory(t) {
  return new (t || EventsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_navparam_service__WEBPACK_IMPORTED_MODULE_1__.NavparamService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_providers_aulavirtualrest__WEBPACK_IMPORTED_MODULE_2__.AulavirtualrestProvider), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_providers_logout__WEBPACK_IMPORTED_MODULE_3__.LogoutProvider), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage));
};

EventsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: EventsPage,
  selectors: [["app-events"]],
  decls: 18,
  vars: 4,
  consts: [["color", "primary", 1, "ion-text-center"], ["slot", "start"], ["text", "Volver"], [1, "cards-bg", "social-cards"], ["padding", ""], [3, "ngModel", "ngModelChange", "ionChange"], ["value", "eventos"], ["value", "misEventos"], [3, "ngSwitch"], [1, "ion-text-wrap"], ["id", "input", "placeholder", "Buscar por nombre o fecha", 3, "ionInput"], ["class", "ion-text-wrap", "ion-item", "", 4, "ngFor", "ngForOf"], ["class", "ion-padding ion-text-center", 4, "ngIf"], ["ion-item", "", 1, "ion-text-wrap"], ["size", "3"], ["item-start", ""], ["src", "../assets/imgs/icon.png"], ["small", "", "name", "calendar-clear-outline"], [3, "ngClass"], ["small", "", "name", "alarm-outline", 1, "danger"], ["name", "location"], ["name", "people"], [1, "ion-text-right"], ["ion-button", "", "icon-start", "", "fill", "clear", 1, "info", 3, "ngClass", "click"], ["name", "information-circle"], ["name", "trash"], ["size", "small", "icon-start", "", 3, "ngClass", "click"], ["name", "hand-right"], ["size", "small", "icon-start", "", 1, "completo", 3, "ngClass", "click"], ["size", "small", "icon-start", "", 1, "apuntado", 3, "ngClass", "click"], ["name", "happy"], [1, "ion-padding", "ion-text-center"], ["width", "200", "src", "../assets/imgs/empty.png"]],
  template: function EventsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-back-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Eventos");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-content", 3)(7, "div", 4)(8, "ion-segment", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function EventsPage_Template_ion_segment_ngModelChange_8_listener($event) {
        return ctx.eventos = $event;
      })("ionChange", function EventsPage_Template_ion_segment_ionChange_8_listener($event) {
        return ctx.segmentChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-segment-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Eventos ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-segment-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Mis Eventos ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 8)(14, "ion-list", 9)(15, "ion-searchbar", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ionInput", function EventsPage_Template_ion_searchbar_ionInput_15_listener($event) {
        return ctx.getItems($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, EventsPage_ion_card_16_Template, 41, 16, "ion-card", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, EventsPage_section_17_Template, 2, 0, "section", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.eventos);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx.eventos);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.items);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.items != null && ctx.items.length < 1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgSwitch, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonBackButtonDelegate],
  styles: [".social-cards[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.informacion[_ngcontent-%COMP%] {\n  white-space: normal !important;\n  text-align: justify;\n}\n\n.danger[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.info[_ngcontent-%COMP%] {\n  color: gray;\n  margin-right: 0px !important;\n  padding-right: 0px !important;\n}\n\n.completo[_ngcontent-%COMP%] {\n  --background: red !important;\n}\n\n.apuntado[_ngcontent-%COMP%] {\n  --background: green !important;\n}\n\n.visible[_ngcontent-%COMP%] {\n  visibility: visible !important;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\nion-card-title[_ngcontent-%COMP%] {\n  font-size: medium;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFBUyxVQUFBO0FBRVQ7O0FBREE7RUFBTyxXQUFBO0VBQWEsNEJBQUE7RUFBOEIsNkJBQUE7QUFPbEQ7O0FBTkE7RUFBWSw0QkFBQTtBQVVaOztBQVRBO0VBQVksOEJBQUE7QUFhWjs7QUFYQTtFQUFXLDhCQUFBO0FBZVg7O0FBZEE7RUFBVSx3QkFBQTtBQWtCVjs7QUFoQkE7RUFBaUIsaUJBQUE7QUFvQmpCIiwiZmlsZSI6ImV2ZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc29jaWFsLWNhcmRzIGlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDA7XG59ICAgIFxuICBcbi5pbmZvcm1hY2lvbntcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7IFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5kYW5nZXJ7IGNvbG9yOiByZWQ7fVxuLmluZm97IGNvbG9yOiBncmF5OyBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50OyBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudH1cbi5jb21wbGV0byB7IC0tYmFja2dyb3VuZDogcmVkICFpbXBvcnRhbnQ7fVxuLmFwdW50YWRvIHsgLS1iYWNrZ3JvdW5kOiBncmVlbiAhaW1wb3J0YW50O31cblxuLnZpc2libGUgeyB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnR9XG4uaGlkZGVuIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50fVxuXG5pb24tY2FyZC10aXRsZSB7IGZvbnQtc2l6ZTogbWVkaXVtO30iXX0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_events_events_module_ts.js.map