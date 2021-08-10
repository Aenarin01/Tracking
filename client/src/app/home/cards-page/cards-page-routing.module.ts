import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardsPageComponent} from "./cards-page.component";

const routes: Routes = [{
  path: '', component: CardsPageComponent,pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsPageRoutingModule { }
