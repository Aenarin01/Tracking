import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";

const routes: Routes = [
  {path: '', component: HomeComponent,  children: [
      { path: 'eventsShedule', loadChildren: () => import('./events-shedule/events-shedule.module').then(m => m.EventsSheduleModule) },
      { path: 'map', loadChildren: () => import('./map/map.module').then(m => m.MapModule) },
      { path: '', loadChildren: () => import('./cards-page/cards-page.module').then(m => m.CardsPageModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
