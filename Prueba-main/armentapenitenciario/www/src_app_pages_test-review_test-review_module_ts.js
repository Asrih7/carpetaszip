"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_test-review_test-review_module_ts"],{

/***/ 7742:
/*!*****************************************************************!*\
  !*** ./src/app/pages/test-review/test-review-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestReviewPageRoutingModule": () => (/* binding */ TestReviewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _test_review_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test-review.page */ 7861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _test_review_page__WEBPACK_IMPORTED_MODULE_0__.TestReviewPage
    }
];
class TestReviewPageRoutingModule {
}
TestReviewPageRoutingModule.ɵfac = function TestReviewPageRoutingModule_Factory(t) { return new (t || TestReviewPageRoutingModule)(); };
TestReviewPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TestReviewPageRoutingModule });
TestReviewPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TestReviewPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 6367:
/*!*********************************************************!*\
  !*** ./src/app/pages/test-review/test-review.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestReviewPageModule": () => (/* binding */ TestReviewPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 5503);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/angular */ 341);
/* harmony import */ var _test_review_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test-review-routing.module */ 7742);
/* harmony import */ var _test_review_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test-review.page */ 7861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);








class TestReviewPageModule {
}
TestReviewPageModule.ɵfac = function TestReviewPageModule_Factory(t) { return new (t || TestReviewPageModule)(); };
TestReviewPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TestReviewPageModule });
TestReviewPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
        swiper_angular__WEBPACK_IMPORTED_MODULE_7__.SwiperModule,
        _test_review_routing_module__WEBPACK_IMPORTED_MODULE_1__.TestReviewPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TestReviewPageModule, { declarations: [_test_review_page__WEBPACK_IMPORTED_MODULE_2__.TestReviewPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
        swiper_angular__WEBPACK_IMPORTED_MODULE_7__.SwiperModule,
        _test_review_routing_module__WEBPACK_IMPORTED_MODULE_1__.TestReviewPageRoutingModule] }); })();


/***/ }),

/***/ 7861:
/*!*******************************************************!*\
  !*** ./src/app/pages/test-review/test-review.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestReviewPage": () => (/* binding */ TestReviewPage)
/* harmony export */ });
/* harmony import */ var _Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _test_index_review_test_index_review_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../test-index-review/test-index-review.page */ 5394);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ 3587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_navparam_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/navparam.service */ 7495);
/* harmony import */ var _providers_aulavirtualrest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/aulavirtualrest */ 4313);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! swiper/angular */ 341);
/* harmony import */ var _pipes_safe_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/safe-html */ 6124);













const _c0 = ["swiper"];

function TestReviewPage_ion_buttons_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-buttons", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-back-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function TestReviewPage_ion_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestReviewPage_ion_button_4_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.terminar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function TestReviewPage_ion_col_18_ion_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestReviewPage_ion_col_18_ion_button_2_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19);
      const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.goTo(i_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", "0" + (i_r12 + 1), " ");
  }
}

function TestReviewPage_ion_col_18_ion_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestReviewPage_ion_col_18_ion_button_3_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r21.goTo(i_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r14.listaPreguntas[i_r12].Acertada == 1 ? ctx_r14.listaPreguntas[i_r12].Dudosa == 0 ? "acierto" : "dudosa-acierto" : ctx_r14.listaPreguntas[i_r12].Fallada == 1 ? ctx_r14.listaPreguntas[i_r12].Dudosa == 0 ? "fallo" : "dudosa-fallo" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", "0" + (i_r12 + 1), " ");
  }
}

function TestReviewPage_ion_col_18_ion_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestReviewPage_ion_col_18_ion_button_4_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27);
      const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r25.goTo(i_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", i_r12 + 1, " ");
  }
}

function TestReviewPage_ion_col_18_ion_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestReviewPage_ion_col_18_ion_button_5_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31);
      const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r29.goTo(i_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r16.listaPreguntas[i_r12].Acertada == 1 ? ctx_r16.listaPreguntas[i_r12].Dudosa == 0 ? "acierto" : "dudosa-acierto" : ctx_r16.listaPreguntas[i_r12].Fallada == 1 ? ctx_r16.listaPreguntas[i_r12].Dudosa == 0 ? "fallo" : "dudosa-fallo" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", i_r12 + 1, " ");
  }
}

function TestReviewPage_ion_col_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-col")(1, "ion-menu-toggle", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, TestReviewPage_ion_col_18_ion_button_2_Template, 2, 1, "ion-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, TestReviewPage_ion_col_18_ion_button_3_Template, 2, 2, "ion-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, TestReviewPage_ion_col_18_ion_button_4_Template, 2, 1, "ion-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, TestReviewPage_ion_col_18_ion_button_5_Template, 2, 2, "ion-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const i_r12 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.listaPreguntas[i_r12].IdPregunta < 10 && ctx_r2.listaPreguntas[i_r12].Contestada == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.listaPreguntas[i_r12].IdPregunta < 10 && ctx_r2.listaPreguntas[i_r12].Contestada > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.listaPreguntas[i_r12].IdPregunta > 9 && ctx_r2.listaPreguntas[i_r12].Contestada == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.listaPreguntas[i_r12].IdPregunta > 9 && ctx_r2.listaPreguntas[i_r12].Contestada > 0);
  }
}

function TestReviewPage_ion_segment_button_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-segment-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function TestReviewPage_ion_segment_button_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-segment-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function TestReviewPage_section_30_ion_label_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Nota");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function TestReviewPage_section_30_ion_label_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Nota Real");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function TestReviewPage_section_30_h1_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r35.nota >= 5 ? "aprobado" : "suspenso");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r35.nota);
  }
}

function TestReviewPage_section_30_ion_badge_11_ion_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "APROBADO");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function TestReviewPage_section_30_ion_badge_11_ion_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "SUSPENSO");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function TestReviewPage_section_30_ion_badge_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-badge", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TestReviewPage_section_30_ion_badge_11_ion_label_1_Template, 2, 0, "ion-label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, TestReviewPage_section_30_ion_badge_11_ion_label_2_Template, 2, 0, "ion-label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r36.nota >= 5 ? "etiqueta-aprobado" : "etiqueta-suspenso");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r36.nota >= 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r36.nota < 5);
  }
}

function TestReviewPage_section_30_ion_badge_12_ion_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "APTO");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function TestReviewPage_section_30_ion_badge_12_ion_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "NO APTO");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function TestReviewPage_section_30_ion_badge_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-badge", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TestReviewPage_section_30_ion_badge_12_ion_label_1_Template, 2, 0, "ion-label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, TestReviewPage_section_30_ion_badge_12_ion_label_2_Template, 2, 0, "ion-label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r37.nota > 0 ? "etiqueta-aprobado" : "etiqueta-suspenso");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r37.nota > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r37.nota == 0);
  }
}

function TestReviewPage_section_30_ion_card_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-card")(1, "ion-card-header", 0)(2, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Criterios de correcci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-card-content", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " El ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " por cada pregunta fallada ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("valor del fallo es ", ctx_r38.valorFallo, "");
  }
}

function TestReviewPage_section_30_ion_card_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-card")(1, "ion-card-header", 0)(2, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Criterios de correcci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-card-content", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " El ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "valor del fallo es 0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, ", las preguntas falladas no restan. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "br")(14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " Es necesario ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "tener bien un 70% del total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, " de preguntas. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}

function TestReviewPage_section_30_ion_card_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-card")(1, "ion-card-header", 0)(2, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Criterios de correcci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-card-content", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " El ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "valor del fallo es 0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, ", las preguntas falladas no restan. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "br")(14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " Es necesario ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "tener bien un 85% del total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, " de preguntas. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}

function TestReviewPage_section_30_section_36_ion_label_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "APROBADO");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function TestReviewPage_section_30_section_36_ion_label_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "SUSPENSO");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function TestReviewPage_section_30_section_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-item")(2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-badge", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Nota con Riesgo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h1", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-badge", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, TestReviewPage_section_30_section_36_ion_label_8_Template, 2, 0, "ion-label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, TestReviewPage_section_30_section_36_ion_label_9_Template, 2, 0, "ion-label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "ion-grid")(11, "ion-row")(12, "ion-col")(13, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Dudosas");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "ion-badge", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "ion-col")(19, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Aciertos");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "ion-badge", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "ion-col")(25, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Fallos");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "ion-badge", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r41.notaRiesgo >= 5 ? "aprobado" : "suspenso");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r41.notaRiesgo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r41.notaRiesgo >= 5 ? "etiqueta-aprobado" : "etiqueta-suspenso");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r41.notaRiesgo >= 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r41.notaRiesgo < 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r41.dudosas);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r41.aciertos, " + ", ctx_r41.dudosasAcierto, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r41.fallos, " + ", ctx_r41.dudosasFallo, "");
  }
}

function TestReviewPage_section_30_ion_card_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-card")(1, "ion-card-header", 0)(2, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Nota con Riesgo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-card-content", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " La nota con riesgo s\u00F3lo es un c\u00E1lculo que te dar\u00E1 una visi\u00F3n estrat\u00E9gica para el d\u00EDa del examen. \u00A1A veces arriesgar merece la pena! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "br")(11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "IMPORTANTE: la nota que se tendr\u00E1 en cuenta para el c\u00E1lculo de tu media ser\u00E1 la NOTA REAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}

function TestReviewPage_section_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 34)(1, "ion-avatar", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "section")(7, "ion-badge", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, TestReviewPage_section_30_ion_label_8_Template, 2, 0, "ion-label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, TestReviewPage_section_30_ion_label_9_Template, 2, 0, "ion-label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, TestReviewPage_section_30_h1_10_Template, 2, 2, "h1", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, TestReviewPage_section_30_ion_badge_11_Template, 3, 3, "ion-badge", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, TestReviewPage_section_30_ion_badge_12_Template, 3, 3, "ion-badge", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "ion-grid")(14, "ion-row")(15, "ion-col")(16, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Aciertos");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "ion-badge", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "ion-col")(22, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Fallos");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "ion-badge", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "ion-col")(28, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Blancos");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "ion-badge", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, TestReviewPage_section_30_ion_card_33_Template, 13, 1, "ion-card", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, TestReviewPage_section_30_ion_card_34_Template, 19, 0, "ion-card", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, TestReviewPage_section_30_ion_card_35_Template, 19, 0, "ion-card", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, TestReviewPage_section_30_section_36_Template, 30, 10, "section", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, TestReviewPage_section_30_ion_card_37_Template, 14, 0, "ion-card", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 14, ctx_r5.test.Nombre));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.dudosas == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.dudosas > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.tipoTest != 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.tipoTest != 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.tipoTest == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r5.aciertos);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r5.fallos);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r5.blancos);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.tipoTest != 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.tipoTest == 4 && ctx_r5.idOposicion == 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.tipoTest == 4 && ctx_r5.idOposicion == 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.dudosas > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.dudosas > 0);
  }
}

function TestReviewPage_section_31_3_ng_template_0_ion_card_14_ion_checkbox_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-checkbox", 68);
  }

  if (rf & 2) {
    const j_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    const i_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).index;
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r61.listaPreguntas[i_r52].Respuestas[j_r60].Seleccionada == 1 ? true : false);
  }
}

function TestReviewPage_section_31_3_ng_template_0_ion_card_14_ion_checkbox_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-checkbox", 69);
  }

  if (rf & 2) {
    const j_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    const i_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).index;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r62.listaPreguntas[i_r52].Respuestas[j_r60].Seleccionada == 1 ? true : false);
  }
}

function TestReviewPage_section_31_3_ng_template_0_ion_card_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-card")(1, "ion-card-content", 64)(2, "ion-card-subtitle", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, TestReviewPage_section_31_3_ng_template_0_ion_card_14_ion_checkbox_3_Template, 1, 1, "ion-checkbox", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, TestReviewPage_section_31_3_ng_template_0_ion_card_14_ion_checkbox_4_Template, 1, 1, "ion-checkbox", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ion-label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const j_r60 = ctx.index;
    const i_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).index;
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r54.listaPreguntas[i_r52].Respuestas[j_r60].RespuestaCorrecta == 1 ? "ion-card-content-correct" : ctx_r54.listaPreguntas[i_r52].Respuestas[j_r60].Seleccionada == 1 ? "ion-card-content-ko" : "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r54.listaPreguntas[i_r52].Respuestas[j_r60].RespuestaCorrecta == 1 && ctx_r54.listaPreguntas[i_r52].Respuestas[j_r60].Seleccionada == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r54.listaPreguntas[i_r52].Respuestas[j_r60].RespuestaCorrecta == 0 && ctx_r54.listaPreguntas[i_r52].Respuestas[j_r60].Seleccionada == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r54.listaPreguntas[i_r52].Respuestas[j_r60].RespuestaCorrecta == 1 ? "ion-card-content-ok" : ctx_r54.listaPreguntas[i_r52].Respuestas[j_r60].Seleccionada == 1 ? "ion-card-content-ko" : "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r54.listaPreguntas[i_r52].Respuestas[j_r60].Texto);
  }
}

function TestReviewPage_section_31_3_ng_template_0_ion_fab_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-fab", 70)(1, "ion-fab-button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestReviewPage_section_31_3_ng_template_0_ion_fab_24_Template_ion_fab_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r69);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r68.infoDudosa());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "ion-icon", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}

function TestReviewPage_section_31_3_ng_template_0_ion_fab_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-fab", 73)(1, "ion-fab-button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "ion-icon", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-fab-list")(4, "ion-fab-button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestReviewPage_section_31_3_ng_template_0_ion_fab_25_Template_ion_fab_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r72);
      const i_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).index;
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r70.nuevoComentario(i_r52, ctx_r70.listaPreguntas[i_r52].IdPregunta));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "ion-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-fab-button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestReviewPage_section_31_3_ng_template_0_ion_fab_25_Template_ion_fab_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r72);
      const i_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).index;
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r73.impugnarPregunta(i_r52, ctx_r73.listaPreguntas[i_r52].IdPregunta));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "ion-icon", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}

function TestReviewPage_section_31_3_ng_template_0_ion_fab_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-fab", 73)(1, "ion-fab-button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "ion-icon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-fab-list")(4, "ion-fab-button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestReviewPage_section_31_3_ng_template_0_ion_fab_26_Template_ion_fab_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r77);
      const i_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).index;
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r75.nuevoComentario(i_r52, ctx_r75.listaPreguntas[i_r52].IdPregunta));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "ion-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-fab-button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestReviewPage_section_31_3_ng_template_0_ion_fab_26_Template_ion_fab_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r77);
      const i_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).index;
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r78.impugnarPregunta(i_r52, ctx_r78.listaPreguntas[i_r52].IdPregunta));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "ion-icon", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}

function TestReviewPage_section_31_3_ng_template_0_ion_fab_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-fab", 73)(1, "ion-fab-button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "ion-icon", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-fab-list")(4, "ion-fab-button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestReviewPage_section_31_3_ng_template_0_ion_fab_27_Template_ion_fab_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r82);
      const i_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).index;
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r80.nuevoComentario(i_r52, ctx_r80.listaPreguntas[i_r52].IdPregunta));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "ion-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-fab-button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestReviewPage_section_31_3_ng_template_0_ion_fab_27_Template_ion_fab_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r82);
      const i_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).index;
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r83.impugnarPregunta(i_r52, ctx_r83.listaPreguntas[i_r52].IdPregunta));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "ion-icon", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}

function TestReviewPage_section_31_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-card")(1, "ion-card-header", 34)(2, "ion-button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestReviewPage_section_31_3_ng_template_0_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r86);
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r85.prev());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestReviewPage_section_31_3_ng_template_0_Template_ion_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r86);
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r87.openMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "ion-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestReviewPage_section_31_3_ng_template_0_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r86);
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r88.next());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "ion-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "ion-card-title", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "ion-card-content", 48)(11, "h2")(12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, TestReviewPage_section_31_3_ng_template_0_ion_card_14_Template, 7, 5, "ion-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "ion-card", 46)(16, "ion-card-content", 59)(17, "h3", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "EXPLICACI\u00D3N:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "br")(22, "br")(23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, TestReviewPage_section_31_3_ng_template_0_ion_fab_24_Template, 3, 0, "ion-fab", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, TestReviewPage_section_31_3_ng_template_0_ion_fab_25_Template, 8, 0, "ion-fab", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, TestReviewPage_section_31_3_ng_template_0_ion_fab_26_Template, 8, 0, "ion-fab", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, TestReviewPage_section_31_3_ng_template_0_ion_fab_27_Template, 8, 0, "ion-fab", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r53.listaPreguntas[i_r52].IdPregunta == 1 ? "hidden" : "visible");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r53.listaPreguntas[i_r52].IdPregunta == ctx_r53.numeroPreguntas ? "hidden" : "visible");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", i_r52 + 1, " / ", ctx_r53.numeroPreguntas, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r53.listaPreguntas[i_r52].Texto);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r53.listaPreguntas[i_r52].Respuestas);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r53.listaPreguntas[i_r52].Explicacion == "" || ctx_r53.listaPreguntas[i_r52].Explicacion == " " ? "explicacion-hide" : "explicacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](20, 12, ctx_r53.listaPreguntas[i_r52].Explicacion), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r53.listaPreguntas[i_r52].Dudosa > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r53.listaPreguntas[i_r52].Contestada == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r53.listaPreguntas[i_r52].Contestada == 1 && ctx_r53.listaPreguntas[i_r52].Acertada == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r53.listaPreguntas[i_r52].Contestada == 1 && ctx_r53.listaPreguntas[i_r52].Fallada == 1);
  }
}

function TestReviewPage_section_31_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, TestReviewPage_section_31_3_ng_template_0_Template, 28, 14, "ng-template", 53);
  }
}

function TestReviewPage_section_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section")(1, "swiper", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, TestReviewPage_section_31_3_Template, 1, 0, null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("virtual", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r6.listaPreguntas);
  }
}

function TestReviewPage_section_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 34)(1, "ion-grid")(2, "ion-row")(3, "ion-col")(4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "ion-icon", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-badge", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Tu Nota ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "h1", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "ion-col")(11, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "ion-icon", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "ion-badge", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " Nota Media ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "h1", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "ion-card")(18, "ion-card-header", 0)(19, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "ion-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "ion-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, " Comparativa ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "ion-card-content", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Estas viendo una ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "comparativa");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, " entre tu nota y la nota media del resto de alumnos en este test");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r7.nota >= 5 ? "aprobado" : "suspenso");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.nota);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r7.mediaAlumnos >= 5 ? "aprobado" : "suspenso");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.mediaAlumnos);
  }
}

function TestReviewPage_section_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "RANKING");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "PR\u00D3XIMAMENTE");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-card")(7, "ion-card-header", 0)(8, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "ion-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "ion-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " Criterios del ranking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "ion-card-content", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "La clasificaci\u00F3n del ranking se calcula en funci\u00F3n de los resultados teniendo en cuenta la ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "nota, el tiempo y el n\u00FAmero de veces realizado");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
} // install Swiper modules https://swiperjs.com/angular#virtual-slides


swiper__WEBPACK_IMPORTED_MODULE_2__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_2__.Virtual]); // SwiperCore.use([Pagination, Scrollbar, EffectCube, IonicSlides]);

class TestReviewPage {
  constructor(router, navParamService, proveedor, alertCtrl, loadingCtrl, storage, popoverCtrl, menu) {
    this.router = router;
    this.navParamService = navParamService;
    this.proveedor = proveedor;
    this.alertCtrl = alertCtrl;
    this.loadingCtrl = loadingCtrl;
    this.storage = storage;
    this.popoverCtrl = popoverCtrl;
    this.menu = menu; // config: SwiperOptions = {
    //   pagination: false,
    //   scrollbar: false,
    //   //centeredSlides: true,
    //   //effect: 'cube',
    // };

    this.resultado = "resultado";
    this.revision = "revision";
    this.comparativa = "comparativa";
    this.ranking = "ranking";
    this.numeroRespuestasCorrectas = 0;
    this.usuario = [];
    this.navParams = JSON.parse(this.navParamService.getNavData());
    this.idOposicion = this.navParams['idOposicion'];
    this.test = this.navParams['test'];
    this.tipoTest = this.navParams['tipoTest'];
    this.listaPreguntas = this.navParams['listaPreguntas'];
    this.listaRespuestas = this.navParams['listaRespuestas'];
    this.numeroPreguntas = this.listaPreguntas.length;
    this.aciertos = this.navParams['aciertos'];
    this.fallos = this.navParams['fallos'];
    this.blancos = this.navParams['blancos'];
    this.dudosas = this.navParams['dudosas'];
    this.dudosasAcierto = this.navParams['dudosasAcierto'];
    this.dudosasFallo = this.navParams['dudosasFallo'];
    this.nota = this.navParams['nota'] == 10 ? 10 : this.navParams['nota'] == 0 ? 0 : this.navParams['nota'];
    this.notaRiesgo = this.navParams['notaRiesgo'] == 10 ? 10 : this.navParams['notaRiesgo'] == 0 ? 0 : this.navParams['notaRiesgo'];
    this.valorFallo = this.navParams['valorFallo'];
    this.mediaAlumnos = this.navParams['mediaAlumnos'] == 10 ? 10 : this.navParams['mediaAlumnos'];
    this.origen = this.navParams['origen'];
    this.etiqueta = this.navParams['etiqueta'];
    this.revisar = this.navParams['revisar'];
  }

  ngAfterContentChecked() {// if (this.swiper) {
    //   this.swiper.updateSwiper({});
    // }
  }

  swiperSlideChanged(e) {//console.log('changed: ', e);
    //this.swiper.updateSwiper;
  }

  terminar() {
    var _this = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const confirm = yield _this.alertCtrl.create({
        header: 'Terminar Revisión',
        message: '¿Seguro que deseas terminar la revisión?',
        buttons: [{
          text: 'No',
          handler: () => {}
        }, {
          text: 'Si',
          handler: () => {
            if (_this.origen != null) {
              //this.navCtrl.push(ModuleDetailPage, {modulo: this.origen});
              _this.navParamService.setNavData(_this.origen);

              _this.router.navigate(['/module-detail']);
            } else if (_this.etiqueta != null) {
              _this.navParamService.setNavData(_this.etiqueta);

              if (_this.etiqueta === 'Simulacros') _this.router.navigate(['/test']);else _this.router.navigate(['/specific-content']);
            } else {
              //this.router.navigate(['/test']);  
              _this.router.navigate(['/tabs/test']); // no sirve porque recarga la página y perdemos el menú
              // this.router.navigate(['/tabs/test'])
              // .then(() => {
              //   window.location.reload();
              // });

            }
          }
        }]
      });
      yield confirm.present();
    })();
  }

  explicacion(explicacion) {
    var _this2 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertCtrl.create({
        header: 'Explicación',
        message: explicacion,
        buttons: ['Entendido']
      });
      yield alert.present();
    })();
  }

  prev() {
    this.swiper.swiperRef.slidePrev(500);
  }

  next() {
    this.swiper.swiperRef.slideNext(500);
  }

  goTo(position) {
    this.swiper.swiperRef.slideTo(position, 500);
  }

  infoDudosa() {
    var _this3 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertCtrl.create({
        header: 'Pregunta Dudosa',
        message: 'Marcaste esta pregunta como dudosa',
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  nuevoComentario(posicion, idPregunta) {
    var _this4 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const prompt = yield _this4.alertCtrl.create({
        header: 'Enviar Comentario',
        message: "Escribe tu comentario sobre esta pregunta:",
        inputs: [{
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
            _this4.comentario = data.mensaje;

            _this4.insertarComentarioPregunta(posicion, idPregunta);
          }
        }]
      });
      yield prompt.present();
    })();
  }

  insertarComentarioPregunta(posicion, idPregunta) {
    var _this5 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this5.comentario != "") {
        const loading = yield _this5.loadingCtrl.create({
          message: "Enviando...",
          duration: 500
        });
        yield loading.present(); // Se obtienen los datos del usuario de la memoria

        _this5.storage.get('usuario').then(val => {
          if (val != null && val != undefined) {
            _this5.usuario = JSON.parse(val);

            _this5.proveedor.comentarPregunta(_this5.usuario.Mensaje.AuthorizationToken, _this5.test.IdTest, idPregunta, posicion, _this5.comentario).subscribe( //(data)=>{this.tests = data;},
            data => {
              _this5.comentarioEnviado(data);
            }, error => {
              console.log(error);
            }, () => {
              loading.dismiss();
            });
          }
        });
      } else {
        const alert = yield _this5.alertCtrl.create({
          header: 'ATENCIÓN',
          message: 'Debes introducir el mensaje para enviar tu comentario',
          buttons: ['OK']
        });
        yield alert.present();
      }
    })();
  }

  comentarioEnviado(data) {
    var _this6 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this6.alertCtrl.create({
        header: 'Comentario Enviado',
        message: data.Mensaje,
        buttons: ['OK']
      });
      yield alert.present(); // console.log(data);
    })();
  }

  impugnarPregunta(posicion, idPregunta) {
    var _this7 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const prompt = yield _this7.alertCtrl.create({
        header: 'Impugnar pregunta',
        message: "Explica el motivo de impugnación de esta pregunta:",
        inputs: [{
          name: 'motivo',
          placeholder: 'Motivo',
          max: '1000'
        }],
        buttons: [{
          text: 'Cancelar',
          handler: data => {// console.log('Cancel clicked');            
          }
        }, {
          text: 'Impugnar',
          handler: data => {
            _this7.comentario = data.motivo;

            _this7.insertarImpugnacionPregunta(posicion, idPregunta);
          }
        }]
      });
      prompt.present();
    })();
  }

  insertarImpugnacionPregunta(posicion, idPregunta) {
    var _this8 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this8.comentario != "") {
        const loading = yield _this8.loadingCtrl.create({
          message: "Enviando..."
        });
        yield loading.present(); // Se obtienen los datos del usuario de la memoria

        _this8.storage.get('usuario').then(val => {
          if (val != null && val != undefined) {
            _this8.usuario = JSON.parse(val);

            _this8.proveedor.impugnarPregunta(_this8.usuario.Mensaje.AuthorizationToken, _this8.test.IdTest, idPregunta, posicion, _this8.comentario).subscribe( //(data)=>{this.tests = data;},
            data => {
              _this8.preguntaImpugnada(data);
            }, error => {
              console.log(error);
            }, () => {
              loading.dismiss();
            });
          } // else{
          //   // Si no se han recuperado los datos se vuelve a la página del foro
          //   this.navCtrl.push(ForoPage);
          // }

        });
      } else {
        const alert = yield _this8.alertCtrl.create({
          header: 'ATENCIÓN',
          message: 'Debes introducir el motivo para enviar tu impugnación',
          buttons: ['OK']
        });
        yield alert.present();
      }
    })();
  }

  preguntaImpugnada(data) {
    var _this9 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this9.alertCtrl.create({
        header: 'Impugnación Enviada',
        message: data.Mensaje,
        buttons: ['OK']
      });
      yield alert.present(); // console.log(data);
    })();
  }

  verIndice(ev) {
    var _this10 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this10.popoverCtrl.create({
        component: _test_index_review_test_index_review_page__WEBPACK_IMPORTED_MODULE_1__.TestIndexReviewPage,
        componentProps: {
          preguntas: _this10.listaPreguntas,
          swiper: _this10.swiper
        },
        event: ev,
        translucent: true
      });
      yield popover.present();
    })();
  }

  openMenu() {
    this.menu.enable(true, 'indicePreguntasPreview');
    this.menu.open('indicePreguntasPreview');
  }

  closeMenu() {
    this.menu.close('indicePreguntasPreview');
  }

}

TestReviewPage.ɵfac = function TestReviewPage_Factory(t) {
  return new (t || TestReviewPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_navparam_service__WEBPACK_IMPORTED_MODULE_3__.NavparamService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_providers_aulavirtualrest__WEBPACK_IMPORTED_MODULE_4__.AulavirtualrestProvider), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__.Storage), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PopoverController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController));
};

TestReviewPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: TestReviewPage,
  selectors: [["app-test-review"]],
  viewQuery: function TestReviewPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.swiper = _t.first);
    }
  },
  decls: 34,
  vars: 11,
  consts: [["color", "primary", 1, "ion-text-center"], ["slot", "start", 4, "ngIf"], ["slot", "primary"], [3, "click", 4, "ngIf"], ["side", "start", "menuId", "indicePreguntasPreview", "contentId", "indicePreview"], ["color", "primary"], ["slot", "end"], [3, "click"], ["slot", "icon-only", "name", "close-outline"], [4, "ngFor", "ngForOf"], ["id", "indicePreview"], [1, "ion-padding"], [3, "ngModel", "ngModelChange"], ["value", "resultado"], ["name", "ribbon-outline"], ["value", "revision"], ["name", "eye-outline"], ["value", "comparativa", 4, "ngIf"], ["value", "ranking", 4, "ngIf"], [3, "ngSwitch"], ["class", "ion-text-center", 4, "ngSwitchCase"], [4, "ngSwitchCase"], ["slot", "start"], ["text", "Volver"], ["slot", "icon-only", "name", "exit-outline"], ["auto-hide", "true"], ["size", "small", "color", "light", 3, "click", 4, "ngIf"], ["size", "small", 3, "ngClass", "click", 4, "ngIf"], ["size", "small", "color", "light", 3, "click"], ["size", "small", 3, "ngClass", "click"], ["value", "comparativa"], ["name", "people-outline"], ["value", "ranking"], ["name", "trophy-outline"], [1, "ion-text-center"], [1, "test-avatar"], ["src", "../assets/imgs/icon.png"], ["color", "light", 1, "nota"], [4, "ngIf"], [3, "ngClass", 4, "ngIf"], [1, "aciertos"], ["item-end", "", 1, "aciertos-background"], [1, "fallos"], ["item-end", "", 1, "fallos-background"], [1, "blancos"], ["item-end", "", 1, "blancos-background"], [3, "ngClass"], ["name", "information-circle-outline"], [1, "ion-text-wrap"], [1, "dudosas"], ["item-end", "", 1, "dudosas-background"], [3, "virtual"], ["swiper", ""], ["swiperSlide", ""], ["fill", "clear", 3, "ngClass", "click"], ["slot", "icon-only", "name", "caret-back"], ["fill", "clear", 3, "click"], ["name", "apps"], ["slot", "icon-only", "name", "caret-forward"], [1, "ion-text-wrap", "ion-card-content-explicacion"], [1, "explicacion-title"], [1, "explicacion", 3, "innerHTML"], ["vertical", "top", "horizontal", "start", 4, "ngIf"], ["vertical", "top", "horizontal", "end", 4, "ngIf"], [1, "ion-text-wrap", 3, "ngClass"], [1, "ion-text-left"], ["color", "success", "disabled", "true", 3, "checked", 4, "ngIf"], ["color", "danger", "disabled", "true", 3, "checked", 4, "ngIf"], ["color", "success", "disabled", "true", 3, "checked"], ["color", "danger", "disabled", "true", 3, "checked"], ["vertical", "top", "horizontal", "start"], ["size", "small", "color", "warning", "title", "Dudosa", 3, "click"], ["name", "help-circle-outline"], ["vertical", "top", "horizontal", "end"], ["size", "small", "color", "white", "title", "Comunicar"], ["name", "hand-right-outline", "color", "black"], ["size", "small", "title", "Comentario", 3, "click"], ["name", "chatbubbles-outline"], ["size", "small", "title", "Impugnar", 3, "click"], ["name", "alert-circle-outline", "color", "danger"], ["name", "happy-outline", "color", "success"], ["name", "sad-outline", "color", "danger"], ["name", "person", "color", "primary", 1, "icon-person"], ["name", "people", 1, "icon-people"], ["src", "../assets/imgs/ranking.png", "width", "50%"]],
  template: function TestReviewPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, TestReviewPage_ion_buttons_2_Template, 2, 0, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, TestReviewPage_ion_button_4_Template, 2, 0, "ion-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Revisi\u00F3n ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-menu", 4)(8, "ion-header")(9, "ion-toolbar", 5)(10, "ion-buttons", 6)(11, "ion-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TestReviewPage_Template_ion_button_click_11_listener() {
        return ctx.closeMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Preguntas");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "ion-content")(16, "ion-grid")(17, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, TestReviewPage_ion_col_18_Template, 6, 4, "ion-col", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "ion-router-outlet", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "ion-content", 11)(21, "ion-segment", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function TestReviewPage_Template_ion_segment_ngModelChange_21_listener($event) {
        return ctx.resultado = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "ion-segment-button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "ion-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "ion-segment-button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "ion-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, TestReviewPage_ion_segment_button_26_Template, 2, 0, "ion-segment-button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, TestReviewPage_ion_segment_button_27_Template, 2, 0, "ion-segment-button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, TestReviewPage_section_30_Template, 38, 16, "section", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, TestReviewPage_section_31_Template, 4, 2, "section", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, TestReviewPage_section_32_Template, 30, 4, "section", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, TestReviewPage_section_33_Template, 18, 0, "section", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.revisar == true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.revisar == false);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.listaPreguntas);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.resultado);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.tipoTest != 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.tipoTest != 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitch", ctx.resultado);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "resultado");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "revision");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "comparativa");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "ranking");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgSwitchCase, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonFabList, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonMenu, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonMenuToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRouterOutlet, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBackButtonDelegate, swiper_angular__WEBPACK_IMPORTED_MODULE_12__.SwiperComponent, swiper_angular__WEBPACK_IMPORTED_MODULE_12__.SwiperSlideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.UpperCasePipe, _pipes_safe_html__WEBPACK_IMPORTED_MODULE_5__.SafeHtmlPipe],
  styles: [".test-avatar[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 70px;\n  height: 70px;\n}\n\n.aprobado[_ngcontent-%COMP%] {\n  color: #00b06c;\n  font-size: 4rem;\n}\n\n.suspenso[_ngcontent-%COMP%] {\n  color: #EC5252;\n  font-size: 4rem;\n}\n\n.nota[_ngcontent-%COMP%] {\n  color: light;\n  font-weight: bold;\n  font-size: small;\n  margin-bottom: -25px;\n}\n\n.etiqueta-aprobado[_ngcontent-%COMP%] {\n  background-color: #00b06c;\n  color: white;\n  font-weight: bold;\n  font-size: large;\n  margin-right: 5px;\n}\n\n.etiqueta-suspenso[_ngcontent-%COMP%] {\n  background-color: #EC5252;\n  color: white;\n  font-weight: bold;\n  font-size: large;\n  margin-right: 5px;\n}\n\n.aciertos[_ngcontent-%COMP%] {\n  color: #00b06c;\n}\n\n.fallos[_ngcontent-%COMP%] {\n  color: #EC5252;\n}\n\n.blancos[_ngcontent-%COMP%] {\n  color: gray;\n}\n\n.dudosas[_ngcontent-%COMP%] {\n  color: #FFA12D;\n}\n\n.aciertos-background[_ngcontent-%COMP%] {\n  background-color: #00b06c;\n  margin-right: 5px;\n}\n\n.fallos-background[_ngcontent-%COMP%] {\n  background-color: #EC5252;\n  margin-right: 5px;\n}\n\n.blancos-background[_ngcontent-%COMP%] {\n  background-color: gray;\n  margin-right: 5px;\n}\n\n.dudosas-background[_ngcontent-%COMP%] {\n  background-color: #FFA12D;\n  margin-right: 5px;\n}\n\n.acierto[_ngcontent-%COMP%] {\n  --background: #00b06c !important ;\n}\n\n.fallo[_ngcontent-%COMP%] {\n  --background: #EC5252 !important ;\n}\n\n.dudosa-acierto[_ngcontent-%COMP%] {\n  --background: orange !important;\n  color: #00b06c !important;\n}\n\n.dudosa-fallo[_ngcontent-%COMP%] {\n  --background: orange !important;\n  color: #EC5252 !important;\n}\n\n.dudosa[_ngcontent-%COMP%] {\n  border-color: orange !important;\n}\n\n.dudosa_contestada[_ngcontent-%COMP%] {\n  --background:orange !important;\n}\n\nion-slides[_ngcontent-%COMP%] {\n  height: initial;\n}\n\n.ion-card-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n  text-align: justify;\n}\n\n.ion-card-content-ok[_ngcontent-%COMP%] {\n  background-color: #c9ffe5;\n}\n\n.ion-card-content-ko[_ngcontent-%COMP%] {\n  background-color: #fcd4d4;\n}\n\n.ion-card-content-correct[_ngcontent-%COMP%] {\n  background-color: #c9ffe5;\n  border: 2px;\n  border-color: #00b06c;\n  border-style: dashed;\n}\n\n.ion-card-content-incorrect[_ngcontent-%COMP%] {\n  background-color: #fcd4d4;\n  border: 2px;\n  border-color: #EC5252;\n  border-style: dashed;\n}\n\n.ion-card-content-explicacion[_ngcontent-%COMP%] {\n  background-color: #fff0cc !important;\n  border: 2px !important;\n  border-color: #f69d35 !important;\n  border-style: solid !important;\n}\n\n.ion-button-visible[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n\n.ion-button-hide[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.explicacion-hide[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.explicacion[_ngcontent-%COMP%] {\n  visibility: visible;\n  white-space: normal !important;\n  text-align: justify;\n  background-color: #fff0cc;\n}\n\n.explicacion-title[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  color: #f69d35;\n}\n\n.visible[_ngcontent-%COMP%] {\n  visibility: visible !important;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  visibility: hidden !important;\n}\n\n.icon-person[_ngcontent-%COMP%] {\n  font-size: 3em;\n  margin-bottom: -10px;\n}\n\n.icon-people[_ngcontent-%COMP%] {\n  font-size: 3em;\n  margin-bottom: -10px;\n  color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QtcmV2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWRKOztBQWlCQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBZEo7O0FBaUJBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFkSjs7QUFpQkE7RUFBTyxZQUFBO0VBQWEsaUJBQUE7RUFBbUIsZ0JBQUE7RUFBa0Isb0JBQUE7QUFWekQ7O0FBV0E7RUFBb0IseUJBQUE7RUFBMkIsWUFBQTtFQUFhLGlCQUFBO0VBQW1CLGdCQUFBO0VBQWlCLGlCQUFBO0FBSGhHOztBQUlBO0VBQW9CLHlCQUFBO0VBQTJCLFlBQUE7RUFBYSxpQkFBQTtFQUFtQixnQkFBQTtFQUFpQixpQkFBQTtBQUloRzs7QUFGQTtFQUNJLGNBQUE7QUFLSjs7QUFGQTtFQUNJLGNBQUE7QUFLSjs7QUFGQTtFQUNJLFdBQUE7QUFLSjs7QUFGQTtFQUNJLGNBQUE7QUFLSjs7QUFGQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7QUFLSjs7QUFGQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7QUFLSjs7QUFGQTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7QUFLSjs7QUFGQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7QUFLSjs7QUFGQTtFQUFXLGlDQUFBO0FBTVg7O0FBTEE7RUFBUyxpQ0FBQTtBQVNUOztBQVBBO0VBQWlCLCtCQUFBO0VBQWlDLHlCQUFBO0FBWWxEOztBQVhBO0VBQWUsK0JBQUE7RUFBaUMseUJBQUE7QUFnQmhEOztBQWRBO0VBQVMsK0JBQUE7QUFrQlQ7O0FBakJBO0VBQW9CLDhCQUFBO0FBcUJwQjs7QUFuQkE7RUFBYSxlQUFBO0FBdUJiOztBQXJCQTtFQUFvQiw2QkFBQTtFQUE4QixtQkFBQTtBQTBCbEQ7O0FBekJBO0VBQXVCLHlCQUFBO0FBNkJ2Qjs7QUE1QkE7RUFBdUIseUJBQUE7QUFnQ3ZCOztBQS9CQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUFrQ0o7O0FBaENBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQW1DSjs7QUFqQ0E7RUFDSSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtBQW9DSjs7QUEvQkE7RUFBc0IsbUJBQUE7QUFtQ3RCOztBQWxDQTtFQUFtQixrQkFBQTtBQXNDbkI7O0FBcENBO0VBQW9CLGtCQUFBO0FBd0NwQjs7QUF0Q0E7RUFDSSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQXlDSjs7QUF0Q0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBeUNKOztBQXRDQTtFQUFXLDhCQUFBO0FBMENYOztBQXpDQTtFQUFVLDZCQUFBO0FBNkNWOztBQTNDQTtFQUNJLGNBQUE7RUFDQSxvQkFBQTtBQThDSjs7QUEzQ0E7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQThDSiIsImZpbGUiOiJ0ZXN0LXJldmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAaW1wb3J0ICd+c3dpcGVyL3Njc3MnO1xuLy8gQGltcG9ydCAnfkBpb25pYy9hbmd1bGFyL2Nzcy9pb25pYy1zd2lwZXInO1xuXG4vLyAuc3dpcHBlci1jb250YWluZXIge1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIGhlaWdodDogMTAwJTtcbi8vIH1cblxuLy8gLnN3aXBlci1zbGlkZSB7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyB9XG5cbi50ZXN0LWF2YXRhcntcbiAgICBtYXJnaW46MCBhdXRvO1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogNzBweDtcbn1cblxuLmFwcm9iYWRve1xuICAgIGNvbG9yOiAjMDBiMDZjO1xuICAgIGZvbnQtc2l6ZTogNC4wcmVtO1xufVxuXG4uc3VzcGVuc297XG4gICAgY29sb3I6ICNFQzUyNTI7XG4gICAgZm9udC1zaXplOiA0LjByZW07XG59XG5cbi5ub3RhIHtjb2xvcjpsaWdodDsgZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogc21hbGw7IG1hcmdpbi1ib3R0b206IC0yNXB4O31cbi5ldGlxdWV0YS1hcHJvYmFkbyB7YmFja2dyb3VuZC1jb2xvcjogIzAwYjA2YzsgY29sb3I6d2hpdGU7IGZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IGxhcmdlO21hcmdpbi1yaWdodDogNXB4O31cbi5ldGlxdWV0YS1zdXNwZW5zbyB7YmFja2dyb3VuZC1jb2xvcjogI0VDNTI1MjsgY29sb3I6d2hpdGU7IGZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IGxhcmdlO21hcmdpbi1yaWdodDogNXB4O31cblxuLmFjaWVydG9ze1xuICAgIGNvbG9yOiAjMDBiMDZjO1xufVxuXG4uZmFsbG9ze1xuICAgIGNvbG9yOiAjRUM1MjUyO1xufVxuXG4uYmxhbmNvc3tcbiAgICBjb2xvcjogZ3JheTtcbn1cblxuLmR1ZG9zYXN7XG4gICAgY29sb3I6ICNGRkExMkQ7XG59XG5cbi5hY2llcnRvcy1iYWNrZ3JvdW5ke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGIwNmM7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5mYWxsb3MtYmFja2dyb3VuZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUM1MjUyO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uYmxhbmNvcy1iYWNrZ3JvdW5ke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5kdWRvc2FzLWJhY2tncm91bmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQTEyRDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmFjaWVydG8geyAtLWJhY2tncm91bmQ6ICMwMGIwNmMgIWltcG9ydGFudCB9XG4uZmFsbG8geyAtLWJhY2tncm91bmQ6ICNFQzUyNTIgIWltcG9ydGFudCB9XG5cbi5kdWRvc2EtYWNpZXJ0byB7LS1iYWNrZ3JvdW5kOiBvcmFuZ2UgIWltcG9ydGFudDsgY29sb3I6ICMwMGIwNmMgIWltcG9ydGFudH1cbi5kdWRvc2EtZmFsbG8gey0tYmFja2dyb3VuZDogb3JhbmdlICFpbXBvcnRhbnQ7IGNvbG9yOiAjRUM1MjUyICFpbXBvcnRhbnR9XG5cbi5kdWRvc2F7IGJvcmRlci1jb2xvcjpvcmFuZ2UgIWltcG9ydGFudCB9XG4uZHVkb3NhX2NvbnRlc3RhZGF7IC0tYmFja2dyb3VuZDpvcmFuZ2UgIWltcG9ydGFudDsgfVxuXG5pb24tc2xpZGVzIHsgaGVpZ2h0OiBpbml0aWFsOyB9IFxuICAgIFxuLmlvbi1jYXJkLWNvbnRlbnQgeyBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50OyB0ZXh0LWFsaWduOiBqdXN0aWZ5O31cbi5pb24tY2FyZC1jb250ZW50LW9rIHsgYmFja2dyb3VuZC1jb2xvcjojYzlmZmU1OyB9XG4uaW9uLWNhcmQtY29udGVudC1rbyB7IGJhY2tncm91bmQtY29sb3I6I2ZjZDRkNDsgfVxuLmlvbi1jYXJkLWNvbnRlbnQtY29ycmVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojYzlmZmU1O1xuICAgIGJvcmRlcjogMnB4O1xuICAgIGJvcmRlci1jb2xvcjogIzAwYjA2YztcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcbn1cbi5pb24tY2FyZC1jb250ZW50LWluY29ycmVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmNkNGQ0O1xuICAgIGJvcmRlcjogMnB4O1xuICAgIGJvcmRlci1jb2xvcjogI0VDNTI1MjtcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcbn1cbi5pb24tY2FyZC1jb250ZW50LWV4cGxpY2FjaW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmYwY2MgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDJweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogI2Y2OWQzNSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQgIWltcG9ydGFudDtcbn1cbi8vLmlvbi1jYXJkLWNvbnRlbnQtb2sgeyBjb2xvcjogIzAwYjA2YzsgYmFja2dyb3VuZC1jb2xvcjojYzlmZmU1OyB9XG4vLy5pb24tY2FyZC1jb250ZW50LWtvIHsgY29sb3I6ICNmZTQxNTc7IGJhY2tncm91bmQtY29sb3I6I2ZjZDRkNDsgfVxuXG4uaW9uLWJ1dHRvbi12aXNpYmxlIHsgdmlzaWJpbGl0eTogdmlzaWJsZTt9XG4uaW9uLWJ1dHRvbi1oaWRlIHsgdmlzaWJpbGl0eTogaGlkZGVuO30gICAgXG5cbi5leHBsaWNhY2lvbi1oaWRlIHsgdmlzaWJpbGl0eTogaGlkZGVuO30gICAgXG5cbi5leHBsaWNhY2lvbntcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDsgXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmYwY2M7XG59XG5cbi5leHBsaWNhY2lvbi10aXRsZXtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGNvbG9yOiNmNjlkMzU7XG59XG5cbi52aXNpYmxlIHsgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50fVxuLmhpZGRlbiB7IHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50fVxuXG4uaWNvbi1wZXJzb24geyBcbiAgICBmb250LXNpemU6IDNlbTsgXG4gICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XG4gICAgLy8gY29sb3I6ICMxM2I1ZWE7XG59XG4uaWNvbi1wZW9wbGUgeyBcbiAgICBmb250LXNpemU6IDNlbTsgXG4gICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcbn0iXX0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_test-review_test-review_module_ts.js.map