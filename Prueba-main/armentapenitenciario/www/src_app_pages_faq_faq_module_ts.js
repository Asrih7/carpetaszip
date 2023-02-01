"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_faq_faq_module_ts"],{

/***/ 263:
/*!*************************************************!*\
  !*** ./src/app/pages/faq/faq-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqPageRoutingModule": () => (/* binding */ FaqPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq.page */ 8601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _faq_page__WEBPACK_IMPORTED_MODULE_0__.FaqPage
    }
];
class FaqPageRoutingModule {
}
FaqPageRoutingModule.ɵfac = function FaqPageRoutingModule_Factory(t) { return new (t || FaqPageRoutingModule)(); };
FaqPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FaqPageRoutingModule });
FaqPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FaqPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 7119:
/*!*****************************************!*\
  !*** ./src/app/pages/faq/faq.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqPageModule": () => (/* binding */ FaqPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _faq_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq-routing.module */ 263);
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq.page */ 8601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class FaqPageModule {
}
FaqPageModule.ɵfac = function FaqPageModule_Factory(t) { return new (t || FaqPageModule)(); };
FaqPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FaqPageModule });
FaqPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _faq_routing_module__WEBPACK_IMPORTED_MODULE_0__.FaqPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FaqPageModule, { declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_1__.FaqPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _faq_routing_module__WEBPACK_IMPORTED_MODULE_0__.FaqPageRoutingModule] }); })();


/***/ }),

/***/ 8601:
/*!***************************************!*\
  !*** ./src/app/pages/faq/faq.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqPage": () => (/* binding */ FaqPage)
/* harmony export */ });
/* harmony import */ var _Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);



class FaqPage {
  constructor(alertCtrl) {
    this.alertCtrl = alertCtrl;
  }

  ngOnInit() {}

  respuesta(pregunta) {
    switch (pregunta) {
      case 1:
        this.alert('¿Cómo entro en la app?', 'Para entrar en la App debes utilizar el mismo email y contraseña que utilizas para entrar en el Aula Virtual.');
        break;

      case 2:
        this.alert('¿Cómo consigo una cuenta?', 'Para crear una cuenta de alumno debes ponerte en contacto con tu centro y solicitar matricularte en un curso.');
        break;

      case 3:
        this.alert('¿Qué hago si he olvidado mi contraseña?', 'Puedes generar una nueva contraseña a través de la propia App o desde la web del Aula Virtual pulsando en el enlace "¿Olvidaste tu contraseña?".');
        break;

      case 4:
        this.alert('¿Puedo descargar documentos?', 'Desde la App podrás ver todos los documentos actualizados en tiempo real pero no podrás descargarlos. Si deseas descargarlos deberás hacerlo desde la web del Aula Virtual, siempre y cuando el centro permita la descarga de los mismos.');
        break;

      case 5:
        this.alert('¿Cómo veo los vídeos en pantalla completa?', 'Sólo tienes que girar tu dispositivo en horizontal para poder verlos en pantalla completa.');
        break;

      case 6:
        this.alert('¿Por qué los vídeos no se escuchan?', 'Revisa que tu dispositivo no tenga el silencio activo o cualquier otro modo que elimine los sonidos en la reproducción de vídeos.');
        break;

      case 7:
        this.alert('¿Cómo actualizo la app?', 'Encontrarás la última versión de la app en la tienda de aplicaciones.');
        break;
    }
  }

  alert(cabecera, mensaje) {
    var _this = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertCtrl.create({
        header: cabecera,
        message: mensaje,
        buttons: ['Entendido']
      });
      yield alert.present();
    })();
  }

}

FaqPage.ɵfac = function FaqPage_Factory(t) {
  return new (t || FaqPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController));
};

FaqPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: FaqPage,
  selectors: [["app-faq"]],
  decls: 39,
  vars: 0,
  consts: [["color", "primary", 1, "ion-text-center"], ["slot", "start"], ["text", "Volver"], ["fill", "clear", 3, "click"]],
  template: function FaqPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "FAQs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-back-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content")(7, "ion-list")(8, "ion-list-header")(9, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Preguntas Frecuentes");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-item")(12, "ion-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FaqPage_Template_ion_button_click_12_listener() {
        return ctx.respuesta(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u00BFC\u00F3mo entro en la app?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-item")(16, "ion-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FaqPage_Template_ion_button_click_16_listener() {
        return ctx.respuesta(2);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u00BFC\u00F3mo consigo una cuenta?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-item")(20, "ion-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FaqPage_Template_ion_button_click_20_listener() {
        return ctx.respuesta(3);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\u00BFC\u00F3mo recupero mi contrase\u00F1a?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-item")(24, "ion-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FaqPage_Template_ion_button_click_24_listener() {
        return ctx.respuesta(4);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\u00BFPuedo descargar documentos?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-item")(28, "ion-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FaqPage_Template_ion_button_click_28_listener() {
        return ctx.respuesta(5);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\u00BFC\u00F3mo veo los v\u00EDdeos en pantalla completa?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-item")(32, "ion-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FaqPage_Template_ion_button_click_32_listener() {
        return ctx.respuesta(6);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\u00BFPor qu\u00E9 los v\u00EDdeos no se escuchan?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ion-item")(36, "ion-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FaqPage_Template_ion_button_click_36_listener() {
        return ctx.respuesta(7);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\u00BFC\u00F3mo actualizo la app?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonBackButtonDelegate],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXEucGFnZS5zY3NzIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_faq_faq_module_ts.js.map