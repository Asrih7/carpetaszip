(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 1053)).then(m => m.LoginPageModule)
    },
    {
        path: 'forget',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login-forget_login-forget_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login-forget/login-forget.module */ 2679)).then(m => m.LoginForgetPageModule)
    },
    {
        path: 'tabs',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tabs_tabs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 5564)).then(m => m.TabsPageModule)
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_home_home_module_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 7994)).then(m => m.HomePageModule)
    },
    {
        path: 'about',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/about/about.module */ 8114)).then(m => m.AboutPageModule)
    },
    {
        path: 'contact',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_contact_contact_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/contact/contact.module */ 7213)).then(m => m.ContactPageModule)
    },
    {
        path: 'test',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2020_scrolling_mjs"), __webpack_require__.e("src_app_pages_test_test_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/test/test.module */ 5011)).then(m => m.TestPageModule)
    },
    {
        path: 'test-do',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_test-do_test-do_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/test-do/test-do.module */ 2407)).then(m => m.TestDoPageModule)
    },
    {
        path: 'test-info',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_test-info_test-info_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/test-info/test-info.module */ 9509)).then(m => m.TestInfoPageModule)
    },
    {
        path: 'test-review',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_test-review_test-review_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/test-review/test-review.module */ 6367)).then(m => m.TestReviewPageModule)
    },
    {
        path: 'test-score',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_test-score_test-score_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/test-score/test-score.module */ 7760)).then(m => m.TestScorePageModule)
    },
    {
        path: 'docs',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2020_scrolling_mjs"), __webpack_require__.e("default-node_modules_fancyapps_ui_dist_fancybox_esm_js"), __webpack_require__.e("src_app_pages_docs_docs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/docs/docs.module */ 2829)).then(m => m.DocsPageModule)
    },
    {
        path: 'doc-viewer',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_doc-viewer_doc-viewer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/doc-viewer/doc-viewer.module */ 7960)).then(m => m.DocViewerPageModule)
    },
    {
        path: 'videos',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2020_scrolling_mjs"), __webpack_require__.e("default-node_modules_fancyapps_ui_dist_fancybox_esm_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_videos_videos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/videos/videos.module */ 9642)).then(m => m.VideosPageModule)
    },
    {
        path: 'video-player',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_video-player_video-player_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/video-player/video-player.module */ 9483)).then(m => m.VideoPlayerPageModule)
    },
    {
        path: 'events',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_events_events_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/events/events.module */ 5105)).then(m => m.EventsPageModule)
    },
    {
        path: 'faq',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_faq_faq_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/faq/faq.module */ 7119)).then(m => m.FaqPageModule)
    },
    {
        path: 'forum',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2020_scrolling_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_forum_forum_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/forum/forum.module */ 9397)).then(m => m.ForumPageModule)
    },
    {
        path: 'forum-topic',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_forum-topic_forum-topic_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/forum-topic/forum-topic.module */ 7195)).then(m => m.ForumTopicPageModule)
    },
    {
        path: 'test-index',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_test-index_test-index_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/test-index/test-index.module */ 9048)).then(m => m.TestIndexPageModule)
    },
    {
        path: 'test-index-review',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_test-index-review_test-index-review_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/test-index-review/test-index-review.module */ 4484)).then(m => m.TestIndexReviewPageModule)
    },
    {
        path: 'modules',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_modules_modules_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/modules/modules.module */ 9621)).then(m => m.ModulesPageModule)
    },
    {
        path: 'module-detail',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_fancyapps_ui_dist_fancybox_esm_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_module-detail_module-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/module-detail/module-detail.module */ 362)).then(m => m.ModuleDetailPageModule)
    },
    {
        path: 'specific-content',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_specific-content_specific-content_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/specific-content/specific-content.module */ 2640)).then(m => m.SpecificContentPageModule)
    },
    {
        path: 'notifications',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_notifications_notifications_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notifications/notifications.module */ 9843)).then(m => m.NotificationsPageModule)
    },
    {
        path: 'notification-detail',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_notification-detail_notification-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notification-detail/notification-detail.module */ 4996)).then(m => m.NotificationDetailPageModule)
    },
    {
        path: 'report',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_report_report_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/report/report.module */ 1725)).then(m => m.ReportPageModule)
    },
    {
        path: 'courses',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_courses_courses_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/courses/courses.module */ 9084)).then(m => m.CoursesPageModule)
    },
    {
        path: 'account-settings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_account-settings_account-settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/account-settings/account-settings.module */ 589)).then(m => m.AccountSettingsPageModule)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'menu',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_menu_menu_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/menu/menu.module */ 252)).then(m => m.MenuPageModule)
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__.PreloadAllModules }), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/splash-screen */ 2239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ 190);

//import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
//import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';




class AppComponent {
  constructor(platform, storage) {
    this.platform = platform;
    this.storage = storage;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //statusBar.styleDefault();
      //splashScreen.hide();
      this.hideSplashScreen();
    });
  }

  ngOnInit() {
    var _this = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // If using a custom driver:
      // await this.storage.defineDriver(MyCustomDriver)
      yield _this.storage.create(); // Hide the splash (you should do this on app launch) 
      //await SplashScreen.hide();
    })();
  } // Hide SplashScreen


  hideSplashScreen() {
    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_1__.SplashScreen.hide();
    })();
  } // Show SplashScreen
  // https://capacitorjs.com/docs/apis/splash-screen


  showSplashScreen() {
    var _this2 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.platform.ready(); // Show the splash autohide:
      // await SplashScreen.show({
      //   showDuration: 0,
      //   autoHide: true,
      // });
      // Show the splash for an indefinite amount of time:
      // await SplashScreen.show({
      //   autoHide: false,
      // });
      // Show the splash for two seconds and then automatically hide it:
      // await SplashScreen.show({
      //   showDuration: 2000,
      //   autoHide: true,
      // });
    })();
  }

}

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__.Storage));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-app");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 9670:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConfig": () => (/* binding */ AppConfig)
/* harmony export */ });
class AppConfig {
}
AppConfig.version = '3.0.1';
AppConfig.id = 62;
AppConfig.nombre = 'armentapenitenciario';
AppConfig.email = 'info@armentapenitenciario.com';
AppConfig.direccion = '';
AppConfig.telefono = '677 63 32 58';
AppConfig.movil = '';
AppConfig.url = 'https://armentapenitenciario.com';
AppConfig.subdominio = 'https://armentapenitenciario.aulavirtualctp.com';
AppConfig.facebookUrl = 'https://www.facebook.com/armentapenitenciario';
AppConfig.twitterUrl = 'https://twitter.com/Armentapeniten1';
AppConfig.gplusUrl = '';
AppConfig.googleAnalytics = '';


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _services_navparam_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/navparam.service */ 7495);
/* harmony import */ var _providers_aulavirtualrest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./providers/aulavirtualrest */ 4313);
/* harmony import */ var _providers_logout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./providers/logout */ 8599);
/* harmony import */ var _pipes_safe_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/safe-html */ 6124);
/* harmony import */ var _pipes_safe_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/safe-url */ 3922);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/storage-angular */ 7566);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 7122);
/* harmony import */ var _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/device/ngx */ 4701);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _awesome_cordova_plugins_google_analytics_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/google-analytics/ngx */ 5892);
/* harmony import */ var _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @awesome-cordova-plugins/call-number/ngx */ 3622);
/* harmony import */ var _awesome_cordova_plugins_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @awesome-cordova-plugins/streaming-media/ngx */ 448);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! swiper/angular */ 341);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);











//import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
//import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicRouteStrategy },
        _services_navparam_service__WEBPACK_IMPORTED_MODULE_2__.NavparamService,
        _providers_aulavirtualrest__WEBPACK_IMPORTED_MODULE_3__.AulavirtualrestProvider,
        _providers_logout__WEBPACK_IMPORTED_MODULE_4__.LogoutProvider,
        _pipes_safe_html__WEBPACK_IMPORTED_MODULE_5__.SafeHtmlPipe,
        _pipes_safe_url__WEBPACK_IMPORTED_MODULE_6__.SafeUrlPipe,
        //StatusBar,
        //SplashScreen,
        _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__.InAppBrowser,
        _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_8__.Device,
        _angular_common__WEBPACK_IMPORTED_MODULE_15__.DecimalPipe,
        _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe,
        _awesome_cordova_plugins_google_analytics_ngx__WEBPACK_IMPORTED_MODULE_9__.GoogleAnalytics,
        _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_10__.CallNumber,
        _awesome_cordova_plugins_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_11__.StreamingMedia
    ], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule.forRoot(),
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_19__.IonicStorageModule.forRoot(),
        swiper_angular__WEBPACK_IMPORTED_MODULE_20__.SwiperModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_19__.IonicStorageModule, swiper_angular__WEBPACK_IMPORTED_MODULE_20__.SwiperModule] }); })();


/***/ }),

/***/ 6124:
/*!************************************!*\
  !*** ./src/app/pipes/safe-html.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafeHtmlPipe": () => (/* binding */ SafeHtmlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);


/**
 * Generated class for the SafeHtmlPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
class SafeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
}
SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) { return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16)); };
SafeHtmlPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safeHtml", type: SafeHtmlPipe, pure: true });


/***/ }),

/***/ 3922:
/*!***********************************!*\
  !*** ./src/app/pipes/safe-url.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafeUrlPipe": () => (/* binding */ SafeUrlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);


/**
 * Generated class for the SafeUrlPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
class SafeUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafeUrlPipe.ɵfac = function SafeUrlPipe_Factory(t) { return new (t || SafeUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16)); };
SafeUrlPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safeUrl", type: SafeUrlPipe, pure: true });


/***/ }),

/***/ 4313:
/*!**********************************************!*\
  !*** ./src/app/providers/aulavirtualrest.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AulavirtualrestProvider": () => (/* binding */ AulavirtualrestProvider)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.config */ 9670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




/*
  Generated class for the AulavirtualrestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class AulavirtualrestProvider {
    constructor(http) {
        this.http = http;
        //apiUrl = 'http://alb-ulavirtual-stg-668686577.eu-west-1.elb.amazonaws.com:8080/service1.svc' // STG AWS
        //apiUrl = 'http://alb-ulavirtual-pro-1497496385.eu-west-1.elb.amazonaws.com:8080/Service1.svc' // PRO AWS
        this.apiUrl = 'http://api.aulavirtualctp.com:8080/service1.svc';
        //console.log('Hello AulavirtualrestProvider Provider');
    }
    //#region EJEMPLOS
    // Ejemplo GET
    getUsers() {
        return new Promise(resolve => {
            this.http.get(this.apiUrl + '/users').subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }
    // Ejemplo POST
    addUser(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + '/users', JSON.stringify(data))
                .subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
    // Ejemplo POST + HEADERS
    addUser2(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + '/users', JSON.stringify(data), {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', 'my-auth-token'),
                params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('id', '3')
            })
                .subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
    //#endregion EJEMPLOS
    //#region LOGIN
    // Login
    loginIOS(usuario, password, idAcademia) {
        let body = {
            "Usuario": usuario,
            "Password": password,
            "IdAcademia": idAcademia
        };
        return this.http.post(this.apiUrl + '/loginios', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }
    login(usuario, password, idAcademia) {
        let body = {
            "Usuario": usuario,
            "Password": password,
            "IdAcademia": idAcademia
        };
        return this.http.post(this.apiUrl + '/login', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }
    // Recuperar Contraseña
    resetearContraseña(email) {
        return this.http.get(this.apiUrl + '/resetearpassword?email=' + email + '&idAcademia=' + _app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.id);
    }
    // Perfil
    obtenerPerfil(token, idAcademia) {
        return this.http.get(this.apiUrl + '/Init?idAcademia=' + idAcademia, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    obtenerPerfilCurso(token, idAcademia, idCurso) {
        return this.http.get(this.apiUrl + '/InitCurso?idAcademia=' + idAcademia + '&idCurso=' + idCurso, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    //#endregion LOGIN
    //#region CURSOS
    consultarCursos(token) {
        return this.http.get(this.apiUrl + '/Cursos', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    //#endregion CURSOS
    //#region TEST
    // Test
    consultarTestCurso(token, idCurso) {
        return this.http.get(this.apiUrl + '/TestCurso?idCurso=' + idCurso, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    // Test filtrados por mes de acceso
    consultarTestCursoMes(token, idCurso, mesAcceso) {
        return this.http.get(this.apiUrl + '/TestCursoMes?idCurso=' + idCurso + '&MesAcceso=' + mesAcceso, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    // Test filtrados por mes de acceso y tema
    consultarTestCursoMesTema(token, idCurso, mesAcceso, modulo, tema) {
        return this.http.get(this.apiUrl + '/TestCursoMesTema?idCurso=' + idCurso + '&MesAcceso=' + mesAcceso + '&Modulo=' + modulo + '&Tema=' + tema, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    // Test filtrados por mes de acceso y etiqueta
    consultarTestCursoMesEtiqueta(token, idCurso, mesAcceso, etiqueta) {
        return this.http.get(this.apiUrl + '/TestCursoMesEtiqueta?idCurso=' + idCurso + '&MesAcceso=' + mesAcceso + '&Etiqueta=' + etiqueta, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    // Test de Inglés filtrados por mes de acceso
    consultarTestInglesCursoMes(token, idCurso, mesAcceso) {
        return this.http.get(this.apiUrl + '/TestInglesCursoMes?idCurso=' + idCurso + '&MesAcceso=' + mesAcceso, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    // Test de Personalidad filtrados por mes de acceso
    consultarTestPersonalidadCursoMes(token, idCurso, mesAcceso) {
        return this.http.get(this.apiUrl + '/TestPersonalidadCursoMes?idCurso=' + idCurso + '&MesAcceso=' + mesAcceso, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    // Test de Ortografía filtrados por mes de acceso
    consultarTestOrtografiaCursoMes(token, idCurso, mesAcceso) {
        return this.http.get(this.apiUrl + '/TestOrtografiaCursoMes?idCurso=' + idCurso + '&MesAcceso=' + mesAcceso, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    // Casos Prácticos
    consultarCasosPracticosCurso(token, idCurso) {
        return this.http.get(this.apiUrl + '/CasosPracticosCurso?idCurso=' + idCurso, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    // Casos Prácticos filtrados por mes de acceso
    consultarCasosPracticosCursoMes(token, idCurso, mesAcceso) {
        return this.http.get(this.apiUrl + '/CasosPracticosCursoMes?idCurso=' + idCurso + '&MesAcceso=' + mesAcceso, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    // Simulacros filtrados por mes de acceso
    consultarSimulacrosCursoMes(token, idCurso, mesAcceso) {
        return this.http.get(this.apiUrl + '/SimulacrosCursoMes?idCurso=' + idCurso + '&MesAcceso=' + mesAcceso, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    obtenerTest(token, idTest) {
        return this.http.get(this.apiUrl + '/Test?idtest=' + idTest, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    recuperarTest(token, idTest, idOposicion) {
        return this.http.get(this.apiUrl + '/RecuperarTest?idtest=' + idTest + '&idOposicion=' + idOposicion, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    obtenerImagenesTest(token, idTest) {
        return this.http.get(this.apiUrl + '/ImagenInicioTest?idTest=' + idTest, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    configurarTest(token, idTest, numeroPreguntas, minutos, aleatorio) {
        return this.http.get(this.apiUrl + '/Test?idtest=' + idTest + "&NumPreg=" + numeroPreguntas + "&Minutos=" + minutos + "&Aleatorio=" + aleatorio, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    comentarPregunta(token, idTest, idPregunta, posicion, comentario) {
        let body = {
            "IdTest": idTest,
            "IdPregunta": idPregunta,
            "Posicion": posicion,
            "Mensaje": comentario
        };
        return this.http.post(this.apiUrl + '/ComentarPregunta', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token,
                'Content-Type': 'application/json'
            })
        });
    }
    impugnarPregunta(token, idTest, idPregunta, posicion, comentario) {
        let body = {
            "IdTest": idTest,
            "IdPregunta": idPregunta,
            "Posicion": posicion,
            "Mensaje": comentario
        };
        return this.http.post(this.apiUrl + '/ImpugnarPregunta', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token,
                'Content-Type': 'application/json'
            })
        });
    }
    insertarRevisionTest(token, idTest) {
        let body = {
            "IdTest": idTest
        };
        return this.http.post(this.apiUrl + '/InsertarRevisionTest', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token,
                'Content-Type': 'application/json'
            })
        });
    }
    insertarRevisionTestOposicion(token, idTest, idOposicion) {
        let body = {
            "IdTest": idTest
        };
        return this.http.post(this.apiUrl + '/InsertarRevisionTestOposicion?IdOposicion=' + idOposicion, body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token,
                'Content-Type': 'application/json'
            })
        });
    }
    actualizarRevisionPreguntasTest(token, preguntas, idTest, multirespuesta) {
        let body = {
            "IdTest": idTest,
            "Preguntas": preguntas,
            "Multirespuesta": multirespuesta
        };
        return this.http.post(this.apiUrl + '/ActualizarRevisionPreguntasTest', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token,
                'Content-Type': 'application/json'
            })
        });
    }
    eliminarRevisionTest(token, idTest) {
        return this.http.delete(this.apiUrl + '/eliminarRevisionTest?idtest=' + idTest, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token,
                'Content-Type': 'application/json'
            })
        });
    }
    //#endregion TEST
    //#region RESULTADOS
    consultarEstadisticas(token) {
        return this.http.get(this.apiUrl + '/Estadisticas', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    consultarEstadisticasCurso(token, idCurso) {
        return this.http.get(this.apiUrl + '/EstadisticasCurso?idCurso=' + idCurso, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    consultarResultados(token) {
        return this.http.get(this.apiUrl + '/Resultados', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    consultarResultadosCurso(token, idCurso) {
        return this.http.get(this.apiUrl + '/ResultadosCurso?idCurso=' + idCurso, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    nuevoResultado(token, idTest, idTema, idTemario, aciertos, fallos, blancos, tiempo) {
        let body = {
            "IdTest": idTest,
            "IdTema": idTema,
            "IdTemario": idTemario,
            "Aciertos": aciertos,
            "Fallos": fallos,
            "Blancos": blancos,
            "Tiempo": tiempo
        };
        return this.http.post(this.apiUrl + '/NuevoResultado', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token,
                'Content-Type': 'application/json'
            })
        });
    }
    nuevoResultadoOposicion(token, idOposicion, idTest, idTema, idTemario, aciertos, fallos, blancos, tiempo) {
        let body = {
            "IdTest": idTest,
            "IdTema": idTema,
            "IdTemario": idTemario,
            "Aciertos": aciertos,
            "Fallos": fallos,
            "Blancos": blancos,
            "Tiempo": tiempo
        };
        return this.http.post(this.apiUrl + '/NuevoResultadoOposicion?IdOposicion=' + idOposicion, body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token,
                'Content-Type': 'application/json'
            })
        });
    }
    nuevoResultadoOposicionTipoTest(token, idOposicion, idTest, tipoTest, idTema, idTemario, aciertos, fallos, blancos, dudosas, dudosasAcierto, dudosasFallo, tiempo) {
        let body = {
            "IdTest": idTest,
            "IdTema": idTema,
            "IdTemario": idTemario,
            "Aciertos": aciertos,
            "Fallos": fallos,
            "Blancos": blancos,
            "Dudosa": dudosas,
            "DudosasAcierto": dudosasAcierto,
            "DudosasFallo": dudosasFallo,
            "Tiempo": tiempo
        };
        return this.http.post(this.apiUrl + '/NuevoResultadoOposicionTipoTest?IdOposicion=' + idOposicion + '&tipoTest=' + tipoTest, body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token,
                'Content-Type': 'application/json'
            })
        });
    }
    //#endregion RESULTADOS
    //#region DOCUMENTOS
    consultarDocsCurso(token, idCurso) {
        return this.http.get(this.apiUrl + '/DocumentosCurso?idCurso=' + idCurso, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    consultarDocsCursoMes(token, idCurso, mesAcceso) {
        return this.http.get(this.apiUrl + '/DocumentosCursoMes?idCurso=' + idCurso + '&MesAcceso=' + mesAcceso, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    consultarDocsCursoMesTema(token, idCurso, mesAcceso, modulo, tema) {
        return this.http.get(this.apiUrl + '/DocumentosCursoMesTema?idCurso=' + idCurso + '&MesAcceso=' + mesAcceso + '&Modulo=' + modulo + '&Tema=' + tema, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    consultarDocsCursoMesEtiqueta(token, idCurso, mesAcceso, etiqueta) {
        return this.http.get(this.apiUrl + '/DocumentosCursoMesEtiqueta?idCurso=' + idCurso + '&MesAcceso=' + mesAcceso + '&Etiqueta=' + etiqueta, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    consultarDocsInglesCursoMes(token, idCurso, mesAcceso) {
        return this.http.get(this.apiUrl + '/DocumentosInglesCursoMes?idCurso=' + idCurso + '&MesAcceso=' + mesAcceso, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    consultarDocsOrtografiaCursoMes(token, idCurso, mesAcceso) {
        return this.http.get(this.apiUrl + '/DocumentosOrtografiaCursoMes?idCurso=' + idCurso + '&MesAcceso=' + mesAcceso, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    obtenerDoc(token, idDoc) {
        return this.http.get(this.apiUrl + '/DocumentoCurso?ID=' + idDoc, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    marcarDocVisto(token, idDoc) {
        let body = {
            "ID": idDoc
        };
        return this.http.post(this.apiUrl + '/MarcarDocumentoVisto', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token,
                'Content-Type': 'application/json'
            })
        });
    }
    //#endregion DOCUMENTOS
    //#region VIDEOS
    consultarVideosCurso(token, idCurso) {
        return this.http.get(this.apiUrl + '/VideosCurso?idCurso=' + idCurso, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    consultarVideosCursoMes(token, idCurso, mesAcceso) {
        return this.http.get(this.apiUrl + '/VideosCursoMes?idCurso=' + idCurso + '&MesAcceso=' + mesAcceso, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    consultarVideosCursoMesTema(token, idCurso, mesAcceso, modulo, tema) {
        return this.http.get(this.apiUrl + '/VideosCursoMesTema?idCurso=' + idCurso + '&MesAcceso=' + mesAcceso + '&Modulo=' + modulo + '&Tema=' + tema, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    consultarVideosCursoMesEtiqueta(token, idCurso, mesAcceso, etiqueta) {
        return this.http.get(this.apiUrl + '/VideosCursoMesEtiqueta?idCurso=' + idCurso + '&MesAcceso=' + mesAcceso + '&Etiqueta=' + etiqueta, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    consultarVideosClasesCurso(token, idCurso) {
        return this.http.get(this.apiUrl + '/VideosClasesCurso?idCurso=' + idCurso, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    marcarVideoVisto(token, idVideo) {
        let body = {
            "ID": idVideo
        };
        return this.http.post(this.apiUrl + '/MarcarVideoVisto', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token,
                'Content-Type': 'application/json'
            })
        });
    }
    obtenerUrlVideo(token, idVideo, idCurso) {
        return this.http.get(this.apiUrl + '/VideoUrl?idVideo=' + idVideo + '&idCurso=' + idCurso, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    //#endregion VIDEOS
    //#region FORO
    obtenerTemasForo(token, idCurso) {
        return this.http.get(this.apiUrl + '/Foro?idCurso=' + idCurso + '&html=1', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    obtenerRespuestasTemasForo(token, idTema) {
        return this.http.get(this.apiUrl + '/ForoTema?idTema=' + idTema, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    nuevoTema(token, idCurso, titulo, comentario) {
        let body = {
            "IdCurso": idCurso,
            "IdTema": 0,
            "Titulo": titulo,
            "Comentario": comentario,
            "Usuario": "",
            "Fecha": ""
        };
        return this.http.post(this.apiUrl + '/ForoNuevoTema', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token,
                'Content-Type': 'application/json'
            })
        });
    }
    nuevaRespuesta(token, idCurso, idTema, comentario) {
        let body = {
            "IdCurso": idCurso,
            "IdTema": idTema,
            "Comentario": comentario,
            "Usuario": "",
            "Fecha": ""
        };
        return this.http.post(this.apiUrl + '/ForoRespuesta', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token,
                'Content-Type': 'application/json'
            })
        });
    }
    //#endregion FORO
    //#region EVENTOS
    consultarEventos(token) {
        return this.http.get(this.apiUrl + '/Eventos', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    asociarEvento(token, codigo) {
        let body = {
            "Codigo": codigo
        };
        return this.http.post(this.apiUrl + '/AsociarEvento', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token,
                'Content-Type': 'application/json'
            })
        });
    }
    validarAsociarEvento(token, id, codigo) {
        let body = {
            "IdCurso": id,
            "Codigo": codigo
        };
        return this.http.post(this.apiUrl + '/ValidarAsociarEvento', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token,
                'Content-Type': 'application/json'
            })
        });
    }
    desasociarEvento(token, idEvento) {
        let body = {
            "IdCurso": idEvento
        };
        return this.http.post(this.apiUrl + '/DesasociarEvento', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token,
                'Content-Type': 'application/json'
            })
        });
    }
    //#endregion EVENTOS
    //#region CONTACTO
    // Contacto
    contacto(token, contacto, destinatario, mensaje, curso, idAcademia, nombreAcademia, subdominioAcademia, infoDispositivo) {
        let body = {
            "Contacto": contacto,
            "Destinatario": destinatario,
            "Mensaje": mensaje,
            "Curso": curso,
            "IdAcademia": idAcademia,
            "NombreAcademia": nombreAcademia,
            "SubdominioAcademia": subdominioAcademia,
            "InfoDispositivo": infoDispositivo
        };
        return this.http.post(this.apiUrl + '/contacto', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token,
                'Content-Type': 'application/json'
            })
        });
    }
    //#endregion CONTACTO
    //#region NOTIFICACIONES
    consultarNotificaciones(token, idCurso) {
        return this.http.get(this.apiUrl + '/Notificaciones?idCurso=' + idCurso, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    consultarNotificacionesRecientes(token, idCurso) {
        return this.http.get(this.apiUrl + '/NotificacionesRecientes?idCurso=' + idCurso, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
    //#endregion NOTIFICACIONES
    //#region MÓDULOS
    consultarModulos(token, idCurso) {
        return this.http.get(this.apiUrl + '/Modulos?idCurso=' + idCurso, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'AuthorizationToken': token
            })
        });
    }
}
AulavirtualrestProvider.ɵfac = function AulavirtualrestProvider_Factory(t) { return new (t || AulavirtualrestProvider)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
AulavirtualrestProvider.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AulavirtualrestProvider, factory: AulavirtualrestProvider.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8599:
/*!*************************************!*\
  !*** ./src/app/providers/logout.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutProvider": () => (/* binding */ LogoutProvider)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




/*
  Generated class for the LogoutProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class LogoutProvider {
    constructor(http, storage, router) {
        this.http = http;
        this.storage = storage;
        this.router = router;
        //console.log('Hello LogoutProvider Provider');
    }
    // ocultarMenu(){
    //   let tabs = document.querySelectorAll('.tabbar');
    //   if ( tabs !== null ) {
    //     Object.keys(tabs).map((key) => {
    //       tabs[ key ].style.transform = 'translateY(56px)';
    //     });
    //   } // end if
    // }
    logout() {
        // Se limpia la memoria
        this.storage.clear();
        // Se oculta el menú
        //this.ocultarMenu();
        // Se redirecciona a la página de login
        //const root = this.app.getRootNav();    
        //root.popToRoot();
        //this.navCtrl.setRoot(LoginPage);
        this.router.navigate(['/login']);
    }
}
LogoutProvider.ɵfac = function LogoutProvider_Factory(t) { return new (t || LogoutProvider)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Storage), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
LogoutProvider.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LogoutProvider, factory: LogoutProvider.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7495:
/*!**********************************************!*\
  !*** ./src/app/services/navparam.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavparamService": () => (/* binding */ NavparamService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class NavparamService {
    constructor() { }
    setNavData(navObj) {
        this.navData = navObj;
    }
    getNavData() {
        if (this.navData === null || this.navData === undefined)
            return null;
        return this.navData;
    }
}
NavparamService.ɵfac = function NavparamService_Factory(t) { return new (t || NavparamService)(); };
NavparamService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NavparamService, factory: NavparamService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_parse-5b8a1541_js-node_modules_ionic_core_dist_esm_t-8d4d32",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-5b8a1541_js-node_modules_ionic_core_dist_esm_t-8d4d32",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		4933,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map