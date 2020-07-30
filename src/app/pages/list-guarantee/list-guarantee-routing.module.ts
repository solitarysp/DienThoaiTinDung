import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListGuaranteeComponent} from './list-guarantee.component';


const routes: Routes = [{path: '', component: ListGuaranteeComponent}
    ]
;

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListGuaranteeRoutingModule {
}
