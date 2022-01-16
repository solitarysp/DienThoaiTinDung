import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListGuaranteeRoutingModule} from './list-guarantee-routing.module';
import {ListGuaranteeComponent} from './list-guarantee.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {ModalModule} from 'ngx-bootstrap/modal';


@NgModule({
    declarations: [ListGuaranteeComponent],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        TabsModule,
        PaginationModule.forRoot(),
        ModalModule.forRoot(),
        ListGuaranteeRoutingModule
    ]
})
export class ListGuaranteeModule {
}
