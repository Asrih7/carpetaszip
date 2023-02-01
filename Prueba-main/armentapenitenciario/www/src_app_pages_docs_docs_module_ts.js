"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_docs_docs_module_ts"],{

/***/ 1459:
/*!***************************************************!*\
  !*** ./src/app/pages/docs/docs-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocsPageRoutingModule": () => (/* binding */ DocsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _docs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docs.page */ 122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _docs_page__WEBPACK_IMPORTED_MODULE_0__.DocsPage
    }
];
class DocsPageRoutingModule {
}
DocsPageRoutingModule.ɵfac = function DocsPageRoutingModule_Factory(t) { return new (t || DocsPageRoutingModule)(); };
DocsPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DocsPageRoutingModule });
DocsPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DocsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 2829:
/*!*******************************************!*\
  !*** ./src/app/pages/docs/docs.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocsPageModule": () => (/* binding */ DocsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ 6328);
/* harmony import */ var _docs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docs-routing.module */ 1459);
/* harmony import */ var _docs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./docs.page */ 122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);







class DocsPageModule {
}
DocsPageModule.ɵfac = function DocsPageModule_Factory(t) { return new (t || DocsPageModule)(); };
DocsPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DocsPageModule });
DocsPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__.ScrollingModule,
        _docs_routing_module__WEBPACK_IMPORTED_MODULE_0__.DocsPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DocsPageModule, { declarations: [_docs_page__WEBPACK_IMPORTED_MODULE_1__.DocsPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__.ScrollingModule,
        _docs_routing_module__WEBPACK_IMPORTED_MODULE_0__.DocsPageRoutingModule] }); })();


/***/ }),

/***/ 122:
/*!*****************************************!*\
  !*** ./src/app/pages/docs/docs.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocsPage": () => (/* binding */ DocsPage)
/* harmony export */ });
/* harmony import */ var _Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fancyapps/ui */ 1041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_navparam_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navparam.service */ 7495);
/* harmony import */ var _providers_aulavirtualrest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/aulavirtualrest */ 4313);
/* harmony import */ var _providers_logout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/logout */ 8599);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/scrolling */ 6328);













function DocsPage_ion_item_17_ion_badge_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-badge", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", item_r2.IdTema != "" ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Tema ", item_r2.IdTema, "");
  }
}

function DocsPage_ion_item_17_ng_container_4_ion_badge_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-badge", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const etiqueta_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", etiqueta_r8, " ");
  }
}

function DocsPage_ion_item_17_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DocsPage_ion_item_17_ng_container_4_ion_badge_1_Template, 2, 1, "ion-badge", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const etiqueta_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", etiqueta_r8 != "");
  }
}

function DocsPage_ion_item_17_ion_icon_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 24);
  }
}

function DocsPage_ion_item_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DocsPage_ion_item_17_Template_ion_item_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const item_r2 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.view(item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DocsPage_ion_item_17_ion_badge_3_Template, 2, 2, "ion-badge", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, DocsPage_ion_item_17_ng_container_4_Template, 2, 1, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, DocsPage_ion_item_17_ion_icon_7_Template, 1, 0, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const isOdd_r3 = ctx.odd;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("odd", isOdd_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", item_r2.Visto > 0 ? "doc-read" : "doc-unread");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r2.IdTema != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", item_r2.Etiquetas.split("]["));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r2.Nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.esReciente(item_r2.FechaPublicacion));
  }
}

function DocsPage_section_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

class DocsPage {
  constructor(router, navParamService, proveedor, proveedorLogout, alertCtrl, loadingCtrl, actionSheetCtrl, storage, datePipe) {
    this.router = router;
    this.navParamService = navParamService;
    this.proveedor = proveedor;
    this.proveedorLogout = proveedorLogout;
    this.alertCtrl = alertCtrl;
    this.loadingCtrl = loadingCtrl;
    this.actionSheetCtrl = actionSheetCtrl;
    this.storage = storage;
    this.datePipe = datePipe;
    this.usuario = [];
    this.searchQuery = '';
    this.docs = "docs";
    this.isAscendic = true;
    this.currentDate = new Date();
    this.lastMonthDate = new Date(new Date().setMonth(new Date().getMonth() - 1));
  }

  ngOnInit() {//this.initializeItems();
  }

  ionViewWillEnter() {
    this.initializeItems();
  } // ionViewDidLoad() {
  //   this.initializeItems();
  // }


  initializeItems() {
    var _this = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingCtrl.create({
        message: "Cargando...",
        duration: 500
      });
      yield loading.present(); // Se obtienen el id del curso de la memoria

      _this.storage.get('idCurso').then(val => {
        if (val != null && val != undefined) {
          _this.idCurso = val;
        } else {
          // Si no se han recuperado los datos se vuelve a la página de login
          loading.dismiss();

          _this.proveedorLogout.logout();
        }
      }); // Se obtiene el mes de acceso al curso de la memoria


      _this.storage.get('mesAcceso').then(val => {
        if (val != null && val != undefined) {
          _this.mesAcceso = val;
        } else {
          // Si no se han recuperado los datos se vuelve a la página de login
          loading.dismiss();

          _this.proveedorLogout.logout();
        }
      }); // Se obtienen los datos del usuario de la memoria


      _this.storage.get('usuario').then(val => {
        if (val != null && val != undefined) {
          _this.usuario = JSON.parse(val); //this.proveedor.consultarDocsCurso(this.usuario.Mensaje.AuthorizationToken, this.idCurso)

          _this.proveedor.consultarDocsCursoMes(_this.usuario.Mensaje.AuthorizationToken, _this.idCurso, _this.mesAcceso).subscribe(data => {
            _this.parseJson(data);
          }, error => {
            console.log(error);
          }, () => {
            loading.dismiss();
          });
        } else {
          // Si no se han recuperado los datos se vuelve a la página de login
          loading.dismiss();

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

      for (let i = 0; i < jsonArray.length; i++) {
        let jsonObject = jsonArray[i];
        this.items.push(jsonObject);
        this.allitems.push(jsonObject);
      }
    } // Acceso denegado
    else if (data.Error == -10) {
      this.proveedorLogout.logout();
    } else {
      this.items = []; //this.alert('Sin Documentos', 'Este curso no contiene documentos');      
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
          return item.Nombre.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.IdTema == val;
        });
      }
    }
  }

  view(item) {
    this.marcarComoVisto(item.ID); //this.navCtrl.push(DocViewerPage, {item: item});

    this.navParamService.setNavData(item);
    this.router.navigate(['/doc-viewer']);
  }

  viewFancy(item, id) {
    var url;

    if (item.Fuente == "local") {
      // VISUALIZACIÓN
      url = "http://aulavirtualctp.com/Academias/VisorDocumentos/Web/ViewerMobile.aspx?file=" + item.ID; // DESCARGA
      // TODO: Comprobar si la descarga está habilitada y si es encriptado o no
      //this.url = "http://aulavirtualctp.com/Academias/docCurso.ashx?Id=" + this.item.ID;      
    } else if (item.Fuente == "dropbox") {
      url = item.URL + "&raw=1";
    } else if (item.Fuente == "genially") {
      url = item.URL;
    }

    _fancyapps_ui__WEBPACK_IMPORTED_MODULE_1__.Fancybox.show( // Array containing gallery items
    [// Gallery item
    {
      src: url,
      type: "iframe",
      preload: false,
      protect: true,
      caption: item.Nombre
    }], // Gallery options
    {
      mainClass: "myFancybox"
    });
    this.marcarComoVisto(id);
  }

  marcarComoVisto(idDoc) {
    // console.log(idDoc);
    // console.log(this.usuario.Mensaje.AuthorizationToken);
    // Se marca el documento como visto en base de datos
    this.proveedor.marcarDocVisto(this.usuario.Mensaje.AuthorizationToken, idDoc).subscribe( //(data)=>{console.log(data);},
    data => {}, error => {
      console.log(error);
    });
  }

  ayuda() {
    //this.navCtrl.push(FaqPage);
    this.router.navigate(['/faq']);
  }

  filtro() {
    var _this2 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this2.actionSheetCtrl.create({
        header: 'Filtrar por:',
        buttons: [{
          text: 'Todos',
          handler: () => {
            _this2.items = _this2.allitems;
          }
        }, {
          text: 'Vistos',
          icon: 'eye',
          handler: () => {
            _this2.items = _this2.allitems;
            _this2.items = _this2.items.filter(item => {
              return item.Visto == 1;
            });
          }
        }, {
          text: 'No Vistos',
          icon: 'eye-off',
          handler: () => {
            _this2.items = _this2.allitems;
            _this2.items = _this2.items.filter(item => {
              return item.Visto == 0;
            });
          }
        }, {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {}
        }]
      });
      yield actionSheet.present();
    })();
  }

  ordenar() {
    var _this3 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this3.actionSheetCtrl.create({
        header: 'Ordenar por:',
        buttons: [{
          text: 'Título',
          icon: 'text',
          handler: () => {
            _this3.isAscendic ? _this3.ordenarTituloASC() : _this3.ordenarTituloDESC();
          }
        }, {
          text: 'Tema',
          icon: 'book-outline',
          handler: () => {
            _this3.isAscendic ? _this3.ordenarTemaASC() : _this3.ordenarTemaDESC();
          }
        }, {
          text: 'Fecha',
          icon: 'calendar-outline',
          handler: () => {
            _this3.isAscendic ? _this3.ordenarFechaASC() : _this3.ordenarFechaDESC();
          }
        }, {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {}
        }]
      });
      yield actionSheet.present();
    })();
  }

  ordenarTituloASC() {
    this.isAscendic = false;
    this.items = this.items.sort((a, b) => {
      if (a.Nombre < b.Nombre) {
        return 1;
      }

      if (a.Nombre > b.Nombre) {
        return -1;
      }

      return 0;
    });
  }

  ordenarTituloDESC() {
    this.isAscendic = true;
    this.items = this.items.sort((a, b) => {
      if (a.Nombre > b.Nombre) {
        return 1;
      }

      if (a.Nombre < b.Nombre) {
        return -1;
      }

      return 0;
    });
  }

  ordenarTemaASC() {
    this.isAscendic = false;
    this.items = this.items.sort((a, b) => {
      if (a.IdTema < b.IdTema) {
        return 1;
      }

      if (a.IdTema > b.IdTema) {
        return -1;
      }

      return 0;
    });
  }

  ordenarTemaDESC() {
    this.isAscendic = true;
    this.items = this.items.sort((a, b) => {
      if (a.IdTema > b.IdTema) {
        return 1;
      }

      if (a.IdTema < b.IdTema) {
        return -1;
      }

      return 0;
    });
  }

  ordenarFechaASC() {
    this.isAscendic = false;
    this.items = this.items.sort((a, b) => {
      if (this.esMayor(a.FechaPublicacion, b.FechaPublicacion) === false) {
        return 1;
      }

      if (this.esMayor(a.FechaPublicacion, b.FechaPublicacion) === true) {
        return -1;
      }

      return 0;
    });
  }

  ordenarFechaDESC() {
    this.isAscendic = true;
    this.items = this.items.sort((a, b) => {
      if (this.esMayor(a.FechaPublicacion, b.FechaPublicacion) === true) {
        return 1;
      }

      if (this.esMayor(a.FechaPublicacion, b.FechaPublicacion) === false) {
        return -1;
      }

      return 0;
    });
  }

  esReciente(date) {
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

  esMayor(date1, date2) {
    //return dateString1 >= dateString2 // sólo funciona con formato YYYY/MM/DD y MM/DD/YYY
    var parts1 = date1.split('/');
    var parts2 = date2.split('/');
    ;
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

  segmentChanged(ev) {
    switch (ev.detail.value) {
      case 'docs':
        this.items = this.allitems;
        break;

      case 'vistos':
        this.items = this.allitems;
        this.items = this.items.filter(item => {
          return item.Visto == 1;
        });
        break;

      case 'no-vistos':
        this.items = this.allitems;
        this.items = this.items.filter(item => {
          return item.Visto == 0;
        });
        break;
    }
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

DocsPage.ɵfac = function DocsPage_Factory(t) {
  return new (t || DocsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_navparam_service__WEBPACK_IMPORTED_MODULE_2__.NavparamService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_providers_aulavirtualrest__WEBPACK_IMPORTED_MODULE_3__.AulavirtualrestProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_providers_logout__WEBPACK_IMPORTED_MODULE_4__.LogoutProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__.Storage), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe));
};

DocsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: DocsPage,
  selectors: [["app-docs"]],
  decls: 19,
  vars: 5,
  consts: [["color", "primary", 1, "ion-text-center"], ["slot", "primary"], [3, "scrollY"], ["itemSize", "56", "minBufferPx", "900", "maxBufferPx", "1350"], [3, "ngModel", "ngModelChange", "ionChange"], ["value", "docs"], ["name", "document-outline"], ["value", "no-vistos"], ["name", "eye-off-outline"], ["value", "vistos"], ["name", "eye-outline"], [3, "ngSwitch"], ["placeholder", "Buscar por t\u00EDtulo, etiqueta o tema", 3, "ionInput"], ["icon-start", "", "button", "true", 3, "odd", "click", 4, "cdkVirtualFor", "cdkVirtualForOf"], ["class", "ion-padding ion-text-center", 4, "ngIf"], ["icon-start", "", "button", "true", 3, "click"], ["slot", "start", "name", "document", 3, "ngClass"], [1, "ion-text-wrap"], ["class", "tema", 3, "ngClass", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["name", "time-outline", "slot", "end", 4, "ngIf"], [1, "tema", 3, "ngClass"], ["class", "etiqueta", "color", "light", 4, "ngIf"], ["color", "light", 1, "etiqueta"], ["name", "time-outline", "slot", "end"], [1, "ion-padding", "ion-text-center"], ["width", "200", "src", "../assets/imgs/empty.png"]],
  template: function DocsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Documentos");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-content", 2)(6, "cdk-virtual-scroll-viewport", 3)(7, "ion-segment", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DocsPage_Template_ion_segment_ngModelChange_7_listener($event) {
        return ctx.docs = $event;
      })("ionChange", function DocsPage_Template_ion_segment_ionChange_7_listener($event) {
        return ctx.segmentChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-segment-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "ion-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-segment-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-segment-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "ion-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 11)(15, "ion-list")(16, "ion-searchbar", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionInput", function DocsPage_Template_ion_searchbar_ionInput_16_listener($event) {
        return ctx.getItems($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, DocsPage_ion_item_17_Template, 8, 7, "ion-item", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, DocsPage_section_18_Template, 2, 0, "section", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("scrollY", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.docs);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitch", ctx.docs);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cdkVirtualForOf", ctx.items);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.items != null && ctx.items.length < 1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgSwitch, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.TextValueAccessor, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__.CdkFixedSizeVirtualScroll, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__.CdkVirtualForOf, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__.CdkVirtualScrollViewport],
  styles: [".tema[_ngcontent-%COMP%] {\n  font-size: x-small;\n  margin-right: 5px;\n}\n\n.etiqueta[_ngcontent-%COMP%] {\n  color: light;\n  font-weight: bold;\n  font-size: x-small;\n  margin-right: 5px;\n}\n\n.doc-read[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-size: larger !important;\n  vertical-align: -webkit-baseline-middle;\n}\n\n.doc-unread[_ngcontent-%COMP%] {\n  color: lightgrey;\n  font-size: larger !important;\n  vertical-align: -webkit-baseline-middle;\n}\n\n.tema-visible[_ngcontent-%COMP%] {\n  visibility: visible !important;\n}\n\n.tema-hidden[_ngcontent-%COMP%] {\n  visibility: hidden !important;\n}\n\ncdk-virtual-scroll-viewport[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.odd[_ngcontent-%COMP%] {\n  --ion-item-background: var(--ion-color-light) ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQU8sa0JBQUE7RUFBbUIsaUJBQUE7QUFHMUI7O0FBRkE7RUFBVyxZQUFBO0VBQVksaUJBQUE7RUFBbUIsa0JBQUE7RUFBbUIsaUJBQUE7QUFTN0Q7O0FBUEE7RUFBWSwrQkFBQTtFQUFpQyw0QkFBQTtFQUE4Qix1Q0FBQTtBQWEzRTs7QUFaQTtFQUFjLGdCQUFBO0VBQWtCLDRCQUFBO0VBQThCLHVDQUFBO0FBa0I5RDs7QUFoQkE7RUFBZ0IsOEJBQUE7QUFvQmhCOztBQW5CQTtFQUFlLDZCQUFBO0FBdUJmOztBQXJCQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBd0JKOztBQXJCQTtFQUNJLDhDQUFBO0FBd0JKIiwiZmlsZSI6ImRvY3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlbWEge2ZvbnQtc2l6ZTogeC1zbWFsbDttYXJnaW4tcmlnaHQ6IDVweDt9XG4uZXRpcXVldGEge2NvbG9yOmxpZ2h0O2ZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IHgtc21hbGw7bWFyZ2luLXJpZ2h0OiA1cHg7fVxuXG4uZG9jLXJlYWQgeyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyBmb250LXNpemU6IGxhcmdlciAhaW1wb3J0YW50OyB2ZXJ0aWNhbC1hbGlnbjogLXdlYmtpdC1iYXNlbGluZS1taWRkbGU7fVxuLmRvYy11bnJlYWQgeyBjb2xvcjogbGlnaHRncmV5OyBmb250LXNpemU6IGxhcmdlciAhaW1wb3J0YW50OyB2ZXJ0aWNhbC1hbGlnbjogLXdlYmtpdC1iYXNlbGluZS1taWRkbGU7fVxuXG4udGVtYS12aXNpYmxlIHsgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50fVxuLnRlbWEtaGlkZGVuIHsgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnR9XG5cbmNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ub2Rke1xuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KVxufSJdfQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_docs_docs_module_ts.js.map