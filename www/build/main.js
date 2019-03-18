webpackJsonp([3],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/feed/feed.module": [
		150,
		5
	],
	"../pages/himym/himym.module": [
		270
	],
	"../pages/pll/pll.module": [
		271
	],
	"../pages/supernatural/supernatural.module": [
		272
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 149;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__supernatural_supernatural__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pll_pll__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__himym_himym__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.supernaturalClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__supernatural_supernatural__["a" /* SupernaturalPage */]);
    };
    HomePage.prototype.pllClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pll_pll__["a" /* PllPage */]);
    };
    HomePage.prototype.himymClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__himym_himym__["a" /* HimymPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/renan/Vídeos/aula1/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="../../assets/imgs/spn/spn.png">\n        </ion-avatar>\n        <h2>Supernatural</h2>\n      </ion-item>\n    \n      <img src="../../assets/imgs/spn/supernatural.jpg">\n    \n      <ion-card-content>\n        <p>Os irmãos Sam e Dean Winchester encaram cenários sinistros caçando monstros. Velhos truques, armas e esconderijos não funcionam mais e seus amigos os traem, forçando os irmãos a contar um com o outro enquanto enfrentam novos inimigos.</p>\n      </ion-card-content>\n    \n      <ion-row>\n        <ion-col>\n          <button ion-button icon-start (click)="supernaturalClick()" clear small>\n            <div>Ver todas as temporadas</div>\n          </button>\n        </ion-col>\n      </ion-row>\n    \n    </ion-card>\n\n         \n    <ion-card>\n      \n        <ion-item>\n          <ion-avatar item-start>\n            <img src="../../assets/imgs/pll/pll-logo.jpg">\n          </ion-avatar>\n          <h2>Pretty Little Liars</h2>\n        </ion-item>\n      \n        <img src="../../assets/imgs/pll/pll.jpg">\n      \n        <ion-card-content>\n          <p>Já se passaram três anos desde o desaparecimento de Alison. Spencer, Aria, Hanna e Emily, agora no ensino médio, têm um novo desafio: desvendar mensagens anônimas ameaçando contar seus segredos.</p>\n        </ion-card-content>\n      \n        <ion-row>\n          <ion-col>\n            <button ion-button color="primary" (click)="pllClick()"  clear small icon-start>\n              <div>Ver todas as temporadas</div>\n            </button>\n          </ion-col>\n        </ion-row>\n      \n      </ion-card>\n      \n      \n      <ion-card>\n      \n        <ion-item>\n          <ion-avatar item-start>\n            <img src="../../assets/imgs/himym/himym-logo.png">\n          </ion-avatar>\n          <h2>How I Met Your Mother</h2>\n        </ion-item>\n      \n        <img src="../../assets/imgs/himym/himym.jpeg">\n      \n        <ion-card-content>\n          <p>No ano de 2030, Ted Mosby, um arquiteto, decide explicar a seus filhos a história de como ele conheceu a mãe deles. Tudo começou em 2005, quando um de seus amigos decidiu se casar e Ted precisou correr atrás de um amor.</p>\n        </ion-card-content>\n      \n        <ion-row>\n          <ion-col>\n            <button ion-button color="primary" (click)="himymClick()" clear small icon-start>\n              <div>Ver todas as temporadas</div>\n             </button>\n          </ion-col>\n        </ion-row>\n      \n      </ion-card>\n\n</ion-content>'/*ion-inline-end:"/home/renan/Vídeos/aula1/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object])
    ], HomePage);
    return HomePage;
    var _a;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_supernatural_supernatural_module__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_himym_himym_module__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_pll_pll_module__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/feed/feed.module#FeedPageModule', name: 'FeedPage', segment: 'feed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/himym/himym.module#HimymPageModule', name: 'HimymPage', segment: 'himym', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pll/pll.module#PllPageModule', name: 'PllPage', segment: 'pll', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/supernatural/supernatural.module#SupernaturalPageModule', name: 'SupernaturalPage', segment: 'supernatural', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__pages_supernatural_supernatural_module__["SupernaturalPageModule"],
                __WEBPACK_IMPORTED_MODULE_8__pages_himym_himym_module__["HimymPageModule"],
                __WEBPACK_IMPORTED_MODULE_9__pages_pll_pll_module__["PllPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/renan/Vídeos/aula1/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/renan/Vídeos/aula1/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HimymPageModule", function() { return HimymPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__himym__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HimymPageModule = /** @class */ (function () {
    function HimymPageModule() {
    }
    HimymPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__himym__["a" /* HimymPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__himym__["a" /* HimymPage */]),
            ],
        })
    ], HimymPageModule);
    return HimymPageModule;
}());

//# sourceMappingURL=himym.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PllPageModule", function() { return PllPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pll__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PllPageModule = /** @class */ (function () {
    function PllPageModule() {
    }
    PllPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pll__["a" /* PllPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pll__["a" /* PllPage */]),
            ],
        })
    ], PllPageModule);
    return PllPageModule;
}());

//# sourceMappingURL=pll.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupernaturalPageModule", function() { return SupernaturalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__supernatural__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SupernaturalPageModule = /** @class */ (function () {
    function SupernaturalPageModule() {
    }
    SupernaturalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__supernatural__["a" /* SupernaturalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__supernatural__["a" /* SupernaturalPage */]),
            ],
        })
    ], SupernaturalPageModule);
    return SupernaturalPageModule;
}());

//# sourceMappingURL=supernatural.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HimymPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
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
 * Generated class for the HimymPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HimymPage = /** @class */ (function () {
    function HimymPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HimymPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HimymPage');
    };
    HimymPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-himym',template:/*ion-inline-start:"/home/renan/Vídeos/aula1/src/pages/himym/himym.html"*/'<!--\n  Generated template for the HimymPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>himym</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/renan/Vídeos/aula1/src/pages/himym/himym.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], HimymPage);
    return HimymPage;
}());

//# sourceMappingURL=himym.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PllPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
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
 * Generated class for the PllPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PllPage = /** @class */ (function () {
    function PllPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PllPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PllPage');
    };
    PllPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pll',template:/*ion-inline-start:"/home/renan/Vídeos/aula1/src/pages/pll/pll.html"*/'<!--\n  Generated template for the PllPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>pll</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/renan/Vídeos/aula1/src/pages/pll/pll.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PllPage);
    return PllPage;
}());

//# sourceMappingURL=pll.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupernaturalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
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
 * Generated class for the SupernaturalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SupernaturalPage = /** @class */ (function () {
    function SupernaturalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SupernaturalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SupernaturalPage');
    };
    SupernaturalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-supernatural',template:/*ion-inline-start:"/home/renan/Vídeos/aula1/src/pages/supernatural/supernatural.html"*/'<!--\n  Generated template for the SupernaturalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>supernatural</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/spn/spn.png">\n      </ion-avatar>\n      <h2>Supernatural</h2>\n      <p>14ª Temporada</p>\n    </ion-item>\n        \n    <img src="../../assets/imgs/spn/spn-14.jpg">\n        \n    <ion-card-content>\n      <p>Ainda tentando se acostumar a viver sem seus poderes, Jack (Alexander Calvert) visita os avós com a intenção de estabelecer alguma conexão familiar. Em uma tentaiva de encontrar Dean (Jensen Ackles), Castiel (Misha Collins) acaba conhecendo Kip (Dean Armstrong), um demônio que deseja fazer um acordo com Sam (Jared Padalecki) para se tornar o novo Rei do Inferno.</p>\n    </ion-card-content>\n        \n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>12 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>4 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          11h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>        \n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/spn/spn.png">\n      </ion-avatar>\n      <h2>Supernatural</h2>\n      <p>13ª Temporada</p>\n    </ion-item>\n        \n    <img src="../../assets/imgs/spn/spn-13.jpg">\n        \n    <ion-card-content>\n      <p>Dean (Jensen Ackles) e Sam (Jared Padalecki) sofrem com a perda de tantos aliados. Lúcifer (Mark Pellegrino) mantém Mary (Samantha Smith) viva, como refém, para poder trocá-la por seu filho. Dean fica esperançoso quando Jack (Alexander Calvert) involuntariamente traz Castiel (Misha Collins) de volta à vida.</p>\n    </ion-card-content>\n        \n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>120 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>40 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n        12h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>        \n  </ion-card>\n\n  <ion-card>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="../../assets/imgs/spn/spn.png">\n        </ion-avatar>\n        <h2>Supernatural</h2>\n        <p>12ª Temporada</p>\n      </ion-item>\n          \n      <img src="../../assets/imgs/spn/spn-12.jpg">\n          \n      <ion-card-content>\n        <p>Dean (Jensen Ackles) reencontra uma velha amiga após 30 anos sem se verem. Sam (Jared Padalecki) é capturado por Lady Bevell (Elizabeth Blackmore) e torturado como punição por seus pecados passados. Dean, Mary (Samantha Smith) e Castiel (Misha Collins), então, bolam um plano para resgatar o irmão Winchester sequestrado.</p>\n      </ion-card-content>\n          \n      <ion-row>\n        <ion-col>\n          <button ion-button icon-start clear small>\n            <ion-icon name="thumbs-up"></ion-icon>\n            <div>200 Likes</div>\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-start clear small>\n            <ion-icon name="text"></ion-icon>\n            <div>400 Comments</div>\n          </button>\n        </ion-col>\n        <ion-col align-self-center text-center>\n          <ion-note>\n            15h ago\n          </ion-note>\n        </ion-col>\n      </ion-row>        \n    </ion-card>\n  <ion-card>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="../../assets/imgs/spn/spn.png">\n        </ion-avatar>\n        <h2>Supernatural</h2>\n        <p>11ª Temporada</p>\n      </ion-item>\n          \n      <img src="../../assets/imgs/spn/spn-11.jpg">\n          \n      <ion-card-content>\n        <p>Enquanto Crowley (Mark Sheppard) cuida de Amara (Emily Swallow), alimentando-a com almas, Sam (Jared Padalecki), Dean (Jensen Ackles) e Castiel (Misha Collins) tentam encontrar uma maneira de matar a Escuridão, aprisionada no corpo da moça.</p>\n      </ion-card-content>\n          \n      <ion-row>\n        <ion-col>\n          <button ion-button icon-start clear small>\n            <ion-icon name="thumbs-up"></ion-icon>\n            <div>500 Likes</div>\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-start clear small>\n            <ion-icon name="text"></ion-icon>\n            <div>685 Comments</div>\n          </button>\n        </ion-col>\n        <ion-col align-self-center text-center>\n          <ion-note>\n            18h ago\n          </ion-note>\n        </ion-col>\n      </ion-row>        \n    </ion-card>\n    <ion-card>\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="../../assets/imgs/spn/spn.png">\n          </ion-avatar>\n          <h2>Supernatural</h2>\n          <p>10ª Temporada</p>\n        </ion-item>\n            \n        <img src="../../assets/imgs/spn/spn-10.jpg">\n            \n        <ion-card-content>\n          <p>Sam (Jared Padalecki) procura por Dean (Jensen Ackles), que, após ser ressuscitado pela marca de Caim, agora é um demônio trabalhando para Crowley (Mark Sheppard). Enquanto isso, Rowena (Ruth Connell), uma misteriosa bruxa, entra em cena.</p>\n        </ion-card-content>\n            \n        <ion-row>\n          <ion-col>\n            <button ion-button icon-start clear small>\n              <ion-icon name="thumbs-up"></ion-icon>\n              <div>967 Likes</div>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button icon-start clear small>\n              <ion-icon name="text"></ion-icon>\n              <div>1200 Comments</div>\n            </button>\n          </ion-col>\n          <ion-col align-self-center text-center>\n            <ion-note>\n              22h ago\n            </ion-note>\n          </ion-col>\n        </ion-row>        \n      </ion-card>\n    <ion-card>\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="../../assets/imgs/spn/spn.png">\n          </ion-avatar>\n          <h2>Supernatural</h2>\n          <p>9ª Temporada</p>\n        </ion-item>\n            \n        <img src="../../assets/imgs/spn/spn-9.jpg">\n            \n        <ion-card-content>\n          <p>Depois que anjos caíram na Terra, duas facções angelicais passam a brigar uma com a outra, enquanto outras vagam pelo mundo causando problemas ou caçando Castiel (Misha Collins). Sam (Jared Padalecki) e Dean (Jensen Ackles) mantêm Crowley (Mark Sheppard) como prisioneiro e tentam transformá-lo de volta em ser humano.</p>\n        </ion-card-content>\n            \n        <ion-row>\n          <ion-col>\n            <button ion-button icon-start clear small>\n              <ion-icon name="thumbs-up"></ion-icon>\n              <div>1500 Likes</div>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button icon-start clear small>\n              <ion-icon name="text"></ion-icon>\n              <div>2000 Comments</div>\n            </button>\n          </ion-col>\n          <ion-col align-self-center text-center>\n            <ion-note>\n              24h ago\n            </ion-note>\n          </ion-col>\n        </ion-row>        \n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/renan/Vídeos/aula1/src/pages/supernatural/supernatural.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SupernaturalPage);
    return SupernaturalPage;
}());

//# sourceMappingURL=supernatural.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map