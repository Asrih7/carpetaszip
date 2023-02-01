"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_test_test_module_ts"],{

/***/ 4385:
/*!***************************************************!*\
  !*** ./src/app/pages/test/test-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestPageRoutingModule": () => (/* binding */ TestPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.page */ 2941);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _test_page__WEBPACK_IMPORTED_MODULE_0__.TestPage
    }
];
class TestPageRoutingModule {
}
TestPageRoutingModule.ɵfac = function TestPageRoutingModule_Factory(t) { return new (t || TestPageRoutingModule)(); };
TestPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TestPageRoutingModule });
TestPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TestPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5011:
/*!*******************************************!*\
  !*** ./src/app/pages/test/test.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestPageModule": () => (/* binding */ TestPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ 6328);
/* harmony import */ var _test_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test-routing.module */ 4385);
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.page */ 2941);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);







class TestPageModule {
}
TestPageModule.ɵfac = function TestPageModule_Factory(t) { return new (t || TestPageModule)(); };
TestPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TestPageModule });
TestPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__.ScrollingModule,
        _test_routing_module__WEBPACK_IMPORTED_MODULE_0__.TestPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TestPageModule, { declarations: [_test_page__WEBPACK_IMPORTED_MODULE_1__.TestPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__.ScrollingModule,
        _test_routing_module__WEBPACK_IMPORTED_MODULE_0__.TestPageRoutingModule] }); })();


/***/ }),

/***/ 2941:
/*!*****************************************!*\
  !*** ./src/app/pages/test/test.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestPage": () => (/* binding */ TestPage)
/* harmony export */ });
/* harmony import */ var _Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_navparam_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/navparam.service */ 7495);
/* harmony import */ var _providers_aulavirtualrest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/aulavirtualrest */ 4313);
/* harmony import */ var _providers_logout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/logout */ 8599);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/scrolling */ 6328);














function TestPage_ion_back_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-back-button", 23);
  }
}

function TestPage_ion_title_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Test");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function TestPage_ion_title_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Simulacros");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function TestPage_ion_item_26_ion_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-icon", 38);
  }

  if (rf & 2) {
    const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r8.listaTest[i_r7].Realizado > 0 ? "test-done" : "test-undone");
  }
}

function TestPage_ion_item_26_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-icon", 39);
  }
}

function TestPage_ion_item_26_ng_container_6_ion_badge_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-badge", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const etiquetaTest_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", etiquetaTest_r18, " ");
  }
}

function TestPage_ion_item_26_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TestPage_ion_item_26_ng_container_6_ion_badge_1_Template, 2, 1, "ion-badge", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const etiquetaTest_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", etiquetaTest_r18 != "");
  }
}

function TestPage_ion_item_26_ion_icon_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-icon", 42);
  }
}

function TestPage_ion_item_26_ion_icon_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-icon", 43);
  }

  if (rf & 2) {
    const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r12.listaTest[i_r7].UltimoResultado < 5 ? "test-fail" : "test-pass");
  }
}

function TestPage_ion_item_26_label_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r13.listaTest[i_r7].UltimoResultado < 5 ? "test-fail" : "test-pass");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r13.listaTest[i_r7].UltimoResultado, " vs ");
  }
}

function TestPage_ion_item_26_ion_icon_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-icon", 44);
  }

  if (rf & 2) {
    const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r14.listaTest[i_r7].UltimoResultado < 5 ? "test-fail" : "test-pass");
  }
}

function TestPage_ion_item_26_label_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r15.listaTest[i_r7].UltimoResultado < 5 ? "test-fail" : "test-pass");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r15.listaTest[i_r7].Media);
  }
}

function TestPage_ion_item_26_ion_icon_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-icon", 45);
  }
}

function TestPage_ion_item_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TestPage_ion_item_26_Template_ion_item_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26);
      const i_r7 = restoredCtx.index;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r25.hacerTest(ctx_r25.listaTest[i_r7]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TestPage_ion_item_26_ion_icon_1_Template, 1, 1, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TestPage_ion_item_26_ion_icon_2_Template, 1, 0, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-label", 27)(4, "ion-badge", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, TestPage_ion_item_26_ng_container_6_Template, 2, 1, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, TestPage_ion_item_26_ion_icon_8_Template, 1, 0, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "section", 31)(11, "label")(12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " preguntas");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, TestPage_ion_item_26_ion_icon_20_Template, 1, 1, "ion-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, TestPage_ion_item_26_label_21_Template, 2, 2, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, TestPage_ion_item_26_ion_icon_22_Template, 1, 1, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, TestPage_ion_item_26_label_23_Template, 2, 2, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, TestPage_ion_item_26_ion_icon_24_Template, 1, 0, "ion-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const test_r5 = ctx.$implicit;
    const isOdd_r6 = ctx.odd;
    const i_r7 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("odd", isOdd_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.listaTest[i_r7].Pendiente == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.listaTest[i_r7].Pendiente > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.listaTest[i_r7].IdTema != "" ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Tema ", ctx_r3.listaTest[i_r7].IdTema, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", test_r5.Etiquetas.split("]["));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.listaTest[i_r7].Instrucciones != "" && ctx_r3.listaTest[i_r7].Instrucciones != " " && ctx_r3.listaTest[i_r7].Instrucciones != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.listaTest[i_r7].Nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.listaTest[i_r7].NumPreg);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.listaTest[i_r7].Limite > 0 ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.listaTest[i_r7].Limite > 0 ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r3.listaTest[i_r7].Realizado, "/", ctx_r3.listaTest[i_r7].Limite, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.listaTest[i_r7].Realizado > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.listaTest[i_r7].Realizado > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.listaTest[i_r7].Realizado > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.listaTest[i_r7].Realizado > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.esReciente(ctx_r3.listaTest[i_r7].FechaPublicacion));
  }
}

function TestPage_section_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

class TestPage {
  constructor(router, navParamService, proveedor, proveedorLogout, alertCtrl, loadingCtrl, actionSheetCtrl, storage, decimalPipe, datePipe) {
    this.router = router;
    this.navParamService = navParamService;
    this.proveedor = proveedor;
    this.proveedorLogout = proveedorLogout;
    this.alertCtrl = alertCtrl;
    this.loadingCtrl = loadingCtrl;
    this.actionSheetCtrl = actionSheetCtrl;
    this.storage = storage;
    this.decimalPipe = decimalPipe;
    this.datePipe = datePipe;
    this.usuario = [];
    this.searchQuery = '';
    this.searchQuerySimulacros = '';
    this.all = "all";
    this.done = "done";
    this.undone = "undone";
    this.paused = "paused";
    this.numMinutos = 0;
    this.numPreguntas = 0;
    this.continuar = 0;
    this.reload = true;
    this.simulacros = false;
    this.isAscendic = true;
    this.isRecent = true;
    this.currentDate = new Date();
    this.lastMonthDate = new Date(new Date().setMonth(new Date().getMonth() - 1));
    this.simulacros = this.navParamService.getNavData() == 'Simulacros';
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationStart)).subscribe(route => {
      //console.log('Route: '+route.url)
      if (route.url == '/tabs/test') {
        this.simulacros = false;
        this.initialize();
        this.reload = false;
      }
    });
  }

  ngOnInit() {//console.log('ngOnInit');
    // this.initialize();
    // this.mostrarMenu();    
  }

  ionViewWillEnter() {
    if (this.reload) {
      this.initialize();
    } //this.mostrarMenu();

  } // mostrarMenu(){
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
    this.initializeTest(); // Se obtiene el id de la oposición del curso de la memoria

    this.storage.get('idOposicion').then(val => {
      if (val != null && val != undefined) {
        this.idOposicion = val;
      } else {
        // Si no se han recuperado los datos se vuelve a la página de login
        this.proveedorLogout.logout();
      }
    });
  }

  initializeTest() {
    var _this = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingCtrl.create({
        message: "Cargando..."
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
          _this.usuario = JSON.parse(val); // Se consultan todos los test del curso
          //this.proveedor.consultarTestCurso(this.usuario.Mensaje.AuthorizationToken, this.idCurso)
          //console.log('curso: ' + this.idCurso);
          //console.log('mes: ' + this.mesAcceso);

          if (_this.simulacros) {
            _this.proveedor.consultarSimulacrosCursoMes(_this.usuario.Mensaje.AuthorizationToken, _this.idCurso, _this.mesAcceso).subscribe(data => {
              _this.parseListaTestJson(data);
            }, error => {
              console.log(error);
            }, () => {
              loading.dismiss();
            });
          } else {
            _this.proveedor.consultarTestCursoMes(_this.usuario.Mensaje.AuthorizationToken, _this.idCurso, _this.mesAcceso).subscribe(data => {
              _this.parseListaTestJson(data);
            }, error => {
              console.log(error);
            }, () => {
              loading.dismiss();
            });
          }
        } else {
          // Si no se han recuperado los datos se vuelve a la página de login
          loading.dismiss();

          _this.proveedorLogout.logout();
        }
      });
    })();
  }

  parseListaTestJson(data) {
    if (data.Error == 0) {
      let jsonArray = data.Mensaje;
      this.listaTest = [];
      this.listaTestTemp = [];

      for (let i = 0; i < jsonArray.length; i++) {
        let jsonObject = jsonArray[i];
        this.listaTest.push(jsonObject);
        this.listaTestTemp.push(jsonObject);
      } // // Se filtra por los no realizados
      // this.listaTest = this.listaTestTemp;
      //       this.listaTest = this.listaTest.filter((test) => {
      //         return ((test.Pendiente == 0 && test.Realizado == 0));
      //       })

    } // Acceso denegado
    else if (data.Error == -10) {
      this.proveedorLogout.logout();
    } else {
      this.listaTest = []; //this.alert('Sin Test', 'Este curso no contiene test de teoría');
    }
  }

  getTest(ev) {
    if (this.listaTestTemp != null && this.listaTestTemp != undefined) {
      // Reset items back to all of the items
      this.listaTest = this.listaTestTemp;
      this.searchQuery = ''; // set val to the value of the searchbar

      const val = ev.target.value; // if the value is an empty string don't filter the items

      if (val && val.trim() != '') {
        this.searchQuery = val;
        this.listaTest = this.listaTest.filter(item => {
          return item.Nombre.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.IdTema == val;
        });
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
        this.usuario = JSON.parse(val); // Se consultan los resultados del alumno

        this.proveedor.consultarResultadosCurso(this.usuario.Mensaje.AuthorizationToken, this.idCurso).subscribe(data => {
          this.parseResultadosJson(data);
        }, error => {
          console.log(error);
        });
      } // else{
      //   // Si no se han recuperado los datos se vuelve a la página de login
      //   this.logout();
      // }

    });
  }

  parseResultadosJson(data) {
    let jsonArray = data.Mensaje;
    this.listaResultados = [];

    for (let i = 0; i < jsonArray.length; i++) {
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
    if (item.Pendiente > 0) {
      // Se continúa
      this.continuar = 1; //this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas, continuar: this.continuar, origen: null});

      if (this.simulacros) this.navParamService.setNavData(JSON.stringify({
        idOposicion: this.idOposicion,
        test: item,
        numMinutos: this.numMinutos,
        numPreguntas: this.numPreguntas,
        continuar: this.continuar,
        origen: null,
        etiqueta: 'Simulacros',
        revisar: false
      }));else this.navParamService.setNavData(JSON.stringify({
        idOposicion: this.idOposicion,
        test: item,
        numMinutos: this.numMinutos,
        numPreguntas: this.numPreguntas,
        continuar: this.continuar,
        origen: null,
        etiqueta: null,
        revisar: false
      }));
      this.router.navigate(['/test-do']);
    } else {
      // Si es la primera vez que va a hacer el test
      if (item.Realizado == 0) {
        // Se inicializa el tiempo a cero
        this.continuar = 0;
        this.numMinutos = 0;
        this.numPreguntas = 0; //this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas, continuar: this.continuar, origen: null});

        if (this.simulacros) this.navParamService.setNavData(JSON.stringify({
          idOposicion: this.idOposicion,
          test: item,
          numMinutos: this.numMinutos,
          numPreguntas: this.numPreguntas,
          continuar: this.continuar,
          origen: null,
          etiqueta: 'Simulacros',
          revisar: false
        }));else this.navParamService.setNavData(JSON.stringify({
          idOposicion: this.idOposicion,
          test: item,
          numMinutos: this.numMinutos,
          numPreguntas: this.numPreguntas,
          continuar: this.continuar,
          origen: null,
          etiqueta: null,
          revisar: false
        }));
        this.router.navigate(['/test-do']);
      } // Si ya ha realizado el test
      else {
        // Se muestran las opciones
        this.mostrarOpciones(item);
      }
    }
  }

  mostrarOpciones(item) {
    var _this2 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this2.actionSheetCtrl.create({
        header: '¿Qué quieres hacer?',
        buttons: [{
          text: 'Revisar',
          icon: 'eye-outline',
          handler: () => {
            //console.log(item.IdTest, this.idOposicion);
            // Se recupera el test
            _this2.proveedor.recuperarTest(_this2.usuario.Mensaje.AuthorizationToken, item.IdTest, _this2.idOposicion).subscribe(data => {
              _this2.parseTestJson(data, item.Nombre, item.Media);
            }, error => {
              console.log(error);
            }, () => {});
          }
        }, {
          text: 'Repetir',
          icon: 'repeat-outline',
          handler: () => {
            // Si hay limite de ejecuciones se valida que no se haya superado
            if (item.Limite > 0 && item.Realizado >= item.Limite) {
              _this2.alert('Límite superado', 'Has superado el número de veces que el centro permite realizar este test');
            } else {
              // Se inicializa el tiempo
              _this2.continuar = 0;
              _this2.numMinutos = 0;
              _this2.numPreguntas = 0; //this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas, continuar: this.continuar, origen: null});

              _this2.navParamService.setNavData(JSON.stringify({
                idOposicion: _this2.idOposicion,
                test: item,
                numMinutos: _this2.numMinutos,
                numPreguntas: _this2.numPreguntas,
                continuar: _this2.continuar,
                origen: null,
                etiqueta: null,
                revisar: false
              }));

              _this2.router.navigate(['/test-do']);
            }
          }
        }, // {
        //   text: 'Configurar',
        //   icon: 'options-outline',
        //   handler: () => {
        //     this.alert('PRÓXIMAMENTE', 'Muy pronto podrás configurar los test también desde la app');
        //   }
        // },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {}
        }]
      });
      actionSheet.present();
    })();
  }

  parseTestJson(data, nombre, mediaAlumnos) {
    if (data.Error == 0) {
      // Test
      this.test = data;
      this.tipoTest = data.Mensaje.Tipo;
      this.test.Nombre = nombre; // Preguntas

      let jsonArray = data.Mensaje.Preguntas;
      this.listaPreguntas = [];
      this.listaRespuestas = [];
      this.aciertos = 0;
      this.fallos = 0;
      this.blancos = 0;
      this.dudosas = 0;
      this.dudosasAcierto = 0;
      this.dudosasFallo = 0;

      for (let i = 0; i < jsonArray.length; i++) {
        let jsonObject = jsonArray[i]; //jsonObject.IdPregunta = i+1;

        this.listaPreguntas.push(jsonObject);
        if (jsonObject.Contestada == 0) this.blancos++;else {
          if (jsonObject.Acertada == 1) {
            if (jsonObject.Dudosa == 1) {
              this.dudosasAcierto++;
              this.blancos++;
            } else this.aciertos++;
          }

          if (jsonObject.Fallada == 1) {
            if (jsonObject.Dudosa == 1) {
              this.dudosasFallo++;
              this.blancos++;
            } else this.fallos++;
          }
        }

        if (jsonObject.Dudosa == 1) {
          this.dudosas++;
        }
      }

      this.numeroPreguntas = this.listaPreguntas.length; // Se calcula la nota

      var res_aciertos = this.aciertos;
      var res_fallos = this.fallos * data.Mensaje.ValorFallo;
      var res_maximo = this.aciertos + this.fallos + this.blancos;
      var res_obtenido = res_aciertos - res_fallos;
      if (res_maximo > 0) res_obtenido = 100 * res_obtenido / res_maximo;else res_obtenido = 0;
      if (res_obtenido < 0) res_obtenido = 0;
      this.nota = res_obtenido; // Se calcula la nota con riesgo

      if (this.dudosas > 0) {
        var res_aciertos = this.aciertos + this.dudosasAcierto;
        var res_fallos = (this.fallos + this.dudosasFallo) * data.Mensaje.ValorFallo;
        var res_maximo = this.aciertos + this.fallos + this.blancos;
        var res_obtenido = res_aciertos - res_fallos;
        if (res_maximo > 0) res_obtenido = 100 * res_obtenido / res_maximo; //Math.Round((decimal)((100 * res_obtenido) / res_maximo), 2);
        else res_obtenido = 0;
        if (res_obtenido < 0) res_obtenido = 0;
        this.notaRiesgo = res_obtenido;
      } // Se envía al usuario a la página de revisión
      //this.navCtrl.push(TestReviewPage, {test: this.test, preguntas: this.listaPreguntas, respuestas: this.listaRespuestas, aciertos: this.aciertos, fallos: this.fallos, blancos: this.blancos, nota: nota, mediaAlumnos: mediaAlumnos, origen: null });
      //this.navParamService.setNavData(item);
      //this.router.navigate(['/test-review'], {test: this.test, preguntas: this.listaPreguntas, respuestas: this.listaRespuestas, aciertos: this.aciertos, fallos: this.fallos, blancos: this.blancos, nota: nota, mediaAlumnos: mediaAlumnos, origen: null });
      //this.navParamService.setNavData(JSON.stringify({test: this.test, listaPreguntas: this.listaPreguntas, listaRespuestas: this.listaRespuestas, aciertos: this.aciertos, fallos: this.fallos, blancos: this.blancos, nota: this.decimalPipe.transform(nota/10, '1.2-2'), mediaAlumnos: this.decimalPipe.transform(mediaAlumnos/10, '1.2-2'), origen: this.test}));


      this.navParamService.setNavData(JSON.stringify({
        idOposicion: this.idOposicion,
        test: this.test,
        tipoTest: this.tipoTest,
        valorFallo: data.Mensaje.ValorFallo,
        listaPreguntas: this.listaPreguntas,
        listaRespuestas: this.listaRespuestas,
        aciertos: this.aciertos,
        fallos: this.fallos,
        blancos: this.blancos,
        dudosas: this.dudosas,
        dudosasAcierto: this.dudosasAcierto,
        dudosasFallo: this.dudosasFallo,
        nota: this.decimalPipe.transform(this.nota / 10, '1.2-2'),
        notaRiesgo: this.decimalPipe.transform(this.notaRiesgo / 10, '1.2-2'),
        mediaAlumnos: mediaAlumnos,
        origen: null,
        etiqueta: null,
        revisar: true
      }));
      this.router.navigate(['/test-review']);
    } // Acceso denegado
    else if (data.Error == -10) {
      this.proveedorLogout.logout();
    } else {
      this.alert('Ooops!', 'La revisión de este test sólo está disponible en la plataforma web.');
    }
  }

  configurarTest(item) {
    var _this3 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Se obtiene el id del curso de la memoria
      _this3.storage.get('idOposicion').then(val => {
        if (val != null && val != undefined) {
          _this3.idOposicion = val;
        } else {
          // Si no se han recuperado los datos se vuelve a la página de login
          _this3.proveedorLogout.logout();
        }
      });

      const actionSheet = yield _this3.actionSheetCtrl.create({
        header: 'Selecciona la configuración del test:',
        buttons: [{
          text: 'Original',
          icon: 'checkbox-outline',
          handler: () => {
            _this3.numMinutos = 0;
            _this3.numPreguntas = 0; //this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas, origen: null});

            _this3.navParamService.setNavData(JSON.stringify({
              idOposicion: _this3.idOposicion,
              test: item,
              numMinutos: _this3.numMinutos,
              numPreguntas: _this3.numPreguntas,
              origen: null,
              etiqueta: null,
              revisar: false
            }));

            _this3.router.navigate(['/test-do']);
          }
        }, // {
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
            _this3.configurarTiempo(item);
          }
        }, {
          text: 'Configurar nº de preguntas',
          icon: 'list-outline',
          handler: () => {
            _this3.configurarNumeroPreguntas(item);
          }
        }, {
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            _this3.numMinutos = 0;
            _this3.numPreguntas = 0;
          }
        }]
      });
      yield actionSheet.present();
    })();
  }

  configurarTiempo(item) {
    var _this4 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this4.actionSheetCtrl.create({
        header: 'Seleccionar la duración del test:',
        buttons: [{
          text: '20 minutos',
          icon: 'time-outline',
          handler: () => {
            _this4.numMinutos = 20; //this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas});

            _this4.navParamService.setNavData(item);

            _this4.router.navigate(['/test-do']);
          }
        }, {
          text: '30 minutos',
          icon: 'time-outline',
          handler: () => {
            _this4.numMinutos = 30; //this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas});

            _this4.navParamService.setNavData(item);

            _this4.router.navigate(['/test-do']);
          }
        }, {
          text: '45 minutos',
          icon: 'time-outline',
          handler: () => {
            _this4.numMinutos = 45; //this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas});

            _this4.navParamService.setNavData(item);

            _this4.router.navigate(['/test-do']);
          }
        }, {
          text: '60 minutos',
          icon: 'time-outline',
          handler: () => {
            _this4.numMinutos = 60; //this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas});

            _this4.navParamService.setNavData(item);

            _this4.router.navigate(['/test-do']);
          }
        }, {
          text: '90 minutos',
          icon: 'time-outline',
          handler: () => {
            _this4.numMinutos = 90; //this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas});

            _this4.navParamService.setNavData(item);

            _this4.router.navigate(['/test-do']);
          }
        }, {
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            _this4.configurarTest(item);
          }
        }]
      });
      yield actionSheet.present();
    })();
  }

  configurarNumeroPreguntas(item) {
    var _this5 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this5.actionSheetCtrl.create({
        header: 'Selecciona el nº de preguntas del test:',
        buttons: [{
          text: '10 preguntas',
          icon: 'list',
          handler: () => {
            _this5.numPreguntas = 10; //this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas});

            _this5.navParamService.setNavData(item);

            _this5.router.navigate(['/test-do']);
          }
        }, {
          text: '25 preguntas',
          icon: 'list',
          handler: () => {
            _this5.numPreguntas = 25; //this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas});

            _this5.navParamService.setNavData(item);

            _this5.router.navigate(['/test-do']);
          }
        }, {
          text: '50 preguntas',
          icon: 'list',
          handler: () => {
            _this5.numPreguntas = 50; //this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas});

            _this5.navParamService.setNavData(item);

            _this5.router.navigate(['/test-do']);
          }
        }, {
          text: '75 preguntas',
          icon: 'list',
          handler: () => {
            _this5.numPreguntas = 75; //this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas});

            _this5.navParamService.setNavData(item);

            _this5.router.navigate(['/test-do']);
          }
        }, {
          text: '100 preguntas',
          icon: 'list',
          handler: () => {
            _this5.numPreguntas = 100; //this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas});

            _this5.navParamService.setNavData(item);

            _this5.router.navigate(['/test-do']);
          }
        }, {
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            _this5.configurarTest(item);
          }
        }]
      });
      yield actionSheet.present();
    })();
  }

  filtro() {
    var _this6 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this6.actionSheetCtrl.create({
        header: 'Filtrar por:',
        buttons: [{
          text: 'Todos',
          handler: () => {
            _this6.listaTest = _this6.listaTestTemp;
          }
        }, {
          text: 'Realizados',
          icon: 'checkbox-outline',
          handler: () => {
            _this6.listaTest = _this6.listaTestTemp;
            _this6.listaTest = _this6.listaTest.filter(test => {
              return test.Pendiente == 0 && test.Realizado == 1;
            });
          }
        }, {
          text: 'No Realizados',
          icon: 'square-outline',
          handler: () => {
            _this6.listaTest = _this6.listaTestTemp;
            _this6.listaTest = _this6.listaTest.filter(test => {
              return test.Pendiente == 0 && test.Realizado == 0;
            });
          }
        }, {
          text: 'En Pausa',
          icon: 'pause-outline',
          handler: () => {
            _this6.listaTest = _this6.listaTestTemp;
            _this6.listaTest = _this6.listaTest.filter(test => {
              return test.Pendiente > 0;
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
    var _this7 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this7.actionSheetCtrl.create({
        header: 'Ordenar por:',
        buttons: [{
          text: 'Título',
          icon: 'text',
          handler: () => {
            _this7.isAscendic ? _this7.ordenarTituloASC() : _this7.ordenarTituloDESC();
          }
        }, {
          text: 'Tema',
          icon: 'book-outline',
          handler: () => {
            _this7.isAscendic ? _this7.ordenarTemaASC() : _this7.ordenarTemaDESC();
          }
        }, // {
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
            _this7.isAscendic ? _this7.ordenarFechaASC() : _this7.ordenarFechaDESC();
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
    this.listaTest = this.listaTest.sort((a, b) => {
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
    this.listaTest = this.listaTest.sort((a, b) => {
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
    this.listaTest = this.listaTest.sort((a, b) => {
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
    this.listaTest = this.listaTest.sort((a, b) => {
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
    this.listaTest = this.listaTest.sort((a, b) => {
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
    this.listaTest = this.listaTest.sort((a, b) => {
      if (this.esMayor(a.FechaPublicacion, b.FechaPublicacion) === true) {
        return 1;
      }

      if (this.esMayor(a.FechaPublicacion, b.FechaPublicacion) === false) {
        return -1;
      }

      return 0;
    });
  }

  ordenarRecienteON() {
    this.isRecent = false;
    this.listaTest = this.listaTestTemp;
    this.listaTest = this.listaTest.filter(test => {
      return this.esReciente(test.FechaPublicacion) === true;
    });
  }

  ordenarRecienteOFF() {
    this.isRecent = true;
    this.listaTest = this.listaTestTemp;
    this.listaTest = this.listaTest.filter(test => {
      return this.esReciente(test.FechaPublicacion) === false;
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

  do(item) {
    //this.navCtrl.push(DoTestPage, {item: item});
    this.navParamService.setNavData(item);
    this.router.navigate(['/test-do']);
  }

  repeat(item) {
    var _this8 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const confirm = yield _this8.alertCtrl.create({
        header: 'Repetir Test',
        message: '¿Deseas volver a hacer este test?',
        buttons: [{
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        }, {
          text: 'Si',
          handler: () => {
            //console.log('Agree clicked');
            //this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, item: item});
            _this8.navParamService.setNavData(JSON.stringify({
              idOposicion: _this8.idOposicion,
              item: item
            }));

            _this8.router.navigate(['/doc-viewer']);
          }
        }]
      });
      yield confirm.present();
    })();
  }

  ayuda() {
    //this.navCtrl.push(FaqPage);
    this.router.navigate(['/faq']);
  }

  resultados() {
    //this.navCtrl.push(StatsPage);
    this.router.navigate(['/test-score']);
  }

  segmentChanged(ev) {
    switch (ev.detail.value) {
      case 'all':
        this.listaTest = this.listaTestTemp;
        break;

      case 'undone':
        this.listaTest = this.listaTestTemp;
        this.listaTest = this.listaTest.filter(test => {
          return test.Pendiente == 0 && test.Realizado == 0;
        });
        break;

      case 'done':
        this.listaTest = this.listaTestTemp;
        this.listaTest = this.listaTest.filter(test => {
          return test.Pendiente == 0 && test.Realizado == 1;
        });
        break;

      case 'paused':
        this.listaTest = this.listaTestTemp;
        this.listaTest = this.listaTest.filter(test => {
          return test.Pendiente > 0;
        });
        break;
    }
  }

  alert(cabecera, mensaje) {
    var _this9 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this9.alertCtrl.create({
        header: cabecera,
        message: mensaje,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

}

TestPage.ɵfac = function TestPage_Factory(t) {
  return new (t || TestPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_navparam_service__WEBPACK_IMPORTED_MODULE_1__.NavparamService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_providers_aulavirtualrest__WEBPACK_IMPORTED_MODULE_2__.AulavirtualrestProvider), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_providers_logout__WEBPACK_IMPORTED_MODULE_3__.LogoutProvider), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__.Storage), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe));
};

TestPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: TestPage,
  selectors: [["app-test"]],
  decls: 28,
  vars: 8,
  consts: [["color", "primary", 1, "ion-text-center"], ["slot", "start"], ["text", "Volver", 4, "ngIf"], ["slot", "primary"], [4, "ngIf"], [3, "scrollY"], ["itemSize", "56", "minBufferPx", "900", "maxBufferPx", "1350"], [3, "ngModel", "ngModelChange", "ionChange"], ["value", "all"], ["name", "checkbox-outline"], ["value", "undone"], ["name", "square-outline"], ["value", "done"], ["name", "checkbox"], ["value", "paused"], ["name", "pause-outline"], [3, "ngSwitch"], ["placeholder", "Buscar por t\u00EDtulo, etiqueta o tema", 3, "ionInput"], ["size", "2"], ["icon-start", "", "fill", "clear", 3, "click"], ["slot", "icon-only", "name", "filter-outline"], ["button", "true", 3, "odd", "click", 4, "cdkVirtualFor", "cdkVirtualForOf"], ["class", "ion-padding ion-text-center", 4, "ngIf"], ["text", "Volver"], ["button", "true", 3, "click"], ["slot", "start", "name", "checkbox", 3, "ngClass", 4, "ngIf"], ["slot", "start", "name", "pause", "class", "test-pending", 4, "ngIf"], [1, "ion-text-wrap"], [1, "tema", 3, "ngClass"], [4, "ngFor", "ngForOf"], ["color", "primary", "name", "information-circle-outline", 4, "ngIf"], [1, "info"], ["slot", "start", "name", "repeat", 3, "ngClass"], [3, "ngClass"], ["slot", "start", "name", "person", 3, "ngClass", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["slot", "start", "name", "people", 3, "ngClass", 4, "ngIf"], ["name", "time-outline", "slot", "end", 4, "ngIf"], ["slot", "start", "name", "checkbox", 3, "ngClass"], ["slot", "start", "name", "pause", 1, "test-pending"], ["class", "etiqueta", "color", "light", 4, "ngIf"], ["color", "light", 1, "etiqueta"], ["color", "primary", "name", "information-circle-outline"], ["slot", "start", "name", "person", 3, "ngClass"], ["slot", "start", "name", "people", 3, "ngClass"], ["name", "time-outline", "slot", "end"], [1, "ion-padding", "ion-text-center"], ["width", "200", "src", "../assets/imgs/empty.png"]],
  template: function TestPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TestPage_ion_back_button_3_Template, 1, 0, "ion-back-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "ion-buttons", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, TestPage_ion_title_5_Template, 2, 0, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, TestPage_ion_title_6_Template, 2, 0, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-content", 5)(8, "cdk-virtual-scroll-viewport", 6)(9, "ion-segment", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TestPage_Template_ion_segment_ngModelChange_9_listener($event) {
        return ctx.all = $event;
      })("ionChange", function TestPage_Template_ion_segment_ionChange_9_listener($event) {
        return ctx.segmentChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-segment-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "ion-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ion-segment-button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "ion-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ion-segment-button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "ion-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-segment-button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "ion-icon", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 16)(19, "ion-list")(20, "ion-row")(21, "ion-col")(22, "ion-searchbar", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ionInput", function TestPage_Template_ion_searchbar_ionInput_22_listener($event) {
        return ctx.getTest($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "ion-col", 18)(24, "ion-button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TestPage_Template_ion_button_click_24_listener() {
        return ctx.ordenar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "ion-icon", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, TestPage_ion_item_26_Template, 25, 19, "ion-item", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, TestPage_section_27_Template, 2, 0, "section", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.simulacros === true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.simulacros === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.simulacros === true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("scrollY", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.all);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx.all);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkVirtualForOf", ctx.listaTest);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.listaTest != null && ctx.listaTest.length < 1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgSwitch, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonBackButtonDelegate, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__.CdkFixedSizeVirtualScroll, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__.CdkVirtualForOf, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__.CdkVirtualScrollViewport],
  styles: [".tema[_ngcontent-%COMP%] {\n  font-size: x-small;\n  margin-right: 5px;\n}\n\n.etiqueta[_ngcontent-%COMP%] {\n  color: light;\n  font-weight: bold;\n  font-size: x-small;\n  margin-right: 5px;\n}\n\n.info[_ngcontent-%COMP%] {\n  color: light;\n  font-size: x-small;\n}\n\n.test-done[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-size: larger !important;\n}\n\n.test-undone[_ngcontent-%COMP%] {\n  color: lightgrey;\n  font-size: larger !important;\n}\n\n.test-pending[_ngcontent-%COMP%] {\n  color: red;\n  font-size: larger !important;\n}\n\n.test-pass[_ngcontent-%COMP%] {\n  color: #18D272;\n  font-size: 1.1em !important;\n}\n\n.test-fail[_ngcontent-%COMP%] {\n  color: #f53d3d;\n  font-size: 1.1em !important;\n}\n\n.visible[_ngcontent-%COMP%] {\n  visibility: visible !important;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  visibility: hidden !important;\n}\n\ncdk-virtual-scroll-viewport[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.odd[_ngcontent-%COMP%] {\n  --ion-item-background: var(--ion-color-light) ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQU8sa0JBQUE7RUFBbUIsaUJBQUE7QUFHMUI7O0FBRkE7RUFBVyxZQUFBO0VBQWEsaUJBQUE7RUFBbUIsa0JBQUE7RUFBbUIsaUJBQUE7QUFTOUQ7O0FBUEE7RUFBTyxZQUFBO0VBQWEsa0JBQUE7QUFZcEI7O0FBVkE7RUFBYSwrQkFBQTtFQUFpQyw0QkFBQTtBQWU5Qzs7QUFkQTtFQUFlLGdCQUFBO0VBQWtCLDRCQUFBO0FBbUJqQzs7QUFsQkE7RUFBZ0IsVUFBQTtFQUFZLDRCQUFBO0FBdUI1Qjs7QUF0QkE7RUFBYSxjQUFBO0VBQWdCLDJCQUFBO0FBMkI3Qjs7QUExQkE7RUFBYSxjQUFBO0VBQWdCLDJCQUFBO0FBK0I3Qjs7QUE3QkE7RUFBVyw4QkFBQTtBQWlDWDs7QUFoQ0E7RUFBVSw2QkFBQTtBQW9DVjs7QUFsQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQXFDSjs7QUFsQ0E7RUFDSSw4Q0FBQTtBQXFDSiIsImZpbGUiOiJ0ZXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZW1hIHtmb250LXNpemU6IHgtc21hbGw7bWFyZ2luLXJpZ2h0OiA1cHg7fVxuLmV0aXF1ZXRhIHtjb2xvcjpsaWdodDsgZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogeC1zbWFsbDttYXJnaW4tcmlnaHQ6IDVweDt9XG5cbi5pbmZvIHtjb2xvcjpsaWdodDsgZm9udC1zaXplOiB4LXNtYWxsfVxuXG4udGVzdC1kb25lIHsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgZm9udC1zaXplOiBsYXJnZXIgIWltcG9ydGFudH1cbi50ZXN0LXVuZG9uZSB7IGNvbG9yOiBsaWdodGdyZXk7IGZvbnQtc2l6ZTogbGFyZ2VyICFpbXBvcnRhbnR9XG4udGVzdC1wZW5kaW5nIHsgY29sb3I6IHJlZDsgZm9udC1zaXplOiBsYXJnZXIgIWltcG9ydGFudH1cbi50ZXN0LXBhc3MgeyBjb2xvcjogIzE4RDI3MjsgZm9udC1zaXplOiAxLjFlbSAhaW1wb3J0YW50fVxuLnRlc3QtZmFpbCB7IGNvbG9yOiAjZjUzZDNkOyBmb250LXNpemU6IDEuMWVtICFpbXBvcnRhbnR9XG5cbi52aXNpYmxlIHsgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50fVxuLmhpZGRlbiB7IHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50fVxuXG5jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm9kZHtcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodClcbn0iXX0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_test_test_module_ts.js.map