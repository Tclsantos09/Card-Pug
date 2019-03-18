webpackJsonp([1],{

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
		274,
		0
	],
	"../pages/himym/himym.module": [
		150
	],
	"../pages/pll/pll.module": [
		152
	],
	"../pages/supernatural/supernatural.module": [
		154
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

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HimymPageModule", function() { return HimymPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__himym__ = __webpack_require__(151);
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

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HimymPage; });
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

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PllPageModule", function() { return PllPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pll__ = __webpack_require__(153);
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

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PllPage; });
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

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupernaturalPageModule", function() { return SupernaturalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__supernatural__ = __webpack_require__(155);
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

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupernaturalPage; });
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
            selector: 'page-supernatural',template:/*ion-inline-start:"/home/renan/Vídeos/aula1/src/pages/supernatural/supernatural.html"*/'<!--\n  Generated template for the SupernaturalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>supernatural</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/spn/spn.png">\n      </ion-avatar>\n      <h2>Supernatural</h2>\n      <p>14ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/spn/spn-14.jpg">\n\n    <ion-card-content>\n      <p>Ainda tentando se acostumar a viver sem seus poderes, Jack (Alexander Calvert) visita os avós com a intenção de\n        estabelecer alguma conexão familiar. Em uma tentaiva de encontrar Dean (Jensen Ackles), Castiel (Misha Collins)\n        acaba conhecendo Kip (Dean Armstrong), um demônio que deseja fazer um acordo com Sam (Jared Padalecki) para se\n        tornar o novo Rei do Inferno.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>12 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>4 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          11h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/spn/spn.png">\n      </ion-avatar>\n      <h2>Supernatural</h2>\n      <p>13ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/spn/spn-13.jpg">\n\n    <ion-card-content>\n      <p>Dean (Jensen Ackles) e Sam (Jared Padalecki) sofrem com a perda de tantos aliados. Lúcifer (Mark Pellegrino)\n        mantém Mary (Samantha Smith) viva, como refém, para poder trocá-la por seu filho. Dean fica esperançoso quando\n        Jack (Alexander Calvert) involuntariamente traz Castiel (Misha Collins) de volta à vida.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>120 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>40 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          12h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/spn/spn.png">\n      </ion-avatar>\n      <h2>Supernatural</h2>\n      <p>12ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/spn/spn-12.jpg">\n\n    <ion-card-content>\n      <p>Dean (Jensen Ackles) reencontra uma velha amiga após 30 anos sem se verem. Sam (Jared Padalecki) é capturado\n        por Lady Bevell (Elizabeth Blackmore) e torturado como punição por seus pecados passados. Dean, Mary (Samantha\n        Smith) e Castiel (Misha Collins), então, bolam um plano para resgatar o irmão Winchester sequestrado.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>200 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>400 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          15h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/spn/spn.png">\n      </ion-avatar>\n      <h2>Supernatural</h2>\n      <p>11ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/spn/spn-11.jpg">\n\n    <ion-card-content>\n      <p>Enquanto Crowley (Mark Sheppard) cuida de Amara (Emily Swallow), alimentando-a com almas, Sam (Jared\n        Padalecki), Dean (Jensen Ackles) e Castiel (Misha Collins) tentam encontrar uma maneira de matar a Escuridão,\n        aprisionada no corpo da moça.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>500 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>685 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          18h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/spn/spn.png">\n      </ion-avatar>\n      <h2>Supernatural</h2>\n      <p>10ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/spn/spn-10.jpg">\n\n    <ion-card-content>\n      <p>Sam (Jared Padalecki) procura por Dean (Jensen Ackles), que, após ser ressuscitado pela marca de Caim, agora é\n        um demônio trabalhando para Crowley (Mark Sheppard). Enquanto isso, Rowena (Ruth Connell), uma misteriosa bruxa,\n        entra em cena.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>967 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>1200 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          22h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/spn/spn.png">\n      </ion-avatar>\n      <h2>Supernatural</h2>\n      <p>9ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/spn/spn-9.jpg">\n\n    <ion-card-content>\n      <p>Depois que anjos caíram na Terra, duas facções angelicais passam a brigar uma com a outra, enquanto outras\n        vagam pelo mundo causando problemas ou caçando Castiel (Misha Collins). Sam (Jared Padalecki) e Dean (Jensen\n        Ackles) mantêm Crowley (Mark Sheppard) como prisioneiro e tentam transformá-lo de volta em ser humano.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>1500 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>2000 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          24h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/spn/spn.png">\n      </ion-avatar>\n      <h2>Supernatural</h2>\n      <p>8ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/spn/spn-8.jpg">\n\n    <ion-card-content>\n      <p>Dean (Jensen Ackles) retorna à Terra sem Castiel (Misha Collins), um ano depois de ser arrastado para o\n        Purgatório. Os irmãos Winchester começam uma luta contra Crowley (Mark Sheppard), com o objetivo de trancar as\n        Portas do Inferno e prender todos os demônios de uma vez por todas.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>785 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>3500 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          1d ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/spn/spn.png">\n      </ion-avatar>\n      <h2>Supernatural</h2>\n      <p>7ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/spn/spn-7.jpg">\n\n    <ion-card-content>\n      <p>Após absorver as almas do Purgatório, Castiel (Misha Collins) passa a punir todos os malfeitores do mundo. Sam\n        (Jared Padalecki) e Dean (Jensen Ackles) descobrem uma de suas maiores fraquezas e iniciam uma missão de caça\n        aos Leviatãs. Enquanto isso, o fantasma de um velho conhecido continua os assombrando.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>4350 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>3687 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          1d ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/spn/spn.png">\n      </ion-avatar>\n      <h2>Supernatural</h2>\n      <p>6ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/spn/spn-6.jpg">\n\n    <ion-card-content>\n      <p>Um ano depois, Dean (Jensen Ackles) vive feliz na companhia de Lisa (Cindy Sampson) e Ben (Nicholas Elia). Mas\n        quando reencontra Sam (Jared Padalecki), ele é obrigado a abandonar a nova vida e trabalhar com seu avô Samuel\n        (Mitch Pileggi), que se dedica à captura de monstros.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>5684 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>11502 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          2d ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/spn/spn.png">\n      </ion-avatar>\n      <h2>Supernatural</h2>\n      <p>5ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/spn/spn-5.jpg">\n\n    <ion-card-content>\n      <p>Enquanto Castiel (Misha Collins) procura por Deus para impedir o Apocalipse de Lúcifer, Sam (Jared Padalecki) e\n        Dean (Jensen Ackles) lutam contra anjos, demônios e seu destino, que é servirem de "hospedeiros" para o Diabo e\n        o Arcanjo Miguel, respectivamente.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>15204 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>20154 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          3d ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/spn/spn.png">\n      </ion-avatar>\n      <h2>Supernatural</h2>\n      <p>4ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/spn/spn-4.jpg">\n\n    <ion-card-content>\n      <p>Dean (Jensen Ackles) é resgatado do inferno por um anjo chamado Castiel (Misha Collins), com quem os Winchester\n        constroem uma parceria para impedir que Lilith rompa os 66 selos e, assim, permitindo que Lúcifer ande sobre a\n        terra livremente.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>18289 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>22154 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          4d ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/spn/spn.png">\n      </ion-avatar>\n      <h2>Supernatural</h2>\n      <p>3ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/spn/spn-3.jpg">\n\n    <ion-card-content>\n      <p>Na esperança de desfazerem o acordo de Dean (Jensen Ackles) sobre ser obrigado a ir para o inferno, os irmãos\n        Winchester pedem ajuda à Ruby (Genevieve Padalecki), um demônio do bem, e à Bela Talbot (Lauren Cohan), uma\n        vendedora de objetos ocultos.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>20204 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>25574 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          5d ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/spn/spn.png">\n      </ion-avatar>\n      <h2>Supernatural</h2>\n      <p>2ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/spn/spn-2.jpg">\n\n    <ion-card-content>\n      <p>Sam (Jared Padalecki) e Dean (Jensen Ackles) precisam lidar com uma perda recente. Enquanto isso, eles decidem\n        se vingar de Azazel (Fredric Lehne), e de toda as tragédias causadas por ele, e recebem a ajuda de Bobby (Jim\n        Beaver), Ellen (Samantha Ferris), Jo (Alona Tal) e Ash (Chad Lindberg).</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>30365 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>45541 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          6d ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/spn/spn.png">\n      </ion-avatar>\n      <h2>Supernatural</h2>\n      <p>1ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/spn/spn-1.jpg">\n\n    <ion-card-content>\n      <p>Após perderem a mãe em um incêndio suspeito há mais de vinte anos atrás, os irmãos Sam (Jared Padalecki) e Dean\n        (Jensen Ackles) Winchester descobrem que seu pai desapareceu durante uma "viagem de caça". Mas John Winchester\n        (Jeffrey Dean Morgan) não é um caçador comum: ele é especializado em capturar criaturas sobrenaturais e treinou\n        seus filhos para que fizessem o mesmo quando crescessem. Enquanto procuram pistas sobre o paradeiro de seu pai,\n        Sam e Dean salvam pessoas inocentes e enfrentam fantasmas, demônios e vampiros.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>60154 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>82014 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          7d ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  \n</ion-content>'/*ion-inline-end:"/home/renan/Vídeos/aula1/src/pages/supernatural/supernatural.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SupernaturalPage);
    return SupernaturalPage;
}());

//# sourceMappingURL=supernatural.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__supernatural_supernatural__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pll_pll__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__himym_himym__ = __webpack_require__(151);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_supernatural_supernatural_module__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_himym_himym_module__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_pll_pll_module__ = __webpack_require__(152);
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

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
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

/***/ })

},[200]);
//# sourceMappingURL=main.js.map