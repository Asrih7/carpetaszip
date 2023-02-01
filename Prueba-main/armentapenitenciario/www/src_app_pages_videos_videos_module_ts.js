"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_videos_videos_module_ts"],{

/***/ 9215:
/*!*******************************************************!*\
  !*** ./src/app/pages/videos/videos-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideosPageRoutingModule": () => (/* binding */ VideosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _videos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videos.page */ 3562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _videos_page__WEBPACK_IMPORTED_MODULE_0__.VideosPage
    }
];
class VideosPageRoutingModule {
}
VideosPageRoutingModule.ɵfac = function VideosPageRoutingModule_Factory(t) { return new (t || VideosPageRoutingModule)(); };
VideosPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: VideosPageRoutingModule });
VideosPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VideosPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 9642:
/*!***********************************************!*\
  !*** ./src/app/pages/videos/videos.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideosPageModule": () => (/* binding */ VideosPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ 6328);
/* harmony import */ var _videos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videos-routing.module */ 9215);
/* harmony import */ var _videos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videos.page */ 3562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);







class VideosPageModule {
}
VideosPageModule.ɵfac = function VideosPageModule_Factory(t) { return new (t || VideosPageModule)(); };
VideosPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: VideosPageModule });
VideosPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__.ScrollingModule,
        _videos_routing_module__WEBPACK_IMPORTED_MODULE_0__.VideosPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](VideosPageModule, { declarations: [_videos_page__WEBPACK_IMPORTED_MODULE_1__.VideosPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__.ScrollingModule,
        _videos_routing_module__WEBPACK_IMPORTED_MODULE_0__.VideosPageRoutingModule] }); })();


/***/ }),

/***/ 3562:
/*!*********************************************!*\
  !*** ./src/app/pages/videos/videos.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideosPage": () => (/* binding */ VideosPage)
/* harmony export */ });
/* harmony import */ var _Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fancyapps/ui */ 1041);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 6549);
/* harmony import */ var capacitor_video_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! capacitor-video-player */ 3935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_navparam_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/navparam.service */ 7495);
/* harmony import */ var _providers_aulavirtualrest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/aulavirtualrest */ 4313);
/* harmony import */ var _providers_logout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/logout */ 8599);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var _awesome_cordova_plugins_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/streaming-media/ngx */ 448);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/scrolling */ 6328);



















function VideosPage_ion_back_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-back-button", 20);
  }
}

function VideosPage_ion_title_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "V\u00EDdeos");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function VideosPage_ion_title_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Clases");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function VideosPage_ion_icon_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-icon", 21);
  }
}

function VideosPage_ion_icon_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-icon", 22);
  }
}

function VideosPage_ion_item_21_ion_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-icon", 30);
  }

  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", item_r7.Visto > 0 ? "video-viewed" : "video-unviewed");
  }
}

function VideosPage_ion_item_21_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-icon", 31);
  }

  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", item_r7.Visto > 0 ? "video-viewed" : "video-unviewed");
  }
}

function VideosPage_ion_item_21_ion_badge_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-badge", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", item_r7.IdTema != "" ? "tema-visible" : "tema-hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Tema ", item_r7.IdTema, "");
  }
}

function VideosPage_ion_item_21_ng_container_5_ion_badge_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-badge", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const etiqueta_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", etiqueta_r17, " ");
  }
}

function VideosPage_ion_item_21_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, VideosPage_ion_item_21_ng_container_5_ion_badge_1_Template, 2, 1, "ion-badge", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const etiqueta_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", etiqueta_r17 != "");
  }
}

function VideosPage_ion_item_21_ion_icon_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-icon", 35);
  }
}

function VideosPage_ion_item_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function VideosPage_ion_item_21_Template_ion_item_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21);
      const item_r7 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r20.play(item_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, VideosPage_ion_item_21_ion_icon_1_Template, 1, 1, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, VideosPage_ion_item_21_ion_icon_2_Template, 1, 1, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ion-label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, VideosPage_ion_item_21_ion_badge_4_Template, 2, 2, "ion-badge", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, VideosPage_ion_item_21_ng_container_5_Template, 2, 1, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, VideosPage_ion_item_21_ion_icon_8_Template, 1, 0, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const isOdd_r8 = ctx.odd;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("odd", isOdd_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.clases === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.clases === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r7.IdTema != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", item_r7.Etiquetas.split("]["));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r7.Nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.esReciente(item_r7.FechaPublicacion));
  }
}

function VideosPage_section_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

class VideosPage {
  constructor(router, navParamService, proveedor, proveedorLogout, alertCtrl, loadingCtrl, actionSheetCtrl, storage, streamingMedia, datePipe) {
    this.router = router;
    this.navParamService = navParamService;
    this.proveedor = proveedor;
    this.proveedorLogout = proveedorLogout;
    this.alertCtrl = alertCtrl;
    this.loadingCtrl = loadingCtrl;
    this.actionSheetCtrl = actionSheetCtrl;
    this.storage = storage;
    this.streamingMedia = streamingMedia;
    this.datePipe = datePipe;
    this.usuario = [];
    this.videos = "videos";
    this.searchQuery = '';
    this.searchQueryClases = '';
    this.clases = false;
    this.isAscendic = true;
    this.currentDate = new Date();
    this.lastMonthDate = new Date(new Date().setMonth(new Date().getMonth() - 1));
    this.clases = this.navParamService.getNavData() == 'Clases';
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationStart)).subscribe(route => {
      // console.log('Route: '+route.url)
      if (route.url == '/tabs/videos') {
        this.initialize();
        this.clases = false;
      }
    });
  }

  ionViewWillEnter() {
    this.initialize();
  }

  ngAfterViewInit() {
    // Initialise the video plugin player
    if (_capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Capacitor.isNativePlatform) {
      this.videoPlayer = capacitor_video_player__WEBPACK_IMPORTED_MODULE_3__.CapacitorVideoPlayer;
    } else {
      this.videoPlayer = capacitor_video_player__WEBPACK_IMPORTED_MODULE_3__.CapacitorVideoPlayer;
    }
  } // ionViewDidLoad() {
  //   this.initialize();
  // }


  initialize() {
    // Se cargan los vídeos
    if (this.searchQuery == '') {
      this.initializeItems();
    } // Se cargan las clases


    if (this.searchQueryClases == '') {
      this.initializeItemsClases();
    }
  } // VIDEOS


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
          _this.proveedorLogout.logout();
        }
      }); // Se obtiene el mes de acceso al curso de la memoria


      _this.storage.get('mesAcceso').then(val => {
        if (val != null && val != undefined) {
          _this.mesAcceso = val;
        } else {
          // Si no se han recuperado los datos se vuelve a la página de login
          _this.proveedorLogout.logout();
        }
      }); // Se obtienen los datos del usuario de la memoria


      _this.storage.get('usuario').then(val => {
        if (val != null && val != undefined) {
          _this.usuario = JSON.parse(val);

          if (_this.clases) {
            _this.proveedor.consultarVideosClasesCurso(_this.usuario.Mensaje.AuthorizationToken, _this.idCurso).subscribe(data => {
              _this.parseJson(data);
            }, error => {
              console.log(error);
            }, () => {
              loading.dismiss();
            });
          } else {
            //this.proveedor.consultarVideosCurso(this.usuario.Mensaje.AuthorizationToken, this.idCurso)
            _this.proveedor.consultarVideosCursoMes(_this.usuario.Mensaje.AuthorizationToken, _this.idCurso, _this.mesAcceso).subscribe(data => {
              _this.parseJson(data);
            }, error => {
              console.log(error);
            }, () => {
              loading.dismiss();
            });
          }
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

      for (let i = 0; i < jsonArray.length; i++) {
        let jsonObject = jsonArray[i];
        this.items.push(jsonObject);
        this.allitems.push(jsonObject);
      }
    } // Acceso denegado
    else if (data.Error == -10) {
      this.proveedorLogout.logout();
    } else {
      this.items = [];
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
  } // CLASES


  initializeItemsClases() {
    // const loader = this.loadingCtrl.create({
    //   content: "Cargando..."
    // });
    // loader.present();
    // Se obtienen el id del curso de la memoria
    this.storage.get('idCurso').then(val => {
      if (val != null && val != undefined) {
        this.idCurso = val;
      } else {
        // Si no se han recuperado los datos se vuelve a la página de login
        this.proveedorLogout.logout();
      }
    }); // Se obtienen los datos del usuario de la memoria

    this.storage.get('usuario').then(val => {
      if (val != null && val != undefined) {
        this.usuario = JSON.parse(val);
        this.proveedor.consultarVideosClasesCurso(this.usuario.Mensaje.AuthorizationToken, this.idCurso).subscribe(data => {
          this.parseClaseJson(data);
        }, error => {
          console.log(error);
        } //,
        // () =>{loader.dismiss()}
        );
      } else {
        // Si no se han recuperado los datos se vuelve a la página de login
        this.proveedorLogout.logout();
      }
    });
  }

  parseClaseJson(data) {
    if (data.Error == 0) {
      let jsonArray = data.Mensaje;
      this.itemsClases = [];
      this.allitemsClases = [];

      for (let i = 0; i < jsonArray.length; i++) {
        let jsonObject = jsonArray[i];
        this.itemsClases.push(jsonObject);
        this.allitemsClases.push(jsonObject);
      }
    } // Acceso denegado
    else if (data.Error == -10) {
      this.proveedorLogout.logout();
    } else {
      this.itemsClases = []; // const alert = this.alertCtrl.create({
      //   title: 'Sin Clases',
      //   subTitle: 'Este curso no contiene clases',
      //   buttons: ['OK']
      // });
      // alert.present();
    }
  }

  getItemsClases(ev) {
    if (this.allitemsClases != null && this.allitemsClases != undefined) {
      // Reset items back to all of the items
      this.itemsClases = this.allitemsClases;
      this.searchQueryClases = ''; // set val to the value of the searchbar

      const val = ev.target.value; // if the value is an empty string don't filter the items

      if (val && val.trim() != '') {
        this.searchQueryClases = val;
        this.itemsClases = this.itemsClases.filter(itemClase => {
          return itemClase.Nombre.toLowerCase().indexOf(val.toLowerCase()) > -1 || itemClase.IdTema == val;
        });
      }
    }
  }

  play(item) {
    this.proveedor.obtenerUrlVideo(this.usuario.Mensaje.AuthorizationToken, item.ID, this.idCurso).subscribe(data => {
      this.playVideo(data, item);
    }, //(data)=>{this.openVideoPlayer(data, item);},
    //(data)=>{this.showVideo(data, item);},
    //(data)=>{this.playMedia(data, item);},
    error => {
      console.log(error);
    });
  }

  playVideo(data, item) {
    var _this2 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //console.log(data.Mensaje["URL"]);
      //console.log(data.Mensaje);
      //console.log(item);
      if (data.Error == 0) {
        _this2.marcarComoVisto(item.ID);

        if (item.Tipo === "local") {
          // Show the player fullscreen
          yield _this2.videoPlayer.initPlayer({
            mode: 'fullscreen',
            url: data.Mensaje["URL"],
            playerId: 'fullscreenVideos',
            componentTag: 'app-videos'
          });
        } else {
          //this.navParamService.setNavData(data.Mensaje["URL"]);
          //this.navParamService.setNavData(JSON.stringify({titulo: item.Nombre, tipo: item.Tipo, url: data.Mensaje["URL"]}));
          _this2.navParamService.setNavData(JSON.stringify({
            titulo: item.Nombre,
            id: item.ID
          }));

          _this2.router.navigate(['/video-player']);
        }
      }
    })();
  }

  openVideoPlayer(data, item) {
    if (data.Error == 0) {
      this.marcarComoVisto(item.ID); //console.log(item.Nombre);
      //console.log(data.Mensaje["URL"]);

      this.navParamService.setNavData(data.Mensaje["URL"]); //this.navParamService.setNavData(JSON.stringify({titulo: item.Nombre, url: data.Mensaje["URL"]}));      

      this.router.navigate(['/video-player']);
    }
  }

  showVideo(data, item) {
    if (data.Error == 0) {
      this.marcarComoVisto(item.ID);
      _fancyapps_ui__WEBPACK_IMPORTED_MODULE_1__.Fancybox.show( // Array containing gallery items
      [// Gallery item
      {
        src: data.Mensaje["URL"] + "#toolbar=0",
        type: "iframe",
        preload: false,
        protect: true,
        caption: item.Nombre,
        placeFocusBack: false
      }], // Gallery options
      {
        mainClass: "myFancybox"
      });
    }
  }

  playMedia(data, item) {
    this.marcarComoVisto(item.ID);
    let options = {
      successCallback: () => {
        console.log('Video played');
      },
      errorCallback: e => {
        console.log('Error streaming');
      },
      orientation: 'landscape',
      shouldAutoClose: true,
      controls: false
    };
    this.streamingMedia.playVideo(data.Mensaje["URL"], options);
  }

  marcarComoVisto(idVideo) {
    //console.log('marcar como visto: ' + idVideo)
    // Se marca el video como visto en base de datos
    this.proveedor.marcarVideoVisto(this.usuario.Mensaje.AuthorizationToken, idVideo).subscribe( // (data)=>{console.log(data);},
    data => {}, error => {
      console.log(error);
    });
  }

  ayuda() {
    //this.navCtrl.push(FaqPage);
    this.router.navigate(['/faq']);
  }

  filtro() {
    var _this3 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this3.actionSheetCtrl.create({
        header: 'Filtrar por:',
        buttons: [{
          text: 'Todos',
          handler: () => {
            _this3.items = _this3.allitems;
          }
        }, {
          text: 'Vistos',
          icon: 'eye',
          handler: () => {
            _this3.items = _this3.allitems;
            _this3.items = _this3.items.filter(item => {
              return item.Visto == 1;
            });
          }
        }, {
          text: 'No Vistos',
          icon: 'eye-off',
          handler: () => {
            _this3.items = _this3.allitems;
            _this3.items = _this3.items.filter(item => {
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
    var _this4 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this4.actionSheetCtrl.create({
        header: 'Ordenar por:',
        buttons: [{
          text: 'Título',
          icon: 'text',
          handler: () => {
            _this4.isAscendic ? _this4.ordenarTituloASC() : _this4.ordenarTituloDESC();
          }
        }, {
          text: 'Tema',
          icon: 'book-outline',
          handler: () => {
            _this4.isAscendic ? _this4.ordenarTemaASC() : _this4.ordenarTemaDESC();
          }
        }, {
          text: 'Fecha',
          icon: 'calendar-outline',
          handler: () => {
            _this4.isAscendic ? _this4.ordenarFechaASC() : _this4.ordenarFechaDESC();
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
      case 'videos':
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

VideosPage.ɵfac = function VideosPage_Factory(t) {
  return new (t || VideosPage)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_navparam_service__WEBPACK_IMPORTED_MODULE_4__.NavparamService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_providers_aulavirtualrest__WEBPACK_IMPORTED_MODULE_5__.AulavirtualrestProvider), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_providers_logout__WEBPACK_IMPORTED_MODULE_6__.LogoutProvider), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_12__.Storage), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_awesome_cordova_plugins_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_7__.StreamingMedia), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe));
};

VideosPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: VideosPage,
  selectors: [["app-videos"]],
  decls: 23,
  vars: 10,
  consts: [["color", "primary", 1, "ion-text-center"], ["slot", "start"], ["text", "Volver", 4, "ngIf"], ["slot", "primary"], [4, "ngIf"], [3, "scrollY"], ["itemSize", "56", "minBufferPx", "900", "maxBufferPx", "1350"], [3, "ngModel", "ngModelChange", "ionChange"], ["layout", "icon-start", "value", "videos"], ["name", "logo-youtube", 4, "ngIf"], ["name", "easel-outline", 4, "ngIf"], ["value", "no-vistos"], ["name", "eye-off-outline"], ["value", "vistos"], ["name", "eye-outline"], ["id", "fullscreenVideos", "slot", "fixed"], [3, "ngSwitch"], ["placeholder", "Buscar por t\u00EDtulo o tema", 3, "ionInput"], ["icon-start", "", "button", "true", 3, "odd", "click", 4, "cdkVirtualFor", "cdkVirtualForOf"], ["class", "ion-padding ion-text-center", 4, "ngIf"], ["text", "Volver"], ["name", "logo-youtube"], ["name", "easel-outline"], ["icon-start", "", "button", "true", 3, "click"], ["slot", "start", "name", "logo-youtube", 3, "ngClass", 4, "ngIf"], ["slot", "start", "name", "easel-outline", 3, "ngClass", 4, "ngIf"], [1, "ion-text-wrap"], ["class", "tema", "slot", "end", 3, "ngClass", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["name", "time-outline", "slot", "end", 4, "ngIf"], ["slot", "start", "name", "logo-youtube", 3, "ngClass"], ["slot", "start", "name", "easel-outline", 3, "ngClass"], ["slot", "end", 1, "tema", 3, "ngClass"], ["class", "etiqueta", "color", "light", 4, "ngIf"], ["color", "light", 1, "etiqueta"], ["name", "time-outline", "slot", "end"], [1, "ion-padding", "ion-text-center"], ["width", "200", "src", "../assets/imgs/empty.png"]],
  template: function VideosPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, VideosPage_ion_back_button_3_Template, 1, 0, "ion-back-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "ion-buttons", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, VideosPage_ion_title_5_Template, 2, 0, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, VideosPage_ion_title_6_Template, 2, 0, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "ion-content", 5)(8, "cdk-virtual-scroll-viewport", 6)(9, "ion-segment", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function VideosPage_Template_ion_segment_ngModelChange_9_listener($event) {
        return ctx.videos = $event;
      })("ionChange", function VideosPage_Template_ion_segment_ionChange_9_listener($event) {
        return ctx.segmentChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "ion-segment-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, VideosPage_ion_icon_11_Template, 1, 0, "ion-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, VideosPage_ion_icon_12_Template, 1, 0, "ion-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "ion-segment-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "ion-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "ion-segment-button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "ion-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 16)(19, "ion-list")(20, "ion-searchbar", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ionInput", function VideosPage_Template_ion_searchbar_ionInput_20_listener($event) {
        return ctx.getItems($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, VideosPage_ion_item_21_Template, 9, 8, "ion-item", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, VideosPage_section_22_Template, 2, 0, "section", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.clases === true);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.clases === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.clases === true);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("scrollY", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.videos);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.clases === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.clases === true);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitch", ctx.videos);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("cdkVirtualForOf", ctx.items);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.items != null && ctx.items.length < 1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgSwitch, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonBackButtonDelegate, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__.CdkFixedSizeVirtualScroll, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__.CdkVirtualForOf, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__.CdkVirtualScrollViewport],
  styles: [".tema[_ngcontent-%COMP%] {\n  font-size: x-small;\n  margin-right: 5px;\n}\n\n.etiqueta[_ngcontent-%COMP%] {\n  color: light;\n  font-weight: bold;\n  font-size: x-small;\n  margin-right: 5px;\n}\n\n.video-viewed[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-size: larger !important;\n  vertical-align: -webkit-baseline-middle;\n}\n\n.video-unviewed[_ngcontent-%COMP%] {\n  color: lightgrey;\n  font-size: larger !important;\n  vertical-align: -webkit-baseline-middle;\n}\n\n.tema-visible[_ngcontent-%COMP%] {\n  visibility: visible !important;\n}\n\n.tema-hidden[_ngcontent-%COMP%] {\n  visibility: hidden !important;\n}\n\n.fancybox__content[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\ncdk-virtual-scroll-viewport[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.odd[_ngcontent-%COMP%] {\n  --ion-item-background: var(--ion-color-light) ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBTyxrQkFBQTtFQUFtQixpQkFBQTtBQUcxQjs7QUFGQTtFQUFXLFlBQUE7RUFBWSxpQkFBQTtFQUFtQixrQkFBQTtFQUFtQixpQkFBQTtBQVM3RDs7QUFQQTtFQUFnQiwrQkFBQTtFQUFpQyw0QkFBQTtFQUE4Qix1Q0FBQTtBQWEvRTs7QUFaQTtFQUFrQixnQkFBQTtFQUFrQiw0QkFBQTtFQUE4Qix1Q0FBQTtBQWtCbEU7O0FBaEJBO0VBQWdCLDhCQUFBO0FBb0JoQjs7QUFuQkE7RUFBZSw2QkFBQTtBQXVCZjs7QUFyQkE7RUFDSSxZQUFBO0FBd0JKOztBQXJCQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBd0JKOztBQXJCQTtFQUNJLDhDQUFBO0FBd0JKIiwiZmlsZSI6InZpZGVvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVtYSB7Zm9udC1zaXplOiB4LXNtYWxsO21hcmdpbi1yaWdodDogNXB4O31cbi5ldGlxdWV0YSB7Y29sb3I6bGlnaHQ7Zm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogeC1zbWFsbDttYXJnaW4tcmlnaHQ6IDVweDt9XG5cbi52aWRlby12aWV3ZWQgeyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyBmb250LXNpemU6IGxhcmdlciAhaW1wb3J0YW50OyB2ZXJ0aWNhbC1hbGlnbjogLXdlYmtpdC1iYXNlbGluZS1taWRkbGU7fVxuLnZpZGVvLXVudmlld2VkIHsgY29sb3I6IGxpZ2h0Z3JleTsgZm9udC1zaXplOiBsYXJnZXIgIWltcG9ydGFudDsgdmVydGljYWwtYWxpZ246IC13ZWJraXQtYmFzZWxpbmUtbWlkZGxlO31cblxuLnRlbWEtdmlzaWJsZSB7IHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudH1cbi50ZW1hLWhpZGRlbiB7IHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50fVxuXG4uZmFuY3lib3hfX2NvbnRlbnR7XG4gICAgcGFkZGluZzogMHB4OyAvLyByZW1vdmUgd2hpdGUgYm9yZGVyXG59XG5cbmNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ub2Rke1xuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KVxufSJdfQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_videos_videos_module_ts.js.map