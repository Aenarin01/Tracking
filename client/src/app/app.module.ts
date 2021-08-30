import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {AppRoutingModule} from './app-routing.module';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from '@angular/material/table';
import {AngularMaterialModule} from "./material.module";
import {MatCardModule} from "@angular/material/card";
import {SiteLayoutComponent} from './shared/layouts/site-layout/site-layout.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {TokenInterceptor} from "./services/token.interceptor";
import {MatSortModule} from "@angular/material/sort";
import { LoaderComponent } from './shared/components/loader/loader.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    LoaderComponent
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
        MatSortModule,
        MatProgressSpinnerModule
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
