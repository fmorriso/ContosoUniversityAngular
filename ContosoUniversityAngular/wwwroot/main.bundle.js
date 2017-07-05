webpackJsonp([1],{

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

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12 text-center h2\">Student Body Statistics</div>\r\n</div>\r\n<table class=\"table table-striped table-condensed table-bordered\">\r\n  <tr>\r\n    <th>\r\n      Enrollment Date\r\n    </th>\r\n    <th>\r\n      Students\r\n    </th>\r\n  </tr>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"about.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () { };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__students_students_component__ = __webpack_require__("../../../../../src/app/students/students.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__courses_courses_component__ = __webpack_require__("../../../../../src/app/courses/courses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__instructors_instructors_component__ = __webpack_require__("../../../../../src/app/instructors/instructors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__departments_departments_component__ = __webpack_require__("../../../../../src/app/departments/departments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] },
    { path: 'students', component: __WEBPACK_IMPORTED_MODULE_5__students_students_component__["a" /* StudentsComponent */] },
    { path: 'courses', component: __WEBPACK_IMPORTED_MODULE_6__courses_courses_component__["a" /* CoursesComponent */] },
    { path: 'instructors', component: __WEBPACK_IMPORTED_MODULE_7__instructors_instructors_component__["a" /* InstructorsComponent */] },
    { path: 'departments', component: __WEBPACK_IMPORTED_MODULE_8__departments_departments_component__["a" /* DepartmentsComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */] },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
        data: { title: 'Redirect to default Page' }
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_4__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-navigation></app-navigation>\r\n  <router-outlet></router-outlet>\r\n  <app-footer></app-footer>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"app.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Contoso University - Angular';
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_dateinputs__ = __webpack_require__("../../../../@progress/kendo-angular-dateinputs/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_inputs__ = __webpack_require__("../../../../@progress/kendo-angular-inputs/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_buttons__ = __webpack_require__("../../../../@progress/kendo-angular-buttons/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_label__ = __webpack_require__("../../../../@progress/kendo-angular-label/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__students_students_component__ = __webpack_require__("../../../../../src/app/students/students.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__courses_courses_component__ = __webpack_require__("../../../../../src/app/courses/courses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__instructors_instructors_component__ = __webpack_require__("../../../../../src/app/instructors/instructors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__departments_departments_component__ = __webpack_require__("../../../../../src/app/departments/departments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__students_students_service__ = __webpack_require__("../../../../../src/app/students/students.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__instructors_instructors_service__ = __webpack_require__("../../../../../src/app/instructors/instructors.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__courses_courses_service__ = __webpack_require__("../../../../../src/app/courses/courses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__departments_departments_service__ = __webpack_require__("../../../../../src/app/departments/departments.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_15__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_19__departments_departments_component__["a" /* DepartmentsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__students_students_component__["a" /* StudentsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__courses_courses_component__["a" /* CoursesComponent */],
                __WEBPACK_IMPORTED_MODULE_18__instructors_instructors_component__["a" /* InstructorsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__contact_contact_component__["a" /* ContactComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_dateinputs__["a" /* DateInputsModule */],
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_inputs__["a" /* InputsModule */],
                __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_buttons__["a" /* ButtonsModule */],
                __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_label__["a" /* LabelModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_24__departments_departments_service__["a" /* DepartmentsService */],
                __WEBPACK_IMPORTED_MODULE_21__students_students_service__["a" /* StudentsService */],
                __WEBPACK_IMPORTED_MODULE_22__instructors_instructors_service__["a" /* InstructorsService */],
                __WEBPACK_IMPORTED_MODULE_23__courses_courses_service__["a" /* CoursesService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"contact.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<address>\r\n  One Microsoft Way<br />\r\n  Redmond, WA 98052-6399<br />\r\n  <abbr title=\"Phone\">P:</abbr>\r\n  425.555.0100\r\n</address>\r\n\r\n<address>\r\n  <strong>Support:</strong> <a href=\"mailto:Support@example.com\">Support@example.com</a><br />\r\n  <strong>Marketing:</strong> <a href=\"mailto:Marketing@example.com\">Marketing@example.com</a>\r\n</address>\r\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/courses/courses.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"courses.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/courses/courses.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-md-12 text-center h2\">Courses</div>\r\n</div>\r\n\r\n<ng-template ngFor let-course [ngForOf]=\"courses | async\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-2\">{{course.courseId}}</div>\r\n\t\t<div class=\"col-md-2\">{{course.title}}</div>\r\n\t\t<div class=\"col-md-2\">{{course.credits}}</div>\r\n\t\t<div class=\"col-md-2\">{{getDepartmentName(course)}}</div>\r\n\t</div>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/courses/courses.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__courses_service__ = __webpack_require__("../../../../../src/app/courses/courses.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoursesComponent = (function () {
    function CoursesComponent(coursesService) {
        this.coursesService = coursesService;
        console.log('CoursesComponent - constructor');
    }
    CoursesComponent.prototype.ngOnInit = function () {
        console.log('CoursesComponent - ngOnInit - 1');
        this.getCourses();
        console.log('CoursesComponent - ngOnInit - 2');
    };
    CoursesComponent.prototype.getCourses = function () {
        console.log('CoursesComponent - getInstructors - 1');
        this.courses = this.coursesService.getCourses();
        console.log('CoursesComponent - getInstructors - 2');
    };
    CoursesComponent.prototype.getDepartmentName = function (course) {
        console.log("CoursesComponent - getDepartmentName - " + JSON.stringify(course));
        if (course) {
            if (course.department) {
                if (course.department.name) {
                    return course.department.name;
                }
            }
        }
        return '(none)';
    };
    CoursesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
            selector: 'app-courses',
            template: __webpack_require__("../../../../../src/app/courses/courses.component.html"),
            styles: [__webpack_require__("../../../../../src/app/courses/courses.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__courses_service__["a" /* CoursesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__courses_service__["a" /* CoursesService */]) === "function" && _a || Object])
    ], CoursesComponent);
    return CoursesComponent;
    var _a;
}());

//# sourceMappingURL=courses.component.js.map

/***/ }),

/***/ "../../../../../src/app/courses/courses.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CoursesService = (function () {
    function CoursesService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.relativeUrl = 'api/courses'; // URL to web api
        console.log('CoursesService - constructor');
    }
    CoursesService.prototype.getCourses = function () {
        var _this = this;
        console.log("CoursesService -  getCourses - " + this.relativeUrl);
        return this.http
            .get(this.relativeUrl)
            .map(function (res) { return _this.extractDataExtended(res); })
            .do(function (data) { return console.log("CoursesService -  getCourses - data = " + JSON.stringify(data)); });
    };
    CoursesService.prototype.extractDataExtended = function (res) {
        console.log("CoursesService - extractDataExtended - Response.status=" + res.status);
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        var body = res.json ? res.json() : null;
        console.log("CoursesService - extractDataExtended - Response.body=" + body);
        return (body || {});
    };
    CoursesService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    CoursesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
    ], CoursesService);
    return CoursesService;
    var _a;
}());

//# sourceMappingURL=courses.service.js.map

/***/ }),

/***/ "../../../../../src/app/departments/departments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"departments.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/departments/departments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-md-12 text-center h2\">Departments</div>\r\n</div>\r\n\r\n<ng-template ngFor let-department [ngForOf]=\"departments | async\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-2\">{{department.id}}</div>\r\n\t\t<div class=\"col-md-2\">{{department.name}}</div>\r\n\t\t<div class=\"col-md-2\">{{department.budget}}</div>\r\n\t\t<div class=\"col-md-2\">{{department.startDate | date:\"yyyy-MM-dd\"}}</div>\r\n\t\t<div class=\"col-md-4\">{{getAdministratorName(department)}}</div>\r\n\t</div>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/departments/departments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__departments_service__ = __webpack_require__("../../../../../src/app/departments/departments.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DepartmentsComponent = (function () {
    function DepartmentsComponent(departmentsService) {
        this.departmentsService = departmentsService;
        console.log('DepartmentsComponent - constructor');
    }
    DepartmentsComponent.prototype.ngOnInit = function () {
        console.log('DepartmentsComponent - ngOnInit - 1');
        this.getAllDepartments();
        console.log('DepartmentsComponent - ngOnInit - 2');
    };
    DepartmentsComponent.prototype.getAllDepartments = function () {
        console.log('DepartmentsComponent - getDepartments - 1');
        this.departments = this.departmentsService.getDepartments();
        console.log('DepartmentsComponent - getDepartments - 2');
    };
    DepartmentsComponent.prototype.getAdministratorName = function (department) {
        console.log("DepartmentsComponent - getAdministratorName - " + JSON.stringify(department));
        if (department) {
            if (department.lastName) {
                if (department.firstName) {
                    return department.lastName + ", " + department.firstName;
                }
            }
        }
        return '(none)';
    };
    DepartmentsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
            selector: 'app-departments',
            template: __webpack_require__("../../../../../src/app/departments/departments.component.html"),
            styles: [__webpack_require__("../../../../../src/app/departments/departments.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__departments_service__["a" /* DepartmentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__departments_service__["a" /* DepartmentsService */]) === "function" && _a || Object])
    ], DepartmentsComponent);
    return DepartmentsComponent;
    var _a;
}());

//# sourceMappingURL=departments.component.js.map

/***/ }),

/***/ "../../../../../src/app/departments/departments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DepartmentsService = (function () {
    function DepartmentsService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.relativeUrl = 'api/departments'; // URL to web api
        console.log('getDepartments - constructor');
    }
    DepartmentsService.prototype.getDepartments = function () {
        console.log("DepartmentsService - getDepartments - " + this.relativeUrl);
        return this.http
            .get(this.relativeUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError)
            .do(function (data) { return console.log("DepartmentsService - getDepartments.do - data=" + JSON.stringify(data)); });
    };
    DepartmentsService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || ' error');
    };
    DepartmentsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
    ], DepartmentsService);
    return DepartmentsService;
    var _a;
}());

//# sourceMappingURL=departments.service.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"footer.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"footer\" class=\"row\">\r\n  <div class=\"col-md-12 text-center h4 bg-info\">Angular version: {{angularVersion}}</div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12 text-center h5\">\r\n    &copy; 2017 - Contoso University\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.angularVersion = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* VERSION */].full;
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"home.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <h1>Contoso University</h1>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n    <h2>Welcome to Contoso University</h2>\r\n    <p>\r\n      Contoso University is a sample application that\r\n      demonstrates how to use Entity Framework Core 1.0 in an\r\n      ASP.NET Core MVC 1.0 web application.\r\n    </p>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <h2>Build it from scratch</h2>\r\n    <p>You can build the application by following the steps in a series of tutorials.</p>\r\n    <p><a class=\"btn btn-default\" href=\"https://docs.asp.net/en/latest/data/ef-mvc/intro.html\">See the tutorial &raquo;</a></p>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <h2>Download it</h2>\r\n    <p>You can download the completed project from GitHub.</p>\r\n    <p><a class=\"btn btn-default\" href=\"https://github.com/aspnet/Docs/tree/master/aspnet/data/ef-mvc/intro/samples/cu-final\">See project source code &raquo;</a></p>\r\n  </div>\r\n</div>"

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
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/instructors/instructors.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"instructors.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/instructors/instructors.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-md-12 text-center h2\">Instructors</div>\r\n</div>\r\n\r\n<ng-template ngFor let-instructor [ngForOf]=\"instructors | async\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-2\">{{instructor.lastName}}</div>\r\n\t\t<div class=\"col-md-2\">{{instructor.firstMidName}}</div>\r\n\t\t<div class=\"col-md-2\">{{instructor.hireDate | date:\"yyyy-MM-dd\"}}</div>\r\n\t\t<div class=\"col-md-2\">{{getOfficeLocation(instructor)}}</div>\r\n\t</div>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/instructors/instructors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__instructors_service__ = __webpack_require__("../../../../../src/app/instructors/instructors.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstructorsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InstructorsComponent = (function () {
    function InstructorsComponent(instructorsService) {
        this.instructorsService = instructorsService;
        console.log('InstructorsComponent - constructor');
    }
    InstructorsComponent.prototype.ngOnInit = function () {
        console.log('InstructorsComponent - ngOnInit - 1');
        this.getInstructors();
        console.log('InstructorsComponent - ngOnInit - 2');
    };
    InstructorsComponent.prototype.getInstructors = function () {
        console.log('InstructorsComponent - getInstructors - 1');
        this.instructors = this.instructorsService.getInstructors();
        console.log('InstructorsComponent - getInstructors - 2');
    };
    InstructorsComponent.prototype.getOfficeLocation = function (instructor) {
        console.log("InstructorsComponent - getOfficeLocation - " + JSON.stringify(instructor));
        if (instructor) {
            if (instructor.officeAssignment) {
                if (instructor.officeAssignment.location) {
                    return instructor.officeAssignment.location;
                }
            }
        }
        return '(none)';
    };
    InstructorsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
            selector: 'app-instructors',
            template: __webpack_require__("../../../../../src/app/instructors/instructors.component.html"),
            styles: [__webpack_require__("../../../../../src/app/instructors/instructors.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__instructors_service__["a" /* InstructorsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__instructors_service__["a" /* InstructorsService */]) === "function" && _a || Object])
    ], InstructorsComponent);
    return InstructorsComponent;
    var _a;
}());

//# sourceMappingURL=instructors.component.js.map

/***/ }),

/***/ "../../../../../src/app/instructors/instructors.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstructorsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InstructorsService = (function () {
    function InstructorsService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.relativeUrl = 'api/instructors'; // URL to web api
        console.log('InstructorsService - constructor');
    }
    InstructorsService.prototype.getInstructors = function () {
        var _this = this;
        console.log("InstructorsService - getInstructors - " + this.relativeUrl);
        return this.http
            .get(this.relativeUrl)
            .map(function (res) { return _this.extractDataExtended(res); })
            .do(function (data) { return console.log("InstructorsService - getInstructors - data = " + JSON.stringify(data)); });
    };
    InstructorsService.prototype.extractDataExtended = function (res) {
        //console.log(`InstructorsService - extractDataExtended - Response.status=${res.status}`);
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        var body = res.json ? res.json() : null;
        console.log("InstructorsService - extractDataExtended - Response.body=" + body);
        return (body || {});
    };
    InstructorsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    InstructorsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
    ], InstructorsService);
    return InstructorsService;
    var _a;
}());

//# sourceMappingURL=instructors.service.js.map

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/* START - Navbar branding overrides */\r\n/* https://work.smarchal.com/twbscolor/3.3.6/less/96ca54006400ffffffffff001 */\r\n.navbar-default {\r\n  background-color: #1e90ff;\r\n  border-color: #00008b;\r\n}\r\n\r\n  .navbar-default .navbar-brand {\r\n    color: #ffffff;\r\n  }\r\n\r\n    .navbar-default .navbar-brand:hover,\r\n    .navbar-default .navbar-brand:focus {\r\n      color: #ffffe0;\r\n    }\r\n\r\n  .navbar-default .navbar-text {\r\n    color: #ffffff;\r\n  }\r\n\r\n  .navbar-default .navbar-nav > li > a {\r\n    color: #ffffff;\r\n  }\r\n\r\n    .navbar-default .navbar-nav > li > a:hover,\r\n    .navbar-default .navbar-nav > li > a:focus {\r\n      color: #ffffe0;\r\n    }\r\n\r\n  .navbar-default .navbar-nav > li > .dropdown-menu {\r\n    background-color: #1e90ff;\r\n  }\r\n\r\n    .navbar-default .navbar-nav > li > .dropdown-menu > li > a {\r\n      color: #ffffff;\r\n    }\r\n\r\n      .navbar-default .navbar-nav > li > .dropdown-menu > li > a:hover,\r\n      .navbar-default .navbar-nav > li > .dropdown-menu > li > a:focus {\r\n        color: #ffffe0;\r\n        background-color: #00008b;\r\n      }\r\n\r\n    .navbar-default .navbar-nav > li > .dropdown-menu > li.divider {\r\n      background-color: #00008b;\r\n    }\r\n\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\r\n    color: #ffffe0;\r\n    background-color: #00008b;\r\n  }\r\n\r\n  .navbar-default .navbar-nav > .active > a,\r\n  .navbar-default .navbar-nav > .active > a:hover,\r\n  .navbar-default .navbar-nav > .active > a:focus {\r\n    color: #ffffe0;\r\n    background-color: #00008b;\r\n  }\r\n\r\n  .navbar-default .navbar-nav > .open > a,\r\n  .navbar-default .navbar-nav > .open > a:hover,\r\n  .navbar-default .navbar-nav > .open > a:focus {\r\n    color: #ffffe0;\r\n    background-color: #00008b;\r\n  }\r\n\r\n  .navbar-default .navbar-toggle {\r\n    border-color: #00008b;\r\n  }\r\n\r\n    .navbar-default .navbar-toggle:hover,\r\n    .navbar-default .navbar-toggle:focus {\r\n      background-color: #00008b;\r\n    }\r\n\r\n    .navbar-default .navbar-toggle .icon-bar {\r\n      background-color: #ffffff;\r\n    }\r\n\r\n  .navbar-default .navbar-collapse,\r\n  .navbar-default .navbar-form {\r\n    border-color: #ffffff;\r\n  }\r\n\r\n  .navbar-default .navbar-link {\r\n    color: #ffffff;\r\n  }\r\n\r\n    .navbar-default .navbar-link:hover {\r\n      color: #ffffe0;\r\n    }\r\n\r\n@media (max-width: 767px) {\r\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\r\n    color: #ffffff;\r\n  }\r\n\r\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\r\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\r\n      color: #ffffe0;\r\n    }\r\n\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\r\n    color: #ffffe0;\r\n    background-color: #00008b;\r\n  }\r\n}\r\n\r\n/* END - Navbar branding overrides */\r\n", "", {"version":3,"sources":["C:/projects/ContosoUniversityAngular/ContosoUniversityAngular/src/app/navigation/navigation.component.css"],"names":[],"mappings":"AAAA,uCAAuC;AACvC,8EAA8E;AAC9E;EACE,0BAA0B;EAC1B,sBAAsB;CACvB;;EAEC;IACE,eAAe;GAChB;;IAEC;;MAEE,eAAe;KAChB;;EAEH;IACE,eAAe;GAChB;;EAED;IACE,eAAe;GAChB;;IAEC;;MAEE,eAAe;KAChB;;EAEH;IACE,0BAA0B;GAC3B;;IAEC;MACE,eAAe;KAChB;;MAEC;;QAEE,eAAe;QACf,0BAA0B;OAC3B;;IAEH;MACE,0BAA0B;KAC3B;;EAEH;;;IAGE,eAAe;IACf,0BAA0B;GAC3B;;EAED;;;IAGE,eAAe;IACf,0BAA0B;GAC3B;;EAED;;;IAGE,eAAe;IACf,0BAA0B;GAC3B;;EAED;IACE,sBAAsB;GACvB;;IAEC;;MAEE,0BAA0B;KAC3B;;IAED;MACE,0BAA0B;KAC3B;;EAEH;;IAEE,sBAAsB;GACvB;;EAED;IACE,eAAe;GAChB;;IAEC;MACE,eAAe;KAChB;;AAEL;EACE;IACE,eAAe;GAChB;;IAEC;;MAEE,eAAe;KAChB;;EAEH;;;IAGE,eAAe;IACf,0BAA0B;GAC3B;CACF;;AAED,qCAAqC","file":"navigation.component.css","sourcesContent":["/* START - Navbar branding overrides */\r\n/* https://work.smarchal.com/twbscolor/3.3.6/less/96ca54006400ffffffffff001 */\r\n.navbar-default {\r\n  background-color: #1e90ff;\r\n  border-color: #00008b;\r\n}\r\n\r\n  .navbar-default .navbar-brand {\r\n    color: #ffffff;\r\n  }\r\n\r\n    .navbar-default .navbar-brand:hover,\r\n    .navbar-default .navbar-brand:focus {\r\n      color: #ffffe0;\r\n    }\r\n\r\n  .navbar-default .navbar-text {\r\n    color: #ffffff;\r\n  }\r\n\r\n  .navbar-default .navbar-nav > li > a {\r\n    color: #ffffff;\r\n  }\r\n\r\n    .navbar-default .navbar-nav > li > a:hover,\r\n    .navbar-default .navbar-nav > li > a:focus {\r\n      color: #ffffe0;\r\n    }\r\n\r\n  .navbar-default .navbar-nav > li > .dropdown-menu {\r\n    background-color: #1e90ff;\r\n  }\r\n\r\n    .navbar-default .navbar-nav > li > .dropdown-menu > li > a {\r\n      color: #ffffff;\r\n    }\r\n\r\n      .navbar-default .navbar-nav > li > .dropdown-menu > li > a:hover,\r\n      .navbar-default .navbar-nav > li > .dropdown-menu > li > a:focus {\r\n        color: #ffffe0;\r\n        background-color: #00008b;\r\n      }\r\n\r\n    .navbar-default .navbar-nav > li > .dropdown-menu > li.divider {\r\n      background-color: #00008b;\r\n    }\r\n\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\r\n    color: #ffffe0;\r\n    background-color: #00008b;\r\n  }\r\n\r\n  .navbar-default .navbar-nav > .active > a,\r\n  .navbar-default .navbar-nav > .active > a:hover,\r\n  .navbar-default .navbar-nav > .active > a:focus {\r\n    color: #ffffe0;\r\n    background-color: #00008b;\r\n  }\r\n\r\n  .navbar-default .navbar-nav > .open > a,\r\n  .navbar-default .navbar-nav > .open > a:hover,\r\n  .navbar-default .navbar-nav > .open > a:focus {\r\n    color: #ffffe0;\r\n    background-color: #00008b;\r\n  }\r\n\r\n  .navbar-default .navbar-toggle {\r\n    border-color: #00008b;\r\n  }\r\n\r\n    .navbar-default .navbar-toggle:hover,\r\n    .navbar-default .navbar-toggle:focus {\r\n      background-color: #00008b;\r\n    }\r\n\r\n    .navbar-default .navbar-toggle .icon-bar {\r\n      background-color: #ffffff;\r\n    }\r\n\r\n  .navbar-default .navbar-collapse,\r\n  .navbar-default .navbar-form {\r\n    border-color: #ffffff;\r\n  }\r\n\r\n  .navbar-default .navbar-link {\r\n    color: #ffffff;\r\n  }\r\n\r\n    .navbar-default .navbar-link:hover {\r\n      color: #ffffe0;\r\n    }\r\n\r\n@media (max-width: 767px) {\r\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\r\n    color: #ffffff;\r\n  }\r\n\r\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\r\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\r\n      color: #ffffe0;\r\n    }\r\n\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\r\n    color: #ffffe0;\r\n    background-color: #00008b;\r\n  }\r\n}\r\n\r\n/* END - Navbar branding overrides */\r\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\">Contoso University</a>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\">\r\n      <ul class=\"nav navbar-nav\" role=\"navigation\">\r\n\r\n        <li class=\"\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <a [routerLink]=\"['/home']\">Home</a>\r\n        </li>\r\n\r\n        <li class=\"\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <a [routerLink]=\"['/about']\">About</a>\r\n        </li>\r\n\r\n        <li class=\"\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <a [routerLink]=\"['/students']\">Students</a>\r\n        </li>\r\n\r\n        <li class=\"\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <a [routerLink]=\"['/courses']\">Courses</a>\r\n        </li>\r\n\r\n        <li class=\"\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <a [routerLink]=\"['/instructors']\">Instructors</a>\r\n        </li>\r\n\r\n        <li class=\"\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <a [routerLink]=\"['/departments']\">Departments</a>\r\n        </li>\r\n        \r\n        <li class=\"\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <a [routerLink]=\"['/contact']\">Contact Us</a>\r\n        </li>\r\n\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("../../../../../src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());

//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"page-not-found.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12 text-center bg-danger\">\r\n    Page Not Found\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/students/students.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"students.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/students/students.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12 text-center h2\">Students</div>\r\n</div>\r\n\r\n<ng-template ngFor let-student [ngForOf]=\"students | async\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">{{student.fullName}}</div>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/students/students.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__students_service__ = __webpack_require__("../../../../../src/app/students/students.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentsComponent = (function () {
    function StudentsComponent(studentsService) {
        this.studentsService = studentsService;
        //console.log('StudentsComponent - constructor');
    }
    StudentsComponent.prototype.ngOnInit = function () {
        //console.log('StudentsComponent - ngOnInit - 1.1');
        this.getStudents();
        //console.log('StudentsComponent - ngOnInit - 2.1');
    };
    StudentsComponent.prototype.getStudents = function () {
        //console.log('StudentsComponent - getStudents - 1');
        this.students = this.studentsService.getStudents();
        //console.log('StudentsComponent - getStudents - 2');
    };
    StudentsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
            selector: 'app-students',
            template: __webpack_require__("../../../../../src/app/students/students.component.html"),
            styles: [__webpack_require__("../../../../../src/app/students/students.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__students_service__["a" /* StudentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__students_service__["a" /* StudentsService */]) === "function" && _a || Object])
    ], StudentsComponent);
    return StudentsComponent;
    var _a;
}());

//# sourceMappingURL=students.component.js.map

/***/ }),

/***/ "../../../../../src/app/students/students.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StudentsService = (function () {
    function StudentsService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.relativeUrl = 'api/students'; // URL to web api
    }
    StudentsService.prototype.getStudents = function () {
        var _this = this;
        console.log("StudentsService -  getStudents - " + this.relativeUrl);
        return this.http
            .get(this.relativeUrl)
            .map(function (res) { return _this.extractDataExtended(res); })
            .do(function (data) { return console.log("StudentsService -  getStudents - data = " + JSON.stringify(data)); });
    };
    StudentsService.prototype.extractDataExtended = function (res) {
        console.log("StudentService - extractDataExtended - Response.status=" + res.status);
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        var body = res.json ? res.json() : null;
        console.log("StudentService - extractDataExtended - Response.body=" + body);
        return (body || {});
    };
    StudentsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    StudentsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
    ], StudentsService);
    return StudentsService;
    var _a;
}());

//# sourceMappingURL=students.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map