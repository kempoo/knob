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
var import0 = require("./knob.component");
var import1 = require("@angular/core/src/change_detection/change_detection_util");
var import2 = require("@angular/core/src/linker/view");
var import3 = require("@angular/core/src/linker/view_utils");
var import5 = require("@angular/core/src/metadata/view");
var import6 = require("@angular/core/src/linker/view_type");
var import7 = require("@angular/core/src/change_detection/constants");
var import8 = require("@angular/core/src/linker/component_factory");
var import9 = require("@angular/forms/src/directives/control_value_accessor");
var import10 = require("@angular/core/src/linker/query_list");
var import11 = require("@angular/core/src/linker/element_ref");
var Wrapper_KnobComponent = (function () {
    function Wrapper_KnobComponent() {
        this._changed = false;
        this.context = new import0.KnobComponent();
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
        this._expr_2 = import1.UNINITIALIZED;
        this._expr_3 = import1.UNINITIALIZED;
        this._expr_4 = import1.UNINITIALIZED;
        this._expr_5 = import1.UNINITIALIZED;
    }
    Wrapper_KnobComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_KnobComponent.prototype.ngOnDestroy = function () {
        (this.subscription0 && this.subscription0.unsubscribe());
    };
    Wrapper_KnobComponent.prototype.check_min = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.min = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_KnobComponent.prototype.check_max = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.max = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_KnobComponent.prototype.check_startDegree = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.startDegree = currValue;
            this._expr_2 = currValue;
        }
    };
    Wrapper_KnobComponent.prototype.check_endDegree = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_3, currValue))) {
            this._changed = true;
            this.context.endDegree = currValue;
            this._expr_3 = currValue;
        }
    };
    Wrapper_KnobComponent.prototype.check_intensive = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_4, currValue))) {
            this._changed = true;
            this.context.intensive = currValue;
            this._expr_4 = currValue;
        }
    };
    Wrapper_KnobComponent.prototype.check_meterValue = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_5, currValue))) {
            this._changed = true;
            this.context.meterValue = currValue;
            this._expr_5 = currValue;
        }
    };
    Wrapper_KnobComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_KnobComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_KnobComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_KnobComponent.prototype.subscribe = function (view, _eventHandler, emit0) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.change.subscribe(_eventHandler.bind(view, 'change')));
        }
    };
    return Wrapper_KnobComponent;
}());
exports.Wrapper_KnobComponent = Wrapper_KnobComponent;
var renderType_KnobComponent_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_KnobComponent_Host0 = (function (_super) {
    __extends(View_KnobComponent_Host0, _super);
    function View_KnobComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_KnobComponent_Host0, renderType_KnobComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    Object.defineProperty(View_KnobComponent_Host0.prototype, "_NG_VALUE_ACCESSOR_0_4", {
        get: function () {
            if ((this.__NG_VALUE_ACCESSOR_0_4 == null)) {
                (this.__NG_VALUE_ACCESSOR_0_4 = [this._KnobComponent_0_3.context]);
            }
            return this.__NG_VALUE_ACCESSOR_0_4;
        },
        enumerable: true,
        configurable: true
    });
    View_KnobComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'knob', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_KnobComponent0(this.viewUtils, this, 0, this._el_0);
        this._KnobComponent_0_3 = new Wrapper_KnobComponent();
        this.compView_0.create(this._KnobComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._KnobComponent_0_3.context);
    };
    View_KnobComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.KnobComponent) && (0 === requestNodeIndex))) {
            return this._KnobComponent_0_3.context;
        }
        if (((token === import9.NG_VALUE_ACCESSOR) && (0 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_0_4;
        }
        return notFoundResult;
    };
    View_KnobComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._KnobComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_KnobComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._KnobComponent_0_3.ngOnDestroy();
    };
    View_KnobComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_KnobComponent_Host0;
}(import2.AppView));
exports.KnobComponentNgFactory = new import8.ComponentFactory('knob', View_KnobComponent_Host0, import0.KnobComponent);
var styles_KnobComponent = ['.knob[_ngcontent-%COMP%]{\n        width:100%;\n        height:100%;\n        background-size: contain;\n        cursor:pointer;\n    }'];
var renderType_KnobComponent = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.Emulated, styles_KnobComponent, {});
var View_KnobComponent0 = (function (_super) {
    __extends(View_KnobComponent0, _super);
    function View_KnobComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_KnobComponent0, renderType_KnobComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_KnobComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._viewQuery_knob_0 = new import10.QueryList();
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'knob'), null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._viewQuery_knob_0.reset([new import11.ElementRef(this._el_1)]);
        this.context.knobDiv = this._viewQuery_knob_0.first;
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2
        ]), null);
        return null;
    };
    return View_KnobComponent0;
}(import2.AppView));
exports.View_KnobComponent0 = View_KnobComponent0;
//# sourceMappingURL=knob.component.ngfactory.js.map