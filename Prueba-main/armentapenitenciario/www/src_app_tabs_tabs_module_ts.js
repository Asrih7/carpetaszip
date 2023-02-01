"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'tab1',
                loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/home/home.module */ 7994)).then(m => m.HomePageModule)
            },
            {
                path: 'modulos',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_modules_modules_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/modules/modules.module */ 9621)).then(m => m.ModulesPageModule)
            },
            {
                path: 'docs',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2020_scrolling_mjs"), __webpack_require__.e("default-node_modules_fancyapps_ui_dist_fancybox_esm_js"), __webpack_require__.e("src_app_pages_docs_docs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/docs/docs.module */ 2829)).then(m => m.DocsPageModule)
            },
            {
                path: 'videos',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2020_scrolling_mjs"), __webpack_require__.e("default-node_modules_fancyapps_ui_dist_fancybox_esm_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_videos_videos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/videos/videos.module */ 9642)).then(m => m.VideosPageModule)
            },
            {
                path: 'test',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2020_scrolling_mjs"), __webpack_require__.e("src_app_pages_test_test_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/test/test.module */ 5011)).then(m => m.TestPageModule)
            },
            {
                path: 'foro',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2020_scrolling_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_forum_forum_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/forum/forum.module */ 9397)).then(m => m.ForumPageModule)
            },
            // {
            //   path: 'menu',
            //   loadChildren: () => import('../pages/menu/menu.module').then(m => m.MenuPageModule)
            // },
            // {
            //   path: 'mas',
            //   // loadChildren: () => import('../pages/forum/forum.module').then(m => m.ForumPageModule)
            // },
            // {
            //   path: 'eventos',
            //   loadChildren: () => import('../pages/events/events.module').then(m => m.EventsPageModule)
            // },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];
class TabsPageRoutingModule {
}
TabsPageRoutingModule.ɵfac = function TabsPageRoutingModule_Factory(t) { return new (t || TabsPageRoutingModule)(); };
TabsPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TabsPageRoutingModule });
TabsPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TabsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 530);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class TabsPageModule {
}
TabsPageModule.ɵfac = function TabsPageModule_Factory(t) { return new (t || TabsPageModule)(); };
TabsPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TabsPageModule });
TabsPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TabsPageModule, { declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule] }); })();


/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var _Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/app.config */ 9670);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_navparam_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navparam.service */ 7495);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var _services_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/events */ 579);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _providers_logout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/logout */ 8599);
/* harmony import */ var _providers_aulavirtualrest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/aulavirtualrest */ 4313);
/* harmony import */ var _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/device/ngx */ 4701);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/call-number/ngx */ 3622);

















function TabsPage_ion_item_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TabsPage_ion_item_25_Template_ion_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r17.notificaciones());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u00A0Notificaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function TabsPage_ion_item_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TabsPage_ion_item_26_Template_ion_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r19.eventos());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u00A0Eventos");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function TabsPage_ion_item_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TabsPage_ion_item_27_Template_ion_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r21.clases());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u00A0Clases");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function TabsPage_ion_item_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TabsPage_ion_item_28_Template_ion_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r23.misResultados());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u00A0Mis Resultados");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function TabsPage_ion_item_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TabsPage_ion_item_29_Template_ion_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r25.misEstadisticas());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u00A0Mis Estad\u00EDsticas");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function TabsPage_ion_item_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TabsPage_ion_item_30_Template_ion_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r27.simulacros());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u00A0Simulacros");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function TabsPage_ion_item_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TabsPage_ion_item_31_Template_ion_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r29.materiaEspecifica("Ingl\u00E9s"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u00A0Ingl\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function TabsPage_ion_item_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TabsPage_ion_item_32_Template_ion_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r31.materiaEspecifica("Ortograf\u00EDa"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u00A0Ortograf\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function TabsPage_ion_item_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TabsPage_ion_item_33_Template_ion_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r33.materiaEspecifica("Psicot\u00E9cnico"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u00A0Psicot\u00E9cnicos");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function TabsPage_ion_item_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TabsPage_ion_item_34_Template_ion_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r35.materiaEspecifica("Personalidad"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u00A0Personalidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function TabsPage_ion_item_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TabsPage_ion_item_35_Template_ion_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r37.materiaEspecifica("Legislaci\u00F3n"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u00A0Legislaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function TabsPage_ion_item_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TabsPage_ion_item_36_Template_ion_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r39.materiaEspecifica("pro"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u00A0Nivel PRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function TabsPage_ion_tab_button_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-tab-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Temario");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function TabsPage_ion_tab_button_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-tab-button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Docs");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function TabsPage_ion_tab_button_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-tab-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "V\u00EDdeos");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function TabsPage_ion_tab_button_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-tab-button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Test");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function TabsPage_ion_tab_button_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-tab-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Foro");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

class TabsPage {
  constructor(router, navParamService, storage, events, alertCtrl, loadingCtrl, actionSheetCtrl, menu, proveedorLogout, proveedor, device, decimalPipe, callNumber) {
    // https://ionicframework.com/docs/v3/api/util/Events/
    //  this.events.subscribe('tabs:reload', eventData => { 
    //   this.initialize();
    // });    
    this.router = router;
    this.navParamService = navParamService;
    this.storage = storage;
    this.events = events;
    this.alertCtrl = alertCtrl;
    this.loadingCtrl = loadingCtrl;
    this.actionSheetCtrl = actionSheetCtrl;
    this.menu = menu;
    this.proveedorLogout = proveedorLogout;
    this.proveedor = proveedor;
    this.device = device;
    this.decimalPipe = decimalPipe;
    this.callNumber = callNumber;
    this.titulo = "Inicio";
    this.usuario = [];
    this.possibleButtons = [{
      icon: 'calendar-outline',
      text: 'Eventos',
      page: '/events'
    }]; //https://angular.io/guide/observables#defining-observers
    // this.events.getObservable().subscribe((data) => {
    //   console.log('Data received', data);
    //   this.initialize();
    // });

    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationStart)).subscribe(route => {
      //console.log('Route: '+route.url)
      switch (route.url) {
        case '/tabs/tab1':
          this.titulo = "Inicio";
          break;

        case '/tabs/modulos':
          this.titulo = "Temario";
          break;

        case '/tabs/docs':
          this.titulo = "Documentos";
          break;

        case '/tabs/videos':
          this.titulo = "Vídeos";
          break;

        case '/tabs/test':
          this.titulo = "Test";
          break;

        case '/tabs/foro':
          this.titulo = "Foro";
          break;
      }
    });
    this.events.subscribe('tabs:reload', data => {
      this.initialize();
    });
  } // ionViewWillEnter() {
  //   this.initialize();
  // }


  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  closeMenu() {
    this.menu.close('first');
  }

  initialize() {
    // Se obtiene de la memoria el curso
    // this.storage.get('curso').then((val) => {
    //   console.log(val);
    // });
    // Se obtienen los datos del usuario de la memoria
    this.storage.get('usuario').then(val => {
      if (val != null && val != undefined) {
        this.usuario = JSON.parse(val);
      } else {
        // Si no se han recuperado los datos se vuelve a la página de login
        console.log('[!] Constructor: No se ha recuperado el usuario de la memoria'); //this.logout();

        this.proveedorLogout.logout();
      }
    }); // Se obtiene de la memoria el id del curso

    this.storage.get('idCurso').then(val => {
      if (val != null && val != undefined) this.idCurso = val;else this.idCurso = 0;
    }); // Se obtiene de la memoria el nombre del curso

    this.storage.get('nombreCurso').then(val => {
      if (val != null && val != undefined) this.nombreCurso = val;else this.nombreCurso = "";
    }); // // Si hay un curso seleccionado
    // if (this.idCurso != null && this.idCurso != undefined && this.idCurso != 0) {
    // Se obtiene de la memoria los permisos de acceso

    this.storage.get('accesoModulos').then(val => {
      if (val != null && val != undefined) {
        if (val == 0) this.accesoModulos = false;else this.accesoModulos = true; // console.log("accesoModulos: " + this.accesoModulos);        
      }
    });
    this.storage.get('accesoTest').then(val => {
      if (val != null && val != undefined) {
        if (val == 0) this.accesoTest = false;else this.accesoTest = true; // console.log("accesoTest: " + this.accesoTest);
      }
    });
    this.storage.get('accesoDocs').then(val => {
      if (val != null && val != undefined) {
        if (val == 0) this.accesoDocs = false;else this.accesoDocs = true; // console.log("accesoDocs: " + this.accesoDocs);
      }
    });
    this.storage.get('accesoVideos').then(val => {
      if (val != null && val != undefined) {
        if (val == 0) this.accesoVideos = false;else this.accesoVideos = true; // console.log("accesoVideos: " + this.accesoVideos);
      }
    });
    this.storage.get('accesoForo').then(val => {
      if (val != null && val != undefined) {
        if (val == 0) this.accesoForo = false;else this.accesoForo = true; // console.log("accesoForo: " + this.accesoForo);
      }
    });
    this.storage.get('accesoEventos').then(val => {
      if (val != null && val != undefined) {
        if (val == 0) this.accesoEventos = false;else this.accesoEventos = true; // console.log("accesoEventos: " + this.accesoEventos);
      }
    });
    this.storage.get('accesoClases').then(val => {
      if (val != null && val != undefined) {
        if (val == 0) this.accesoClases = false;else this.accesoClases = true;
      }
    });
    this.storage.get('accesoNotificaciones').then(val => {
      if (val != null && val != undefined) {
        if (val == 0) this.accesoNotificaciones = false;else this.accesoNotificaciones = true;
      }
    });
    this.storage.get('accesoEventos').then(val => {
      if (val != null && val != undefined) {
        if (val == 0) this.accesoEventos = false;else this.accesoEventos = true;
      }
    });
    this.storage.get('accesoTest').then(val => {
      if (val != null && val != undefined) {
        if (val == 0) this.accesoTest = false;else this.accesoTest = true;
      }
    });
    this.storage.get('accesoSimulacros').then(val => {
      if (val != null && val != undefined) {
        if (val == 0) this.accesoSimulacros = false;else this.accesoSimulacros = true;
      }
    });
    this.storage.get('accesoOrtografia').then(val => {
      if (val != null && val != undefined) {
        if (val == 0) this.accesoOrtografia = false;else this.accesoOrtografia = true;
      }
    });
    this.storage.get('accesoIngles').then(val => {
      if (val != null && val != undefined) {
        if (val == 0) this.accesoIngles = false;else this.accesoIngles = true;
      }
    });
    this.storage.get('accesoPersonalidad').then(val => {
      if (val != null && val != undefined) {
        if (val == 0) this.accesoPersonalidad = false;else this.accesoPersonalidad = true;
      }
    });
    this.storage.get('accesoCasosPracticos').then(val => {
      if (val != null && val != undefined) {
        if (val == 0) this.accesoCasosPracticos = false;else this.accesoCasosPracticos = true;
      }
    });
    this.storage.get('accesoPsicotecnicos').then(val => {
      if (val != null && val != undefined) {
        if (val == 0) this.accesoPsicotecnicos = false;else this.accesoPsicotecnicos = true;
      }
    });
    this.storage.get('accesoLegislacion').then(val => {
      if (val != null && val != undefined) {
        if (val == 0) this.accesoLegislacion = false;else this.accesoLegislacion = true;
      }
    });
    this.storage.get('accesoNivelPro').then(val => {
      if (val != null && val != undefined) {
        if (val == 0) this.accesoNivelPro = false;else this.accesoNivelPro = true;
      }
    }); // // Se obtienen el id del curso de la memoria
    // this.storage.get('idCurso').then((val) => {
    //   if (val != null && val != undefined){
    //     if (val > 0)
    //       this.menu = true;
    //     else
    //       this.menu = false;
    //   }
    //   else{
    //     this.menu = false;
    //   }
    // });
    // }
    // // Si no hay ningún curso seleccionado se desactivan todos los módulos
    // else{
    //   this.accesoModulos = false;
    //   this.accesoTest = false;
    //   this.accesoDocs = false;
    //   this.accesoVideos = false;
    //   this.accesoForo = false;
    //   this.accesoEventos = false;
    // }
  }

  mas() {
    var _this = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this.actionSheetCtrl.create({
        header: 'MÁS',
        cssClass: 'my-custom-class',
        buttons: _this.createButtons()
      });
      yield actionSheet.present();
    })();
  }

  createButtons() {
    let buttons = [];

    for (var index in this.possibleButtons) {
      let button = {
        text: this.possibleButtons[index].text,
        icon: this.possibleButtons[index].icon,
        handler: () => {
          this.router.navigate([this.possibleButtons[index].page]);
          return true;
        }
      };
      buttons.push(button);
    }

    buttons.push({
      text: 'Cerrar',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }); // let buttons = [
    //     {
    //     text: 'Configurar',
    //     icon: 'settings-outline',        
    //     handler: () => {
    //       //this.configuracion();
    //     }
    //   }, 
    //   {
    //     text: 'Cerrar sesión',
    //     icon: 'power-outline',        
    //     handler: () => {
    //       //this.salir();
    //     }
    //   }, {
    //     text: 'Cancelar',
    //     icon: 'close',
    //     role: 'cancel',
    //     handler: () => {
    //       console.log('Cancel clicked');
    //     }
    //   }]

    return buttons;
  }

  configuracion() {
    this.router.navigate(['/account-settings']);
  }

  salir() {
    var _this2 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const confirm = yield _this2.alertCtrl.create({
        header: '¿Deseas salir?',
        message: 'Se cerrará tu sesión en la app',
        buttons: [{
          text: 'Cancelar',
          handler: () => {}
        }, {
          text: 'Aceptar',
          handler: () => {
            //this.logout();
            _this2.proveedorLogout.logout();
          }
        }]
      });
      yield confirm.present();
    })();
  }

  faq() {
    //this.navCtrl.push(FaqPage);
    this.router.navigate(['/faq']);
  }

  contacto() {
    var _this3 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let radio_options = [];
      radio_options.push({
        type: 'radio',
        label: 'Centro',
        value: 'Academia',
        checked: true
      });
      radio_options.push({
        type: 'radio',
        label: 'Soporte Técnico',
        value: 'Soporte',
        checked: false
      });
      let alert = yield _this3.alertCtrl.create({
        header: 'Contacto',
        message: '¿Con quién quieres contactar?',
        inputs: radio_options,
        buttons: [{
          text: 'Cancelar',
          handler: () => {}
        }, {
          text: 'Siguiente',
          handler: data => {
            _this3.contactoSeleccionado = data;

            _this3.formularioContacto();
          }
        }]
      });
      yield alert.present();
    })();
  }

  formularioContacto() {
    var _this4 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const prompt = yield _this4.alertCtrl.create({
        header: 'Mensaje',
        message: "¿En qué podemos ayudarte?",
        inputs: [{
          name: 'asunto',
          placeholder: 'Asunto'
        }, {
          name: 'mensaje',
          placeholder: 'Mensaje',
          max: '1000'
        }],
        buttons: [{
          text: 'Cancelar',
          handler: data => {}
        }, {
          text: 'Enviar',
          handler: data => {
            _this4.asunto = data.asunto;
            _this4.mensaje = data.mensaje;

            _this4.enviarMensaje();
          }
        }]
      });
      prompt.present();
    })();
  }

  enviarMensaje() {
    var _this5 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this5.asunto != "" && _this5.mensaje != "") {
        const loading = yield _this5.loadingCtrl.create({
          message: "Enviando mensaje..."
        });
        loading.present(); // Se recopila la información del dispositivo (https://ionicframework.com/docs/native/device/)
        //this.infoDispositivo = "<br/><br/>App version: " + AppConfig.version + "<br/>Cordova version: " + this.device.cordova + "<br/>UUID: " + this.device.uuid + "<br/>Model: " + this.device.model + "<br/>Platform: " + this.device.platform + "<br/>Version: "  + this.device.version + "<br/>Manufacturer: " + this.device.manufacturer + "<br/>Is Virtual: " + this.device.isVirtual + "<br/>Serial: " + this.device.serial;

        _this5.infoDispositivo = "<br/><br/>App version: " + _app_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.version + "<br/>Model: " + _this5.device.model + "<br/>Platform: " + _this5.device.platform + "<br/>Version: " + _this5.device.version + "<br/>Manufacturer: " + _this5.device.manufacturer + "<br/>Is Virtual: " + _this5.device.isVirtual; //this.infoDispositivo = "<br/><br/>App version: " + AppConfig.version;
        // Se envia el mensaje

        _this5.proveedor.contacto(_this5.usuario.Mensaje.AuthorizationToken, _this5.contactoSeleccionado, _this5.contactoSeleccionado == "Academia" ? _app_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.email : "soporte." + _app_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.nombre + "@aulavirtualctp.es", _this5.mensaje, _this5.nombreCurso, _app_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.id, _app_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.nombre, _app_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.subdominio, _this5.infoDispositivo).subscribe(data => {
          _this5.mensajeEnviado(data);
        }, error => {
          console.log(error);
        }, () => {
          loading.dismiss();
        });
      } else {
        const alert = yield _this5.alertCtrl.create({
          header: 'ATENCIÓN',
          subHeader: 'Debes introducir asunto y mensaje para poder enviarlo',
          buttons: ['OK']
        });
        yield alert.present();
      }
    })();
  }

  mensajeEnviado(data) {
    var _this6 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (data.Error == 0) {
        const alertOK = yield _this6.alertCtrl.create({
          header: '¡Mensaje Enviado!',
          subHeader: data.Mensaje,
          buttons: ['OK']
        });
        yield alertOK.present();
      } else {
        const alertKO = yield _this6.alertCtrl.create({
          header: 'Ooops!',
          subHeader: data.Mensaje,
          buttons: ['OK']
        });
        yield alertKO.present();
      }
    })();
  }

  ayuda() {
    var _this7 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this7.actionSheetCtrl.create({
        header: 'AYUDA',
        cssClass: 'my-custom-class',
        buttons: [{
          text: 'FAQs',
          icon: 'help-outline',
          handler: () => {
            _this7.faq();
          }
        }, {
          text: 'Contacto',
          icon: 'mail-outline',
          handler: () => {
            _this7.contacto();
          }
        }, {
          text: 'Llamar al centro',
          icon: 'call-outline',
          data: '',
          handler: () => {
            _this7.callNumber.callNumber(_app_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.telefono, true).then(res => console.log('Launched dialer!', res)).catch(err => console.log('Error launching dialer', err));
          }
        }, {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      yield actionSheet.present();
    })();
  }

  miCuenta() {
    var _this8 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this8.actionSheetCtrl.create({
        header: 'MI CUENTA',
        cssClass: 'my-custom-class',
        buttons: [{
          text: 'Configurar',
          icon: 'settings-outline',
          handler: () => {
            _this8.configuracion();
          }
        }, {
          text: 'Cerrar sesión',
          icon: 'power-outline',
          handler: () => {
            _this8.salir();
          }
        }, {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      yield actionSheet.present();
    })();
  }

  notificaciones() {
    this.router.navigate(['/notifications']);
  }

  eventos() {
    this.router.navigate(['/events']);
  }

  misResultados() {
    this.router.navigate(['/test-score']);
  }

  misEstadisticas() {
    var _this9 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this9.obtenerEstadisticas(); // const alert = await this.alertCtrl.create({
      //   header: 'Estadísticas',
      //   message: "<h2> Nota Media: " + this.media + "</h2><br><ion-badge item-end>" + this.resultados + "</ion-badge><span> Test Realizados</span><br><br><ion-badge item-end>" + this.semanal + "</ion-badge><span> Test Semanales</span><br><br><ion-badge item-end>" + this.aprobados + "</ion-badge><span> Test Aprobados</span>",
      //   buttons: ['Cerrar']
      // });
      // await alert.present();

    })();
  }

  obtenerEstadisticas() {
    // Se consultan las estadísticas del alumno en el curso
    this.proveedor.consultarEstadisticasCurso(this.usuario.Mensaje.AuthorizationToken, this.idCurso).subscribe(data => {
      this.actualizarEstadisticas(data);
    }, error => {
      console.log(error);
    });
  }

  actualizarEstadisticas(data) {
    // console.log ('actualizarEstadisticas');
    // console.log (data);
    if (data.Error == 0) {
      // Se inicializan las estadísticas del perfil del alumno
      this.resultados = data.Mensaje.Estadisticas.NumResultados;
      this.aprobados = data.Mensaje.Estadisticas.Aprobados;
      this.media = this.decimalPipe.transform(data.Mensaje.Estadisticas.Media / 10, '1.2-2');
      this.semanal = data.Mensaje.Estadisticas.Semanales;
      this.mostrarEstadisticas();
    } // Acceso denegado
    else if (data.Error == -10) {
      console.log('[!] ActualizarEstadisticas: Acceso denegado'); //this.logout();

      this.proveedorLogout.logout();
    }
  }

  mostrarEstadisticas() {
    var _this10 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this10.alertCtrl.create({
        header: 'Estadísticas',
        message: "<h2> Nota Media: " + _this10.media + "</h2><br><ion-badge item-end>" + _this10.resultados + "</ion-badge><span> Test Realizados</span><br><br><ion-badge item-end>" + _this10.semanal + "</ion-badge><span> Test Semanales</span><br><br><ion-badge item-end>" + _this10.aprobados + "</ion-badge><span> Test Aprobados</span>",
        buttons: ['Cerrar']
      });
      yield alert.present();
    })();
  }

  clases() {
    this.navParamService.setNavData('Clases');
    this.router.navigate(['/videos']);
  }

  simulacros() {
    this.navParamService.setNavData('Simulacros');
    this.router.navigate(['/test']);
  }

  materiaEspecifica(etiqueta) {
    this.navParamService.setNavData(etiqueta);
    this.router.navigate(['/specific-content']);
  }

}

TabsPage.ɵfac = function TabsPage_Factory(t) {
  return new (t || TabsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_navparam_service__WEBPACK_IMPORTED_MODULE_2__.NavparamService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__.Storage), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_events__WEBPACK_IMPORTED_MODULE_3__.Events), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.MenuController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_providers_logout__WEBPACK_IMPORTED_MODULE_4__.LogoutProvider), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_providers_aulavirtualrest__WEBPACK_IMPORTED_MODULE_5__.AulavirtualrestProvider), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_6__.Device), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DecimalPipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__.CallNumber));
};

TabsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: TabsPage,
  selectors: [["app-tabs"]],
  decls: 49,
  vars: 18,
  consts: [["color", "primary", 1, "ion-text-center"], ["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "menu-outline"], ["slot", "primary"], ["slot", "icon-only", "name", "help-circle-outline"], ["side", "start", "menuId", "first", "contentId", "main"], ["color", "primary"], ["slot", "end"], ["slot", "icon-only", "name", "close-outline"], ["auto-hide", "true"], ["button", "true", 3, "click"], ["name", "person-circle-outline", "color", "primary"], ["button", "true", 3, "click", 4, "ngIf"], ["id", "main"], ["slot", "bottom"], ["tab", "tab1"], ["name", "person-circle-outline"], ["tab", "modulos", 4, "ngIf"], ["tab", "docs", 4, "ngIf"], ["tab", "videos", 4, "ngIf"], ["tab", "test", 4, "ngIf"], ["tab", "foro", 4, "ngIf"], ["name", "notifications-outline", "color", "primary"], ["name", "calendar-outline", "color", "primary"], ["name", "easel-outline", "color", "primary"], ["name", "ribbon-outline", "color", "primary"], ["name", "bar-chart-outline", "color", "primary"], ["name", "alarm-outline", "color", "primary"], ["name", "earth-outline", "color", "primary"], ["name", "language-outline", "color", "primary"], ["name", "extension-puzzle-outline", "color", "primary"], ["name", "person-outline", "color", "primary"], ["name", "library-outline", "color", "primary"], ["name", "star-outline", "color", "primary"], ["tab", "modulos"], ["name", "book-outline"], ["tab", "docs"], ["name", "document-outline"], ["tab", "videos"], ["name", "logo-youtube"], ["tab", "test"], ["name", "checkbox-outline"], ["tab", "foro"], ["name", "chatbubbles-outline"]],
  template: function TabsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1)(3, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TabsPage_Template_ion_button_click_3_listener() {
        return ctx.openMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "ion-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "ion-buttons", 4)(6, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TabsPage_Template_ion_button_click_6_listener() {
        return ctx.ayuda();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "ion-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "ion-menu", 6)(11, "ion-header")(12, "ion-toolbar", 7)(13, "ion-buttons", 8)(14, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TabsPage_Template_ion_button_click_14_listener() {
        return ctx.closeMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "ion-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Men\u00FA");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "ion-content")(19, "ion-list")(20, "ion-menu-toggle", 10)(21, "ion-item", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TabsPage_Template_ion_item_click_21_listener() {
        return ctx.miCuenta();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "ion-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "\u00A0Mi cuenta");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, TabsPage_ion_item_25_Template, 3, 0, "ion-item", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, TabsPage_ion_item_26_Template, 3, 0, "ion-item", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, TabsPage_ion_item_27_Template, 3, 0, "ion-item", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, TabsPage_ion_item_28_Template, 3, 0, "ion-item", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, TabsPage_ion_item_29_Template, 3, 0, "ion-item", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, TabsPage_ion_item_30_Template, 3, 0, "ion-item", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, TabsPage_ion_item_31_Template, 3, 0, "ion-item", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, TabsPage_ion_item_32_Template, 3, 0, "ion-item", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, TabsPage_ion_item_33_Template, 3, 0, "ion-item", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, TabsPage_ion_item_34_Template, 3, 0, "ion-item", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, TabsPage_ion_item_35_Template, 3, 0, "ion-item", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, TabsPage_ion_item_36_Template, 3, 0, "ion-item", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](37, "ion-router-outlet", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "ion-tabs")(39, "ion-tab-bar", 15)(40, "ion-tab-button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](41, "ion-icon", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "Inicio");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](44, TabsPage_ion_tab_button_44_Template, 4, 0, "ion-tab-button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](45, TabsPage_ion_tab_button_45_Template, 4, 0, "ion-tab-button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](46, TabsPage_ion_tab_button_46_Template, 4, 0, "ion-tab-button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](47, TabsPage_ion_tab_button_47_Template, 4, 0, "ion-tab-button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, TabsPage_ion_tab_button_48_Template, 4, 0, "ion-tab-button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.titulo);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.idCurso != null && ctx.accesoNotificaciones);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.idCurso != null && ctx.accesoEventos);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.idCurso != null && ctx.accesoClases);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.idCurso != null && ctx.accesoTest);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.idCurso != null && ctx.accesoTest);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.idCurso != null && ctx.accesoTest && ctx.accesoSimulacros);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.idCurso != null && ctx.accesoIngles);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.idCurso != null && ctx.accesoOrtografia);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.idCurso != null && ctx.accesoPsicotecnicos);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.idCurso != null && ctx.accesoPersonalidad);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.idCurso != null && ctx.accesoLegislacion);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.idCurso != null && ctx.accesoNivelPro);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.accesoModulos);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.accesoDocs);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.accesoVideos);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.accesoTest);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.accesoForo);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonMenu, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonMenuToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonTabBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonTabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonTabs, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonRouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map