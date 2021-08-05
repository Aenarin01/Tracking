import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {AddEventComponent} from "./add-event/add-event.component";

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'add-event', component: AddEventComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
