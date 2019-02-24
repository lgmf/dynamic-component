(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"state$ | async as state\">\n  <h1 class=\"title\">{{ state.currentStep.title }}</h1>\n\n  <app-dynamic\n    class=\"content\"\n    [is]=\"state.currentStep.component\"\n    watch=\"value$\"\n    (propertyChanged)=\"onValueChanged($event)\"\n  ></app-dynamic>\n\n  <footer class=\"control-actions\">\n    <button\n      *ngIf=\"!isFirst\"\n      class=\"btn -start\"\n      (click)=\"previous()\"\n    >Previous</button>\n\n    <button\n      *ngIf=\"!isLast\"\n      class=\"btn -end\"\n      (click)=\"next()\"\n    >Next</button>\n  </footer>\n\n</ng-container>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: grid;\n  grid-gap: 16px;\n  margin: 24px; }\n  :host > .title,\n  :host > .content {\n    padding: 8px 12px; }\n  :host > .title {\n    background: #1a237e;\n    color: #c5cae9;\n    text-transform: uppercase; }\n  .control-actions {\n  display: flex;\n  justify-content: space-between; }\n  .control-actions > .btn {\n    font-size: 16px;\n    font-weight: bolder;\n    padding: 10px 20px;\n    background: #1a237e;\n    color: #c5cae9;\n    border: none;\n    text-transform: uppercase;\n    cursor: pointer;\n    outline: none;\n    transition: .35s ease-in-out; }\n  .control-actions > .btn.-disabled {\n    pointer-events: none;\n    opacity: 0.75;\n    cursor: unset; }\n  .control-actions > .btn.-start {\n    margin-right: auto; }\n  .control-actions > .btn.-end {\n    margin-left: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xnbWYvUHJvamVjdHMvZHluYW1pYy1jb21wb25lbnQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9sZ21mL1Byb2plY3RzL2R5bmFtaWMtY29tcG9uZW50L3NyYy9wYWxsZXQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQWE7RUFDYixlQUFjO0VBQ2QsYUFBWSxFQVliO0VBZkQ7O0lBT0ksa0JBQWlCLEVBQ2xCO0VBUkg7SUFXSSxvQkNiWTtJRGNaLGVDYnNCO0lEY3RCLDBCQUF5QixFQUMxQjtFQUdIO0VBQ0UsY0FBYTtFQUNiLCtCQUE4QixFQTRCL0I7RUE5QkQ7SUFLSSxnQkFBZTtJQUNmLG9CQUFtQjtJQUNuQixtQkFBa0I7SUFDbEIsb0JDM0JZO0lENEJaLGVDM0JzQjtJRDRCdEIsYUFBWTtJQUNaLDBCQUF5QjtJQUN6QixnQkFBZTtJQUNmLGNBQWE7SUFDYiw2QkFBNEIsRUFDN0I7RUFmSDtJQWtCSSxxQkFBb0I7SUFDcEIsY0FBYTtJQUNiLGNBQWEsRUFDZDtFQXJCSDtJQXdCSSxtQkFBa0IsRUFDbkI7RUF6Qkg7SUE0Qkksa0JBQWlCLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vcGFsbGV0LnNjc3MnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAxNnB4O1xuICBtYXJnaW46IDI0cHg7XG5cbiAgJiA+IC50aXRsZSxcbiAgJiA+IC5jb250ZW50IHtcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgfVxuXG4gICYgPiAudGl0bGUge1xuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xuICAgIGNvbG9yOiAkcHJpbWFyeS1jb250cmFzdDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG59XG5cbi5jb250cm9sLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgJiA+IC5idG4ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcbiAgICBjb2xvcjogJHByaW1hcnktY29udHJhc3Q7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogLjM1cyBlYXNlLWluLW91dDtcbiAgfVxuXG4gICYgPiAuYnRuLi1kaXNhYmxlZCB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgb3BhY2l0eTogMC43NTtcbiAgICBjdXJzb3I6IHVuc2V0O1xuICB9XG5cbiAgJiA+IC5idG4uLXN0YXJ0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cblxuICAmID4gLmJ0bi4tZW5kIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxufVxuIiwiJHByaW1hcnk6IzFhMjM3ZTtcbiRwcmltYXJ5LWNvbnRyYXN0OiAjYzVjYWU5O1xuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_rxjs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/rxjs-store */ "./src/app/store/rxjs-store.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");




var initialState = {
    steps: [
        {
            title: 'Personal Info',
            component: _shared__WEBPACK_IMPORTED_MODULE_3__["Step1Component"],
            value: 'value$'
        },
        {
            title: 'Contact',
            component: _shared__WEBPACK_IMPORTED_MODULE_3__["Step2Component"],
            value: 'value$'
        },
        {
            title: 'Finish',
            component: _shared__WEBPACK_IMPORTED_MODULE_3__["FinishComponent"],
            value: 'value$'
        },
    ],
    currentStep: {
        title: 'Personal Info',
        component: _shared__WEBPACK_IMPORTED_MODULE_3__["Step1Component"],
        value: 'value$'
    },
    data: null
};
var AppComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AppComponent, _super);
    function AppComponent() {
        var _this = _super.call(this, initialState) || this;
        _this.index = 0;
        _this.data = null;
        return _this;
    }
    Object.defineProperty(AppComponent.prototype, "isLast", {
        get: function () {
            return this.index === this.state.steps.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "isFirst", {
        get: function () {
            return this.index === 0;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.previous = function () {
        if (this.isFirst) {
            return;
        }
        var previousStep = this.state.steps[--this.index];
        this.setState('currentStep', previousStep);
    };
    AppComponent.prototype.next = function () {
        if (this.isLast) {
            return;
        }
        var nextStep = this.state.steps[++this.index];
        this.setState('data', this.data);
        console.log(this.data);
        this.setState('currentStep', nextStep);
    };
    AppComponent.prototype.onValueChanged = function (value) {
        this.data = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.data, value);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}(_store_rxjs_store__WEBPACK_IMPORTED_MODULE_2__["RxjsStore"]));



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/dynamic/dynamic.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/dynamic/dynamic.component.ts ***!
  \*****************************************************/
/*! exports provided: DynamicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicComponent", function() { return DynamicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var DynamicComponent = /** @class */ (function () {
    function DynamicComponent(factory) {
        this.factory = factory;
        this.propertyChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.componentInstance = null;
    }
    Object.defineProperty(DynamicComponent.prototype, "is", {
        set: function (component) {
            this.create(component);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicComponent.prototype, "watch", {
        set: function (property) {
            this.watchChangesOn(property);
        },
        enumerable: true,
        configurable: true
    });
    DynamicComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next();
        this.destroyed$.complete();
    };
    DynamicComponent.prototype.create = function (component) {
        this.container.clear();
        var componentFactory = this.factory.resolveComponentFactory(component);
        this.componentInstance = this.container.createComponent(componentFactory).instance;
    };
    DynamicComponent.prototype.watchChangesOn = function (property) {
        var _this = this;
        var propertyToWatch = this.componentInstance[property];
        if (!propertyToWatch) {
            return;
        }
        if (!Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(propertyToWatch)) {
            throw new Error("Can not watch property " + this.watch + " because it is not an observable");
        }
        propertyToWatch
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$))
            .subscribe(function (changes) { return _this.notify(changes); });
    };
    DynamicComponent.prototype.notify = function (changes) {
        this.propertyChanged.emit(changes);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
    ], DynamicComponent.prototype, "container", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], DynamicComponent.prototype, "is", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], DynamicComponent.prototype, "watch", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DynamicComponent.prototype, "propertyChanged", void 0);
    DynamicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dynamic',
            template: '<ng-container #container></ng-container>',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
    ], DynamicComponent);
    return DynamicComponent;
}());



/***/ }),

/***/ "./src/app/shared/finish/finish.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/finish/finish.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  finish works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/finish/finish.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/finish/finish.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9maW5pc2gvZmluaXNoLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/finish/finish.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/finish/finish.component.ts ***!
  \***************************************************/
/*! exports provided: FinishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishComponent", function() { return FinishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FinishComponent = /** @class */ (function () {
    function FinishComponent() {
    }
    FinishComponent.prototype.ngOnInit = function () {
    };
    FinishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-finish',
            template: __webpack_require__(/*! ./finish.component.html */ "./src/app/shared/finish/finish.component.html"),
            styles: [__webpack_require__(/*! ./finish.component.scss */ "./src/app/shared/finish/finish.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FinishComponent);
    return FinishComponent;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: DynamicComponent, FinishComponent, Step1Component, Step2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dynamic_dynamic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic/dynamic.component */ "./src/app/shared/dynamic/dynamic.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicComponent", function() { return _dynamic_dynamic_component__WEBPACK_IMPORTED_MODULE_0__["DynamicComponent"]; });

/* harmony import */ var _finish_finish_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finish/finish.component */ "./src/app/shared/finish/finish.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FinishComponent", function() { return _finish_finish_component__WEBPACK_IMPORTED_MODULE_1__["FinishComponent"]; });

/* harmony import */ var _step1_step1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step1/step1.component */ "./src/app/shared/step1/step1.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Step1Component", function() { return _step1_step1_component__WEBPACK_IMPORTED_MODULE_2__["Step1Component"]; });

/* harmony import */ var _step2_step2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./step2/step2.component */ "./src/app/shared/step2/step2.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Step2Component", function() { return _step2_step2_component__WEBPACK_IMPORTED_MODULE_3__["Step2Component"]; });







/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dynamic_dynamic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dynamic/dynamic.component */ "./src/app/shared/dynamic/dynamic.component.ts");
/* harmony import */ var _step1_step1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./step1/step1.component */ "./src/app/shared/step1/step1.component.ts");
/* harmony import */ var _step2_step2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./step2/step2.component */ "./src/app/shared/step2/step2.component.ts");
/* harmony import */ var _finish_finish_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./finish/finish.component */ "./src/app/shared/finish/finish.component.ts");








var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _dynamic_dynamic_component__WEBPACK_IMPORTED_MODULE_4__["DynamicComponent"],
                _step1_step1_component__WEBPACK_IMPORTED_MODULE_5__["Step1Component"],
                _step2_step2_component__WEBPACK_IMPORTED_MODULE_6__["Step2Component"],
                _finish_finish_component__WEBPACK_IMPORTED_MODULE_7__["FinishComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            entryComponents: [
                _step1_step1_component__WEBPACK_IMPORTED_MODULE_5__["Step1Component"],
                _step2_step2_component__WEBPACK_IMPORTED_MODULE_6__["Step2Component"],
                _finish_finish_component__WEBPACK_IMPORTED_MODULE_7__["FinishComponent"]
            ],
            exports: [
                _dynamic_dynamic_component__WEBPACK_IMPORTED_MODULE_4__["DynamicComponent"],
                _step1_step1_component__WEBPACK_IMPORTED_MODULE_5__["Step1Component"],
                _step2_step2_component__WEBPACK_IMPORTED_MODULE_6__["Step2Component"],
                _finish_finish_component__WEBPACK_IMPORTED_MODULE_7__["FinishComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/step1/step1.component.html":
/*!***************************************************!*\
  !*** ./src/app/shared/step1/step1.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" class=\"form-group\">\n\n  <div class=\"control\">\n    <label class=\"label\">Email</label>\n    <input type=\"text\" class=\"input\" formControlName=\"email\">\n  </div>\n\n  <div class=\"control\">\n    <label class=\"label\">Name</label>\n    <input type=\"text\" class=\"input\" formControlName=\"name\">\n  </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/shared/step1/step1.component.scss":
/*!***************************************************!*\
  !*** ./src/app/shared/step1/step1.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zdGVwMS9zdGVwMS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/step1/step1.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/step1/step1.component.ts ***!
  \*************************************************/
/*! exports provided: Step1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step1Component", function() { return Step1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var Step1Component = /** @class */ (function () {
    function Step1Component(fb) {
        this.fb = fb;
        this.form = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.value$ = this.form.valueChanges;
    }
    Step1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-step1',
            template: __webpack_require__(/*! ./step1.component.html */ "./src/app/shared/step1/step1.component.html"),
            styles: [__webpack_require__(/*! ./step1.component.scss */ "./src/app/shared/step1/step1.component.scss"), __webpack_require__(/*! ../../../objects.scss */ "./src/objects.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], Step1Component);
    return Step1Component;
}());



/***/ }),

/***/ "./src/app/shared/step2/step2.component.html":
/*!***************************************************!*\
  !*** ./src/app/shared/step2/step2.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  step2 works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/step2/step2.component.scss":
/*!***************************************************!*\
  !*** ./src/app/shared/step2/step2.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zdGVwMi9zdGVwMi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/step2/step2.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/step2/step2.component.ts ***!
  \*************************************************/
/*! exports provided: Step2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step2Component", function() { return Step2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Step2Component = /** @class */ (function () {
    function Step2Component() {
    }
    Step2Component.prototype.ngOnInit = function () {
    };
    Step2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-step2',
            template: __webpack_require__(/*! ./step2.component.html */ "./src/app/shared/step2/step2.component.html"),
            styles: [__webpack_require__(/*! ./step2.component.scss */ "./src/app/shared/step2/step2.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Step2Component);
    return Step2Component;
}());



/***/ }),

/***/ "./src/app/store/rxjs-store.ts":
/*!*************************************!*\
  !*** ./src/app/store/rxjs-store.ts ***!
  \*************************************/
/*! exports provided: RxjsStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxjsStore", function() { return RxjsStore; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


var RxjsStore = /** @class */ (function () {
    function RxjsStore(initialState) {
        this.initialState = initialState;
        this._state$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.initialState);
        this.state$ = this._state$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
    }
    Object.defineProperty(RxjsStore.prototype, "state", {
        get: function () {
            return this._state$.value;
        },
        enumerable: true,
        configurable: true
    });
    RxjsStore.prototype.setState = function (property, value) {
        var _a;
        var updated = Object.assign({}, this.state, (_a = {},
            _a[property] = value,
            _a));
        this._state$.next(updated);
    };
    return RxjsStore;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/objects.scss":
/*!**************************!*\
  !*** ./src/objects.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  display: grid;\n  grid-gap: 16px;\n  padding: 8px 12px; }\n  .form-group > .control {\n    display: grid;\n    grid-gap: 12px; }\n  .form-group > .control > .input {\n    font-size: 16px;\n    padding: 8px;\n    border: 2px solid #c5cae9; }\n  .form-group > .control > .input:focus {\n      border-color: #1a237e; }\n  .form-group > .control > .input.ng-touched.ng-invalid {\n    border-color: #f00; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xnbWYvUHJvamVjdHMvZHluYW1pYy1jb21wb25lbnQvc3JjL29iamVjdHMuc2NzcyIsIi9ob21lL2xnbWYvUHJvamVjdHMvZHluYW1pYy1jb21wb25lbnQvc3JjL3BhbGxldC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBYTtFQUNiLGVBQWM7RUFDZCxrQkFBaUIsRUFvQmxCO0VBdkJEO0lBTUksY0FBYTtJQUNiLGVBQWMsRUFDZjtFQVJIO0lBV0ksZ0JBQWU7SUFDZixhQUFZO0lBQ1osMEJDZHNCLEVEbUJ2QjtFQWxCSDtNQWdCTSxzQkNsQlUsRURtQlg7RUFqQkw7SUFxQkksbUJBQWtCLEVBQ25CIiwiZmlsZSI6InNyYy9vYmplY3RzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdwYWxsZXQuc2Nzcyc7XG5cbi5mb3JtLWdyb3VwIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDE2cHg7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuXG4gICYgPiAuY29udHJvbCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWdhcDogMTJweDtcbiAgfVxuXG4gICYgPiAuY29udHJvbCA+IC5pbnB1dCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkcHJpbWFyeS1jb250cmFzdDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeTtcbiAgICB9XG4gIH1cblxuICAmID4gLmNvbnRyb2wgPiAuaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcbiAgICBib3JkZXItY29sb3I6ICNmMDA7XG4gIH1cbn1cbiIsIiRwcmltYXJ5OiMxYTIzN2U7XG4kcHJpbWFyeS1jb250cmFzdDogI2M1Y2FlOTtcbiJdfQ== */"

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/lgmf/Projects/dynamic-component/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map