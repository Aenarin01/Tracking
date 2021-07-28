import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersDisplayComponent} from "./adminer/users-display/users-display.component";
import {HomeComponent} from "./home/home.component";

import {SiteLayoutComponent} from "./layouts/site-layout/site-layout.component";
import {AuthGuard} from "./services/auth.guard";

const routes: Routes = [
  {path: '', redirectTo: '/auth/login', pathMatch: 'full'},
  {
    path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'adminer', loadChildren: () => import('./adminer/adminer.module').then(m => m.AdminerModule),
  },


  // {path: 'adminer', loadChildren: () => import('./adminer/adminer.module').then(m => m.AdminerModule),},
  // {
  //   path: '', component: SiteLayoutComponent, canActivate:[AuthGuard], children: [
  //     {path: '', redirectTo: '/main', pathMatch: 'full'},
  //     {path: 'main', component: HomeComponent},
  //     {path: 'users', component: UsersDisplayComponent},
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

