import { Component, OnInit } from '@angular/core';
import {EventCalendarService} from "../../services/event-calendar.service";
import {Calendar} from "@fullcalendar/angular";
import {Event} from "../../interfaces";

@Component({
  selector: 'app-events-shedule',
  templateUrl: './events-shedule.component.html',
  styleUrls: ['./events-shedule.component.css']
})
export class EventsSheduleComponent implements OnInit {


  events: Event [] = []
  calendar: Calendar

  constructor(private eventService:EventCalendarService) { }


  ngOnInit(): void {
    this.getAllEvents()

  }
  addEvent(event:Event){
    this.events = [...this.events, event]
  }

  getAllEvents() {
     this.eventService.getAll().subscribe((data: any) => {
       this.events = data
    });
  }
}
