import { Component, NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { KnobModule } from '../index';

@Component({
    selector: 'my-app',
    styleUrls: ['./app/app.css'],
    templateUrl: './app/app.html',
})
export class AppComponent {
    private myknob1_meterValue: number = 80;
    private myknob2_meterValue: number = 30;
    private newKnob2Value: number = 140;
    private myknob3_meterValue: number = 45;
    private myknob4_meterValue: number = 3;

    debug(event: string) {
        console.log("event change:" + event);
    }
}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        KnobModule,
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
