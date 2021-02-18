import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {TokenGuard} from 'src/app/guard/token.guard';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () =>
            import('./pages/home/home.module').then((m) => m.HomePageModule),
        canActivate: [TokenGuard],
    },
    {
        path: 'auth/login',
        loadChildren: () =>
            import('./pages/auth/login/login.module').then((m) => m.LoginPageModule),
    },
    {
        path: 'auth/signup',
        loadChildren: () =>
            import('./pages/auth/signup/signup.module').then(
                (m) => m.SignupPageModule
            ),
    },
    {
        path: 'user-detail/:id',
        loadChildren: () =>
            import('./pages/user-detail/user-detail.module').then(
                (m) => m.UserDetailPageModule
            ),
        canActivate: [TokenGuard],
    },
    {
        path: '**',
        redirectTo: 'auth/login',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
