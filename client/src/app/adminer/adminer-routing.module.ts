import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UsersDisplayComponent} from "./users-display/users-display.component";
import {AdminerComponent} from "./adminer.component";
import {AuthGuard} from "../services/auth.guard";

const routes: Routes = [
  {
    path: '',component: AdminerComponent, canActivate: [AuthGuard],  children: [
      {path: '', redirectTo: '/users',pathMatch: 'full'},
      {path: 'users', component: UsersDisplayComponent,},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminerRoutingModule { }
