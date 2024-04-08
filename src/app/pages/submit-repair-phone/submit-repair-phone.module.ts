import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmitRepairPhoneRoutingModule } from './submit-repair-phone-routing.module';
import { SubmitRepairPhoneComponent } from './submit-repair-phone.component';
import {IonicModule} from '@ionic/angular';


@NgModule({
  declarations: [SubmitRepairPhoneComponent],
  imports: [
    CommonModule,
    SubmitRepairPhoneRoutingModule,
    IonicModule
  ]
})
export class SubmitRepairPhoneModule { }
