"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_doc-viewer_doc-viewer_module_ts"],{

/***/ 1133:
/*!***************************************************************!*\
  !*** ./src/app/pages/doc-viewer/doc-viewer-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocViewerPageRoutingModule": () => (/* binding */ DocViewerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _doc_viewer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doc-viewer.page */ 5661);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _doc_viewer_page__WEBPACK_IMPORTED_MODULE_0__.DocViewerPage
    }
];
class DocViewerPageRoutingModule {
}
DocViewerPageRoutingModule.ɵfac = function DocViewerPageRoutingModule_Factory(t) { return new (t || DocViewerPageRoutingModule)(); };
DocViewerPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DocViewerPageRoutingModule });
DocViewerPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DocViewerPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 7960:
/*!*******************************************************!*\
  !*** ./src/app/pages/doc-viewer/doc-viewer.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocViewerPageModule": () => (/* binding */ DocViewerPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pipes_safe_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/safe-url */ 3922);
/* harmony import */ var _doc_viewer_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doc-viewer-routing.module */ 1133);
/* harmony import */ var _doc_viewer_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doc-viewer.page */ 5661);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);



//import { PipesModule } from 'src/app/pipes/pipes.module';




class DocViewerPageModule {
}
DocViewerPageModule.ɵfac = function DocViewerPageModule_Factory(t) { return new (t || DocViewerPageModule)(); };
DocViewerPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DocViewerPageModule });
DocViewerPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        //PipesModule,
        _doc_viewer_routing_module__WEBPACK_IMPORTED_MODULE_1__.DocViewerPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DocViewerPageModule, { declarations: [_doc_viewer_page__WEBPACK_IMPORTED_MODULE_2__.DocViewerPage, _pipes_safe_url__WEBPACK_IMPORTED_MODULE_0__.SafeUrlPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        //PipesModule,
        _doc_viewer_routing_module__WEBPACK_IMPORTED_MODULE_1__.DocViewerPageRoutingModule] }); })();


/***/ }),

/***/ 5661:
/*!*****************************************************!*\
  !*** ./src/app/pages/doc-viewer/doc-viewer.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocViewerPage": () => (/* binding */ DocViewerPage)
/* harmony export */ });
/* harmony import */ var _Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_navparam_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/navparam.service */ 7495);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pipes_safe_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/safe-url */ 3922);






class DocViewerPage {
  constructor(router, navParamService, alertCtrl, loadingCtrl) {
    this.router = router;
    this.navParamService = navParamService;
    this.alertCtrl = alertCtrl;
    this.loadingCtrl = loadingCtrl;
    this.item = this.navParamService.getNavData();
    this.obtenerUrl();
    document.addEventListener('screenshot', function () {
      this.capturaDetectada();
    }, false);
  }

  ngOnInit() {}

  obtenerUrl() {
    //this.url = "Content-Security-Policy: frame-ancestors 'self' " + this.item.URL + "X-Frame-Options: ALLOW-FROM https://www.dropbox.com";
    if (this.item.Fuente == "local") {
      // VISUALIZACIÓN
      this.url = "http://aulavirtualctp.com/Academias/VisorDocumentos/Web/ViewerMobile.aspx?file=" + this.item.ID; // console.log(this.url);
      // DESCARGA
      // TODO: Comprobar si la descarga está habilitada y si es encriptado o no
      //this.url = "http://aulavirtualctp.com/Academias/docCurso.ashx?Id=" + this.item.ID;      
    } else if (this.item.Fuente == "dropbox") {
      this.url = this.item.URL + "&raw=1";
    } else if (this.item.Fuente == "genially") {
      this.url = this.item.URL;
    } else {
      //this.navCtrl.push(DocsPage);
      this.router.navigate(['/docs']);
    }
  }

  capturaDetectada() {
    var _this = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertCtrl.create({
        header: 'Atención',
        message: 'Se detectó una captura de pantalla y ha sido comunicado a tu centro para que tome las medidas oportunas',
        buttons: ['OK']
      });
      yield alert.present(); //this.navCtrl.push(DocsPage);

      _this.router.navigate(['/docs']);
    })();
  }

}

DocViewerPage.ɵfac = function DocViewerPage_Factory(t) {
  return new (t || DocViewerPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_navparam_service__WEBPACK_IMPORTED_MODULE_1__.NavparamService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController));
};

DocViewerPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: DocViewerPage,
  selectors: [["app-doc-viewer"]],
  decls: 10,
  vars: 4,
  consts: [["color", "primary", 1, "ion-text-center"], ["slot", "start"], ["text", "Volver"], [2, "width", "100%", "height", "100%"], [2, "width", "100%", "height", "100%", 3, "src"]],
  template: function DocViewerPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "ion-back-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-content")(7, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "iframe", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "safeUrl");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.item.Nombre);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 2, ctx.url), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeResourceUrl"]);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButtonDelegate, _pipes_safe_url__WEBPACK_IMPORTED_MODULE_2__.SafeUrlPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2Mtdmlld2VyLnBhZ2Uuc2NzcyJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_doc-viewer_doc-viewer_module_ts.js.map