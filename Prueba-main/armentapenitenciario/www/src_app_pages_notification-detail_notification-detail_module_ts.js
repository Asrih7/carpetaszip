"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_notification-detail_notification-detail_module_ts"],{

/***/ 7016:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/notification-detail/notification-detail-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationDetailPageRoutingModule": () => (/* binding */ NotificationDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _notification_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-detail.page */ 4478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _notification_detail_page__WEBPACK_IMPORTED_MODULE_0__.NotificationDetailPage
    }
];
class NotificationDetailPageRoutingModule {
}
NotificationDetailPageRoutingModule.ɵfac = function NotificationDetailPageRoutingModule_Factory(t) { return new (t || NotificationDetailPageRoutingModule)(); };
NotificationDetailPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NotificationDetailPageRoutingModule });
NotificationDetailPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NotificationDetailPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 4996:
/*!*************************************************************************!*\
  !*** ./src/app/pages/notification-detail/notification-detail.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationDetailPageModule": () => (/* binding */ NotificationDetailPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 5503);
/* harmony import */ var _notification_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification-detail-routing.module */ 7016);
/* harmony import */ var _notification_detail_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification-detail.page */ 4478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);







class NotificationDetailPageModule {
}
NotificationDetailPageModule.ɵfac = function NotificationDetailPageModule_Factory(t) { return new (t || NotificationDetailPageModule)(); };
NotificationDetailPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NotificationDetailPageModule });
NotificationDetailPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
        _notification_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__.NotificationDetailPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NotificationDetailPageModule, { declarations: [_notification_detail_page__WEBPACK_IMPORTED_MODULE_2__.NotificationDetailPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
        _notification_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__.NotificationDetailPageRoutingModule] }); })();


/***/ }),

/***/ 4478:
/*!***********************************************************************!*\
  !*** ./src/app/pages/notification-detail/notification-detail.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationDetailPage": () => (/* binding */ NotificationDetailPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_navparam_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/navparam.service */ 7495);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pipes_safe_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/safe-html */ 6124);






class NotificationDetailPage {
    constructor(router, navParamService) {
        this.router = router;
        this.navParamService = navParamService;
        this.usuario = [];
        this.notificacion = this.navParamService.getNavData();
    }
    ngOnInit() {
        // this.activatedRoute.queryParams.subscribe(params => {
        //   this.notificacion = params['notificacion'];
        // });
        // this.activatedRoute.paramMap.subscribe(
        //   (data) => {
        //     console.log(data);
        //   }
        // )
        //this.notificacion = this.activatedRoute.snapshot.paramMap.get('notificacion');
        //this.notificacion = this.navParamService.getNavData();
        // if (this.notificacion === null)
        // {
        //   console.log('sin datos');
        //   this.router.navigate(['/home']);
        // }
    }
}
NotificationDetailPage.ɵfac = function NotificationDetailPage_Factory(t) { return new (t || NotificationDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_navparam_service__WEBPACK_IMPORTED_MODULE_0__.NavparamService)); };
NotificationDetailPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NotificationDetailPage, selectors: [["app-notification-detail"]], decls: 17, vars: 6, consts: [["color", "primary", 1, "ion-text-center"], ["slot", "start"], ["text", "Volver"], [1, "ion-text-wrap"], [1, "notificacion", 3, "innerHTML"]], template: function NotificationDetailPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content")(7, "ion-card")(8, "ion-card-header")(9, "ion-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-card-content", 3)(12, "h2")(13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "safeHtml");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.notificacion.FechaEnvio);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.notificacion.FechaEnvio, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.notificacion.Asunto);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 4, ctx.notificacion.Mensaje), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    } }, dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButtonDelegate, _pipes_safe_html__WEBPACK_IMPORTED_MODULE_1__.SafeHtmlPipe], styles: ["section[_ngcontent-%COMP%] {\n  margin-top: 2em;\n  margin-bottom: 3em;\n}\n\n.notificacion[_ngcontent-%COMP%] {\n  white-space: normal !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSw4QkFBQTtBQUNKIiwiZmlsZSI6Im5vdGlmaWNhdGlvbi1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDNlbTtcbiAgfVxuXG4ubm90aWZpY2FjaW9ue1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDsgXG4gICAgLy90ZXh0LWFsaWduOiBqdXN0aWZ5O1xufSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_notification-detail_notification-detail_module_ts.js.map