webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n <router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__confirmation_confirmation_component__ = __webpack_require__("../../../../../src/app/confirmation/confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */] },
    { path: 'confirm', component: __WEBPACK_IMPORTED_MODULE_6__confirmation_confirmation_component__["a" /* ConfirmationComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__confirmation_confirmation_component__["a" /* ConfirmationComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["AccordionModule"]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/confirmation/confirmation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1{\r\n    text-align: center;\r\n    color: green;\r\n    \r\n}\r\n\r\np{\r\n    text-align: center;\r\n}\r\n\r\n.container1{\r\n    width: auto;\r\n    height: 300px;\r\n    \r\n\r\n    position: absolute;\r\n    top:0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n\r\n    margin: 100px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/confirmation/confirmation.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"jumbotron\">\r\n  <h1 >Jumbotron</h1>\r\n  <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\r\n  <p><a class=\"btn btn-primary btn-lg\">Learn more</a></p>\r\n</div>-->\r\n\r\n<div class=\"container1\">\r\n<div class=\"jumbotron\">\r\n  <h1>Registered!</h1>\r\n  <p>We are looking forward to seeing you at UMSL|HACK1.5. Please check your email for updates and send us your resume to <b><a href=\"mailto:umslhack@gmail.com\">umslhack@gmail.com</a></b> so we could share it with our sponsors for possiable hire!</p>\r\n  <p><a class=\"btn btn-primary btn-lg\">Hackers Guide</a></p>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/confirmation/confirmation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmationComponent = (function () {
    function ConfirmationComponent() {
    }
    ConfirmationComponent.prototype.ngOnInit = function () {
    };
    return ConfirmationComponent;
}());
ConfirmationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-confirmation',
        template: __webpack_require__("../../../../../src/app/confirmation/confirmation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/confirmation/confirmation.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ConfirmationComponent);

//# sourceMappingURL=confirmation.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " You can add global styles to this file, and also import other style files \r\n body {\r\n      font: 400 15px Lato, sans-serif;\r\n      line-height: 1.8;\r\n      color: #818181;\r\n  }\r\n\r\n  h2 {\r\n      font-size: 24px;\r\n      text-transform: uppercase;\r\n      color: #303030;\r\n      font-weight: 600;\r\n      margin-bottom: 30px;\r\n  }\r\n  h4 {\r\n      font-size: 19px;\r\n      line-height: 1.375em;\r\n      color: #303030;\r\n      font-weight: 400;\r\n      margin-bottom: 30px;\r\n  }  \r\n  \r\n\r\n\r\n  .jumbotron {\r\n \r\n      background: url(" + __webpack_require__("../../../../../src/assets/img/umsl-campus.jpg") + ") center;\r\n      background-size: cover;\r\n      position: relative; \r\n   \t  width: 100%;\r\n\t  height: 100vh;\r\n  }\r\n  .content {\r\n\tpadding-left: 25px;\r\n\tpadding-right: 25px;\r\n\tpadding-bottom: 15px;\r\n\ttext-align: center;\r\n\tleft: 50%;\r\n\t-webkit-transform: translate(-50%, -50%);\r\n\t        transform: translate(-50%, -50%);\r\n\ttop: 50%;\r\n\tposition: absolute;\r\n\tmin-width: 28.5rem;\r\n    \r\n}\r\n.sponserbtn{\r\n    background-color:blue;\r\n    border: none;\r\n    color: papayawhip;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 20px;\r\n    margin: 4px 2px;\r\n    cursor: pointer;\r\n    transition-duration: 0.4s;\r\n    border-radius: 4px;\r\n    font-family:'Alfa Slab One'; \r\n\r\n    \r\n}\r\n.sponserbtn:hover{\r\n  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\r\n}\r\n\r\n.regbtn{\r\n    background-color:red;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 20px;\r\n    margin: 4px 2px;\r\n    cursor: pointer;\r\n    border-radius: 4px;\r\n    font-family:'Alfa Slab One'; \r\n}\r\n.regbtn:hover{\r\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\r\n}\r\n\r\n\r\n  .container-fluid {\r\n      padding: 60px 50px;\r\n  }\r\n  .bg-grey {\r\n      background-color: #f6f6f6;\r\n  }\r\n  .logo-small {\r\n      color: #f4511e;\r\n      font-size: 50px;\r\n  }\r\n  .logo {\r\n      color: #f4511e;\r\n      font-size: 200px;\r\n  }\r\n  .thumbnail {\r\n      padding: 0 0 15px 0;\r\n      border: none;\r\n      border-radius: 0;\r\n  }\r\n  .thumbnail img {\r\n      width: 100%;\r\n      height: 100%;\r\n      margin-bottom: 10px;\r\n  }\r\n  .carousel-control.right, .carousel-control.left {\r\n      background-image: none;\r\n      color: #f4511e;\r\n  }\r\n  .carousel-indicators li {\r\n      border-color: #f4511e;\r\n  }\r\n  .carousel-indicators li.active {\r\n      background-color: #f4511e;\r\n  }\r\n  .item h4 {\r\n      font-size: 19px;\r\n      line-height: 1.375em;\r\n      font-weight: 400;\r\n      font-style: italic;\r\n      margin: 70px 0;\r\n  }\r\n  .item span {\r\n      font-style: normal;\r\n  }\r\n  .panel {\r\n      border: 1px solid #f4511e; \r\n      border-radius:0 !important;\r\n      transition: box-shadow 0.5s;\r\n  }\r\n  .panel:hover {\r\n      box-shadow: 5px 0px 40px rgba(0,0,0, .2);\r\n  }\r\n  .panel-footer .btn:hover {\r\n      border: 1px solid #f4511e;\r\n      background-color: #fff !important;\r\n      color: #f4511e;\r\n  }\r\n  .panel-heading {\r\n      color: #fff !important;\r\n      background-color: #f4511e !important;\r\n      padding: 25px;\r\n      border-bottom: 1px solid transparent;\r\n      border-top-left-radius: 0px;\r\n      border-top-right-radius: 0px;\r\n      border-bottom-left-radius: 0px;\r\n      border-bottom-right-radius: 0px;\r\n  }\r\n  .panel-footer {\r\n      background-color: white !important;\r\n  }\r\n  .panel-footer h3 {\r\n      font-size: 32px;\r\n  }\r\n  .panel-footer h4 {\r\n      color: #aaa;\r\n      font-size: 14px;\r\n  }\r\n  .panel-footer .btn {\r\n      margin: 15px 0;\r\n      background-color: #f4511e;\r\n      color: #fff;\r\n  }\r\n  .navbar {\r\n      margin-bottom: 0;\r\n      background-color: black;\r\n      z-index: 9999;\r\n      border: 0;\r\n      font-size: 12px !important;\r\n      line-height: 1.42857143 !important;\r\n      letter-spacing: 4px;\r\n      border-radius: 0;\r\n      font-family: Montserrat, sans-serif;\r\n      opacity: .5;\r\n  }\r\n  .navbar li a, .navbar .navbar-brand {\r\n      color: #fff !important;\r\n  }\r\n  .navbar-nav li a:hover, .navbar-nav li.active a {\r\n      color: #f4511e !important;\r\n      background-color: #fff !important;\r\n  }\r\n  .navbar-default .navbar-toggle {\r\n      border-color: transparent;\r\n      color: #fff !important;\r\n  }\r\n  footer .glyphicon {\r\n      font-size: 20px;\r\n      margin-bottom: 20px;\r\n      color: #f4511e;\r\n  }\r\n  .slideanim {visibility:hidden;}\r\n  .slide {\r\n      animation-name: slide;\r\n      -webkit-animation-name: slide;\r\n      animation-duration: 1s;\r\n      -webkit-animation-duration: 1s;\r\n      visibility: visible;\r\n  }\r\n  @keyframes slide {\r\n    0% {\r\n      opacity: 0;\r\n      -webkit-transform: translateY(70%);\r\n              transform: translateY(70%);\r\n    } \r\n    100% {\r\n      opacity: 1;\r\n      -webkit-transform: translateY(0%);\r\n              transform: translateY(0%);\r\n    }\r\n  }\r\n  @-webkit-keyframes slide {\r\n    0% {\r\n      opacity: 0;\r\n      -webkit-transform: translateY(70%);\r\n    } \r\n    100% {\r\n      opacity: 1;\r\n      -webkit-transform: translateY(0%);\r\n    }\r\n  }\r\n  @media screen and (max-width: 768px) {\r\n    .col-sm-4 {\r\n      text-align: center;\r\n      margin: 25px 0;\r\n    }\r\n    .btn-lg {\r\n        width: 100%;\r\n        margin-bottom: 35px;\r\n    }\r\n  }\r\n  @media screen and (max-width: 480px) {\r\n    .logo {\r\n        font-size: 150px;\r\n    }\r\n  }\r\n\r\n  a:link {\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\na:visited {\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\na:hover {\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\na:active {\r\n    text-decoration: none;\r\n    color: black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>                        \r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#myPage\" >  UMSL|HACKv1.5</a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li><a href=\"#about\">ABOUT</a></li>\r\n        <li><a href=\"#sponsors\">SPONSORS</a></li>\r\n        <li><a href=\"#previous\">PREVIOUS HACK</a></li>\r\n        <li><a href=\"#FAQ\">FAQ</a></li>\r\n        <li><a href=\"#contact\">CONTACT</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"jumbotron text-center\">\r\n   \r\n   \r\n  <div class=\"content\">\r\n    <img [src]=\"logo\" class=\"logo\">\r\n<input type=\"button\" value=\"Register\" class=\"regbtn\" onclick=\"window.open('https://my.mlh.io/oauth/authorize?client_id=37f3f3af2cb8b2d06c2bf0907e445c1b9ce7c49cd3d7f010abf523c293fedd0f&redirect_uri=https://umslhack.herokuapp.com/confirm&response_type=token')\"/>\r\n      <input class=\"sponserbtn\" type=\"button\" value=\"Sponsor Us\" onclick=\"window.open('../assets/files/UMSL_HACK_1.5_SPONSOR_Prospectus.pdf');\">\r\n  </div>\r\n</div>\r\n\r\n<!-- Container (About Section) -->\r\n<div id=\"about\" class=\"container-fluid\"> \r\n  <div class=\"row\">\r\n    <div class=\"col-sm-8\">\r\n      <h2>What is UMSL|HACK?</h2><br>\r\n      <h4>UMSL|HACK is an annual 36 hour hackathon hosted by the Information Systems Department at the University of Missouri-St. Louis. \r\n        UMSL|HACK main goal is to create a platform for college student to practice thier skills in business like environment. \r\n        By particaping in UMSL|HACK students will gain valuable skills as they will work as a team to complete a specific task that requires a diverse skill set.</h4><br>\r\n      <p>UMSL|HACK was established after a group of UMSL students partiacpated at thier first ever hackathon and wanted to share the experiance with the UMSL communinty.\r\n        The first ever UMSL|HACK was March 3rd-5th and turned out to be a huge success as the winning team (<a href=\"http://younivise.com/home\">Younivise</a>) saw their idea incubated into a business with the help of UMSL|Accelerate .\r\n        After reciving an overwhelming amount of positive feedback and participants asking \"When is the next UMSL|HACK?\". We have decided to organize a shorter 24 hour version of UMSL|HACK called UMSL|HACK1.5. \r\n      </p>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <img [src]=\"og_UMSLHACK\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-fluid bg-grey\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n     <img [src]=\"gotAPI\">\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n      <h2>UMSL|HACK1.5</h2><br>\r\n      <h4>UMSL Hack 2017 will be held on Friday September 29th at 5:00 PM to Saturday September 30th at 7:00 PM at the University of Missouri-St. Louis. \r\n          The theme of this event is \"GOT API!\", where students will work in teams to create projects focused on creatively harnessing the power the of the API. \r\n          Our goal is to see how effectively students work with existing data and interfaces to solve real problems much as they would encounter in day-to-day business. \r\n          \r\n </h4>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Container (sponsors Section) -->\r\n<div id=\"sponsors\" class=\"container-fluid text-center\">\r\n  <h2>SPONSORS</h2>\r\n\r\n  <br>\r\n  <div class=\"row slideanim\">\r\n    <div class=\"col-sm-4\">\r\n      <span><a href=\"https://www.umsl.edu/\"><img [src]=\"umslIS\"></a></span>\r\n    </div>\r\n\r\n    <div class=\"col-sm-4\">\r\n       <span><a href=\"\"><img [src]=\"\">[Sponser Logo]</a></span>\r\n    </div>\r\n\r\n    <div class=\"col-sm-4\">\r\n      <span><a href=\"\"><img [src]=\"\">[Sponser Logo]</a></span>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <br><br>\r\n\r\n  <div class=\"row slideanim\">\r\n    <div class=\"col-sm-4\">\r\n        <span><a href=\"\"><img [src]=\"\">[Sponser Logo]</a></span>\r\n    </div>\r\n\r\n    <div class=\"col-sm-4\">\r\n        <span><a href=\"\"><img [src]=\"\">[Sponser Logo]</a></span>\r\n    </div>\r\n\r\n    <div class=\"col-sm-4\">\r\n        <span><a href=\"\"><img [src]=\"\">[Sponser Logo]</a></span>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Container (previous Section) -->\r\n<div id=\"previous\" class=\"container-fluid text-center bg-grey\">\r\n  <h2>previous hack</h2><br>\r\n  <h4>UMSL|HACK v1</h4>\r\n  <div class=\"row text-center slideanim\">\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"thumbnail\">\r\n        <img [src]=\"umslHack1\" alt=\"Paris\" width=\"400\" height=\"300\">\r\n        <span>\r\n        <p>Team Smart Lot gathers around Taylor during a brainstorm session.</p>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"thumbnail\">\r\n        <img [src]=\"umslHack2\" alt=\"Paris\" width=\"400\" height=\"300\">\r\n        <p>Chris and Ryan discussing ideas before they start coding! </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"thumbnail\">\r\n        <img [src]=\" umslHack3\" alt=\"Paris\" width=\"400\" height=\"300\">\r\n        <p>Virtual Adviser troubleshooting their app.</p>\r\n      </div>\r\n    </div>\r\n        <div class=\"col-sm-4\">\r\n      <div class=\"thumbnail\">\r\n        <img [src]=\" umslHack4\" alt=\"Paris\" width=\"400\" height=\"300\">\r\n        <p>Sam from Virtual Adviser getting ready to code!</p>\r\n      </div>\r\n    </div>\r\n       <div class=\"col-sm-4\">\r\n      <div class=\"thumbnail\">\r\n        <img [src]=\" umslHack5\" alt=\"Paris\" width=\"400\" height=\"300\">\r\n        <p>Team WeRecruit taking a break.</p>\r\n      </div>\r\n    </div> \r\n           <div class=\"col-sm-4\">\r\n      <div class=\"thumbnail\">\r\n        <img [src]=\" umslHack6\" alt=\"Paris\" width=\"400\" height=\"300\">\r\n        <p>Thanks to all of our judges for helping us select the winners!</p>\r\n      </div>\r\n    </div> \r\n  </div><br>\r\n  \r\n  <h2>What participants had to say about UMSLHACK v1</h2>\r\n  <div id=\"myCarousel\" class=\"carousel slide text-center\" data-ride=\"carousel\">\r\n    <!-- Indicators -->\r\n    <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\r\n    </ol>\r\n\r\n    <!-- Wrapper for slides -->\r\n    <div class=\"carousel-inner\" role=\"listbox\">\r\n      <div class=\"item active\">\r\n        <h4>\"It really pushed my skills beyond what I had envisioned possible in a 36 hour period. Gave me new inspiration for projects and how to practice moving forward.\"</h4>\r\n      </div>\r\n      <div class=\"item\">\r\n        <h4>\"I made some good friends and gained some valuable experience. Really enjoyed the whole experience. \r\n          The food was great, the mentors were incredible, and the organizers were some really stand-up people. \r\n          I just really really enjoyed the whole experience.\"</h4>\r\n      </div>\r\n      <div class=\"item\">\r\n        <h4>\"Best experience in college life\"</h4>\r\n      </div>\r\n          <div class=\"item\">\r\n        <h4>\"was dope\"</h4>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Left and right controls -->\r\n    <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n<!-- Container (FAQ Section) -->\r\n<div id=\"FAQ\" class=\"container-fluid\">\r\n  <div class=\"text-center\">\r\n    <h2>FAQ</h2>\r\n  </div>\r\n  <p-accordion [multiple]=\"true\"> \r\n  <div class=\"row slideanim\">\r\n      <p-accordionTab header=\"Where and When is UMSL|HACK?\">\r\n        UMSLHACK will be held on Friday September 29th at 5:00 PM to Saturday September 30th at 7:00 PM at University of Missouri - St. Louis.\r\n    </p-accordionTab>\r\n        <p-accordionTab header=\"Am I eligible to participate?\">\r\n       Current undergraduate and graduate students, or those who graduated within the last 6 months, can compete. \r\n    </p-accordionTab>\r\n    <p-accordionTab header=\"Is coding experience required?\">\r\n        Nope! The entire UMSL|HACK team knew very little when they each attended their very first hackathon. \r\n        It’s entirely irrelevant what your experience is going into a hackathon, it’s more about your interest in technology and problem solving.  \r\n    </p-accordionTab>\r\n      <p-accordionTab header=\"Will there be food?\">\r\nAbsolutely! Your meals for the weekend will be free and there’ll be plenty of snacks and drinks to keep you energized. \r\nIf you’ve got specific dietary requirements, please let us know when you register.\r\n    </p-accordionTab>\r\n  </div>\r\n  </p-accordion>\r\n</div>\r\n\r\n<!-- Container (Contact Section) -->\r\n<div id=\"contact\" class=\"container-fluid bg-grey\">\r\n  <h2 class=\"text-center\">CONTACT Us</h2>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-5\">\r\n      <p>Contact us and we'll get back to you within 24 hours.</p>\r\n      <p><span class=\"glyphicon glyphicon-map-marker\"></span> ST. Louis,Mo</p>\r\n      <p><span class=\"glyphicon glyphicon-envelope\"></span> umslhack@gmail.com</p>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<footer class=\"container-fluid text-center\">\r\n  <a href=\"#myPage\" title=\"To Top\">\r\n    <span class=\"glyphicon glyphicon-chevron-up\"></span>\r\n  </a>\r\n  \r\n</footer>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.logo = "../../assets/img/Webp.net-resizeimage (1).png";
        this.sLogo = "../../assets/img/Webp.net-resizeimage.png";
        this.umslIS = "../../assets/img/information_systems_logo.jpg";
        this.og_UMSLHACK = "../../assets/img/og_logo.png";
        this.umslHack1 = "../../assets/img/IMG_0011.JPG";
        this.umslHack2 = "../../assets/img/IMG_9836.JPG";
        this.umslHack3 = "../../assets/img/IMG_9887.JPG";
        this.umslHack4 = "../../assets/img/DSC04230.JPG";
        this.umslHack5 = "../../assets/img/IMG_9878.JPG";
        this.umslHack6 = "../../assets/img/IMG_9967.JPG";
        this.gotAPI = "../../assets/img/test5.png";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/assets/img/umsl-campus.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "umsl-campus.a7e6cf1ee85a83581d1c.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map