import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EventCalendarService } from '../../services/event-calendar.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  event = {
    title: '',
    description: '',
    start: '',
    end: ''
  };
  error: any;
  constructor(
    public http: HttpClient,
    private eventService: EventCalendarService,
    private router: Router
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
          if (response.type === 'success') {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your Event has been added successfully',
              showConfirmButton: false,
              timer: 1500
            });
            this.router.navigate(['/main']);
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
