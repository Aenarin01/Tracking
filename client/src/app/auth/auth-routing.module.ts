import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {AuthLayoutsComponent} from "./auth-layouts/auth-layouts.component";
import {RegisterPageComponent} from "./register-page/register-page.component";

// const routes: Routes = [{path: '', component: LoginPageComponent}];


const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,/* children: [
      {path: '', redirectTo: 'login-page/', pathMatch: 'full'},
      {path: 'login-page', component: LoginPageComponent},
    ]*/
  }
];

/*const routes: Routes = [  {
    path: '', component: AuthLayoutsComponent, children: [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent}
    ]
  }  ];*/

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
