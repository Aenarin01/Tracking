import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersDisplayComponent} from "./adminer/users-display/users-display.component";
import {HomeComponent} from "./home/home.component";

import {SiteLayoutComponent} from "./layouts/site-layout/site-layout.component";
import {AuthGuard} from "./services/auth.guard";

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    pathMatch: 'full'
  },

  {
    path: '', component: SiteLayoutComponent, canActivate:[AuthGuard], children: [
      {path: '', redirectTo: '/main', pathMatch: 'full'},
      {path: 'main', component: HomeComponent},
      {path: 'users', component: UsersDisplayComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

