import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {CommonModule} from "@angular/common";
import {AuthRoutingModule} from "./auth-routing.module";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {AngularMaterialModule} from "../material.module";
import {MatCardModule} from "@angular/material/card";
import {AuthComponent} from "./auth.component";


@NgModule({
  declarations: [LoginPageComponent, RegisterPageComponent, AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatIconModule,
    AngularMaterialModule,
    MatCardModule,
    AuthRoutingModule
  ]
})
export class AuthModule {
}
