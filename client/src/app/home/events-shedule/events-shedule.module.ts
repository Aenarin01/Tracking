import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FullCalendarModule} from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventsSheduleRoutingModule } from './events-shedule-routing.module';
import { EventsSheduleComponent } from './events-shedule.component';
import {CalendarComponent} from "./calendar/calendar.component";
import {InteractionComponent} from "./interaction/interaction.component";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatSidenavModule} from "@angular/material/sidenav";


FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    EventsSheduleComponent,
    CalendarComponent,
    InteractionComponent
  ],
  imports: [
    CommonModule,
    EventsSheduleRoutingModule,
    FormsModule,
    MatCardModule,
    FullCalendarModule,
    MatSidenavModule
  ]
})
export class EventsSheduleModule { }
