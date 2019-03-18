webpackJsonp([0],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function() { return FeedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FeedPageModule = /** @class */ (function () {
    function FeedPageModule() {
    }
    FeedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__feed__["a" /* FeedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__feed__["a" /* FeedPage */]),
            ],
        })
    ], FeedPageModule);
    return FeedPageModule;
}());

//# sourceMappingURL=feed.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeedPage = /** @class */ (function () {
    function FeedPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FeedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedPage');
    };
    FeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feed',template:/*ion-inline-start:"/home/renan/Vídeos/aula1/src/pages/feed/feed.html"*/'<!--\n  Generated template for the FeedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>feed</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="../../assets/imgs/marty-avatar.png">\n          </ion-avatar>\n          <h2>Marty McFly</h2>\n          <p>November 5, 1955</p>\n        </ion-item>\n      \n        <img src="../../assets/imgs/advance-card-bttf.png">\n      \n        <ion-card-content>\n          <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n        </ion-card-content>\n      \n        <ion-row>\n          <ion-col>\n            <button ion-button icon-start clear small>\n              <ion-icon name="thumbs-up"></ion-icon>\n              <div>12 Likes</div>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button icon-start clear small>\n              <ion-icon name="text"></ion-icon>\n              <div>4 Comments</div>\n            </button>\n          </ion-col>\n          <ion-col align-self-center text-center>\n            <ion-note>\n              11h ago\n            </ion-note>\n          </ion-col>\n        </ion-row>\n      \n      </ion-card>\n\n           \n      <ion-card>\n        \n          <ion-item>\n            <ion-avatar item-start>\n              <img src="../../assets/imgs/sarah-avatar.png.jpeg">\n            </ion-avatar>\n            <h2>Sarah Connor</h2>\n            <p>May 12, 1984</p>\n          </ion-item>\n        \n          <img src="../../assets/imgs/advance-card-tmntr.jpg">\n        \n          <ion-card-content>\n            <p>I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.</p>\n          </ion-card-content>\n        \n          <ion-row>\n            <ion-col>\n              <button ion-button color="primary" clear small icon-start>\n                <ion-icon name=\'thumbs-up\'></ion-icon>\n                30 Likes\n              </button>\n            </ion-col>\n            <ion-col>\n              <button ion-button color="primary" clear small icon-start>\n                <ion-icon name=\'text\'></ion-icon>\n                64 Comments\n              </button>\n            </ion-col>\n            <ion-col align-self-center text-center>\n              <ion-note>\n                30yr ago\n              </ion-note>\n            </ion-col>\n          </ion-row>\n        \n        </ion-card>\n        \n        \n        <ion-card>\n        \n          <ion-item>\n            <ion-avatar item-start>\n              <img src="../../assets/imgs/ian-avatar.png">\n            </ion-avatar>\n            <h2>Dr. Ian Malcolm</h2>\n            <p>June 28, 1990</p>\n          </ion-item>\n        \n          <img src="../../assets/imgs/advance-card-jp.jpg">\n        \n          <ion-card-content>\n            <p>Your scientists were so preoccupied with whether or not they could, that they didn\'t stop to think if they should.</p>\n          </ion-card-content>\n        \n          <ion-row>\n            <ion-col>\n              <button ion-button color="primary" clear small icon-start>\n                <ion-icon name=\'thumbs-up\'></ion-icon>\n                46 Likes\n              </button>\n            </ion-col>\n            <ion-col>\n              <button ion-button color="primary" clear small icon-start>\n                <ion-icon name=\'text\'></ion-icon>\n                66 Comments\n              </button>\n            </ion-col>\n            <ion-col align-self-center text-center>\n              <ion-note>\n                2d ago\n              </ion-note>\n            </ion-col>\n          </ion-row>\n        \n        </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/renan/Vídeos/aula1/src/pages/feed/feed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], FeedPage);
    return FeedPage;
}());

//# sourceMappingURL=feed.js.map

/***/ })

});
//# sourceMappingURL=0.js.map