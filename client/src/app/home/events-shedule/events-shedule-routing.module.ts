import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventsSheduleComponent} from './events-shedule.component';
import {CalendarComponent} from "./calendar/calendar.component";
import {InteractionComponent} from "./interaction/interaction.component";

const routes: Routes = [
  {
    path: '', component: EventsSheduleComponent, children: [
      // {path: '', redirectTo: '/calendar', pathMatch: 'full'},
      // {path: 'calendar', component: CalendarComponent,},
      // {path: 'interaction', component: InteractionComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsSheduleRoutingModule {
}
