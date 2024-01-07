import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SubmitRepairPhoneComponent} from './submit-repair-phone.component';


const routes: Routes = [{path: '', component: SubmitRepairPhoneComponent}];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SubmitRepairPhoneRoutingModule {
}
