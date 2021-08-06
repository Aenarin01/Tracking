import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HomeRoutingModule} from "./home-routing.module";
import {HomeComponent} from "./home.component"
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatSidenavModule} from "@angular/material/sidenav";
import {AngularMaterialModule} from "../material.module";


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MatCardModule,
    MatSidenavModule,
    AngularMaterialModule,
  ]
})
export class HomeModule {
}
