import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserInfoComponent } from './user-info/user-info.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UsersDisplayComponent } from './users-display/users-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import { AddUserComponent } from './add-user/add-user.component';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import {MatTableModule} from '@angular/material/table';
import {AngularMaterialModule} from "./material.module";
import { AuthLayoutsComponent } from './layouts/auth-layouts/auth-layouts.component';
import {MatCardModule} from "@angular/material/card";
import { RegisterPageComponent } from './register-page/register-page.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {TokenInterceptor} from "./classes/token.interceptor";
import {MatSortModule} from "@angular/material/sort";

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    UsersDisplayComponent,
    AddUserComponent,
    LoginPageComponent,
    MainPageComponent,
    AuthLayoutsComponent,
    RegisterPageComponent,
    SiteLayoutComponent
  ],
    imports: [
        HttpClientModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatTableModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MatToolbarModule,
        MatIconModule,
        AngularMaterialModule,
        MatCardModule,
        MatCheckboxModule,
        MatSortModule
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
