import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListRepairPhoneRoutingModule} from './list-repair-phone-routing.module';
import {ListRepairPhoneComponent} from './list-repair-phone.component';
import {IonicModule} from '@ionic/angular';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {ModalModule} from 'ngx-bootstrap/modal';


@NgModule({
    declarations: [ListRepairPhoneComponent],
    imports: [
        CommonModule,
        FormsModule,
        TabsModule,
        PaginationModule.forRoot(),
        ModalModule.forRoot(),
        ListRepairPhoneRoutingModule,
        IonicModule,
        ReactiveFormsModule
    ]
})
export class ListRepairPhoneModule {
}
