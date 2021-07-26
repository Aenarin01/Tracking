import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersDisplayComponent} from "./users-display/users-display.component";
import {UserInfoComponent} from "./user-info/user-info.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {AuthLayoutsComponent} from "./layouts/auth-layouts/auth-layouts.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {SiteLayoutComponent} from "./layouts/site-layout/site-layout.component";
import {AuthGuard} from "./classes/auth.guard";

const routes: Routes = [
  {
    path: '', component: AuthLayoutsComponent, children: [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent}
    ]
  },
  {
    path: '', component: SiteLayoutComponent, canActivate:[AuthGuard], children: [
      {path: '', redirectTo: '/main', pathMatch: 'full'},
      {path: 'main', component: MainPageComponent},
      {path: 'users', component: UsersDisplayComponent},
      {path: 'users/:id', component: UserInfoComponent},
      {path: 'add', component: AddUserComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

