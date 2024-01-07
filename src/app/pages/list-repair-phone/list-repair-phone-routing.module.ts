import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListRepairPhoneComponent} from './list-repair-phone.component';


const routes: Routes = [{path: '', component: ListRepairPhoneComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListRepairPhoneRoutingModule {
}
