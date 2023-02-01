"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_specific-content_specific-content_module_ts"],{

/***/ 482:
/*!***************************************************************************!*\
  !*** ./src/app/pages/specific-content/specific-content-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecificContentPageRoutingModule": () => (/* binding */ SpecificContentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _specific_content_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./specific-content.page */ 5875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _specific_content_page__WEBPACK_IMPORTED_MODULE_0__.SpecificContentPage
    }
];
class SpecificContentPageRoutingModule {
}
SpecificContentPageRoutingModule.ɵfac = function SpecificContentPageRoutingModule_Factory(t) { return new (t || SpecificContentPageRoutingModule)(); };
SpecificContentPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SpecificContentPageRoutingModule });
SpecificContentPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SpecificContentPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 2640:
/*!*******************************************************************!*\
  !*** ./src/app/pages/specific-content/specific-content.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecificContentPageModule": () => (/* binding */ SpecificContentPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _specific_content_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./specific-content-routing.module */ 482);
/* harmony import */ var _specific_content_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./specific-content.page */ 5875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class SpecificContentPageModule {
}
SpecificContentPageModule.ɵfac = function SpecificContentPageModule_Factory(t) { return new (t || SpecificContentPageModule)(); };
SpecificContentPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SpecificContentPageModule });
SpecificContentPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _specific_content_routing_module__WEBPACK_IMPORTED_MODULE_0__.SpecificContentPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SpecificContentPageModule, { declarations: [_specific_content_page__WEBPACK_IMPORTED_MODULE_1__.SpecificContentPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _specific_content_routing_module__WEBPACK_IMPORTED_MODULE_0__.SpecificContentPageRoutingModule] }); })();


/***/ }),

/***/ 5875:
/*!*****************************************************************!*\
  !*** ./src/app/pages/specific-content/specific-content.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecificContentPage": () => (/* binding */ SpecificContentPage)
/* harmony export */ });
/* harmony import */ var _Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 6549);
/* harmony import */ var capacitor_video_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! capacitor-video-player */ 3935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_navparam_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/navparam.service */ 7495);
/* harmony import */ var _providers_aulavirtualrest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/aulavirtualrest */ 4313);
/* harmony import */ var _providers_logout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/logout */ 8599);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);














function SpecificContentPage_ion_list_16_ion_item_2_ng_container_3_ion_badge_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-badge", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const etiquetaDoc_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", etiquetaDoc_r7, " ");
  }
}

function SpecificContentPage_ion_list_16_ion_item_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SpecificContentPage_ion_list_16_ion_item_2_ng_container_3_ion_badge_1_Template, 2, 1, "ion-badge", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const etiquetaDoc_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", etiquetaDoc_r7 != "");
  }
}

function SpecificContentPage_ion_list_16_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SpecificContentPage_ion_list_16_ion_item_2_Template_ion_item_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const doc_r5 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r10.view(doc_r5, doc_r5.ID));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, SpecificContentPage_ion_list_16_ion_item_2_ng_container_3_Template, 2, 1, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const doc_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", doc_r5.Visto > 0 ? "doc-read" : "doc-unread");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", doc_r5.Etiquetas.split("]["));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", doc_r5.Nombre, " ");
  }
}

function SpecificContentPage_ion_list_16_section_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function SpecificContentPage_ion_list_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-list")(1, "ion-searchbar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ionInput", function SpecificContentPage_ion_list_16_Template_ion_searchbar_ionInput_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r12.getDocs($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SpecificContentPage_ion_list_16_ion_item_2_Template, 6, 3, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, SpecificContentPage_ion_list_16_section_3_Template, 2, 0, "section", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.listaDocs);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.listaDocs != null && ctx_r0.listaDocs.length < 1);
  }
}

function SpecificContentPage_ion_list_17_ion_item_2_ng_container_3_ion_badge_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-badge", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const etiquetaVideo_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", etiquetaVideo_r18, " ");
  }
}

function SpecificContentPage_ion_list_17_ion_item_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SpecificContentPage_ion_list_17_ion_item_2_ng_container_3_ion_badge_1_Template, 2, 1, "ion-badge", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const etiquetaVideo_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", etiquetaVideo_r18 != "");
  }
}

function SpecificContentPage_ion_list_17_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SpecificContentPage_ion_list_17_ion_item_2_Template_ion_item_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const video_r16 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r21.play(video_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, SpecificContentPage_ion_list_17_ion_item_2_ng_container_3_Template, 2, 1, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const video_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", video_r16.Visto > 0 ? "video-viewed" : "video-unviewed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", video_r16.Etiquetas.split("]["));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", video_r16.Nombre, " ");
  }
}

function SpecificContentPage_ion_list_17_section_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function SpecificContentPage_ion_list_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-list")(1, "ion-searchbar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ionInput", function SpecificContentPage_ion_list_17_Template_ion_searchbar_ionInput_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r23.getVideos($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SpecificContentPage_ion_list_17_ion_item_2_Template, 6, 3, "ion-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, SpecificContentPage_ion_list_17_section_3_Template, 2, 0, "section", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.listaVideos);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.listaVideos != null && ctx_r1.listaVideos.length < 1);
  }
}

function SpecificContentPage_ion_list_18_ion_item_2_ion_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-icon", 41);
  }

  if (rf & 2) {
    const i_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r29.listaTest[i_r28].Realizado > 0 ? "test-done" : "test-undone");
  }
}

function SpecificContentPage_ion_list_18_ion_item_2_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-icon", 42);
  }
}

function SpecificContentPage_ion_list_18_ion_item_2_ng_container_4_ion_badge_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-badge", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const etiquetaTest_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", etiquetaTest_r42, " ");
  }
}

function SpecificContentPage_ion_list_18_ion_item_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SpecificContentPage_ion_list_18_ion_item_2_ng_container_4_ion_badge_1_Template, 2, 1, "ion-badge", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const etiquetaTest_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", etiquetaTest_r42 != "");
  }
}

function SpecificContentPage_ion_list_18_ion_item_2_ion_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-icon", 43);
  }
}

function SpecificContentPage_ion_list_18_ion_item_2_ion_icon_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-icon", 44);
  }
}

function SpecificContentPage_ion_list_18_ion_item_2_label_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "APTO");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function SpecificContentPage_ion_list_18_ion_item_2_ion_icon_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-icon", 46);
  }
}

function SpecificContentPage_ion_list_18_ion_item_2_label_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "NO APTO");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function SpecificContentPage_ion_list_18_ion_item_2_ion_icon_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-icon", 48);
  }

  if (rf & 2) {
    const i_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r37.etiqueta != "Personalidad" && ctx_r37.listaTest[i_r28].UltimoResultado < 5 ? "test-fail" : "test-pass");
  }
}

function SpecificContentPage_ion_list_18_ion_item_2_label_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r38.listaTest[i_r28].UltimoResultado < 5 ? "test-fail" : "test-pass");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r38.listaTest[i_r28].UltimoResultado, " vs ");
  }
}

function SpecificContentPage_ion_list_18_ion_item_2_ion_icon_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-icon", 49);
  }

  if (rf & 2) {
    const i_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r39.etiqueta != "Personalidad" && ctx_r39.listaTest[i_r28].UltimoResultado < 5 ? "test-fail" : "test-pass");
  }
}

function SpecificContentPage_ion_list_18_ion_item_2_label_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r40.listaTest[i_r28].UltimoResultado < 5 ? "test-fail" : "test-pass");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r40.listaTest[i_r28].Media);
  }
}

function SpecificContentPage_ion_list_18_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SpecificContentPage_ion_list_18_ion_item_2_Template_ion_item_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r50);
      const i_r28 = restoredCtx.index;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r49.hacerTest(ctx_r49.listaTest[i_r28]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SpecificContentPage_ion_list_18_ion_item_2_ion_icon_1_Template, 1, 1, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SpecificContentPage_ion_list_18_ion_item_2_ion_icon_2_Template, 1, 0, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SpecificContentPage_ion_list_18_ion_item_2_ng_container_4_Template, 2, 1, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, SpecificContentPage_ion_list_18_ion_item_2_ion_icon_6_Template, 1, 0, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "section", 31)(9, "label")(10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " preguntas");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, SpecificContentPage_ion_list_18_ion_item_2_ion_icon_18_Template, 1, 0, "ion-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, SpecificContentPage_ion_list_18_ion_item_2_label_19_Template, 2, 0, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, SpecificContentPage_ion_list_18_ion_item_2_ion_icon_20_Template, 1, 0, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, SpecificContentPage_ion_list_18_ion_item_2_label_21_Template, 2, 0, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, SpecificContentPage_ion_list_18_ion_item_2_ion_icon_22_Template, 1, 1, "ion-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, SpecificContentPage_ion_list_18_ion_item_2_label_23_Template, 2, 2, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, SpecificContentPage_ion_list_18_ion_item_2_ion_icon_24_Template, 1, 1, "ion-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, SpecificContentPage_ion_list_18_ion_item_2_label_25_Template, 2, 2, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const test_r27 = ctx.$implicit;
    const i_r28 = ctx.index;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r25.listaTest[i_r28].Pendiente == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r25.listaTest[i_r28].Pendiente > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", test_r27.Etiquetas.split("]["));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r25.listaTest[i_r28].Instrucciones != "" && ctx_r25.listaTest[i_r28].Instrucciones != " " && ctx_r25.listaTest[i_r28].Instrucciones != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r25.listaTest[i_r28].Nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r25.listaTest[i_r28].NumPreg);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r25.listaTest[i_r28].Limite > 0 ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r25.listaTest[i_r28].Limite > 0 ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r25.listaTest[i_r28].Realizado, "/", ctx_r25.listaTest[i_r28].Limite, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r25.etiqueta == "Personalidad" && ctx_r25.listaTest[i_r28].Realizado > 0 && ctx_r25.listaTest[i_r28].UltimoResultado > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r25.etiqueta == "Personalidad" && ctx_r25.listaTest[i_r28].Realizado > 0 && ctx_r25.listaTest[i_r28].UltimoResultado > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r25.etiqueta == "Personalidad" && ctx_r25.listaTest[i_r28].Realizado > 0 && ctx_r25.listaTest[i_r28].UltimoResultado == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r25.etiqueta == "Personalidad" && ctx_r25.listaTest[i_r28].Realizado > 0 && ctx_r25.listaTest[i_r28].UltimoResultado == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r25.etiqueta != "Personalidad" && ctx_r25.listaTest[i_r28].Realizado > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r25.etiqueta != "Personalidad" && ctx_r25.listaTest[i_r28].Realizado > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r25.etiqueta != "Personalidad" && ctx_r25.listaTest[i_r28].Realizado > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r25.etiqueta != "Personalidad" && ctx_r25.listaTest[i_r28].Realizado > 0);
  }
}

function SpecificContentPage_ion_list_18_section_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function SpecificContentPage_ion_list_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-list")(1, "ion-searchbar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ionInput", function SpecificContentPage_ion_list_18_Template_ion_searchbar_ionInput_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r51.getTest($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SpecificContentPage_ion_list_18_ion_item_2_Template, 26, 18, "ion-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, SpecificContentPage_ion_list_18_section_3_Template, 2, 0, "section", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.listaTest);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.listaTest != null && ctx_r2.listaTest.length < 1);
  }
}

class SpecificContentPage {
  constructor(router, navParamService, proveedor, proveedorLogout, alertCtrl, loadingCtrl, actionSheetCtrl, storage, decimalPipe) {
    this.router = router;
    this.navParamService = navParamService;
    this.proveedor = proveedor;
    this.proveedorLogout = proveedorLogout;
    this.alertCtrl = alertCtrl;
    this.loadingCtrl = loadingCtrl;
    this.actionSheetCtrl = actionSheetCtrl;
    this.storage = storage;
    this.decimalPipe = decimalPipe;
    this.usuario = [];
    this.searchQueryDocs = '';
    this.searchQueryVideos = '';
    this.searchQueryTest = '';
    this.docs = "docs";
    this.videos = "videos";
    this.teoria = "teoria";
    this.numMinutos = 0;
    this.numPreguntas = 0;
    this.continuar = 0; //this.modulo = this.navParamService.getNavData();

    this.etiqueta = this.navParamService.getNavData();
  }

  ionViewWillEnter() {
    this.initialize();
  }

  ngAfterViewInit() {
    // Initialise the video plugin player
    if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.isNativePlatform) {
      this.videoPlayer = capacitor_video_player__WEBPACK_IMPORTED_MODULE_2__.CapacitorVideoPlayer;
    } else {
      this.videoPlayer = capacitor_video_player__WEBPACK_IMPORTED_MODULE_2__.CapacitorVideoPlayer;
    }
  }

  initialize() {
    // Se cargan los documentos
    if (this.searchQueryDocs == '') {
      this.initializeDocs();
    } // Se cargan los vídeos


    if (this.searchQueryVideos == '') {
      this.initializeVideos();
    } // Se cargan los test de teoria


    if (this.searchQueryTest == '') {
      this.initializeTest();
    } // Se obtiene el id de la oposición del curso de la memoria


    this.storage.get('idOposicion').then(val => {
      if (val != null && val != undefined) {
        this.idOposicion = val;
      } else {
        // Si no se han recuperado los datos se vuelve a la página de login
        this.proveedorLogout.logout();
      }
    });
  }

  initializeDocs() {
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
          _this.usuario = JSON.parse(val); //this.proveedor.consultarDocsCurso(this.usuario.Mensaje.AuthorizationToken, this.idCurso)

          _this.proveedor.consultarDocsCursoMesEtiqueta(_this.usuario.Mensaje.AuthorizationToken, _this.idCurso, _this.mesAcceso, _this.etiqueta).subscribe(data => {
            _this.parseDocsJson(data);
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

  initializeVideos() {
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
    }); // Se obtiene el mes de acceso al curso de la memoria

    this.storage.get('mesAcceso').then(val => {
      if (val != null && val != undefined) {
        this.mesAcceso = val;
      } else {
        // Si no se han recuperado los datos se vuelve a la página de login
        this.proveedorLogout.logout();
      }
    }); // Se obtienen los datos del usuario de la memoria

    this.storage.get('usuario').then(val => {
      if (val != null && val != undefined) {
        this.usuario = JSON.parse(val); //this.proveedor.consultarVideosCurso(this.usuario.Mensaje.AuthorizationToken, this.idCurso)

        this.proveedor.consultarVideosCursoMesEtiqueta(this.usuario.Mensaje.AuthorizationToken, this.idCurso, this.mesAcceso, this.etiqueta).subscribe(data => {
          this.parseVideosJson(data);
        }, error => {
          console.log(error);
        } //,
        //() =>{loader.dismiss()}
        );
      } else {
        // Si no se han recuperado los datos se vuelve a la página de login
        this.proveedorLogout.logout();
      }
    });
  }

  initializeTest() {
    // const loader = this.loadingCtrl.create({
    //   content: "Cargando..."
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
    }); // Se obtiene el mes de acceso al curso de la memoria

    this.storage.get('mesAcceso').then(val => {
      if (val != null && val != undefined) {
        this.mesAcceso = val;
      } else {
        // Si no se han recuperado los datos se vuelve a la página de login
        this.proveedorLogout.logout();
      }
    }); // Se obtienen los datos del usuario de la memoria

    this.storage.get('usuario').then(val => {
      if (val != null && val != undefined) {
        this.usuario = JSON.parse(val); // Se consultan todos los test del curso
        //this.proveedor.consultarTestCurso(this.usuario.Mensaje.AuthorizationToken, this.idCurso)

        this.proveedor.consultarTestCursoMesEtiqueta(this.usuario.Mensaje.AuthorizationToken, this.idCurso, this.mesAcceso, this.etiqueta).subscribe(data => {
          this.parseListaTestJson(data);
        }, error => {
          console.log(error);
        } //,
        //() =>{loader.dismiss()}
        );
      } else {
        // Si no se han recuperado los datos se vuelve a la página de login
        this.proveedorLogout.logout();
      }
    });
  }

  parseDocsJson(data) {
    if (data.Error == 0) {
      let jsonArray = data.Mensaje;
      this.listaDocs = [];
      this.listaDocsTemp = [];

      for (let i = 0; i < jsonArray.length; i++) {
        let jsonObject = jsonArray[i];
        this.listaDocs.push(jsonObject);
        this.listaDocsTemp.push(jsonObject);
      }
    } // Acceso denegado
    else if (data.Error == -10) {
      this.proveedorLogout.logout();
    } else {
      this.listaDocs = []; // const alert = this.alertCtrl.create({
      //   title: 'Sin Docs',
      //   subTitle: 'Este tema no contiene documentos',
      //   buttons: ['OK']
      // });
      // alert.present();
    }
  }

  parseVideosJson(data) {
    //console.log(data);
    if (data.Error == 0) {
      let jsonArray = data.Mensaje;
      this.listaVideos = [];
      this.listaVideosTemp = [];

      for (let i = 0; i < jsonArray.length; i++) {
        let jsonObject = jsonArray[i];
        this.listaVideos.push(jsonObject);
        this.listaVideosTemp.push(jsonObject);
      }
    } // Acceso denegado
    else if (data.Error == -10) {
      this.proveedorLogout.logout();
    } else {
      this.listaVideos = []; // const alert = this.alertCtrl.create({
      //   title: 'Sin Vídeos',
      //   subTitle: 'Este tema no contiene vídeos',
      //   buttons: ['OK']
      // });
      // alert.present();
    }
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
      }
    } // Acceso denegado
    else if (data.Error == -10) {
      this.proveedorLogout.logout();
    } else {
      this.listaTest = []; // const alert = this.alertCtrl.create({
      //   title: 'Sin Test',
      //   subTitle: 'Este curso no contiene test de teoría',
      //   buttons: ['OK']
      // });
      // alert.present();
    }
  }

  getDocs(ev) {
    if (this.listaDocsTemp != null && this.listaDocsTemp != undefined) {
      // Reset items back to all of the items
      this.listaDocs = this.listaDocsTemp;
      this.searchQueryDocs = ''; // set val to the value of the searchbar

      const val = ev.target.value; // if the value is an empty string don't filter the items

      if (val && val.trim() != '') {
        this.searchQueryDocs = val;
        this.listaDocs = this.listaDocs.filter(item => {
          return item.Nombre.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.Tipo.toLowerCase().indexOf(val.toLowerCase()) > -1;
        });
      }
    }
  }

  getVideos(ev) {
    if (this.listaVideosTemp != null && this.listaVideosTemp != undefined) {
      // Reset items back to all of the items
      this.listaVideos = this.listaVideosTemp;
      this.searchQueryVideos = ''; // set val to the value of the searchbar

      const val = ev.target.value; // if the value is an empty string don't filter the items

      if (val && val.trim() != '') {
        this.searchQueryVideos = val;
        this.listaVideos = this.listaVideos.filter(item => {
          return item.Nombre.toLowerCase().indexOf(val.toLowerCase()) > -1;
        });
      }
    }
  }

  getTest(ev) {
    if (this.listaTestTemp != null && this.listaTestTemp != undefined) {
      // Reset items back to all of the items
      this.listaTest = this.listaTestTemp; // set val to the value of the searchbar

      const val = ev.target.value; // if the value is an empty string don't filter the items

      if (val && val.trim() != '') {
        this.listaTest = this.listaTest.filter(item => {
          return item.Nombre.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.IdTema == val;
        });
      }
    }
  }

  info(instrucciones) {
    var _this2 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //this.navCtrl.push(TestInfoPage, {idTest: this.test.IdTest});
      const alert = yield _this2.alertCtrl.create({
        header: 'Instrucciones',
        message: instrucciones,
        buttons: ['Entendido']
      });
      yield alert.present();
    })();
  }

  hacerTest(item) {
    //console.log('idTest: ' + item.IdTest);
    // Si el test estaba en PAUSA
    if (item.Pendiente > 0) {
      // Se continúa
      this.continuar = 1; ///this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas, continuar: this.continuar, origen: this.modulo});

      this.navParamService.setNavData(JSON.stringify({
        idOposicion: this.idOposicion,
        test: item,
        numMinutos: this.numMinutos,
        numPreguntas: this.numPreguntas,
        continuar: this.continuar,
        origen: null,
        etiqueta: this.etiqueta,
        revisar: false
      }));
      this.router.navigate(['/test-do']);
    } else {
      // Si es la primera vez que va a hacer el test
      if (item.Realizado == 0) {
        // Se inicializa el tiempo a cero
        this.continuar = 0;
        this.numMinutos = 0;
        this.numPreguntas = 0; ///this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas, continuar: this.continuar, origen: this.modulo});

        this.navParamService.setNavData(JSON.stringify({
          idOposicion: this.idOposicion,
          test: item,
          numMinutos: this.numMinutos,
          numPreguntas: this.numPreguntas,
          continuar: this.continuar,
          origen: null,
          etiqueta: this.etiqueta,
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
    var _this3 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this3.actionSheetCtrl.create({
        header: '¿Qué quieres hacer?',
        buttons: [{
          text: 'Revisar',
          icon: 'eye-outline',
          handler: () => {
            // Se recupera el test
            _this3.proveedor.recuperarTest(_this3.usuario.Mensaje.AuthorizationToken, item.IdTest, _this3.idOposicion).subscribe(data => {
              _this3.parseTestJson(data, item.Nombre, item.Media);
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
              _this3.alert('Límite superado', 'Has superado el número de veces que el centro permite realizar este test');
            } else {
              _this3.continuar = 0;
              _this3.numMinutos = 0;
              _this3.numPreguntas = 0; ///this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas, continuar: this.continuar, origen: this.modulo});

              _this3.navParamService.setNavData(JSON.stringify({
                idOposicion: _this3.idOposicion,
                test: item,
                numMinutos: _this3.numMinutos,
                numPreguntas: _this3.numPreguntas,
                continuar: _this3.continuar,
                origen: null,
                etiqueta: _this3.etiqueta,
                revisar: false
              }));

              _this3.router.navigate(['/test-do']);
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
      yield actionSheet.present();
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
      // Si es un test de PERSONALIDAD

      if (this.tipoTest == 4) {
        // Porcentaje por defecto para el apto
        var porcentaje_apto = 85;
        if (this.idOposicion == 63) // POLICÍA NACIONAL CORPOREPOL
          porcentaje_apto = 70;
        if (this.idOposicion == 189) // POLICÍA MUNICIPAL CORPOREPOL
          porcentaje_apto = 85;
        var res_aciertos = this.aciertos;
        var res_maximo = this.aciertos + this.fallos + this.blancos;
        var porcentaje_acierto = res_aciertos * 100 / res_maximo;
        if (porcentaje_acierto >= porcentaje_apto) res_obtenido = 100;else res_obtenido = 0;
        this.nota = res_obtenido; // Se calcula la nota con riesgo

        if (this.dudosas > 0) {
          var res_aciertos = this.aciertos + this.dudosasAcierto;
          var res_maximo = this.aciertos + this.fallos + this.blancos;
          var porcentaje_acierto = res_aciertos * 100 / res_maximo;
          if (porcentaje_acierto >= porcentaje_apto) res_obtenido = 100;else res_obtenido = 0;
          this.notaRiesgo = res_obtenido;
        }
      } // Para el resto de test
      else {
        var res_aciertos = this.aciertos;
        var res_fallos = this.fallos * data.Mensaje.ValorFallo;
        var res_maximo = this.aciertos + this.fallos + this.blancos;
        var res_obtenido = res_aciertos - res_fallos;
        if (res_maximo > 0) res_obtenido = 100 * res_obtenido / res_maximo;else res_obtenido = 0;
        if (res_obtenido < 0) res_obtenido = 0;
        this.nota = res_obtenido; // Se calcula la nota con riesgo

        if (this.dudosas > 0) {
          var res_aciertos = this.aciertos + this.dudosasAcierto;
          var res_fallos = this.fallos + this.dudosasFallo * data.Mensaje.ValorFallo;
          var res_maximo = this.aciertos + this.fallos + this.blancos;
          var res_obtenido = res_aciertos - res_fallos;
          if (res_maximo > 0) res_obtenido = 100 * res_obtenido / res_maximo; //Math.Round((decimal)((100 * res_obtenido) / res_maximo), 2);
          else res_obtenido = 0;
          if (res_obtenido < 0) res_obtenido = 0;
          this.notaRiesgo = res_obtenido;
        }
      } // Se envía al usuario a la página de revisión
      ///this.navCtrl.push(TestReviewPage, {test: this.test, preguntas: this.listaPreguntas, respuestas: this.listaRespuestas, aciertos: this.aciertos, fallos: this.fallos, blancos: this.blancos, nota: nota, mediaAlumnos: mediaAlumnos, origen: this.modulo });
      // this.navParamService.setNavData(JSON.stringify({test: this.test, listaPreguntas: this.listaPreguntas, listaRespuestas: this.listaRespuestas, aciertos: this.aciertos, fallos: this.fallos, blancos: this.blancos, nota: this.decimalPipe.transform(nota/10, '1.2-2'), mediaAlumnos: this.decimalPipe.transform(mediaAlumnos/10, '1.2-2'), origen: this.modulo})); 


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
        etiqueta: this.etiqueta,
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

  view(item, id) {
    ///this.navCtrl.push(DocViewerPage, {item: item});
    this.navParamService.setNavData(item);
    this.router.navigate(['/doc-viewer']);
    this.marcarDocComoVisto(id);
  }

  marcarDocComoVisto(idDoc) {
    // Se marca el documento como visto en base de datos
    this.proveedor.marcarDocVisto(this.usuario.Mensaje.AuthorizationToken, idDoc).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  play(item) {
    ///this.navCtrl.push(VideoPlayerPage, {item: item});
    //this.marcarVideoComoVisto(id);
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
    var _this4 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //console.log(item);
      if (data.Error == 0) {
        _this4.marcarVideoComoVisto(item.ID);

        if (item.Tipo === "local") {
          // Show the player fullscreen
          yield _this4.videoPlayer.initPlayer({
            mode: 'fullscreen',
            url: data.Mensaje["URL"],
            playerId: 'fullscreenSpecificContent',
            componentTag: 'app-videos'
          });
        } else {
          //this.navParamService.setNavData(data.Mensaje["URL"]);
          //this.navParamService.setNavData(JSON.stringify({titulo: item.Nombre, tipo: item.Tipo, url: data.Mensaje["URL"]}));
          _this4.navParamService.setNavData(JSON.stringify({
            titulo: item.Nombre,
            id: item.ID
          }));

          _this4.router.navigate(['/video-player']);
        }
      }
    })();
  }

  marcarVideoComoVisto(idVideo) {
    // Se marca el video como visto en base de datos
    this.proveedor.marcarVideoVisto(this.usuario.Mensaje.AuthorizationToken, idVideo).subscribe( // (data)=>{console.log(data);},
    data => {}, error => {
      console.log(error);
    });
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

SpecificContentPage.ɵfac = function SpecificContentPage_Factory(t) {
  return new (t || SpecificContentPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_navparam_service__WEBPACK_IMPORTED_MODULE_3__.NavparamService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_providers_aulavirtualrest__WEBPACK_IMPORTED_MODULE_4__.AulavirtualrestProvider), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_providers_logout__WEBPACK_IMPORTED_MODULE_5__.LogoutProvider), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__.Storage), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe));
};

SpecificContentPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: SpecificContentPage,
  selectors: [["app-specific-content"]],
  decls: 19,
  vars: 6,
  consts: [["color", "primary", 1, "ion-text-center"], ["slot", "start"], ["text", "Volver"], [1, "ion-padding"], [3, "ngModel", "ngModelChange"], ["value", "docs"], ["name", "document-outline"], ["value", "videos"], ["name", "logo-youtube"], ["value", "teoria"], ["name", "checkbox-outline"], ["id", "fullscreenSpecificContent", "slot", "fixed"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["placeholder", "Buscar por t\u00EDtulo", 3, "ionInput"], ["icon-start", "", "button", "true", 3, "click", 4, "ngFor", "ngForOf"], ["class", "ion-padding ion-text-center", 4, "ngIf"], ["icon-start", "", "button", "true", 3, "click"], ["slot", "start", "name", "document", 3, "ngClass"], [1, "ion-text-wrap"], [4, "ngFor", "ngForOf"], ["class", "etiqueta", "color", "light", 4, "ngIf"], ["color", "light", 1, "etiqueta"], [1, "ion-padding", "ion-text-center"], ["width", "200", "src", "../assets/imgs/empty.png"], ["button", "true", 3, "click", 4, "ngFor", "ngForOf"], ["button", "true", 3, "click"], ["slot", "start", "name", "logo-youtube", 3, "ngClass"], ["slot", "start", "name", "checkbox", 3, "ngClass", 4, "ngIf"], ["slot", "start", "name", "pause", "class", "test-pending", 4, "ngIf"], ["color", "primary", "name", "information-circle-outline", 4, "ngIf"], [1, "info"], ["slot", "start", "name", "repeat", 3, "ngClass"], [3, "ngClass"], ["slot", "start", "name", "person", "class", "test-pass", 4, "ngIf"], ["class", "test-pass", 4, "ngIf"], ["slot", "start", "name", "person", "class", "test-fail", 4, "ngIf"], ["class", "test-fail", 4, "ngIf"], ["slot", "start", "name", "person", 3, "ngClass", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["slot", "start", "name", "people", 3, "ngClass", 4, "ngIf"], ["slot", "start", "name", "checkbox", 3, "ngClass"], ["slot", "start", "name", "pause", 1, "test-pending"], ["color", "primary", "name", "information-circle-outline"], ["slot", "start", "name", "person", 1, "test-pass"], [1, "test-pass"], ["slot", "start", "name", "person", 1, "test-fail"], [1, "test-fail"], ["slot", "start", "name", "person", 3, "ngClass"], ["slot", "start", "name", "people", 3, "ngClass"]],
  template: function SpecificContentPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "ion-back-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-content", 3)(7, "ion-segment", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SpecificContentPage_Template_ion_segment_ngModelChange_7_listener($event) {
        return ctx.docs = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "ion-segment-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "ion-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "ion-segment-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "ion-segment-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "ion-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, SpecificContentPage_ion_list_16_Template, 4, 2, "ion-list", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, SpecificContentPage_ion_list_17_Template, 4, 2, "ion-list", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, SpecificContentPage_ion_list_18_Template, 4, 2, "ion-list", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.etiqueta);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.docs);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitch", ctx.docs);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "docs");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "videos");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "teoria");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgSwitchCase, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBackButtonDelegate],
  styles: [".tema[_ngcontent-%COMP%] {\n  font-size: x-small;\n  margin-right: 5px;\n}\n\n.etiqueta[_ngcontent-%COMP%] {\n  color: light;\n  font-weight: bold;\n  font-size: x-small;\n  margin-right: 5px;\n}\n\n.cabecera[_ngcontent-%COMP%] {\n  color: light;\n  font-weight: bold;\n  font-size: small;\n}\n\n.info[_ngcontent-%COMP%] {\n  color: light;\n  font-size: small;\n}\n\n.doc-read[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-size: larger !important;\n  vertical-align: -webkit-baseline-middle;\n}\n\n.doc-unread[_ngcontent-%COMP%] {\n  color: lightgrey;\n  font-size: larger !important;\n  vertical-align: -webkit-baseline-middle;\n}\n\n.video-viewed[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-size: larger !important;\n}\n\n.video-unviewed[_ngcontent-%COMP%] {\n  color: lightgrey;\n  font-size: larger !important;\n}\n\n.test-done[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-size: larger !important;\n}\n\n.test-undone[_ngcontent-%COMP%] {\n  color: lightgrey;\n  font-size: larger !important;\n}\n\n.test-pending[_ngcontent-%COMP%] {\n  color: red;\n  font-size: larger !important;\n}\n\n.test-pass[_ngcontent-%COMP%] {\n  color: #18D272;\n  font-size: 1.1em !important;\n}\n\n.test-fail[_ngcontent-%COMP%] {\n  color: #f53d3d;\n  font-size: 1.1em !important;\n}\n\n.visible[_ngcontent-%COMP%] {\n  visibility: visible !important;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  visibility: hidden !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWNpZmljLWNvbnRlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQU8sa0JBQUE7RUFBbUIsaUJBQUE7QUFHMUI7O0FBRkE7RUFBVyxZQUFBO0VBQVksaUJBQUE7RUFBbUIsa0JBQUE7RUFBbUIsaUJBQUE7QUFTN0Q7O0FBUEE7RUFBVyxZQUFBO0VBQVksaUJBQUE7RUFBbUIsZ0JBQUE7QUFhMUM7O0FBWkE7RUFBTyxZQUFBO0VBQWEsZ0JBQUE7QUFpQnBCOztBQWZBO0VBQVksK0JBQUE7RUFBaUMsNEJBQUE7RUFBOEIsdUNBQUE7QUFxQjNFOztBQXBCQTtFQUFjLGdCQUFBO0VBQWtCLDRCQUFBO0VBQThCLHVDQUFBO0FBMEI5RDs7QUF4QkE7RUFBZ0IsK0JBQUE7RUFBaUMsNEJBQUE7QUE2QmpEOztBQTVCQTtFQUFrQixnQkFBQTtFQUFrQiw0QkFBQTtBQWlDcEM7O0FBL0JBO0VBQWEsK0JBQUE7RUFBaUMsNEJBQUE7QUFvQzlDOztBQW5DQTtFQUFlLGdCQUFBO0VBQWtCLDRCQUFBO0FBd0NqQzs7QUF2Q0E7RUFBZ0IsVUFBQTtFQUFZLDRCQUFBO0FBNEM1Qjs7QUEzQ0E7RUFBYSxjQUFBO0VBQWdCLDJCQUFBO0FBZ0Q3Qjs7QUEvQ0E7RUFBYSxjQUFBO0VBQWdCLDJCQUFBO0FBb0Q3Qjs7QUFsREE7RUFBVyw4QkFBQTtBQXNEWDs7QUFyREE7RUFBVSw2QkFBQTtBQXlEViIsImZpbGUiOiJzcGVjaWZpYy1jb250ZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZW1hIHtmb250LXNpemU6IHgtc21hbGw7bWFyZ2luLXJpZ2h0OiA1cHg7fVxuLmV0aXF1ZXRhIHtjb2xvcjpsaWdodDtmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiB4LXNtYWxsO21hcmdpbi1yaWdodDogNXB4O31cblxuLmNhYmVjZXJhIHtjb2xvcjpsaWdodDtmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiBzbWFsbH1cbi5pbmZvIHtjb2xvcjpsaWdodDsgZm9udC1zaXplOiBzbWFsbH1cblxuLmRvYy1yZWFkIHsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgZm9udC1zaXplOiBsYXJnZXIgIWltcG9ydGFudDsgdmVydGljYWwtYWxpZ246IC13ZWJraXQtYmFzZWxpbmUtbWlkZGxlO31cbi5kb2MtdW5yZWFkIHsgY29sb3I6IGxpZ2h0Z3JleTsgZm9udC1zaXplOiBsYXJnZXIgIWltcG9ydGFudDsgdmVydGljYWwtYWxpZ246IC13ZWJraXQtYmFzZWxpbmUtbWlkZGxlO31cblxuLnZpZGVvLXZpZXdlZCB7IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7IGZvbnQtc2l6ZTogbGFyZ2VyICFpbXBvcnRhbnR9XG4udmlkZW8tdW52aWV3ZWQgeyBjb2xvcjogbGlnaHRncmV5OyBmb250LXNpemU6IGxhcmdlciAhaW1wb3J0YW50fVxuXG4udGVzdC1kb25lIHsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgZm9udC1zaXplOiBsYXJnZXIgIWltcG9ydGFudH1cbi50ZXN0LXVuZG9uZSB7IGNvbG9yOiBsaWdodGdyZXk7IGZvbnQtc2l6ZTogbGFyZ2VyICFpbXBvcnRhbnR9XG4udGVzdC1wZW5kaW5nIHsgY29sb3I6IHJlZDsgZm9udC1zaXplOiBsYXJnZXIgIWltcG9ydGFudH1cbi50ZXN0LXBhc3MgeyBjb2xvcjogIzE4RDI3MjsgZm9udC1zaXplOiAxLjFlbSAhaW1wb3J0YW50fVxuLnRlc3QtZmFpbCB7IGNvbG9yOiAjZjUzZDNkOyBmb250LXNpemU6IDEuMWVtICFpbXBvcnRhbnR9XG5cbi52aXNpYmxlIHsgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50fVxuLmhpZGRlbiB7IHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50fSJdfQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_specific-content_specific-content_module_ts.js.map