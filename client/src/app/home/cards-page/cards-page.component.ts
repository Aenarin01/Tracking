import { Component, OnInit } from '@angular/core';
import {User, Event} from "../../interfaces";
import {EventCalendarService} from "../../services/event-calendar.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cards-page',
  templateUrl: './cards-page.component.html',
  styleUrls: ['./cards-page.component.css']
})
export class CardsPageComponent implements OnInit {

  tmpUser: User;
  events: Event [] = []

  events$: Observable<Event[]>

  constructor(private eventService: EventCalendarService) { }

  ngOnInit(): void {
    this.events$ = this.eventService.getAll()
  }

  getEvents(){
    this.eventService.getAllEvents()
  }

}
