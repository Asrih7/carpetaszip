"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_modules_modules_module_ts"],{

/***/ 1963:
/*!*********************************************************!*\
  !*** ./src/app/pages/modules/modules-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModulesPageRoutingModule": () => (/* binding */ ModulesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _modules_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules.page */ 1818);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _modules_page__WEBPACK_IMPORTED_MODULE_0__.ModulesPage
    }
];
class ModulesPageRoutingModule {
}
ModulesPageRoutingModule.ɵfac = function ModulesPageRoutingModule_Factory(t) { return new (t || ModulesPageRoutingModule)(); };
ModulesPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ModulesPageRoutingModule });
ModulesPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ModulesPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 9621:
/*!*************************************************!*\
  !*** ./src/app/pages/modules/modules.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModulesPageModule": () => (/* binding */ ModulesPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _modules_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules-routing.module */ 1963);
/* harmony import */ var _modules_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules.page */ 1818);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class ModulesPageModule {
}
ModulesPageModule.ɵfac = function ModulesPageModule_Factory(t) { return new (t || ModulesPageModule)(); };
ModulesPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ModulesPageModule });
ModulesPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _modules_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModulesPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ModulesPageModule, { declarations: [_modules_page__WEBPACK_IMPORTED_MODULE_1__.ModulesPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _modules_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModulesPageRoutingModule] }); })();


/***/ }),

/***/ 1818:
/*!***********************************************!*\
  !*** ./src/app/pages/modules/modules.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModulesPage": () => (/* binding */ ModulesPage)
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










function ModulesPage_ion_card_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ModulesPage_ion_card_6_Template_ion_card_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const i_r3 = restoredCtx.index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.irAModulo(ctx_r4.listaTemas[i_r3]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-card-header", 0)(2, "ion-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-card-content", 6)(7, "h3")(8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.listaTemas[i_r3].TituloBloque, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("TEMA ", ctx_r0.listaTemas[i_r3].IdTema, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.listaTemas[i_r3].Titulo);
  }
}

function ModulesPage_section_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

class ModulesPage {
  constructor(router, navParamService, proveedor, proveedorLogout, alertCtrl, loadingCtrl, storage) {
    this.router = router;
    this.navParamService = navParamService;
    this.proveedor = proveedor;
    this.proveedorLogout = proveedorLogout;
    this.alertCtrl = alertCtrl;
    this.loadingCtrl = loadingCtrl;
    this.storage = storage;
    this.searchQuery = '';
    this.usuario = [];
  }

  ngOnInit() {//this.initializeTemas();
  }

  ionViewWillEnter() {
    this.initializeTemas();
  }

  initializeTemas() {
    var _this = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingCtrl.create({
        message: "Cargando...",
        duration: 500
      });
      yield loading.present(); // Se obtiene el id del curso de la memoria

      _this.storage.get('idCurso').then(val => {
        if (val != null && val != undefined) {
          _this.idCurso = val;
        } else {
          // Si no se han recuperado los datos se vuelve a la página de login
          loading.dismiss();

          _this.proveedorLogout.logout();
        }
      }); // Se obtienen los datos del usuario de la memoria


      _this.storage.get('usuario').then(val => {
        if (val != null && val != undefined) {
          _this.usuario = JSON.parse(val); // Se consultan todos los módulos/temas del curso

          _this.proveedor.consultarModulos(_this.usuario.Mensaje.AuthorizationToken, _this.idCurso).subscribe(data => {
            _this.parseTemasJson(data);
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

  parseTemasJson(data) {
    var _this2 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (data.Error == 0) {
        let jsonArray = data.Mensaje;
        _this2.listaTemas = [];
        _this2.listaTemasTemp = [];

        for (let i = 0; i < jsonArray.length; i++) {
          let jsonObject = jsonArray[i];

          _this2.listaTemas.push(jsonObject);

          _this2.listaTemasTemp.push(jsonObject);
        }
      } // Acceso denegado
      else if (data.Error == -10) {
        _this2.proveedorLogout.logout();
      } else {
        _this2.listaTemas = [];
        const alert = yield _this2.alertCtrl.create({
          header: 'Sin Temas',
          message: 'Este curso no contiene temas',
          buttons: ['OK']
        });
        yield alert.present();
      }
    })();
  }

  getItems(ev) {
    if (this.listaTemasTemp != null && this.listaTemasTemp != undefined) {
      // Reset items back to all of the items
      this.listaTemas = this.listaTemasTemp; // set val to the value of the searchbar

      const val = ev.target.value; // if the value is an empty string don't filter the items

      if (val && val.trim() != '') {
        this.listaTemas = this.listaTemas.filter(item => {
          return item.Titulo.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.IdTema == val;
        });
      }
    }
  }

  irAModulo(modulo) {
    //this.navCtrl.push(ModuleDetailPage, {modulo: modulo});
    this.navParamService.setNavData(modulo);
    this.router.navigate(['/module-detail']);
  }

  ayuda() {
    //this.navCtrl.push(FaqPage);
    this.router.navigate(['/faq']);
  }

}

ModulesPage.ɵfac = function ModulesPage_Factory(t) {
  return new (t || ModulesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_navparam_service__WEBPACK_IMPORTED_MODULE_1__.NavparamService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_providers_aulavirtualrest__WEBPACK_IMPORTED_MODULE_2__.AulavirtualrestProvider), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_providers_logout__WEBPACK_IMPORTED_MODULE_3__.LogoutProvider), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage));
};

ModulesPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ModulesPage,
  selectors: [["app-modules"]],
  decls: 8,
  vars: 2,
  consts: [["color", "primary", 1, "ion-text-center"], ["fullscreen", ""], ["placeholder", "Buscar por tema o t\u00EDtulo", 3, "ionInput"], ["button", "true", 3, "click", 4, "ngFor", "ngForOf"], ["class", "ion-padding ion-text-center", 4, "ngIf"], ["button", "true", 3, "click"], [1, "ion-text-wrap"], [1, "ion-padding", "ion-text-center"], ["width", "200", "src", "../assets/imgs/empty.png"]],
  template: function ModulesPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Temario");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-content", 1)(5, "ion-searchbar", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ionInput", function ModulesPage_Template_ion_searchbar_ionInput_5_listener($event) {
        return ctx.getItems($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ModulesPage_ion_card_6_Template, 10, 3, "ion-card", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ModulesPage_section_7_Template, 2, 0, "section", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.listaTemas);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.listaTemas != null && ctx.listaTemas.length < 1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.TextValueAccessor],
  styles: ["h3[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n\nion-card-header[_ngcontent-%COMP%] {\n  padding: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUksZUFBQTtBQUVKOztBQUFBO0VBQ0ksd0JBQUE7QUFHSiIsImZpbGUiOiJtb2R1bGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHttYXJnaW4tdG9wOiAxZW07fVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbn0iXX0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_modules_modules_module_ts.js.map