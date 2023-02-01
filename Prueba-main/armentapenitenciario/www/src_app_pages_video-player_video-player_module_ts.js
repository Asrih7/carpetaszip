"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_video-player_video-player_module_ts"],{

/***/ 5079:
/*!*******************************************************************!*\
  !*** ./src/app/pages/video-player/video-player-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoPlayerPageRoutingModule": () => (/* binding */ VideoPlayerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _video_player_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-player.page */ 8682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _video_player_page__WEBPACK_IMPORTED_MODULE_0__.VideoPlayerPage
    }
];
class VideoPlayerPageRoutingModule {
}
VideoPlayerPageRoutingModule.ɵfac = function VideoPlayerPageRoutingModule_Factory(t) { return new (t || VideoPlayerPageRoutingModule)(); };
VideoPlayerPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: VideoPlayerPageRoutingModule });
VideoPlayerPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VideoPlayerPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 9483:
/*!***********************************************************!*\
  !*** ./src/app/pages/video-player/video-player.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoPlayerPageModule": () => (/* binding */ VideoPlayerPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pipes_video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/video */ 6321);
/* harmony import */ var _video_player_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video-player-routing.module */ 5079);
/* harmony import */ var _video_player_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video-player.page */ 8682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);



//import { PipesModule } from 'src/app/pipes/pipes.module';




class VideoPlayerPageModule {
}
VideoPlayerPageModule.ɵfac = function VideoPlayerPageModule_Factory(t) { return new (t || VideoPlayerPageModule)(); };
VideoPlayerPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: VideoPlayerPageModule });
VideoPlayerPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        //PipesModule,
        _video_player_routing_module__WEBPACK_IMPORTED_MODULE_1__.VideoPlayerPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](VideoPlayerPageModule, { declarations: [_video_player_page__WEBPACK_IMPORTED_MODULE_2__.VideoPlayerPage, _pipes_video__WEBPACK_IMPORTED_MODULE_0__.VideoPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        //PipesModule,
        _video_player_routing_module__WEBPACK_IMPORTED_MODULE_1__.VideoPlayerPageRoutingModule] }); })();


/***/ }),

/***/ 8682:
/*!*********************************************************!*\
  !*** ./src/app/pages/video-player/video-player.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoPlayerPage": () => (/* binding */ VideoPlayerPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_navparam_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/navparam.service */ 7495);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _awesome_cordova_plugins_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @awesome-cordova-plugins/streaming-media/ngx */ 448);
/* harmony import */ var _pipes_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/video */ 6321);






class VideoPlayerPage {
    //navParams: any;
    constructor(router, navParamService, alertCtrl, loadingCtrl, streamingMedia) {
        // this.navParams = this.navParamService.getNavData();
        // this.titulo = this.navParams['titulo'];
        // this.url = this.navParams['url'];
        this.router = router;
        this.navParamService = navParamService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.streamingMedia = streamingMedia;
        //this.url = this.navParamService.getNavData();
        this.navParams = JSON.parse(this.navParamService.getNavData());
        this.titulo = this.navParams['titulo'];
        this.id = this.navParams['id'];
        //this.url = this.navParams['url'];
        this.getUrl();
        //this.playMedia();
        //this.item = this.navParamService.getNavData();
        //this.obtenerUrl();
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        //this.playMedia();
    }
    playMedia() {
        let options = {
            successCallback: () => { console.log('Video played'); },
            errorCallback: (e) => { console.log('Error streaming'); },
            //orientation: 'landscape',
            shouldAutoClose: true,
            controls: false
        };
        this.streamingMedia.playVideo(this.url, options);
    }
    getUrl() {
        //this.url = "http://demo.aulavirtualctp.com/Academias/Cursos/ReproductorVideoMobile.aspx?idVideo="+ this.item.URL;
        this.url = "https://demo.aulavirtualctp.com/Academias/Cursos/ReproductorVideoMobile.aspx?idVideo=" + this.id;
    }
}
VideoPlayerPage.ɵfac = function VideoPlayerPage_Factory(t) { return new (t || VideoPlayerPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_navparam_service__WEBPACK_IMPORTED_MODULE_0__.NavparamService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_awesome_cordova_plugins_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_1__.StreamingMedia)); };
VideoPlayerPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: VideoPlayerPage, selectors: [["app-video-player"]], decls: 10, vars: 4, consts: [["color", "primary", 1, "ion-text-center"], ["slot", "start"], ["text", "Volver"], [2, "width", "100%", "height", "100%"], [2, "width", "100%", "height", "100%", 3, "src"]], template: function VideoPlayerPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-content")(7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "iframe", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "video");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 2, ctx.url), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeResourceUrl"]);
    } }, dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButtonDelegate, _pipes_video__WEBPACK_IMPORTED_MODULE_2__.VideoPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWRlby1wbGF5ZXIucGFnZS5zY3NzIn0= */"] });


/***/ }),

/***/ 6321:
/*!********************************!*\
  !*** ./src/app/pipes/video.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoPipe": () => (/* binding */ VideoPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);


/**
 * Generated class for the VideoPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
class VideoPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
VideoPipe.ɵfac = function VideoPipe_Factory(t) { return new (t || VideoPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16)); };
VideoPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "video", type: VideoPipe, pure: true });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_video-player_video-player_module_ts.js.map