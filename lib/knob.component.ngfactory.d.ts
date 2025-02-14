import * as import0 from './knob.component';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/core/src/linker/query_list';
export declare class Wrapper_KnobComponent {
    _eventHandler: Function;
    context: import0.KnobComponent;
    _changed: boolean;
    _expr_0: any;
    _expr_1: any;
    _expr_2: any;
    _expr_3: any;
    _expr_4: any;
    _expr_5: any;
    subscription0: any;
    constructor();
    ngOnDetach(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    check_min(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_max(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_startDegree(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_endDegree(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_intensive(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_meterValue(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    ngDoCheck(view: import2.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import2.AppView<any>, _eventHandler: any, emit0: boolean): void;
}
export declare const KnobComponentNgFactory: import8.ComponentFactory<import0.KnobComponent>;
export declare class View_KnobComponent0 extends import2.AppView<import0.KnobComponent> {
    _viewQuery_knob_0: import10.QueryList<any>;
    _text_0: any;
    _el_1: any;
    _text_2: any;
    constructor(viewUtils: import3.ViewUtils, parentView: import2.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import8.ComponentRef<any>;
}
