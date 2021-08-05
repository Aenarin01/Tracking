import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };

}
