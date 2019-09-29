(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Toolbar -->\n<div class=\"toolbar\" role=\"banner\">\n  <a href=\".\"><span>Task Manager App for Flipkod</span></a>\n</div>\n\n<div class=\"content\" role=\"main\">\n\n  <router-outlet></router-outlet>\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-tasktable></app-tasktable>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Modal displaying when user clicks on Action button -->\n<h1 mat-dialog-title *ngIf=\"action != 'Delete One'\"><strong>{{action}} Task</strong></h1>\n<h1 mat-dialog-title *ngIf=\"action == 'Delete One'\"><strong>Delete Task</strong></h1>\n<div mat-dialog-content class=\"myModal\">\n  <mat-form-field [hidden]=\"true\" *ngIf=\"action != 'Delete' && action !='Delete One'\">\n    <input type=\"number\" min=1 placeholder=\"ID\" matInput [(ngModel)]=\"local_data.id\">\n  </mat-form-field>\n  <mat-form-field *ngIf=\"action != 'Delete' && action !='Delete One'\">\n    <input type=\"text\" placeholder=\"Name\" matInput [(ngModel)]=\"local_data.name\">\n  </mat-form-field>\n  <mat-form-field *ngIf=\"action != 'Delete' && action !='Delete One'\">\n    <input type=\"text\" placeholder=\"Description\" matInput [(ngModel)]=\"local_data.description\">\n  </mat-form-field>\n  <mat-form-field [hidden]=\"true\" *ngIf=\"action != 'Delete' && action !='Delete One'\">\n    <input type=\"text\" placeholder=\"Date\" matInput [(ngModel)]=\"local_data.date\">\n  </mat-form-field>\n  <p *ngIf=\"action == 'Delete'\">Are you sure you want to delete this records?</p>\n  <p *ngIf=\"action == 'Delete One'\">Are you sure you want to delete this record?</p>\n</div>\n<div mat-dialog-actions>\n  <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"doAction()\" *ngIf=\"action != 'Delete One'; else elseTemplate\">{{action}}</button>\n  <button type=\"button\" mat-raised-button color=\"warn\"    (click)=\"closeDialog()\">Cancel</button>\n  <ng-template #elseTemplate>\n      <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"doAction()\">Delete</button>\n  </ng-template>\n  \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/taskdetails/taskdetails.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/taskdetails/taskdetails.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\n    <div class=\"taskWindow\">\n\n        <div class=\"title\">\n            <button class=\"button\" style=\"vertical-align:middle\" routerLink=\"../../home\"><span>Return back\n                </span></button>\n            <div class=\"text\">\n                Task details:\n            </div>\n\n        </div>\n\n        <div class=\"taskDesc\">\n\n            <div class=\"row justify-content-center\">\n                <div class=\"col-md-1 col-lg-1\">\n                    <strong>ID: </strong> {{post[0].id}}\n                </div>\n                <div class=\"col-md-4 col-lg-4\">\n                    <strong>Name: </strong> {{post[0].name}}\n                </div>\n                <div class=\"col-md-4 col-lg-4\">\n                    <strong>Description: </strong> {{post[0].description}}\n\n                </div>\n                <div class=\"col-md-3 col-lg-3\">\n                    <strong>Date: </strong> {{post[0].date}}\n\n                </div>\n            </div>\n\n            <div class=\"taskButtons row justify-content-center\">\n                <div class=\"cold-md-12 col-lg-12\">\n                    <button type=\"button\" mat-raised-button color=\"primary\"\n                        (click)=\"openDialog('Update', post[0])\">Edit</button>\n                    <button type=\"button\" mat-raised-button color=\"warn\"\n                        (click)=\"openDialog('Delete One', post[0])\">Delete</button>\n\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tasktable/tasktable.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tasktable/tasktable.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Search bar -->\n<div id=\"searchBar\" fxLayout fxLayoutAlign=\"start start\">\n    <mat-form-field fxFlex=\"30%\">\n        <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\" placeholder=\"Search\">\n    </mat-form-field>\n</div>\n\n\n<!-- Table section where material table is used -->\n<div id=\"table-section\">\n    <mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n        <!-- ID Column -->\n        <ng-container matColumnDef=\"id\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>\n                ID\n            </mat-header-cell>\n            <!-- When table row is clicked go to the specific Task calculated by row.id -->\n            <mat-cell [routerLink]=\"['../details', row.id]\" *matCellDef=\"let row\">{{row.id}}</mat-cell>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>\n                Name\n            </mat-header-cell>\n            <mat-cell [routerLink]=\"['../details', row.id]\" *matCellDef=\"let row\">{{row.name}}</mat-cell>\n        </ng-container>\n\n        <!-- Description Column -->\n        <ng-container matColumnDef=\"description\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>\n                Description\n            </mat-header-cell>\n            <mat-cell [routerLink]=\"['../details', row.id]\" *matCellDef=\"let row\">{{row.description}}</mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"date\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>\n                Created\n            </mat-header-cell>\n            <mat-cell [routerLink]=\"['../details', row.id]\" *matCellDef=\"let row\">{{row.date}}</mat-cell>\n        </ng-container>\n\n        <!-- Date Column -->\n        <ng-container matColumnDef=\"edit\">\n            <mat-header-cell *matHeaderCellDef>\n                Edit\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n                <!-- When edit button is clicked open Modal -->\n                <button mat-icon-button (click)=\"openDialog('Update', row)\">\n                    <mat-icon class=\"mat-24\">edit</mat-icon>\n                </button>\n            </mat-cell>\n        </ng-container>\n\n        <!-- Checkbox Column -->\n        <!-- User can select one or more Tasks by clicking on specific row checkbox -->\n        <!-- Also user can select all tasks -->\n        <ng-container matColumnDef=\"select\">\n            <mat-header-cell *matHeaderCellDef>\n                <mat-checkbox class=\"mat-primary\" (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                </mat-checkbox>\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n                <mat-checkbox class=\"mat-primary\" (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\">\n                </mat-checkbox>\n            </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns:displayedColumns\"></mat-row>\n    </mat-table>\n</div>\n\n<div id=\"paginator\">\n    <mat-paginator [pageSize]=\"5\">\n    </mat-paginator>\n</div>\n\n<div class=\"taskButtons\">\n    <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"openDialog('Add', {})\">Add new</button>\n    <button type=\"button\" mat-raised-button color=\"warn\"    (click)=\"openDialog('Delete', {})\">Delete</button>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  :host {\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n    font-size: 14px;\r\n    color: #333;\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n  }\r\n\r\n  :host ::ng-deep app-home {\r\n    width: 100%;\r\n  }\r\n\r\n  :host body {\r\n    color: lightblue;\r\n  }\r\n\r\n  h1,\r\n  h2,\r\n  h3,\r\n  h4,\r\n  h5,\r\n  h6 {\r\n    margin: 8px 0;\r\n  }\r\n\r\n  p {\r\n    margin: 0;\r\n  }\r\n\r\n  .toolbar {\r\n    height: 60px;\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: #3f51b5;\r\n    color: white;\r\n    font-weight: 600;\r\n    font-size: 20px;\r\n  }\r\n\r\n  .toolbar a {\r\n    margin: 0 100px;  \r\n  }\r\n\r\n  .content {\r\n    display: flex;\r\n    margin: 30px auto;\r\n    padding: 0 100px;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  svg.material-icons {\r\n    height: 24px;\r\n    width: auto;\r\n  }\r\n\r\n  svg.material-icons:not(:last-child) {\r\n    margin-right: 8px;\r\n  }\r\n\r\n  a,\r\n  a:visited,\r\n  a:hover {\r\n    color: white;\r\n    text-decoration: none;\r\n  }\r\n\r\n  a:hover {\r\n    color: #FFEB3B;\r\n  }\r\n\r\n  \r\n\r\n  \r\n\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7SUFDRSwwSkFBMEo7SUFDMUosZUFBZTtJQUNmLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsbUNBQW1DO0lBQ25DLGtDQUFrQztFQUNwQzs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTs7Ozs7O0lBTUUsYUFBYTtFQUNmOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTs7O0lBR0UsWUFBWTtJQUNaLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGNBQWM7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgOmhvc3Qge1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgOjpuZy1kZWVwIGFwcC1ob21lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgYm9keSB7XHJcbiAgICBjb2xvcjogbGlnaHRibHVlO1xyXG4gIH1cclxuXHJcbiAgaDEsXHJcbiAgaDIsXHJcbiAgaDMsXHJcbiAgaDQsXHJcbiAgaDUsXHJcbiAgaDYge1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLnRvb2xiYXIge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gIC50b29sYmFyIGEge1xyXG4gICAgbWFyZ2luOiAwIDEwMHB4OyAgXHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwIDEwMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBzdmcubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5cclxuICBzdmcubWF0ZXJpYWwtaWNvbnM6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICB9XHJcblxyXG4gIGEsXHJcbiAgYTp2aXNpdGVkLFxyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogI0ZGRUIzQjtcclxuICB9XHJcblxyXG4gIFxyXG5cclxuICBcclxuXHJcblxyXG4gICJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tasktable_tasktable_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tasktable/tasktable.component */ "./src/app/tasktable/tasktable.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _taskdetails_taskdetails_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./taskdetails/taskdetails.component */ "./src/app/taskdetails/taskdetails.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _tasktable_tasktable_component__WEBPACK_IMPORTED_MODULE_10__["TasktableComponent"],
            _modal_modal_component__WEBPACK_IMPORTED_MODULE_11__["ModalComponent"],
            _taskdetails_taskdetails_component__WEBPACK_IMPORTED_MODULE_12__["TaskdetailsComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot([
                { path: '', redirectTo: '/home', pathMatch: 'full' },
                { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"] },
                { path: 'details/:id', component: _taskdetails_taskdetails_component__WEBPACK_IMPORTED_MODULE_12__["TaskdetailsComponent"] }
            ])
        ],
        entryComponents: [
            _modal_modal_component__WEBPACK_IMPORTED_MODULE_11__["ModalComponent"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-tasktable {\r\n    width: 100%;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC10YXNrdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/modal/modal.component.css":
/*!*******************************************!*\
  !*** ./src/app/modal/modal.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-form-field {\r\n    display: block;\r\n}\r\n\r\nbutton:hover {\r\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSwwRUFBMEU7QUFDOUUiLCJmaWxlIjoic3JjL2FwcC9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMjQpLCAwIDE3cHggNTBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modal/modal.component.ts":
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ModalComponent = class ModalComponent {
    constructor(dialogRef, 
    //@Optional() is used to prevent error if no data is passed
    data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.local_data = Object.assign({}, data);
        this.action = this.local_data.action;
    }
    doAction() {
        this.dialogRef.close({ event: this.action, data: this.local_data });
    }
    closeDialog() {
        this.dialogRef.close({ event: 'Cancel' });
    }
};
ModalComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal.component.css */ "./src/app/modal/modal.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ModalComponent);



/***/ }),

/***/ "./src/app/table.service.ts":
/*!**********************************!*\
  !*** ./src/app/table.service.ts ***!
  \**********************************/
/*! exports provided: TableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return TableService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let TableService = class TableService {
    constructor() {
        //Custom display format
        this.format = 'dd.MM.yyyy - HH:mm';
        //Adding random numbers as ID
        this.myTasks = [
            { id: Math.floor((Math.random() * 1000) + 1), name: 'Kupiti naranče', description: "Lidl - 2kg", date: Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])("2019-09-24 10:00", this.format, "en-US") },
            { id: Math.floor((Math.random() * 1000) + 1), name: 'Počistiti stan', description: "", date: Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])("2019-09-25 17:45", this.format, "en-US") },
            { id: Math.floor((Math.random() * 1000) + 1), name: 'Čestitati kumi rođendan', description: "45. rođendan", date: Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])("2019-09-26 08:00", this.format, "en-US") }
        ];
    }
    getTask() {
        return this.myTasks;
    }
    addTask(data) {
        this.myTasks.push({
            id: Math.floor((Math.random() * 1000) + 1),
            name: data.name,
            description: data.description,
            date: Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(Date.now(), this.format, "en-US")
        });
    }
    updateTask(data) {
        this.myTasks = this.myTasks.filter((value, key) => {
            if (value.id == data.id) {
                value.name = data.name;
                value.description = data.description;
            }
            return true;
        });
    }
    deleteTask(start, deleteCount) {
        this.myTasks.splice(start, deleteCount);
    }
    deleteTaskByIndex(id) {
        for (var i = 0; i <= this.myTasks.length; i++) {
            if (this.myTasks[i].id == id) {
                this.myTasks.splice(i, 1);
            }
        }
    }
};
TableService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TableService);



/***/ }),

/***/ "./src/app/taskdetails/taskdetails.component.css":
/*!*******************************************************!*\
  !*** ./src/app/taskdetails/taskdetails.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\r\n    width: 100%;\r\n}\r\n\r\n.title {\r\n    width: 100%;\r\n    font-size: x-large;\r\n    margin-bottom: 50px;\r\n    display: inline-block;\r\n}\r\n\r\n.text {\r\n    font-weight: 600;\r\n    margin-top: 50px;\r\n    border-bottom: 1px lightgray solid;\r\n}\r\n\r\n.taskDesc {\r\n    font-size: 18px;\r\n    align-items: center;\r\n    font-weight: 600\r\n\r\n}\r\n\r\n.row {\r\n    margin-bottom: 50px;\r\n}\r\n\r\nmat-icon {\r\n    font-size: x-large;\r\n}\r\n\r\nstrong {\r\n   margin-right: 20px;\r\n}\r\n\r\n.button {\r\n    display: inline-block;\r\n    border-radius: 4px;\r\n    background-color: #f4511e;\r\n    border: none;\r\n    color: #FFFFFF;\r\n    text-align: center;\r\n    transition: all 0.5s;\r\n    cursor: pointer;\r\n    outline: none;\r\n\r\n  }\r\n\r\n.button span {\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    position: relative;\r\n    transition: 0.5s;\r\n  }\r\n\r\n.button span:after {\r\n    content: '\\00bb';\r\n    position: absolute;\r\n    opacity: 0;\r\n    top: 0;\r\n    right: -20px;\r\n    transition: 0.5s;\r\n  }\r\n\r\n.button:hover span {\r\n    padding-right: 25px;\r\n  }\r\n\r\n.button:hover span:after {\r\n    opacity: 1;\r\n    right: 0;\r\n  }\r\n\r\n.taskButtons button:hover {\r\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\r\n}\r\n\r\n.taskButtons button {\r\n    margin-right: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza2RldGFpbHMvdGFza2RldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQjs7QUFFSjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtHQUNHLGtCQUFrQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsYUFBYTs7RUFFZjs7QUFFQTtJQUNFLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE1BQU07SUFDTixZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsVUFBVTtJQUNWLFFBQVE7RUFDVjs7QUFFRjtJQUNJLDBFQUEwRTtBQUM5RTs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tkZXRhaWxzL3Rhc2tkZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnRleHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggbGlnaHRncmF5IHNvbGlkO1xyXG59XHJcblxyXG4udGFza0Rlc2Mge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDBcclxuXHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxubWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG5zdHJvbmcge1xyXG4gICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NTExZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbiBzcGFuIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b24gc3BhbjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnXFwwMGJiJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogLTIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uOmhvdmVyIHNwYW4ge1xyXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbjpob3ZlciBzcGFuOmFmdGVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcblxyXG4udGFza0J1dHRvbnMgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMTJweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjI0KSwgMCAxN3B4IDUwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xyXG59XHJcblxyXG4udGFza0J1dHRvbnMgYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/taskdetails/taskdetails.component.ts":
/*!******************************************************!*\
  !*** ./src/app/taskdetails/taskdetails.component.ts ***!
  \******************************************************/
/*! exports provided: TaskdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskdetailsComponent", function() { return TaskdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _table_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../table.service */ "./src/app/table.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/modal.component */ "./src/app/modal/modal.component.ts");






let TaskdetailsComponent = class TaskdetailsComponent {
    constructor(route, router, tableService, dialog) {
        this.route = route;
        this.router = router;
        this.tableService = tableService;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.post = this.tableService.getTask();
        //Add ID of clicked item to the post variable
        this.post = this.post.filter(item => item.id == this.route.snapshot.params['id']);
    }
    openDialog(action, obj) {
        obj.action = action;
        const dialogRef = this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"], {
            width: '600px',
            data: obj
        });
        dialogRef.afterClosed().subscribe(result => {
            //Call table-service and do operations
            if (result.event == 'Update') {
                this.tableService.updateTask(result.data);
            }
            else if (result.event == 'Delete One') {
                this.tableService.deleteTaskByIndex(result.data.id);
                //When current Task is deleted, return to the homepage
                this.router.navigate(['../../home']);
            }
        });
    }
};
TaskdetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _table_service__WEBPACK_IMPORTED_MODULE_3__["TableService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
TaskdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-taskdetails',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./taskdetails.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/taskdetails/taskdetails.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./taskdetails.component.css */ "./src/app/taskdetails/taskdetails.component.css")).default]
    })
], TaskdetailsComponent);



/***/ }),

/***/ "./src/app/tasktable/tasktable.component.css":
/*!***************************************************!*\
  !*** ./src/app/tasktable/tasktable.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#searchBar mat-form-field{\r\n    min-width: 400px;\r\n}\r\n\r\n\r\nmat-header-cell {\r\n\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n\r\n}\r\n\r\n\r\nmat-header-cell:last-of-type, mat-cell:last-of-type {\r\n    padding-left: 15px;\r\n}\r\n\r\n\r\nmat-cell:focus, mat-icon:focus  {\r\n    outline: none!important;\r\n}\r\n\r\n\r\n.mat-row:hover {\r\n    background-color: #ecf0f1;\r\n    font-weight: 500;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\nmat-table button:hover {\r\n    background-color: lightgray;\r\n}\r\n\r\n\r\n.taskButtons button:hover {\r\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\r\n}\r\n\r\n\r\n.taskButtons button {\r\n    margin-right: 10px;\r\n}\r\n\r\n\r\nbutton:focus {\r\n    outline: none!important;\r\n}\r\n\r\n\r\nmat-checkbox {\r\n    padding-top: 8px;\r\n}\r\n\r\n\r\nmat-paginator {\r\n    background-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza3RhYmxlL3Rhc2t0YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFHQTs7SUFFSSxlQUFlO0lBQ2YsZ0JBQWdCOztBQUVwQjs7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7OztBQUVBO0lBQ0ksMEVBQTBFO0FBQzlFOzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7OztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGtDQUFrQztBQUN0QyIsImZpbGUiOiJzcmMvYXBwL3Rhc2t0YWJsZS90YXNrdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZWFyY2hCYXIgbWF0LWZvcm0tZmllbGR7XHJcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG5cclxubWF0LWhlYWRlci1jZWxsIHtcclxuXHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxufVxyXG5cclxubWF0LWhlYWRlci1jZWxsOmxhc3Qtb2YtdHlwZSwgbWF0LWNlbGw6bGFzdC1vZi10eXBlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxubWF0LWNlbGw6Zm9jdXMsIG1hdC1pY29uOmZvY3VzICB7XHJcbiAgICBvdXRsaW5lOiBub25lIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1yb3c6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbm1hdC10YWJsZSBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG59XHJcblxyXG4udGFza0J1dHRvbnMgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMTJweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjI0KSwgMCAxN3B4IDUwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xyXG59XHJcblxyXG4udGFza0J1dHRvbnMgYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuYnV0dG9uOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmUhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tYXQtY2hlY2tib3gge1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxufVxyXG5cclxubWF0LXBhZ2luYXRvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/tasktable/tasktable.component.ts":
/*!**************************************************!*\
  !*** ./src/app/tasktable/tasktable.component.ts ***!
  \**************************************************/
/*! exports provided: TasktableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasktableComponent", function() { return TasktableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _table_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../table.service */ "./src/app/table.service.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");






let TasktableComponent = class TasktableComponent {
    constructor(tableService, dialog) {
        this.tableService = tableService;
        this.dialog = dialog;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](true, []);
        this.displayedColumns = ['id', 'name', 'description', 'date', 'edit', 'select'];
        //Function for searching specific string in the table
        this.doFilter = (value) => {
            this.dataSource.filter = value.trim().toLocaleLowerCase();
        };
    }
    ;
    openDialog(action, obj) {
        obj.action = action;
        const dialogRef = this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"], {
            width: '600px',
            data: obj
        });
        dialogRef.afterClosed().subscribe(result => {
            //Call table-service and do operations based on result.event
            if (result.event == 'Add') {
                this.tableService.addTask(result.data);
                this.dataSource.data = this.tableService.getTask();
                this.dataSource.sort = this.sort;
                this.table.renderRows();
            }
            else if (result.event == 'Update') {
                this.tableService.updateTask(result.data);
            }
            //Iteration over selected items and getting the index number of each selection and deleting it from the table 
            else if (result.event == 'Delete') {
                let tempTask = this.tableService.getTask();
                this.selection.selected.forEach(item => {
                    let index = tempTask.findIndex(d => d === item);
                    this.tableService.deleteTask(index, 1);
                    this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](tempTask);
                    this.dataSource.sort = this.sort;
                });
                this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](true, []);
                this.dataSource.paginator = this.paginator;
            }
        });
    }
    //Whether the number of selected elements matches the total number of rows.
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    // Selects all rows if they are not all selected; otherwise clear selection.
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }
    ngOnInit() {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.tableService.getTask());
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }
};
TasktableComponent.ctorParameters = () => [
    { type: _table_service__WEBPACK_IMPORTED_MODULE_3__["TableService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTable"], { static: true })
], TasktableComponent.prototype, "table", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
], TasktableComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], TasktableComponent.prototype, "paginator", void 0);
TasktableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tasktable',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tasktable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tasktable/tasktable.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tasktable.component.css */ "./src/app/tasktable/tasktable.component.css")).default]
    })
], TasktableComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Flipkod\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map