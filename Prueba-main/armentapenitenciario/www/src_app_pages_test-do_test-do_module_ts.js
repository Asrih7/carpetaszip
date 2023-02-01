"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_test-do_test-do_module_ts"],{

/***/ 6424:
/*!*********************************************************!*\
  !*** ./src/app/pages/test-do/test-do-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestDoPageRoutingModule": () => (/* binding */ TestDoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _test_do_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test-do.page */ 9598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _test_do_page__WEBPACK_IMPORTED_MODULE_0__.TestDoPage
    }
];
class TestDoPageRoutingModule {
}
TestDoPageRoutingModule.ɵfac = function TestDoPageRoutingModule_Factory(t) { return new (t || TestDoPageRoutingModule)(); };
TestDoPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TestDoPageRoutingModule });
TestDoPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TestDoPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 2407:
/*!*************************************************!*\
  !*** ./src/app/pages/test-do/test-do.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestDoPageModule": () => (/* binding */ TestDoPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/angular */ 341);
/* harmony import */ var _test_do_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test-do-routing.module */ 6424);
/* harmony import */ var _test_do_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test-do.page */ 9598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);







class TestDoPageModule {
}
TestDoPageModule.ɵfac = function TestDoPageModule_Factory(t) { return new (t || TestDoPageModule)(); };
TestDoPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TestDoPageModule });
TestDoPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        swiper_angular__WEBPACK_IMPORTED_MODULE_6__.SwiperModule,
        _test_do_routing_module__WEBPACK_IMPORTED_MODULE_0__.TestDoPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TestDoPageModule, { declarations: [_test_do_page__WEBPACK_IMPORTED_MODULE_1__.TestDoPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        swiper_angular__WEBPACK_IMPORTED_MODULE_6__.SwiperModule,
        _test_do_routing_module__WEBPACK_IMPORTED_MODULE_0__.TestDoPageRoutingModule] }); })();


/***/ }),

/***/ 9598:
/*!***********************************************!*\
  !*** ./src/app/pages/test-do/test-do.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestDoPage": () => (/* binding */ TestDoPage)
/* harmony export */ });
/* harmony import */ var _Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 6710);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ 3587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _test_index_test_index_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../test-index/test-index.page */ 1447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_navparam_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/navparam.service */ 7495);
/* harmony import */ var _providers_aulavirtualrest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/aulavirtualrest */ 4313);
/* harmony import */ var _providers_logout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/logout */ 8599);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! swiper/angular */ 341);














const _c0 = ["swiper"];

function TestDoPage_ion_title_11_ion_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-icon", 20);
  }
}

function TestDoPage_ion_title_11_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-icon", 21);
  }
}

function TestDoPage_ion_title_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TestDoPage_ion_title_11_ion_icon_1_Template, 1, 0, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, TestDoPage_ion_title_11_ion_icon_2_Template, 1, 0, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.timer >= 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.timer < 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 3, ctx_r0.time), " ");
  }
}

function TestDoPage_ion_col_23_ion_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestDoPage_ion_col_23_ion_button_2_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r12.goTo(i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r8.listaPreguntas[i_r7].Dudosa == 1 ? "dudosa" : "blanco");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", "0" + (i_r7 + 1), " ");
  }
}

function TestDoPage_ion_col_23_ion_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestDoPage_ion_col_23_ion_button_3_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r16.goTo(i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r9.listaPreguntas[i_r7].Dudosa == 1 ? "dudosa_contestada" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", "0" + (i_r7 + 1), " ");
  }
}

function TestDoPage_ion_col_23_ion_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestDoPage_ion_col_23_ion_button_4_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r20.goTo(i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r10.listaPreguntas[i_r7].Dudosa == 1 ? "dudosa" : "blanco");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", i_r7 + 1, " ");
  }
}

function TestDoPage_ion_col_23_ion_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestDoPage_ion_col_23_ion_button_5_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r24.goTo(i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r11.listaPreguntas[i_r7].Dudosa == 1 ? "dudosa_contestada" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", i_r7 + 1, " ");
  }
}

function TestDoPage_ion_col_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-col")(1, "ion-menu-toggle", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, TestDoPage_ion_col_23_ion_button_2_Template, 2, 2, "ion-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, TestDoPage_ion_col_23_ion_button_3_Template, 2, 2, "ion-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, TestDoPage_ion_col_23_ion_button_4_Template, 2, 2, "ion-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, TestDoPage_ion_col_23_ion_button_5_Template, 2, 2, "ion-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.listaPreguntas[i_r7].IdPregunta < 10 && ctx_r1.listaPreguntas[i_r7].Contestada == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.listaPreguntas[i_r7].IdPregunta < 10 && ctx_r1.listaPreguntas[i_r7].Contestada > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.listaPreguntas[i_r7].IdPregunta > 9 && ctx_r1.listaPreguntas[i_r7].Contestada == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.listaPreguntas[i_r7].IdPregunta > 9 && ctx_r1.listaPreguntas[i_r7].Contestada > 0);
  }
}

function TestDoPage_28_ng_template_0_ion_card_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-card", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestDoPage_28_ng_template_0_ion_card_16_Template_ion_card_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37);
      const j_r35 = restoredCtx.index;
      const i_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).index;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r36.seleccionar(ctx_r36.listaPreguntas[i_r29], ctx_r36.listaPreguntas[i_r29].Respuestas[j_r35], ctx_r36.listaPreguntas[i_r29].Respuestas, j_r35));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-card-content", 33)(2, "ion-card-subtitle", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-checkbox", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const j_r35 = ctx.index;
    const i_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).index;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r31.listaPreguntas[i_r29].Respuestas[j_r35].Seleccionada == 1 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r31.listaPreguntas[i_r29].Respuestas[j_r35].Texto);
  }
}

function TestDoPage_28_ng_template_0_ion_fab_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-fab", 42)(1, "ion-fab-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestDoPage_28_ng_template_0_ion_fab_23_Template_ion_fab_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r41);
      const i_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).index;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r40.marcarDudosa(ctx_r40.listaPreguntas[i_r29]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "ion-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}

function TestDoPage_28_ng_template_0_ion_fab_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-fab", 42)(1, "ion-fab-button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestDoPage_28_ng_template_0_ion_fab_24_Template_ion_fab_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r44);
      const i_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).index;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r43.desmarcarDudosa(ctx_r43.listaPreguntas[i_r29]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "ion-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}

function TestDoPage_28_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-card")(1, "ion-card-header", 26)(2, "ion-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestDoPage_28_ng_template_0_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r46.prev());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestDoPage_28_ng_template_0_Template_ion_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r48.openMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestDoPage_28_ng_template_0_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r49.next());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "ion-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "ion-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestDoPage_28_ng_template_0_Template_ion_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r50.terminar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "ion-card-title", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "ion-card-content", 33)(13, "h2")(14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, TestDoPage_28_ng_template_0_ion_card_16_Template, 6, 2, "ion-card", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "br")(18, "br")(19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "ion-fab", 35)(21, "ion-fab-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestDoPage_28_ng_template_0_Template_ion_fab_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47);
      const i_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r51.limpiar(ctx_r51.listaPreguntas[i_r29]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "ion-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, TestDoPage_28_ng_template_0_ion_fab_23_Template, 3, 0, "ion-fab", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, TestDoPage_28_ng_template_0_ion_fab_24_Template, 3, 0, "ion-fab", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r30.listaPreguntas[i_r29].IdPregunta == 1 ? "hidden" : "visible");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r30.listaPreguntas[i_r29].IdPregunta == ctx_r30.numeroPreguntas ? "none" : "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r30.listaPreguntas[i_r29].IdPregunta == ctx_r30.numeroPreguntas ? "block" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", i_r29 + 1, " / ", ctx_r30.numeroPreguntas, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r30.listaPreguntas[i_r29].Texto);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r30.listaPreguntas[i_r29].Respuestas);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r30.listaPreguntas[i_r29].Dudosa == 0 && ctx_r30.tipoTest != 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r30.listaPreguntas[i_r29].Dudosa > 0 && ctx_r30.tipoTest != 4);
  }
}

function TestDoPage_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, TestDoPage_28_ng_template_0_Template, 25, 9, "ng-template", 25);
  }
} // install Swiper modules https://swiperjs.com/angular#virtual-slides


swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_1__.Virtual]);
class TestDoPage {
  constructor(router, navParamService, proveedor, proveedorLogout, alertCtrl, loadingCtrl, storage, decimalPipe, popoverCtrl, menu) {
    this.router = router;
    this.navParamService = navParamService;
    this.proveedor = proveedor;
    this.proveedorLogout = proveedorLogout;
    this.alertCtrl = alertCtrl;
    this.loadingCtrl = loadingCtrl;
    this.storage = storage;
    this.decimalPipe = decimalPipe;
    this.popoverCtrl = popoverCtrl;
    this.menu = menu;
    this.numMinutos = 0;
    this.numPreguntas = 0; // instrucciones: string = null;

    this.continuar = 0;
    this.posicion = 0;
    this.usuario = [];
    this.numeroRespuestasCorrectas = 0;
    this.aciertos = 0;
    this.fallos = 0;
    this.blancos = 0;
    this.dudosas = 0;
    this.dudosasAcierto = 0;
    this.dudosasFallo = 0;
    this.aciertosTemp = 0;
    this.fallosTemp = 0;
    this.blancosTemp = 0;
    this.tiempo = 0;
    this.allChecked = false; // Adding Timing Functionality (https://www.youtube.com/watch?v=aOHJRqvcjTI)

    this.time = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject('00:00');
    this.navParams = JSON.parse(this.navParamService.getNavData()); //console.log(this.navParams);

    this.idOposicion = this.navParams['idOposicion'];
    this.test = this.navParams['test'];
    this.tipoTest = this.test['Tipo'];
    this.numMinutos = this.navParams['numMinutos'];
    this.numPreguntas = this.navParams['numPreguntas']; // this.instrucciones = this.navParams['Instrucciones']; 

    this.continuar = this.navParams['continuar'];
    this.origen = this.navParams['origen'];
    this.etiqueta = this.navParams['etiqueta'];
    this.initializaTest();
  }

  ngOnInit() {//this.ocultarMenu();
  }

  ionViewWillEnter() {//this.ocultarMenu();
  }

  ngAfterContentChecked() {// if (this.swiper) {
    //   this.swiper.updateSwiper({});
    // }
  }

  swiperSlideChanged(e) {//console.log('changed: ', e);
  } // ionViewWillEnter() {
  //   this.ocultarMenu();
  // }
  // public ionViewWillEnter(){
  //   this.slides.update();
  // }
  // ionViewWillLeave(){
  //   this.slides.stopAutoplay();
  // }
  // ionViewDidEnter() {
  //   this.slides.startAutoplay();
  // }
  // mostrarMenu(){
  //   let tabs = document.querySelectorAll('.tabbar');
  //   if ( tabs !== null ) {
  //     Object.keys(tabs).map((key) => {
  //       tabs[ key ].style.display = 'block';
  //     });
  //   } // end if
  //   // let tabBar = document.getElementById('app-tab-bar'); 
  //   // if (tabBar !== null) { tabBar.style.display = 'block'; }
  // }
  // ocultarMenu(){
  //   let tabs = document.querySelectorAll('.tabbar');
  //   if ( tabs !== null ) {
  //     Object.keys(tabs).map((key) => {
  //       tabs[ key ].style.transform = 'translateY(56px)';        
  //     });
  //   } // end if
  //   // let tabBar = document.getElementById('app-tab-bar'); 
  //   // if (tabBar !== null) { tabBar.style.display = 'none'; }
  // }


  initializaTest() {
    var _this = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //console.log(this.test.IdTest);
      _this.listaPreguntas = [];
      _this.aciertos = 0;
      _this.fallos = 0;
      _this.blancos = 0;
      _this.dudosas = 0;
      _this.dudosasAcierto = 0;
      _this.dudosasFallo = 0;
      const loading = yield _this.loadingCtrl.create({
        message: "Cargando preguntas..."
      });
      loading.present(); // Si el test tiene instrucciones se muestran al empezar el test

      if (_this.test.Instrucciones != null && _this.test.Instrucciones != '' && _this.test.Instrucciones != ' ') _this.info(); // Se obtienen los datos del usuario de la memoria

      _this.storage.get('usuario').then(val => {
        if (val != null && val != undefined) {
          _this.usuario = JSON.parse(val); // Si se empieza el test desde el principio

          if (_this.continuar == 0) {
            // Si no se ha configurado el test ni por tiempo ni por nº de preguntas
            if (_this.numMinutos == 0 && _this.numPreguntas == 0) {
              // Se guarda el estado inicial de la revisión del test
              // this.proveedor.insertarRevisionTest(this.usuario.Mensaje.AuthorizationToken, this.test.IdTest)
              // .subscribe(
              //   //(data)=>{console.log(data);},
              //   (data)=>{},
              //   (error)=>{console.log(error);}
              // ) 
              _this.proveedor.insertarRevisionTestOposicion(_this.usuario.Mensaje.AuthorizationToken, _this.test['IdTest'], _this.idOposicion).subscribe( //(data)=>{console.log(data);},
              data => {}, error => {
                console.log(error);
              }); // Se obtiene el test original


              _this.proveedor.obtenerTest(_this.usuario.Mensaje.AuthorizationToken, _this.test['IdTest']).subscribe(data => {
                _this.parseTestJson(data);
              }, error => {
                console.log(error);
              }, () => {
                loading.dismiss();
                if (_this.numMinutos > 0) _this.startTimer(_this.numMinutos);
              });

              _this.iniciarTiempo();
            } else {
              // Se obtiene el test configurado
              _this.proveedor.configurarTest(_this.usuario.Mensaje.AuthorizationToken, _this.test['IdTest'], _this.numPreguntas, _this.numMinutos, true).subscribe(data => {
                _this.parseTestJson(data);
              }, error => {
                console.log(error);
              }, () => {
                loading.dismiss();
                if (_this.numMinutos > 0) _this.startTimer(_this.numMinutos);
              });

              _this.iniciarTiempo();
            }
          } // Si el test estaba PAUSADO y se continúa
          else {
            // Se recupera el test pausado
            _this.proveedor.recuperarTest(_this.usuario.Mensaje.AuthorizationToken, _this.test['IdTest'], _this.idOposicion).subscribe(data => {
              _this.parseTestJson(data);
            }, error => {
              console.log(error);
            }, () => {
              loading.dismiss();

              _this.swiper.swiperRef.slideTo(_this.posicion, 1000);

              if (_this.numMinutos > 0) _this.startTimer(_this.numMinutos);
            });

            _this.iniciarTiempo();
          }
        } else {
          // Si no se han recuperado los datos se vuelve a la página de test
          //this.navCtrl.push(TestPage);
          _this.router.navigate(['/test']);
        }
      });
    })();
  }

  parseTestJson(data) {
    //console.log(data);
    let jsonArray = data.Mensaje.Preguntas;
    this.listaPreguntas = [];

    for (let i = 0; i < jsonArray.length; i++) {
      let jsonObject = jsonArray[i]; //jsonObject.IdPregunta = i+1;

      this.listaPreguntas.push(jsonObject); // for(let j=0; j < this.listaPreguntas.length; j++)
      // {
      //   let jsonArray = this.listaPreguntas[j].Respuestas;
      // }
    } //console.log(this.listaPreguntas);


    this.numeroPreguntas = this.listaPreguntas.length;

    if (this.numMinutos == 0) {
      this.numMinutos = data.Mensaje.Tiempo / 60;
    }

    this.posicion = data.Mensaje.Posicion; //console.log('posición: ' + this.posicion);
  } // seleccionar(respuesta){
  //   // Se guarda la respuesta seleccionada
  //   respuesta.Seleccionada = 1;
  //   // Se contabilizan los aciertos y fallos
  //   if (respuesta.RespuestaCorrecta == 1)
  //     this.aciertos++;
  //   else
  //     this.fallos++;
  //   this.next();
  // }


  seleccionar(pregunta, respuesta, respuestas, index) {
    //console.log('seleccionar');
    // Si es un test SIN respuesta múltiple
    if (this.test['Multirespuesta'] == 0) {
      // Se reinician todas las respuestas menos la seleccionada
      for (let i = 0; i < respuestas.length; i++) {
        if (index != i) {
          // Si la respuesta había sido seleccionada
          if (respuestas[i].Seleccionada == 1) {
            // Se descontabilizan los aciertos y fallos
            if (respuestas[i].RespuestaCorrecta == 1) {
              if (this.aciertos > 0) this.aciertos--;
            } else {
              if (this.fallos > 0) this.fallos--;
            }
          } // Se reinicia la selección de la respuesta


          respuestas[i].Seleccionada = 0;
        }
      }
    } // Se marca la respuesta como seleccionada si NO estaba seleccionada previamente


    if (respuesta.Seleccionada == 0) {
      // Se marca la pregunta como contestada
      pregunta.Contestada = 1; // Se marca la respuesta como seleccionada

      respuesta.Seleccionada = 1; // Si es un test SIN respuesta múltiple

      if (this.test['Multirespuesta'] == 0) {
        // Se contabilizan los aciertos y fallos 
        if (respuesta.RespuestaCorrecta == 1) {
          pregunta.Acertada = 1;
          pregunta.Fallada = 0;
          if (pregunta.Dudosa == 1) this.blancos++;else this.aciertos++;
        } else {
          pregunta.Fallada = 1;
          pregunta.Acertada = 0;
          if (pregunta.Dudosa == 1) this.blancos++;else this.fallos++;
        } // Se contabilizan las dudosas


        if (pregunta.Dudosa == 1) {
          this.dudosas++;

          if (respuesta.RespuestaCorrecta == 1) {
            this.dudosasAcierto++;
          } else {
            this.dudosasFallo++;
          }
        }
      } // Si es un test CON respuesta múltiple
      else {// Se contabilizan los aciertos y fallos al finalizar
      }
    } // Si la respuesta seleccionada YA estaba seleccionada previamente
    else {
      // Se marca la pregunta como NO contestada
      pregunta.Contestada = 0;
      pregunta.Fallada = 0;
      pregunta.Acertada = 0; // Se marca la respuesta como NO seleccionada

      respuesta.Seleccionada = 0; // Si es un test SIN respuesta múltiple

      if (this.test['Multirespuesta'] == 0) {
        // Se descontabilizan los aciertos y fallos
        if (respuesta.RespuestaCorrecta == 1) {
          if (this.aciertos > 0) this.aciertos--;
        } else {
          if (this.fallos > 0) this.fallos--;
        } // Se descontabilizan las dudosas


        if (pregunta.Dudosa == 1) {
          this.dudosas--;

          if (respuesta.RespuestaCorrecta == 1) {
            if (this.dudosasAcierto > 0) this.dudosasAcierto--;
          } else {
            if (this.dudosasFallo > 0) this.dudosasFallo--;
          }
        }
      }
    } // console.log("aciertos: " + this.aciertos);
    // console.log("fallos: " + this.fallos);
    // Si es un test SIN respuesta múltiple y la pregunta ha sido contestada


    if (this.test['Multirespuesta'] == 0 && pregunta.Contestada > 0) {
      this.next();
    }
  }

  prev() {
    this.swiper.swiperRef.slidePrev(1000);
  }

  next() {
    this.swiper.swiperRef.slideNext(1000);
  }

  goTo(position) {
    this.swiper.swiperRef.slideTo(position, 500);
  }

  limpiar(pregunta) {
    if (pregunta != null) {
      pregunta.Contestada = 0;

      for (let j = 0; j < pregunta.Respuestas.length; j++) {
        pregunta.Respuestas[j].Seleccionada = 0;
      } //pregunta.Dudosa = 0;

    }
  }

  marcarDudosa(pregunta) {
    pregunta.Dudosa = 1; // Si es un test SIN respuesta múltiple

    if (this.test['Multirespuesta'] == 0) {
      if (pregunta.Contestada) {
        this.dudosas++;
        this.blancos++;

        if (pregunta.Acertada == 1) {
          this.dudosasAcierto++;
          if (this.aciertos > 0) this.aciertos--;
        } else if (pregunta.Fallada == 1) {
          this.dudosasFallo++;
          if (this.fallos > 0) this.fallos--;
        }
      }
    } // Si es un test CON respuesta múltiple
    else {// Se contabilizan los aciertos y fallos al finalizar
    }
  }

  desmarcarDudosa(pregunta) {
    pregunta.Dudosa = 0; // Si es un test SIN respuesta múltiple

    if (this.test['Multirespuesta'] == 0) {
      if (pregunta.Contestada) {
        if (this.dudosas > 0) this.dudosas--;
        if (this.blancos > 0) this.blancos--;

        if (pregunta.Acertada == 1) {
          if (this.dudosasAcierto > 0) this.dudosasAcierto--;
          this.aciertos++;
        } else if (pregunta.Fallada == 1) {
          if (this.dudosasFallo > 0) this.dudosasFallo--;
          this.fallos++;
        }
      }
    } // Si es un test CON respuesta múltiple
    else {// Se contabilizan los aciertos y fallos al finalizar
    }
  }

  restart() {
    //this.swiper.swiperRef.lockSwipes(false);
    this.swiper.swiperRef.slideTo(0, 500); //this.swiper.swiperRef.lockSwipes(true);
  }

  info() {
    var _this2 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //this.navCtrl.push(TestInfoPage, {idTest: this.test.IdTest});
      const alert = yield _this2.alertCtrl.create({
        header: 'Instrucciones',
        message: new _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicSafeString(_this2.test.Instrucciones),
        buttons: ['Entendido']
      });
      yield alert.present();
    })();
  }

  terminar() {
    var _this3 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const confirm = yield _this3.alertCtrl.create({
        header: '¿Has terminado?',
        message: 'Al finalizar el test se calculará tu resultado',
        buttons: [{
          text: 'No',
          handler: () => {}
        }, {
          text: 'Si',
          handler: () => {
            _this3.stopTimer();

            _this3.pararTiempo();

            _this3.obtenerResultado();
          }
        }]
      });
      yield confirm.present();
    })();
  }

  cancelar() {
    var _this4 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const confirm = yield _this4.alertCtrl.create({
        header: 'Cancelar Test',
        message: 'Se perderán todos los datos ¿Seguro que deseas cancelar el test?',
        buttons: [{
          text: 'No',
          handler: () => {}
        }, {
          text: 'Si',
          handler: () => {
            // Se elimina el estado de la revisión del test
            _this4.proveedor.eliminarRevisionTest(_this4.usuario.Mensaje.AuthorizationToken, _this4.test['IdTest']).subscribe( //(data)=>{console.log(data);},
            data => {}, error => {
              console.log(error);
            }); // Se para el tiempo


            _this4.stopTimer();

            _this4.pararTiempo(); // Se vuelve a mostrar el menú
            //this.mostrarMenu();
            // Se redirecciona a la página de origen


            if (_this4.origen != null) {
              //this.navCtrl.push(ModuleDetailPage, {modulo: this.origen});
              _this4.navParamService.setNavData(_this4.origen);

              _this4.router.navigate(['/module-detail']);
            } else if (_this4.etiqueta != null) {
              _this4.navParamService.setNavData(_this4.etiqueta);

              if (_this4.etiqueta === 'Simulacros') _this4.router.navigate(['/test']);else _this4.router.navigate(['/specific-content']);
            } else {
              //this.navCtrl.push(TestPage);   
              _this4.router.navigate(['/tabs/test']);
            } // no sirve porque recarga la página y perdemos el menú
            // this.router.navigate(['/tabs/test'])
            // .then(() => {
            //   window.location.reload();
            // });

          }
        }]
      });
      yield confirm.present();
    })();
  }

  obtenerResultado() {
    var _this5 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this5.loadingCtrl.create({
        message: "Calculando..."
      });
      loading.present();
      var multirespuesta = _this5.test['Multirespuesta']; // Si es un test SIN multirespuesta

      if (multirespuesta == 0) {
        _this5.blancos = _this5.numeroPreguntas - _this5.aciertos - _this5.fallos;
      } // Si es un test CON multirespuesta
      else {
        // Se recorren todas las preguntas y respuestas del test
        for (let i = 0; i < _this5.listaPreguntas.length; i++) {
          // Se inicializan la variables temporales
          _this5.aciertosTemp = 0;
          _this5.fallosTemp = 0;
          _this5.blancosTemp = 0;
          _this5.numeroRespuestasCorrectas = 0;

          for (let j = 0; j < _this5.listaPreguntas[i].Respuestas.length; j++) {
            if (_this5.listaPreguntas[i].Respuestas[j].RespuestaCorrecta == 1) _this5.numeroRespuestasCorrectas++; // Si la respuesta había sido seleccionada

            if (_this5.listaPreguntas[i].Respuestas[j].Seleccionada == 1) {
              // Si la respuesta es correcta
              if (_this5.listaPreguntas[i].Respuestas[j].RespuestaCorrecta == 1) {
                _this5.aciertosTemp++;
              } // si la respuesta es incorrecta
              else {
                _this5.fallosTemp++;
              }
            } // Si la respuesta no ha sido seleccionada
            else {
              _this5.blancosTemp++;
            }
          } // Se contabilizan los aciertos, fallos y dudosas


          if (_this5.aciertosTemp == _this5.numeroRespuestasCorrectas) {
            if (_this5.listaPreguntas[i].Dudosa == 1) {
              _this5.dudosasAcierto++;
              _this5.blancos++;
            } else _this5.aciertos++;
          } else if (_this5.blancosTemp == _this5.listaPreguntas[i].Respuestas.length) {
            _this5.blancos++;
          } else {
            if (_this5.listaPreguntas[i].Dudosa == 1) {
              _this5.dudosasFallo++;
              _this5.blancos++;
            } else _this5.fallos++;
          } // Se contabiliza el número total de dudosas


          if (_this5.listaPreguntas[i].Dudosa == 1) _this5.dudosas++;
        }
      } // Si es un test de PERSONALIDAD


      if (_this5.test['Tipo'] == 4) multirespuesta = 1; // CASO PARTICULAR: El test no es multirespuesta pero las preguntas sí
      // Se actualiza la revisión de preguntas del test      

      _this5.proveedor.actualizarRevisionPreguntasTest(_this5.usuario.Mensaje.AuthorizationToken, _this5.listaPreguntas, _this5.test['IdTest'], multirespuesta).subscribe( // (data)=>{console.log(data);},
      data => {}, error => {
        console.log(error);
      }); // Se obtiene el resultado y se guarda en base de datos
      // this.proveedor.nuevoResultadoOposicion(this.usuario.Mensaje.AuthorizationToken, this.idOposicion, this.test.IdTest, this.test.IdTema, this.test.IdTemario, this.aciertos, this.fallos, this.blancos, this.tiempo)
      // .subscribe(
      //   //(data)=>{console.log(data);},
      //   (data)=>{this.mostrarResultado(data);},
      //   (error)=>{console.log(error);},
      //   () =>{loader.dismiss()}
      // )     


      _this5.proveedor.nuevoResultadoOposicionTipoTest(_this5.usuario.Mensaje.AuthorizationToken, _this5.idOposicion, _this5.test['IdTest'], _this5.test['Tipo'], _this5.test['IdTema'], _this5.test['IdTemario'], _this5.aciertos, _this5.fallos, _this5.blancos, _this5.dudosas, _this5.dudosasAcierto, _this5.dudosasFallo, _this5.tiempo).subscribe( //(data)=>{console.log(data);},
      data => {
        _this5.irAResultado(data);
      }, error => {
        console.log(error);
      }, () => {
        loading.dismiss();
      });
    })();
  } // mostrarResultado(resultado: any){
  //   const confirm = this.alertCtrl.create({
  //     title: 'Resultado: ' + this.decimalPipe.transform(resultado.Mensaje.Resultado/10, '1.2-2'),
  //     message: "Detalles del resultado: <br><br>Aciertos: " + this.aciertos + "<br><br>Fallos: " + this.fallos + "<br><br>Sin contestar: " + this.blancos + "</b><br><br> Mi media: " + this.decimalPipe.transform(resultado.Mensaje.MediaUsuario/10, '1.2-2') + "<br><br> Media alumnos: " + this.decimalPipe.transform(resultado.Mensaje.MediaOpositores/10, '1.2-2'),
  //     buttons: [
  //       {
  //         text: 'Revisar',
  //         handler: () => {
  //           this.navCtrl.push(TestReviewPage, {test: this.test, preguntas: this.listaPreguntas, respuestas: this.listaRespuestas, aciertos: this.aciertos, fallos: this.fallos, blancos: this.blancos, resultado: resultado});          
  //         }
  //       },
  //       {
  //         text: 'Salir',
  //         handler: () => {
  //           this.mostrarMenu();
  //           this.navCtrl.push(TestPage);
  //         }
  //       }
  //     ]
  //   });
  //   confirm.present();
  // }


  irAResultado(resultado) {
    //console.log(resultado);
    //console.log(resultado);
    //this.navCtrl.push(TestScorePage, {test: this.test, listaPreguntas: this.listaPreguntas, listaRespuestas: this.listaRespuestas, aciertos: this.aciertos, fallos: this.fallos, blancos: this.blancos, nota: this.decimalPipe.transform(resultado.Mensaje.Resultado/10, '1.2-2'), mediaAlumnos: this.decimalPipe.transform(resultado.Mensaje.MediaOpositores/10, '1.2-2'), origen: this.origen});
    this.navParamService.setNavData(JSON.stringify({
      idOposicion: this.idOposicion,
      test: this.test,
      tipoTest: this.test['Tipo'],
      valorFallo: resultado.Mensaje.ValorFallo,
      listaPreguntas: this.listaPreguntas,
      listaRespuestas: this.listaRespuestas,
      aciertos: this.aciertos,
      fallos: this.fallos,
      blancos: this.blancos,
      dudosas: this.dudosas,
      dudosasAcierto: this.dudosasAcierto,
      dudosasFallo: this.dudosasFallo,
      nota: this.decimalPipe.transform(resultado.Mensaje.Resultado / 10, '1.2-2'),
      notaRiesgo: this.decimalPipe.transform(resultado.Mensaje.ResultadoRiesgo / 10, '1.2-2'),
      mediaAlumnos: this.decimalPipe.transform(resultado.Mensaje.MediaOpositores / 10, '1.2-2'),
      origen: this.origen,
      etiqueta: this.etiqueta,
      revisar: false
    }));
    this.router.navigate(['/test-review']);
  }

  iniciarTiempo() {
    clearInterval(this.intervalo);
    this.intervalo = setInterval(function () {
      this.tiempo++;
    }.bind(this), 1000);
  }

  pararTiempo() {
    clearInterval(this.intervalo);
  }

  startTimer(duration) {
    clearInterval(this.interval);
    this.timer = duration * 60;
    this.interval = setInterval(() => {
      this.updateTimeValue();
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);
    this.time.next('00:00');
  }

  updateTimeValue() {
    let minutes = this.timer / 60;
    let seconds = this.timer % 60;
    if (Math.floor(minutes) < 100) minutes = String('0' + Math.floor(minutes)).slice(-2);else minutes = String(Math.floor(minutes));
    seconds = String('0' + Math.floor(seconds)).slice(-2);
    const text = minutes + ':' + seconds;
    this.time.next(text);
    --this.timer;

    if (this.timer < 0) {
      this.stopTimer();
      this.pararTiempo();
      this.obtenerResultado();
    }
  }

  verIndice(ev) {
    var _this6 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this6.popoverCtrl.create({
        component: _test_index_test_index_page__WEBPACK_IMPORTED_MODULE_2__.TestIndexPage,
        componentProps: {
          preguntas: _this6.listaPreguntas,
          swiper: _this6.swiper
        },
        event: ev,
        translucent: true
      });
      yield popover.present();
    })();
  }

  openMenu() {
    this.menu.enable(true, 'indicePreguntas');
    this.menu.open('indicePreguntas');
  }

  closeMenu() {
    this.menu.close('indicePreguntas');
  }

}

TestDoPage.ɵfac = function TestDoPage_Factory(t) {
  return new (t || TestDoPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_navparam_service__WEBPACK_IMPORTED_MODULE_3__.NavparamService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_providers_aulavirtualrest__WEBPACK_IMPORTED_MODULE_4__.AulavirtualrestProvider), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_providers_logout__WEBPACK_IMPORTED_MODULE_5__.LogoutProvider), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__.Storage), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DecimalPipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.PopoverController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.MenuController));
};

TestDoPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: TestDoPage,
  selectors: [["app-test-do"]],
  viewQuery: function TestDoPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.swiper = _t.first);
    }
  },
  decls: 29,
  vars: 5,
  consts: [["color", "primary", 1, "ion-text-center"], ["slot", "start"], ["color", "danger", 3, "click"], ["slot", "icon-only", "name", "close-circle-outline"], ["slot", "primary"], [3, "ngClass", "click"], ["slot", "icon-only", "name", "information-circle-outline"], [3, "click"], ["slot", "icon-only", "name", "flag-outline"], [4, "ngIf"], ["side", "start", "menuId", "indicePreguntas", "contentId", "indice"], ["color", "primary"], ["slot", "end"], ["slot", "icon-only", "name", "close-outline"], [4, "ngFor", "ngForOf"], ["id", "indice"], [3, "virtual"], ["swiper", ""], ["name", "timer-outline", 4, "ngIf"], ["name", "alert-circle-outline", "color", "danger", 4, "ngIf"], ["name", "timer-outline"], ["name", "alert-circle-outline", "color", "danger"], ["auto-hide", "true"], ["size", "small", 3, "ngClass", "click", 4, "ngIf"], ["size", "small", 3, "ngClass", "click"], ["swiperSlide", ""], [1, "ion-text-center"], ["fill", "clear", 3, "ngClass", "click"], ["slot", "icon-only", "name", "caret-back"], ["fill", "clear", 3, "click"], ["name", "apps"], ["slot", "icon-only", "name", "caret-forward"], ["slot", "icon-only", "name", "flag"], [1, "ion-text-wrap"], ["button", "true", 3, "click", 4, "ngFor", "ngForOf"], ["vertical", "bottom", "horizontal", "end"], ["size", "small", "color", "white", "title", "Limpiar", 3, "click"], ["name", "trash-outline"], ["vertical", "top", "horizontal", "start", 4, "ngIf"], ["button", "true", 3, "click"], [1, "ion-text-left"], ["color", "primary", 3, "checked"], ["vertical", "top", "horizontal", "start"], ["size", "small", "color", "white", "title", "Dudosa", 3, "click"], ["name", "help-circle-outline", "color", "warning"], ["size", "small", "color", "warning", "title", "Dudosa", 3, "click"], ["name", "help-circle-outline"]],
  template: function TestDoPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1)(3, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestDoPage_Template_ion_button_click_3_listener() {
        return ctx.cancelar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "ion-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ion-buttons", 4)(6, "ion-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestDoPage_Template_ion_button_click_6_listener() {
        return ctx.info();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "ion-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " \u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestDoPage_Template_ion_button_click_9_listener() {
        return ctx.terminar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, TestDoPage_ion_title_11_Template, 5, 5, "ion-title", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "ion-menu", 10)(13, "ion-header")(14, "ion-toolbar", 11)(15, "ion-buttons", 12)(16, "ion-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestDoPage_Template_ion_button_click_16_listener() {
        return ctx.closeMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "ion-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Preguntas");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "ion-content")(21, "ion-grid")(22, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, TestDoPage_ion_col_23_Template, 6, 4, "ion-col", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "ion-router-outlet", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "ion-content")(26, "swiper", 16, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, TestDoPage_28_Template, 1, 0, null, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.test.Instrucciones == "" || ctx.test.Instrucciones == " " || ctx.test.Instrucciones == null ? "hidden" : "visible");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.numMinutos > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.listaPreguntas);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("virtual", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.listaPreguntas);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonMenu, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonMenuToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRouterOutlet, swiper_angular__WEBPACK_IMPORTED_MODULE_13__.SwiperComponent, swiper_angular__WEBPACK_IMPORTED_MODULE_13__.SwiperSlideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe],
  styles: ["ion-slides[_ngcontent-%COMP%] {\n  height: initial;\n}\n\nion-checkbox[_ngcontent-%COMP%] {\n  margin-right: 1em;\n}\n\nion-card-subtitle[_ngcontent-%COMP%] {\n  font-size: small;\n  text-transform: none;\n}\n\nion-fab-button[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.visible[_ngcontent-%COMP%] {\n  visibility: visible !important;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  visibility: hidden !important;\n}\n\n.block[_ngcontent-%COMP%] {\n  display: inline-block !important;\n}\n\n.none[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.expand[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.blanco[_ngcontent-%COMP%] {\n  --background:lightgray !important;\n}\n\n.dudosa[_ngcontent-%COMP%] {\n  --background:orange !important;\n}\n\n.dudosa_contestada[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QtZG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWEsZUFBQTtBQUViOztBQURBO0VBQWUsaUJBQUE7QUFLZjs7QUFIQTtFQUFvQixnQkFBQTtFQUFrQixvQkFBQTtBQVF0Qzs7QUFQQTtFQUFpQixTQUFBO0FBV2pCOztBQVRBO0VBQVcsOEJBQUE7QUFhWDs7QUFaQTtFQUFVLDZCQUFBO0FBZ0JWOztBQWRBO0VBQVMsZ0NBQUE7QUFrQlQ7O0FBakJBO0VBQVEsd0JBQUE7QUFxQlI7O0FBbkJBO0VBQVUsc0JBQUE7QUF1QlY7O0FBckJBO0VBQVMsaUNBQUE7QUF5QlQ7O0FBeEJBO0VBQVMsOEJBQUE7QUE0QlQ7O0FBM0JBO0VBQW9CLHdCQUFBO0FBK0JwQiIsImZpbGUiOiJ0ZXN0LWRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMgeyBoZWlnaHQ6IGluaXRpYWw7IH0gXG5pb24tY2hlY2tib3ggeyBtYXJnaW4tcmlnaHQ6IDFlbTsgfVxuLy8gaW9uLWNhcmQgeyB3aWR0aDoxMDAlOyB9XG5pb24tY2FyZC1zdWJ0aXRsZSB7IGZvbnQtc2l6ZTogc21hbGw7IHRleHQtdHJhbnNmb3JtOm5vbmU7IH1cbmlvbi1mYWItYnV0dG9uIHsgbWFyZ2luOiAwfVxuXG4udmlzaWJsZSB7IHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudH1cbi5oaWRkZW4geyB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudH1cblxuLmJsb2NrIHsgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnR9XG4ubm9uZSB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudH1cblxuLmV4cGFuZCB7IHdpZHRoOjEwMCUgIWltcG9ydGFudH1cblxuLmJsYW5jb3sgLS1iYWNrZ3JvdW5kOmxpZ2h0Z3JheSAhaW1wb3J0YW50OyB9XG4uZHVkb3NheyAtLWJhY2tncm91bmQ6b3JhbmdlICFpbXBvcnRhbnQ7IH1cbi5kdWRvc2FfY29udGVzdGFkYXsgY29sb3I6b3JhbmdlICFpbXBvcnRhbnQ7IH0iXX0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_test-do_test-do_module_ts.js.map