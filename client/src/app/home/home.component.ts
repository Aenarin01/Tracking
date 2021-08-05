import { Component } from '@angular/core';
import {CalendarOptions, DateSelectArg, EventApi, EventClickArg} from '@fullcalendar/angular';
import {createEventId} from "./event-utils";
import {Events} from "../interfaces";
import Swal from 'sweetalert2';
import {HttpClient} from "@angular/common/http";
import {EventCalendarService} from "../services/event-calendar.service";

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  calendarOptions: CalendarOptions;
  error: any;
  events: Events;
  constructor(
    public http: HttpClient,
    private eventService:  EventCalendarService
  ) {}

  handleDateClick(arg: any) {

  }

  onSelectx(event: any) {

  }

  ngOnInit() {
    this.getAllEvents();
  }

  deleteEvent(id: number) {
    this.eventService.remove(id).subscribe((data: any) => {});
  }

  getAllEvents() {
    this.eventService.getAll().subscribe((data: any) => {
      const self = this;
      this.calendarOptions = {
        headerToolbar: {
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            },
        initialView: 'dayGridMonth',
        selectable: true,
        editable: true,
        select: this.handleDateClick.bind(this),
        events: data,
        eventClick(evetData) {
          const event_id = evetData.event._def.extendedProps._id;
          Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            timer: 30000,
          }).then((result) => {
            if (result.value) {
              self.deleteEvent(event_id);
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              );
              self.getAllEvents();
            }

          }).catch(() => {
            Swal.fire('Failed!', 'There was something went wrong.');
          });
        }
      };
    });
  }
  // calendarVisible = true;
  // calendarOptions: CalendarOptions = {
  //   headerToolbar: {
  //     left: 'prev,next today',
  //     center: 'title',
  //     right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  //   },
  //   initialView: 'dayGridMonth',
  //   weekends: true,
  //   editable: true,
  //   selectable: true,
  //   selectMirror: true,
  //   dayMaxEvents: true,
  //   select: this.handleDateSelect.bind(this),
  //   eventClick: this.handleEventClick.bind(this),
  //   eventsSet: this.handleEvents.bind(this),
  //   dateClick: this.handleDateClick.bind(this),
  //   events: [
  //     { title: 'event 1', date: '2019-04-01' },
  //     { title: 'event 2', date: '2019-04-02' }
  //   ]
  // }
  //
  // currentEvents: EventApi[] = [];
  //
  // handleCalendarToggle() {
  //   this.calendarVisible = !this.calendarVisible;
  // }
  //
  // handleWeekendsToggle() {
  //   const { calendarOptions } = this;
  //   calendarOptions.weekends = !calendarOptions.weekends;
  // }
  //
  // handleDateSelect(selectInfo: DateSelectArg) {
  //   const title = prompt('Please enter a new title for your event');
  //   const calendarApi = selectInfo.view.calendar;
  //
  //   calendarApi.unselect(); // clear date selection
  //
  //   if (title) {
  //     calendarApi.addEvent({
  //       id: createEventId(),
  //       title,
  //       start: selectInfo.startStr,
  //       end: selectInfo.endStr,
  //       allDay: selectInfo.allDay
  //     });
  //   }
  // }
  //
  // handleEventClick(clickInfo: EventClickArg) {
  //   if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
  //     clickInfo.event.remove();
  //   }
  // }
  //
  // handleDateClick(arg: { dateStr: string; }) {
  //   alert('date click! ' + arg.dateStr)
  // };
  //
  // handleEvents(events: EventApi[]) {
  //   this.currentEvents = events;
  // }

}
