import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SubmitGuaranteeComponent} from './submit-guarantee.component';


const routes: Routes = [{path: '', component: SubmitGuaranteeComponent}];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SubmitGuaranteeRoutingModule {
}
