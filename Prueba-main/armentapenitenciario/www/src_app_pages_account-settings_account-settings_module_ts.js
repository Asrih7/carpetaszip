"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_account-settings_account-settings_module_ts"],{

/***/ 4523:
/*!***************************************************************************!*\
  !*** ./src/app/pages/account-settings/account-settings-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountSettingsPageRoutingModule": () => (/* binding */ AccountSettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _account_settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-settings.page */ 5639);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _account_settings_page__WEBPACK_IMPORTED_MODULE_0__.AccountSettingsPage
    }
];
class AccountSettingsPageRoutingModule {
}
AccountSettingsPageRoutingModule.ɵfac = function AccountSettingsPageRoutingModule_Factory(t) { return new (t || AccountSettingsPageRoutingModule)(); };
AccountSettingsPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AccountSettingsPageRoutingModule });
AccountSettingsPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AccountSettingsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 589:
/*!*******************************************************************!*\
  !*** ./src/app/pages/account-settings/account-settings.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountSettingsPageModule": () => (/* binding */ AccountSettingsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _account_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-settings-routing.module */ 4523);
/* harmony import */ var _account_settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-settings.page */ 5639);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class AccountSettingsPageModule {
}
AccountSettingsPageModule.ɵfac = function AccountSettingsPageModule_Factory(t) { return new (t || AccountSettingsPageModule)(); };
AccountSettingsPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AccountSettingsPageModule });
AccountSettingsPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _account_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountSettingsPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AccountSettingsPageModule, { declarations: [_account_settings_page__WEBPACK_IMPORTED_MODULE_1__.AccountSettingsPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _account_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountSettingsPageRoutingModule] }); })();


/***/ }),

/***/ 5639:
/*!*****************************************************************!*\
  !*** ./src/app/pages/account-settings/account-settings.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountSettingsPage": () => (/* binding */ AccountSettingsPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/theme.service */ 8140);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);




class AccountSettingsPage {
    constructor(themeService, storage) {
        this.themeService = themeService;
        this.storage = storage;
        this.darkMode = false;
        this.isPostBack = false;
    }
    ngOnInit() {
        this.storage.get('selected-app-theme').then(theme => {
            this.darkMode = theme;
        });
    }
    ionViewDidEnter() {
        this.isPostBack = true;
    }
    toggleDarkMode() {
        if (this.isPostBack)
            this.themeService.toggleAppTheme();
    }
    notifications() {
    }
}
AccountSettingsPage.ɵfac = function AccountSettingsPage_Factory(t) { return new (t || AccountSettingsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__.Storage)); };
AccountSettingsPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AccountSettingsPage, selectors: [["app-account-settings"]], decls: 13, vars: 1, consts: [["color", "primary", 1, "ion-text-center"], ["slot", "start"], ["text", "Volver"], ["lines", "full"], ["slot", "start", "name", "moon"], ["slot", "end", 3, "checked", "ionChange"]], template: function AccountSettingsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Configuraci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content")(7, "ion-list")(8, "ion-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ion-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Modo Noche ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-toggle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function AccountSettingsPage_Template_ion_toggle_ionChange_12_listener() { return ctx.toggleDarkMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.darkMode === true);
    } }, dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonBackButtonDelegate], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LXNldHRpbmdzLnBhZ2Uuc2NzcyJ9 */"] });


/***/ }),

/***/ 8140:
/*!*******************************************!*\
  !*** ./src/app/services/theme.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage-angular */ 190);



const THEME_KEY = "selected-app-theme";
class ThemeService {
    constructor(plt, storage) {
        this.plt = plt;
        this.storage = storage;
        this.darkMode = false;
        this.plt.ready().then(() => {
            this.storage.get(THEME_KEY).then(theme => {
                this.setAppTheme(theme);
            });
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
            // deprecated
            // prefersDark.addListener(e => {
            //   this.setAppTheme(e.matches);
            // });
            prefersDark.addEventListener('change', e => {
                this.setAppTheme(e.matches);
            });
        });
    }
    toggleAppTheme() {
        this.darkMode = !this.darkMode;
        this.setAppTheme(this.darkMode);
    }
    setAppTheme(dark) {
        this.darkMode = dark;
        if (this.darkMode) {
            document.body.classList.add('dark');
        }
        else {
            document.body.classList.remove('dark');
        }
        this.storage.set(THEME_KEY, this.darkMode);
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__.Storage)); };
ThemeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_account-settings_account-settings_module_ts.js.map