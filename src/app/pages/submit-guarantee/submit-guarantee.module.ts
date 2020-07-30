import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SubmitGuaranteeRoutingModule} from './submit-guarantee-routing.module';
import {SubmitGuaranteeComponent} from './submit-guarantee.component';
import {IonicModule} from '@ionic/angular';


@NgModule({
    declarations: [SubmitGuaranteeComponent],
    imports: [
        CommonModule,
        IonicModule,
        SubmitGuaranteeRoutingModule
    ]
})
export class SubmitGuaranteeModule {
}
