import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthGuard} from "./services/auth.guard";

const routes: Routes = [
  {path: '', redirectTo: '/auth/login', pathMatch: 'full'},
  {
    path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'adminer', loadChildren: () => import('./adminer/adminer.module').then(m => m.AdminerModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'main', loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

