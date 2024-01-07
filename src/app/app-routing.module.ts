import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'submit-guarantee',
        loadChildren: () => import('./pages/submit-guarantee/submit-guarantee.module').then(m => m.SubmitGuaranteeModule)
    },
    {
        path: 'list-guarantee',
        loadChildren: () => import('./pages/list-guarantee/list-guarantee.module').then(m => m.ListGuaranteeModule)
    },
    {
        path: 'submit-repair-phone',
        loadChildren: () => import('./pages/submit-repair-phone/submit-repair-phone.module').then(m => m.SubmitRepairPhoneModule)
    },
    {
        path: 'get-token',
        loadChildren: () => import('./pages/get-token/get-token.module').then(m => m.GetTokenModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
