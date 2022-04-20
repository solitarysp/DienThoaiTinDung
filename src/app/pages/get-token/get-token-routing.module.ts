import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GetTokenComponent} from './get-token.component';


const routes: Routes = [
    {
        path: '',
        component: GetTokenComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GetTokenRoutingModule {
}
