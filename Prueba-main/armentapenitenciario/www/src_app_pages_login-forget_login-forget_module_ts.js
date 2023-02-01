"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login-forget_login-forget_module_ts"],{

/***/ 7547:
/*!*******************************************************************!*\
  !*** ./src/app/pages/login-forget/login-forget-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginForgetPageRoutingModule": () => (/* binding */ LoginForgetPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_forget_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-forget.page */ 1388);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _login_forget_page__WEBPACK_IMPORTED_MODULE_0__.LoginForgetPage
    }
];
class LoginForgetPageRoutingModule {
}
LoginForgetPageRoutingModule.ɵfac = function LoginForgetPageRoutingModule_Factory(t) { return new (t || LoginForgetPageRoutingModule)(); };
LoginForgetPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LoginForgetPageRoutingModule });
LoginForgetPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginForgetPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 2679:
/*!***********************************************************!*\
  !*** ./src/app/pages/login-forget/login-forget.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginForgetPageModule": () => (/* binding */ LoginForgetPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_forget_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-forget-routing.module */ 7547);
/* harmony import */ var _login_forget_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-forget.page */ 1388);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class LoginForgetPageModule {
}
LoginForgetPageModule.ɵfac = function LoginForgetPageModule_Factory(t) { return new (t || LoginForgetPageModule)(); };
LoginForgetPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LoginForgetPageModule });
LoginForgetPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _login_forget_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginForgetPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginForgetPageModule, { declarations: [_login_forget_page__WEBPACK_IMPORTED_MODULE_1__.LoginForgetPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _login_forget_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginForgetPageRoutingModule] }); })();


/***/ }),

/***/ 1388:
/*!*********************************************************!*\
  !*** ./src/app/pages/login-forget/login-forget.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginForgetPage": () => (/* binding */ LoginForgetPage)
/* harmony export */ });
/* harmony import */ var _Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _providers_aulavirtualrest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/aulavirtualrest */ 4313);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);






class LoginForgetPage {
  constructor(router, proveedor, alertCtrl, loadingCtrl) {
    this.router = router;
    this.proveedor = proveedor;
    this.alertCtrl = alertCtrl;
    this.loadingCtrl = loadingCtrl;
  }

  ngOnInit() {}

  recuperar() {
    var _this = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingCtrl.create({
        message: "Recuperando...",
        duration: 500
      });
      yield loading.present(); // Se genera una nueva contraseña y se le envía por email al alumno

      _this.proveedor.resetearContraseña(_this.username).subscribe( //(data)=>{console.log(data);},
      data => {
        _this.nuevaContraseñaGenerada(data);
      }, error => {
        console.log(error);
      }, () => {
        loading.dismiss();
      });
    })();
  }

  nuevaContraseñaGenerada(data) {
    // Se valida si ha habido algún error en la recuperacion
    if (data.Error == -1) {
      // Si ha habido algún error se informa al usuario
      this.alert('Ooops!', data.Mensaje);
    } // Si todo ha ido bien
    else {
      // Se informa al usuario de que todo ha ido bien
      this.alert('Hecho!', data.Mensaje); // Se envía al usuario a la página de inicio

      this.router.navigate(['/login']);
    }
  }

  alert(cabecera, mensaje) {
    var _this2 = this;

    return (0,_Users_weareants_Desktop_armentapenitenciario_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertCtrl.create({
        header: cabecera,
        message: mensaje,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

}

LoginForgetPage.ɵfac = function LoginForgetPage_Factory(t) {
  return new (t || LoginForgetPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_providers_aulavirtualrest__WEBPACK_IMPORTED_MODULE_1__.AulavirtualrestProvider), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController));
};

LoginForgetPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LoginForgetPage,
  selectors: [["app-login-forget"]],
  decls: 19,
  vars: 2,
  consts: [["color", "primary", 1, "ion-text-center"], ["slot", "start"], ["text", "Volver"], [1, "ion-padding", "ion-text-center"], [2, "color", "white"], ["name", "lock-closed", 1, "icon-forgot"], ["name", "username", "type", "text", "placeholder", "Introcuce el email de tu cuenta", "required", "", 3, "ngModel", "ngModelChange"], [1, "ion-padding"], ["expand", "block", 3, "disabled", "click"]],
  template: function LoginForgetPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Recuperar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content", 3)(7, "form")(8, "header")(9, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "RECUPERAR CONTRASE\u00D1A");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "ion-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-list")(14, "ion-item")(15, "ion-input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginForgetPage_Template_ion_input_ngModelChange_15_listener($event) {
        return ctx.username = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 7)(17, "ion-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginForgetPage_Template_ion_button_click_17_listener() {
        return ctx.recuperar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Recuperar Contrase\u00F1a");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.username);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.username);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButtonDelegate],
  styles: ["header[_ngcontent-%COMP%] {\n  margin-top: 7em;\n  margin-bottom: 3em;\n}\n\nsection[_ngcontent-%COMP%] {\n  margin-top: 2em;\n  margin-bottom: 3em;\n}\n\n.toolbar-background[_ngcontent-%COMP%] {\n  background-color: transparent;\n  content: none;\n}\n\n.button-ayuda[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\n.button-social[_ngcontent-%COMP%] {\n  border-radius: 0%;\n}\n\n.button-ios.activated[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: url('background.png') 0 0/100% 100% no-repeat;\n}\n\nion-list[_ngcontent-%COMP%] {\n  --ion-background-color: transparent !important;\n}\n\nion-input[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.icon-forgot[_ngcontent-%COMP%] {\n  font-size: 6em;\n  color: var(--ion-color-secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWZvcmdldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksNkJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSwyREFBQTtBQUNKOztBQUVBO0VBQ0ksOENBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFJQTtFQUNJLGNBQUE7RUFDQSxpQ0FBQTtBQURKIiwiZmlsZSI6ImxvZ2luLWZvcmdldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xuICAgIG1hcmdpbi10b3A6IDdlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAzZW07XG4gIH1cblxuc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDNlbTtcbiAgfVxuXG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb250ZW50OiBub25lO1xuICAgIH1cblxuLmJ1dHRvbi1heXVkYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5idXR0b24tc29jaWFsIHtcbiAgICBib3JkZXItcmFkaXVzOjAlO1xufVxuXG4uYnV0dG9uLWlvcy5hY3RpdmF0ZWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYmFja2dyb3VuZC5wbmcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn1cblxuaW9uLWxpc3Qge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dHtcbiAgICBjb2xvcjp3aGl0ZTsgICAgXG4gICAgLy8gLS1wbGFjZWhvbGRlci1jb2xvcjogd2hpdGU7XG4gICAgLy8gLS1wbGFjZWhvbGRlci1vcGFjaXR5OiA1O1xufVxuXG4uaWNvbi1mb3Jnb3QgeyBcbiAgICBmb250LXNpemU6IDZlbTsgXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIC8vbWFyZ2luLWJvdHRvbTogLTEwcHg7ICAgIFxufSJdfQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login-forget_login-forget_module_ts.js.map