"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var knob_component_1 = require("./knob.component");
var forms_1 = require("@angular/forms");
var KnobModule = (function () {
    function KnobModule() {
    }
    KnobModule = __decorate([
        core_1.NgModule({
            imports: [forms_1.FormsModule],
            declarations: [knob_component_1.KnobComponent],
            exports: [knob_component_1.KnobComponent],
        })
    ], KnobModule);
    return KnobModule;
}());
exports.KnobModule = KnobModule;
//# sourceMappingURL=knob.module.js.map