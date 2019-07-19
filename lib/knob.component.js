"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var KnobComponent = (function () {
    function KnobComponent() {
        this.min = 0;
        this.max = 0;
        this.startDegree = 200;
        this.endDegree = 120;
        this.intensive = true;
        this.meterValue = 0;
        this.change = new core_1.EventEmitter(false);
        this.meterRotation = 0;
        this.tmpMeterRotation = 0;
        this.startX = 0;
        this.startY = 0;
        this.maxDistance = 0;
        this.changed = [];
        this.touched = [];
        this.maxDistance = document.body.clientHeight;
        if (document.body.clientWidth > this.maxDistance) {
            this.maxDistance = document.body.clientWidth;
        }
        this.maxDistance = Math.round((this.maxDistance * 10) / 100);
    }
    KnobComponent_1 = KnobComponent;

    KnobComponent.prototype.ngOnInit = function () {
        var self = this;
        this.knobDiv.nativeElement.addEventListener('mousedown', function (e) { self.setChangeListener(e); });
        this.knobDiv.nativeElement.addEventListener('touchstart', function (e) { self.setChangeListener(e); });
        this.calculateDialAngle();

        
    };

    KnobComponent.prototype.ngAfterViewChecked = function () {
   
        let rect = document.getElementsByClassName('skin2')[0].getBoundingClientRect();
        this.centerX = rect.x + rect.width / 2;
        this.centerY = rect.y + rect.height / 2;
    
    };



    KnobComponent.prototype.getMouseDifference = function (e) {
        var mousepos = this.getMousePosition(e);
        var yMovement = mousepos.clientY - this.centerY;
        var xMovement = mousepos.clientX -  this.centerX;

        let radians = (Math.atan2(yMovement,xMovement)) * (180 / Math.PI);
        
        radians = radians - 140;

        if (radians < 0) {
            radians = 180 + (180 + radians);
        }


        console.log("x: " + xMovement + ", y: " + yMovement + " = " + radians + ", START DEG:" + this.startDegree);
        return radians;
    };
    KnobComponent.prototype.getMaxDegrees = function () {
        if (this.endDegree > this.startDegree) {
            return this.endDegree - this.startDegree;
        }
        else if (this.endDegree < this.startDegree) {
            return 360 + this.endDegree - this.startDegree;
        }
        else {
            return 0;
        }
    };
    KnobComponent.prototype.calculateDialAngle = function () {
        var norm = this.meterValue - this.min;
        var percent = norm * 100 / (this.max - this.min);
        var maxdeg = this.getMaxDegrees();
        var rot = percent * maxdeg / 100;
        this.meterRotation = rot % 360;
        rot = rot + this.startDegree;
        this.knobDiv.nativeElement.style.transform = 'rotate(' + (rot) + 'deg)';
        this.notifyChange();
    };
    KnobComponent.prototype.calculateChange = function (mousePositionChange) {
        var maxDegrees = this.getMaxDegrees();
        
        /*
        var newValue = (mousePositionChange / 10 )* maxDegrees / this.maxDistance;
        newValue = (newValue + this.meterRotation);
        */
       

        var newValue = mousePositionChange;
        
        if (newValue < 0) {
            newValue = 0;
        }
        else if (newValue > maxDegrees) {
            newValue = maxDegrees;
        }
        this.tmpMeterRotation = newValue;
        this.knobDiv.nativeElement.style.transform = 'rotate(' + (newValue + this.startDegree) + 'deg)';
        this.meterValue = (100 * newValue) / maxDegrees;
        var norm = this.max - this.min;
        this.meterValue = Math.round(((norm * this.meterValue) / 100) + this.min);

        this.meterValue = this.meterValue - this.meterValue % 1000;

        if (this.intensive) {
            this.change.emit(this.meterValue);
            this.notifyChange();
        }
    };
    KnobComponent.prototype.getMousePosition = function (event) {
        var result = { clientX: 0, clientY: 0 };
        if (event.touches) {
            result.clientX = event.touches[0].clientX;
            result.clientY = event.touches[0].clientY;
        }
        else {
            result.clientX = event.clientX;
            result.clientY = event.clientY;
        }
        return result;
    };
    KnobComponent.prototype.setChangeListener = function (e) {
        if (e.stopPropagation)
            e.stopPropagation();
        if (e.preventDefault)
            e.preventDefault();
        var self = this;
        var mousepos = this.getMousePosition(e);
        this.startX = mousepos.clientX;
        this.startY = mousepos.clientY;
        var funcMove = function (e) {
            if (e.stopPropagation)
                e.stopPropagation();
            if (e.preventDefault)
                e.preventDefault();
            var change = self.getMouseDifference(e);
            console.log(e);
            self.calculateChange(change);
        };
        var funcRemove = function (e) {
            if (!self.intensive) {
                self.change.emit(self.meterValue);
                self.notifyChange();
            }
            if (e.stopPropagation)
                e.stopPropagation();
            if (e.preventDefault)
                e.preventDefault();
            self.startX = 0;
            self.startY = 0;
            self.meterRotation = self.tmpMeterRotation;
            document.removeEventListener('mousemove', funcMove);
            document.removeEventListener('touchmove', funcMove);
            document.removeEventListener('mouseup', funcRemove);
            document.removeEventListener('touchend', funcRemove);
        };
        document.addEventListener('mousemove', funcMove, false);
        document.addEventListener('touchmove', funcMove, false);
        document.addEventListener('mouseup', funcRemove, false);
        document.addEventListener('touchend', funcRemove, false);
    };
    KnobComponent.prototype.writeValue = function (obj) {
        if (obj == null)
            return;
        this.meterValue = obj;
        this.calculateDialAngle();
    };
    KnobComponent.prototype.registerOnChange = function (fn) {
        this.changed.push(fn);
    };
    KnobComponent.prototype.notifyChange = function () {
        var _this = this;
        this.changed.forEach(function (f) { return f(_this.meterValue); });
    };
    KnobComponent.prototype.registerOnTouched = function (fn) {
        this.touched.push(fn);
    };
    KnobComponent.prototype.notifyTouch = function () {
        this.touched.forEach(function (f) { return f(); });
    };
    __decorate([
        core_1.Input('min'),
        __metadata("design:type", Number)
    ], KnobComponent.prototype, "min", void 0);
    __decorate([
        core_1.Input('max'),
        __metadata("design:type", Number)
    ], KnobComponent.prototype, "max", void 0);
    __decorate([
        core_1.Input('startDegree'),
        __metadata("design:type", Number)
    ], KnobComponent.prototype, "startDegree", void 0);
    __decorate([
        core_1.Input('endDegree'),
        __metadata("design:type", Number)
    ], KnobComponent.prototype, "endDegree", void 0);
    __decorate([
        core_1.Input('intensive'),
        __metadata("design:type", Boolean)
    ], KnobComponent.prototype, "intensive", void 0);
    __decorate([
        core_1.ViewChild('knob'),
        __metadata("design:type", core_1.ElementRef)
    ], KnobComponent.prototype, "knobDiv", void 0);
    __decorate([
        core_1.Input('value'),
        __metadata("design:type", Number)
    ], KnobComponent.prototype, "meterValue", void 0);
    __decorate([
        core_1.Output('change'),
        __metadata("design:type", core_1.EventEmitter)
    ], KnobComponent.prototype, "change", void 0);
    KnobComponent = KnobComponent_1 = __decorate([
        core_1.Component({
            template: "\n<div #knob class=\"knob\"></div>\n",
            styles: ["\n    .knob{\n        width:100%;\n        height:100%;\n        background-size: contain;\n        cursor:pointer;\n    }\n"],
            selector: 'knob',
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return KnobComponent_1; }),
                    multi: true
                }]
        }),
        __metadata("design:paramtypes", [])
    ], KnobComponent);
    return KnobComponent;
    var KnobComponent_1;
}());
exports.KnobComponent = KnobComponent;
//# sourceMappingURL=knob.component.js.map