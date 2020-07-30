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
