import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {AuthComponent} from "./auth.component";
import {RegisterPageComponent} from "./register-page/register-page.component";

const routes: Routes = [
  {
    path: '', component: AuthComponent, children: [
      {path: '', redirectTo: '/login',pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent,},
      {path: 'register', component: RegisterPageComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
