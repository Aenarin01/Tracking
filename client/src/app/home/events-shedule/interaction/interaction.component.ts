import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EventCalendarService } from '../../../services/event-calendar.service';
import {Event} from "../../../interfaces";

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit {

  @Output() addEvent: EventEmitter<Event> = new EventEmitter<Event>();

  event = {
    id: '',
    title: '',
    description: '',
    start: '',
    end: ''
  };
  error: any;
  constructor(
    public http: HttpClient,
    private eventService: EventCalendarService
  ) { }

  ngOnInit() {
  }
  saveEvent() {
    const event = {
      title: this.event.title,
      description: this.event.description,
      start: this.event.start,
      end: this.event.end
    };
    this.eventService.create(event)
      .subscribe(
        (response: any) => {
          this.event.id = response.id
          this.addEvent.emit(this.event)
          if (response.type === 'success') {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your Event has been added successfully',
              showConfirmButton: false,
              timer: 1500
            });
          }
        },
        err => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Something went wrong',
            showConfirmButton: false,
            timer: 1500
          });
          this.event.title = '';
          this.event.description = '';
          this.event.start = '';
          this.event.end = '';
        });
  }
}
