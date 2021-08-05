import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HomeRoutingModule} from "./home-routing.module";
import {HomeComponent} from "./home.component"
import {FullCalendarModule} from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import {AddEventComponent} from './add-event/add-event.component';
import {FormsModule} from "@angular/forms";

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    HomeComponent,
    AddEventComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FullCalendarModule,
    FormsModule,
  ]
})
export class HomeModule {
}
