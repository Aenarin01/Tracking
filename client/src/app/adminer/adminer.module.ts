import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {AngularMaterialModule} from "../material.module";
import {MatCardModule} from "@angular/material/card";
import {UsersDisplayComponent} from "./users-display/users-display.component";
import {AdminerRoutingModule} from "./adminer-routing.module";
import {AdminerComponent} from "./adminer.component";


@NgModule({
  declarations: [UsersDisplayComponent, AdminerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatIconModule,
    AngularMaterialModule,
    MatCardModule,
    AdminerRoutingModule
  ]
})
export class AdminerModule {
}
