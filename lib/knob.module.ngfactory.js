"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var import0 = require("@angular/core/src/linker/ng_module_factory");
var import1 = require("./knob.module");
var import2 = require("@angular/forms/src/directives");
var import3 = require("@angular/forms/src/form_providers");
var import4 = require("@angular/forms/src/directives/radio_control_value_accessor");
var KnobModuleInjector = (function (_super) {
    __extends(KnobModuleInjector, _super);
    function KnobModuleInjector(parent) {
        return _super.call(this, parent, [], []) || this;
    }
    Object.defineProperty(KnobModuleInjector.prototype, "_RadioControlRegistry_3", {
        get: function () {
            if ((this.__RadioControlRegistry_3 == null)) {
                (this.__RadioControlRegistry_3 = new import4.RadioControlRegistry());
            }
            return this.__RadioControlRegistry_3;
        },
        enumerable: true,
        configurable: true
    });
    KnobModuleInjector.prototype.createInternal = function () {
        this._InternalFormsSharedModule_0 = new import2.InternalFormsSharedModule();
        this._FormsModule_1 = new import3.FormsModule();
        this._KnobModule_2 = new import1.KnobModule();
        return this._KnobModule_2;
    };
    KnobModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_0;
        }
        if ((token === import3.FormsModule)) {
            return this._FormsModule_1;
        }
        if ((token === import1.KnobModule)) {
            return this._KnobModule_2;
        }
        if ((token === import4.RadioControlRegistry)) {
            return this._RadioControlRegistry_3;
        }
        return notFoundResult;
    };
    KnobModuleInjector.prototype.destroyInternal = function () {
    };
    return KnobModuleInjector;
}(import0.NgModuleInjector));
exports.KnobModuleNgFactory = new import0.NgModuleFactory(KnobModuleInjector, import1.KnobModule);
//# sourceMappingURL=knob.module.ngfactory.js.map