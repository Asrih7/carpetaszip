"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_module-detail_module-detail_module_ts"],{

/***/ 3964:
/*!*********************************************************************!*\
  !*** ./src/app/pages/module-detail/module-detail-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModuleDetailPageRoutingModule": () => (/* binding */ ModuleDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _module_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module-detail.page */ 8779);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _module_detail_page__WEBPACK_IMPORTED_MODULE_0__.ModuleDetailPage
    }
];
class ModuleDetailPageRoutingModule {
}
ModuleDetailPageRoutingModule.ɵfac = function ModuleDetailPageRoutingModule_Factory(t) { return new (t || ModuleDetailPageRoutingModule)(); };
ModuleDetailPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ModuleDetailPageRoutingModule });
ModuleDetailPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ModuleDetailPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 362:
/*!*************************************************************!*\
  !*** ./src/app/pages/module-detail/module-detail.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModuleDetailPageModule": () => (/* binding */ ModuleDetailPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _module_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module-detail-routing.module */ 3964);
/* harmony import */ var _module_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-detail.page */ 8779);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class ModuleDetailPageModule {
}
ModuleDetailPageModule.ɵfac = function ModuleDetailPageModule_Factory(t) { return new (t || ModuleDetailPageModule)(); };
ModuleDetailPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ModuleDetailPageModule });
ModuleDetailPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _module_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModuleDetailPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ModuleDetailPageModule, { declarations: [_module_detail_page__WEBPACK_IMPORTED_MODULE_1__.ModuleDetailPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _module_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModuleDetailPageRoutingModule] }); })();


/***/ }),

/***/ 8779:
/*!***********************************************************!*\
  !*** ./src/app/pages/module-detail/module-detail.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModuleDetailPage": () => (/* binding */ ModuleDetailPage)
/* harmony export */ });
/* harmony import */ var _Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fancyapps/ui */ 1041);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 6549);
/* harmony import */ var capacitor_video_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! capacitor-video-player */ 3935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_navparam_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/navparam.service */ 7495);
/* harmony import */ var _providers_aulavirtualrest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/aulavirtualrest */ 4313);
/* harmony import */ var _providers_logout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/logout */ 8599);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _awesome_cordova_plugins_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/streaming-media/ngx */ 448);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
















function ModuleDetailPage_ion_list_16_ion_item_2_ng_container_5_ion_badge_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-badge", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const etiquetaDoc_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", etiquetaDoc_r8, " ");
  }
}

function ModuleDetailPage_ion_list_16_ion_item_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ModuleDetailPage_ion_list_16_ion_item_2_ng_container_5_ion_badge_1_Template, 2, 1, "ion-badge", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const etiquetaDoc_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", etiquetaDoc_r8 != "");
  }
}

function ModuleDetailPage_ion_list_16_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ModuleDetailPage_ion_list_16_ion_item_2_Template_ion_item_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const doc_r5 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r11.view(doc_r5, doc_r5.ID));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-label", 19)(3, "ion-badge", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ModuleDetailPage_ion_list_16_ion_item_2_ng_container_5_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const doc_r5 = ctx.$implicit;
    const isOdd_r6 = ctx.odd;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("odd", isOdd_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", doc_r5.Visto > 0 ? "doc-read" : "doc-unread");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Tema ", doc_r5.IdTema, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", doc_r5.Etiquetas.split("]["));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", doc_r5.Nombre, " ");
  }
}

function ModuleDetailPage_ion_list_16_section_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function ModuleDetailPage_ion_list_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-list")(1, "ion-searchbar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ionInput", function ModuleDetailPage_ion_list_16_Template_ion_searchbar_ionInput_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r13.getDocs($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ModuleDetailPage_ion_list_16_ion_item_2_Template, 8, 6, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, ModuleDetailPage_ion_list_16_section_3_Template, 2, 0, "section", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.listaDocs);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.listaDocs != null && ctx_r0.listaDocs.length < 1);
  }
}

function ModuleDetailPage_ion_list_17_ion_item_2_ng_container_5_ion_badge_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-badge", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const etiquetaVideo_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", etiquetaVideo_r20, " ");
  }
}

function ModuleDetailPage_ion_list_17_ion_item_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ModuleDetailPage_ion_list_17_ion_item_2_ng_container_5_ion_badge_1_Template, 2, 1, "ion-badge", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const etiquetaVideo_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", etiquetaVideo_r20 != "");
  }
}

function ModuleDetailPage_ion_list_17_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ModuleDetailPage_ion_list_17_ion_item_2_Template_ion_item_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);
      const video_r17 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r23.play(video_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-label", 19)(3, "ion-badge", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ModuleDetailPage_ion_list_17_ion_item_2_ng_container_5_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const video_r17 = ctx.$implicit;
    const isOdd_r18 = ctx.odd;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("odd", isOdd_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", video_r17.Visto > 0 ? "video-viewed" : "video-unviewed");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Tema ", video_r17.IdTema, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", video_r17.Etiquetas.split("]["));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", video_r17.Nombre, " ");
  }
}

function ModuleDetailPage_ion_list_17_section_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function ModuleDetailPage_ion_list_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-list")(1, "ion-searchbar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ionInput", function ModuleDetailPage_ion_list_17_Template_ion_searchbar_ionInput_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r25.getVideos($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ModuleDetailPage_ion_list_17_ion_item_2_Template, 8, 6, "ion-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, ModuleDetailPage_ion_list_17_section_3_Template, 2, 0, "section", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.listaVideos);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.listaVideos != null && ctx_r1.listaVideos.length < 1);
  }
}

function ModuleDetailPage_ion_list_18_ion_item_2_ion_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-icon", 38);
  }

  if (rf & 2) {
    const i_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r32.listaTest[i_r31].Realizado > 0 ? "test-done" : "test-undone");
  }
}

function ModuleDetailPage_ion_list_18_ion_item_2_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-icon", 39);
  }
}

function ModuleDetailPage_ion_list_18_ion_item_2_ng_container_6_ion_badge_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-badge", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const etiquetaTest_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", etiquetaTest_r41, " ");
  }
}

function ModuleDetailPage_ion_list_18_ion_item_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ModuleDetailPage_ion_list_18_ion_item_2_ng_container_6_ion_badge_1_Template, 2, 1, "ion-badge", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const etiquetaTest_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", etiquetaTest_r41 != "");
  }
}

function ModuleDetailPage_ion_list_18_ion_item_2_ion_icon_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-icon", 40);
  }
}

function ModuleDetailPage_ion_list_18_ion_item_2_ion_icon_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-icon", 41);
  }

  if (rf & 2) {
    const i_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r36.listaTest[i_r31].UltimoResultado < 5 ? "test-fail" : "test-pass");
  }
}

function ModuleDetailPage_ion_list_18_ion_item_2_label_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r37.listaTest[i_r31].UltimoResultado < 5 ? "test-fail" : "test-pass");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r37.listaTest[i_r31].UltimoResultado, " vs ");
  }
}

function ModuleDetailPage_ion_list_18_ion_item_2_ion_icon_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-icon", 42);
  }

  if (rf & 2) {
    const i_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r38.listaTest[i_r31].UltimoResultado < 5 ? "test-fail" : "test-pass");
  }
}

function ModuleDetailPage_ion_list_18_ion_item_2_label_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r39.listaTest[i_r31].UltimoResultado < 5 ? "test-fail" : "test-pass");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r39.listaTest[i_r31].Media);
  }
}

function ModuleDetailPage_ion_list_18_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ModuleDetailPage_ion_list_18_ion_item_2_Template_ion_item_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r49);
      const i_r31 = restoredCtx.index;
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r48.hacerTest(ctx_r48.listaTest[i_r31]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ModuleDetailPage_ion_list_18_ion_item_2_ion_icon_1_Template, 1, 1, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ModuleDetailPage_ion_list_18_ion_item_2_ion_icon_2_Template, 1, 0, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ion-label", 19)(4, "ion-badge", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, ModuleDetailPage_ion_list_18_ion_item_2_ng_container_6_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, ModuleDetailPage_ion_list_18_ion_item_2_ion_icon_8_Template, 1, 0, "ion-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "section", 32)(11, "label")(12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, " preguntas");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "ion-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, ModuleDetailPage_ion_list_18_ion_item_2_ion_icon_20_Template, 1, 1, "ion-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, ModuleDetailPage_ion_list_18_ion_item_2_label_21_Template, 2, 2, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, ModuleDetailPage_ion_list_18_ion_item_2_ion_icon_22_Template, 1, 1, "ion-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, ModuleDetailPage_ion_list_18_ion_item_2_label_23_Template, 2, 2, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const test_r29 = ctx.$implicit;
    const isOdd_r30 = ctx.odd;
    const i_r31 = ctx.index;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("odd", isOdd_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r27.listaTest[i_r31].Pendiente == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r27.listaTest[i_r31].Pendiente > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Tema ", test_r29.IdTema, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", test_r29.Etiquetas.split("]["));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r27.listaTest[i_r31].Instrucciones != "" && ctx_r27.listaTest[i_r31].Instrucciones != " " && ctx_r27.listaTest[i_r31].Instrucciones != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r27.listaTest[i_r31].Nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r27.listaTest[i_r31].NumPreg);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r27.listaTest[i_r31].Limite > 0 ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r27.listaTest[i_r31].Limite > 0 ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", ctx_r27.listaTest[i_r31].Realizado, "/", ctx_r27.listaTest[i_r31].Limite, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r27.listaTest[i_r31].Realizado > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r27.listaTest[i_r31].Realizado > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r27.listaTest[i_r31].Realizado > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r27.listaTest[i_r31].Realizado > 0);
  }
}

function ModuleDetailPage_ion_list_18_section_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function ModuleDetailPage_ion_list_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-list")(1, "ion-searchbar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ionInput", function ModuleDetailPage_ion_list_18_Template_ion_searchbar_ionInput_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r50.getTest($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ModuleDetailPage_ion_list_18_ion_item_2_Template, 24, 17, "ion-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, ModuleDetailPage_ion_list_18_section_3_Template, 2, 0, "section", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.listaTest);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.listaTest != null && ctx_r2.listaTest.length < 1);
  }
}

class ModuleDetailPage {
  constructor(router, navParamService, proveedor, proveedorLogout, alertCtrl, loadingCtrl, actionSheetCtrl, storage, decimalPipe, streamingMedia) {
    this.router = router;
    this.navParamService = navParamService;
    this.proveedor = proveedor;
    this.proveedorLogout = proveedorLogout;
    this.alertCtrl = alertCtrl;
    this.loadingCtrl = loadingCtrl;
    this.actionSheetCtrl = actionSheetCtrl;
    this.storage = storage;
    this.decimalPipe = decimalPipe;
    this.streamingMedia = streamingMedia;
    this.usuario = [];
    this.searchQueryDocs = '';
    this.searchQueryVideos = '';
    this.searchQueryTest = '';
    this.docs = "docs";
    this.videos = "videos";
    this.teoria = "teoria";
    this.numMinutos = 0;
    this.numPreguntas = 0;
    this.continuar = 0;
    this.modulo = this.navParamService.getNavData();
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

          _this.proveedor.consultarDocsCursoMesTema(_this.usuario.Mensaje.AuthorizationToken, _this.idCurso, _this.mesAcceso, _this.modulo.IdBloque, _this.modulo.IdTema).subscribe(data => {
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

        this.proveedor.consultarVideosCursoMesTema(this.usuario.Mensaje.AuthorizationToken, this.idCurso, this.mesAcceso, this.modulo.IdBloque, this.modulo.IdTema).subscribe(data => {
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

        this.proveedor.consultarTestCursoMesTema(this.usuario.Mensaje.AuthorizationToken, this.idCurso, this.mesAcceso, this.modulo.IdBloque, this.modulo.IdTema).subscribe(data => {
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
        origen: this.modulo,
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
        this.numPreguntas = 0; ///this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas, continuar: this.continuar, origen: this.modulo});

        this.navParamService.setNavData(JSON.stringify({
          idOposicion: this.idOposicion,
          test: item,
          numMinutos: this.numMinutos,
          numPreguntas: this.numPreguntas,
          continuar: this.continuar,
          origen: this.modulo,
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
              _this2.continuar = 0;
              _this2.numMinutos = 0;
              _this2.numPreguntas = 0; ///this.navCtrl.push(DoTestPage, {idOposicion: this.idOposicion, test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas, continuar: this.continuar, origen: this.modulo});

              _this2.navParamService.setNavData(JSON.stringify({
                idOposicion: _this2.idOposicion,
                test: item,
                numMinutos: _this2.numMinutos,
                numPreguntas: _this2.numPreguntas,
                continuar: _this2.continuar,
                origen: _this2.modulo,
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
        origen: this.modulo,
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
    //console.log(item);
    // //this.navCtrl.push(VideoPlayerPage, {item: item});
    // this.navParamService.setNavData(item);
    // this.router.navigate(['/video-player']);
    this.proveedor.obtenerUrlVideo(this.usuario.Mensaje.AuthorizationToken, item.ID, this.idCurso).subscribe(data => {
      this.playVideo(data, item);
    }, //(data)=>{this.showVideo(data, item);},
    //(data)=>{this.playMedia(data, item);},
    error => {
      console.log(error);
    });
  }

  playVideo(data, item) {
    var _this3 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (data.Error == 0) {
        _this3.marcarVideoComoVisto(item.ID);

        if (item.Tipo === "local") {
          // Show the player fullscreen
          yield _this3.videoPlayer.initPlayer({
            mode: 'fullscreen',
            url: data.Mensaje["URL"],
            playerId: 'fullscreenModuleDetail',
            componentTag: 'app-videos'
          });
        } else {
          //this.navParamService.setNavData(data.Mensaje["URL"]);
          //this.navParamService.setNavData(JSON.stringify({titulo: item.Nombre, tipo: item.Tipo, url: data.Mensaje["URL"]}));
          _this3.navParamService.setNavData(JSON.stringify({
            titulo: item.Nombre,
            id: item.ID
          }));

          _this3.router.navigate(['/video-player']);
        }
      }
    })();
  }

  playMedia(data, item) {
    this.marcarVideoComoVisto(item.ID);
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

  showVideo(data, item) {
    if (data.Error == 0) {
      this.marcarVideoComoVisto(item.ID);
      _fancyapps_ui__WEBPACK_IMPORTED_MODULE_1__.Fancybox.show( // Array containing gallery items
      [// Gallery item
      {
        src: data.Mensaje["URL"] + "#toolbar=0",
        type: "iframe",
        preload: false,
        protect: true,
        caption: item.Nombre
      }], // Gallery options
      {
        mainClass: "myFancybox"
      });
    }
  }

  marcarVideoComoVisto(idVideo) {
    // Se marca el video como visto en base de datos
    this.proveedor.marcarVideoVisto(this.usuario.Mensaje.AuthorizationToken, idVideo).subscribe( // (data)=>{console.log(data);},
    data => {}, error => {
      console.log(error);
    });
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

ModuleDetailPage.ɵfac = function ModuleDetailPage_Factory(t) {
  return new (t || ModuleDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_navparam_service__WEBPACK_IMPORTED_MODULE_4__.NavparamService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_providers_aulavirtualrest__WEBPACK_IMPORTED_MODULE_5__.AulavirtualrestProvider), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_providers_logout__WEBPACK_IMPORTED_MODULE_6__.LogoutProvider), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__.Storage), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DecimalPipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_awesome_cordova_plugins_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_7__.StreamingMedia));
};

ModuleDetailPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: ModuleDetailPage,
  selectors: [["app-module-detail"]],
  decls: 19,
  vars: 6,
  consts: [["color", "primary", 1, "ion-text-center"], ["slot", "start"], ["text", "Volver"], [1, "ion-padding"], [3, "ngModel", "ngModelChange"], ["value", "docs"], ["name", "document-outline"], ["value", "videos"], ["name", "logo-youtube"], ["value", "teoria"], ["name", "checkbox-outline"], ["id", "fullscreenModuleDetail", "slot", "fixed"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["placeholder", "Buscar por t\u00EDtulo o etiqueta", 3, "ionInput"], ["icon-start", "", "button", "true", 3, "odd", "click", 4, "ngFor", "ngForOf"], ["class", "ion-padding ion-text-center", 4, "ngIf"], ["icon-start", "", "button", "true", 3, "click"], ["slot", "start", "name", "document", 3, "ngClass"], [1, "ion-text-wrap"], [1, "tema"], [4, "ngFor", "ngForOf"], ["class", "etiqueta", "color", "light", 4, "ngIf"], ["color", "light", 1, "etiqueta"], [1, "ion-padding", "ion-text-center"], ["width", "200", "src", "../assets/imgs/empty.png"], ["button", "true", 3, "odd", "click", 4, "ngFor", "ngForOf"], ["button", "true", 3, "click"], ["slot", "start", "name", "logo-youtube", 3, "ngClass"], ["slot", "start", "name", "checkbox", 3, "ngClass", 4, "ngIf"], ["slot", "start", "name", "pause", "class", "test-pending", 4, "ngIf"], ["color", "primary", "name", "information-circle-outline", 4, "ngIf"], [1, "info"], ["slot", "start", "name", "repeat", 3, "ngClass"], [3, "ngClass"], ["slot", "start", "name", "person", 3, "ngClass", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["slot", "start", "name", "people", 3, "ngClass", 4, "ngIf"], ["slot", "start", "name", "checkbox", 3, "ngClass"], ["slot", "start", "name", "pause", 1, "test-pending"], ["color", "primary", "name", "information-circle-outline"], ["slot", "start", "name", "person", 3, "ngClass"], ["slot", "start", "name", "people", 3, "ngClass"]],
  template: function ModuleDetailPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "ion-back-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-content", 3)(7, "ion-segment", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ModuleDetailPage_Template_ion_segment_ngModelChange_7_listener($event) {
        return ctx.docs = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ion-segment-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "ion-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "ion-segment-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "ion-segment-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "ion-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, ModuleDetailPage_ion_list_16_Template, 4, 2, "ion-list", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, ModuleDetailPage_ion_list_17_Template, 4, 2, "ion-list", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, ModuleDetailPage_ion_list_18_Template, 4, 2, "ion-list", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Tema ", ctx.modulo.IdTema, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.docs);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitch", ctx.docs);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", "docs");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", "videos");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", "teoria");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgSwitchCase, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonBackButtonDelegate],
  styles: [".tema[_ngcontent-%COMP%] {\n  font-size: x-small;\n  margin-right: 5px;\n}\n\n.etiqueta[_ngcontent-%COMP%] {\n  color: light;\n  font-weight: bold;\n  font-size: x-small;\n  margin-right: 5px;\n}\n\n.cabecera[_ngcontent-%COMP%] {\n  color: light;\n  font-weight: bold;\n  font-size: small;\n}\n\n.info[_ngcontent-%COMP%] {\n  color: light;\n  font-size: x-small;\n}\n\n.doc-read[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-size: larger !important;\n  vertical-align: -webkit-baseline-middle;\n}\n\n.doc-unread[_ngcontent-%COMP%] {\n  color: lightgrey;\n  font-size: larger !important;\n  vertical-align: -webkit-baseline-middle;\n}\n\n.video-viewed[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-size: larger !important;\n}\n\n.video-unviewed[_ngcontent-%COMP%] {\n  color: lightgrey;\n  font-size: larger !important;\n}\n\n.test-done[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-size: larger !important;\n}\n\n.test-undone[_ngcontent-%COMP%] {\n  color: lightgrey;\n  font-size: larger !important;\n}\n\n.test-pending[_ngcontent-%COMP%] {\n  color: red;\n  font-size: larger !important;\n}\n\n.test-pass[_ngcontent-%COMP%] {\n  color: #18D272;\n  font-size: 1.1em !important;\n}\n\n.test-fail[_ngcontent-%COMP%] {\n  color: #f53d3d;\n  font-size: 1.1em !important;\n}\n\n.visible[_ngcontent-%COMP%] {\n  visibility: visible !important;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  visibility: hidden !important;\n}\n\n.odd[_ngcontent-%COMP%] {\n  --ion-item-background: var(--ion-color-light) ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQU8sa0JBQUE7RUFBbUIsaUJBQUE7QUFHMUI7O0FBRkE7RUFBVyxZQUFBO0VBQVksaUJBQUE7RUFBbUIsa0JBQUE7RUFBbUIsaUJBQUE7QUFTN0Q7O0FBUEE7RUFBVyxZQUFBO0VBQVksaUJBQUE7RUFBbUIsZ0JBQUE7QUFhMUM7O0FBWkE7RUFBTyxZQUFBO0VBQWEsa0JBQUE7QUFpQnBCOztBQWZBO0VBQVksK0JBQUE7RUFBaUMsNEJBQUE7RUFBOEIsdUNBQUE7QUFxQjNFOztBQXBCQTtFQUFjLGdCQUFBO0VBQWtCLDRCQUFBO0VBQThCLHVDQUFBO0FBMEI5RDs7QUF4QkE7RUFBZ0IsK0JBQUE7RUFBaUMsNEJBQUE7QUE2QmpEOztBQTVCQTtFQUFrQixnQkFBQTtFQUFrQiw0QkFBQTtBQWlDcEM7O0FBL0JBO0VBQWEsK0JBQUE7RUFBaUMsNEJBQUE7QUFvQzlDOztBQW5DQTtFQUFlLGdCQUFBO0VBQWtCLDRCQUFBO0FBd0NqQzs7QUF2Q0E7RUFBZ0IsVUFBQTtFQUFZLDRCQUFBO0FBNEM1Qjs7QUEzQ0E7RUFBYSxjQUFBO0VBQWdCLDJCQUFBO0FBZ0Q3Qjs7QUEvQ0E7RUFBYSxjQUFBO0VBQWdCLDJCQUFBO0FBb0Q3Qjs7QUFsREE7RUFBVyw4QkFBQTtBQXNEWDs7QUFyREE7RUFBVSw2QkFBQTtBQXlEVjs7QUF2REE7RUFDSSw4Q0FBQTtBQTBESiIsImZpbGUiOiJtb2R1bGUtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZW1hIHtmb250LXNpemU6IHgtc21hbGw7bWFyZ2luLXJpZ2h0OiA1cHg7fVxuLmV0aXF1ZXRhIHtjb2xvcjpsaWdodDtmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiB4LXNtYWxsO21hcmdpbi1yaWdodDogNXB4O31cblxuLmNhYmVjZXJhIHtjb2xvcjpsaWdodDtmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiBzbWFsbH1cbi5pbmZvIHtjb2xvcjpsaWdodDsgZm9udC1zaXplOiB4LXNtYWxsfVxuXG4uZG9jLXJlYWQgeyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyBmb250LXNpemU6IGxhcmdlciAhaW1wb3J0YW50OyB2ZXJ0aWNhbC1hbGlnbjogLXdlYmtpdC1iYXNlbGluZS1taWRkbGU7fVxuLmRvYy11bnJlYWQgeyBjb2xvcjogbGlnaHRncmV5OyBmb250LXNpemU6IGxhcmdlciAhaW1wb3J0YW50OyB2ZXJ0aWNhbC1hbGlnbjogLXdlYmtpdC1iYXNlbGluZS1taWRkbGU7fVxuXG4udmlkZW8tdmlld2VkIHsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgZm9udC1zaXplOiBsYXJnZXIgIWltcG9ydGFudH1cbi52aWRlby11bnZpZXdlZCB7IGNvbG9yOiBsaWdodGdyZXk7IGZvbnQtc2l6ZTogbGFyZ2VyICFpbXBvcnRhbnR9XG5cbi50ZXN0LWRvbmUgeyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyBmb250LXNpemU6IGxhcmdlciAhaW1wb3J0YW50fVxuLnRlc3QtdW5kb25lIHsgY29sb3I6IGxpZ2h0Z3JleTsgZm9udC1zaXplOiBsYXJnZXIgIWltcG9ydGFudH1cbi50ZXN0LXBlbmRpbmcgeyBjb2xvcjogcmVkOyBmb250LXNpemU6IGxhcmdlciAhaW1wb3J0YW50fVxuLnRlc3QtcGFzcyB7IGNvbG9yOiAjMThEMjcyOyBmb250LXNpemU6IDEuMWVtICFpbXBvcnRhbnR9XG4udGVzdC1mYWlsIHsgY29sb3I6ICNmNTNkM2Q7IGZvbnQtc2l6ZTogMS4xZW0gIWltcG9ydGFudH1cblxuLnZpc2libGUgeyB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnR9XG4uaGlkZGVuIHsgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnR9XG5cbi5vZGR7XG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpXG59Il19 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_module-detail_module-detail_module_ts.js.map