import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListGuaranteeRoutingModule} from './list-guarantee-routing.module';
import {ListGuaranteeComponent} from './list-guarantee.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [ListGuaranteeComponent],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        ListGuaranteeRoutingModule
    ]
})
export class ListGuaranteeModule {
}
