import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuardService } from './services/route-guards/auth-guard/auth-guard.service';
import { NoAuthGuardService } from './services/route-guards/no-auth-guard/no-auth-guard.service';

const routes: Routes = [
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule',
        canActivate: [AuthGuardService]
    },
    {
        path: 'login',
        loadChildren: './auth-modules/login/login.module#LoginModule',
        canActivate: [NoAuthGuardService]
    },
    {
        path: 'signup',
        loadChildren: './auth-modules/signup/signup.module#SignupModule',
        canActivate: [NoAuthGuardService]
    },
    {
        path: 'reset-password',
        loadChildren: './auth-modules/reset-password/reset-password.module#ResetPasswordModule',
        canActivate: [NoAuthGuardService]
    },

    // { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    // { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    // { path: '**', redirectTo: 'not-found' }
];

// const routingOptions = {
//     preloadingStrategy: PreloadAllModules
// }

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
