import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Calendar, CalendarOptions, DateSelectArg, EventApi, EventClickArg} from '@fullcalendar/angular';
import {Event} from "../../../interfaces";
import Swal from 'sweetalert2';
import {HttpClient} from "@angular/common/http";
import {EventCalendarService} from "../../../services/event-calendar.service";


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})


export class CalendarComponent implements AfterViewInit {

  @ViewChild('infobox', {static: false}) calendarRef: ElementRef;
   calendarVisible: boolean = true;

  @Input()

  set events(value) {
    this._events = value;

    this.calendarOptions = {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      firstDay: 1,
      initialView: 'dayGridMonth',
      weekends: true,
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      select: this.handleDateSelect.bind(this),
      events: value,
      eventClick: this.handleEventClick.bind(this),
    }
    if (this.calendar) {
      this.calendar.addEvent(value)
      this.calendar.render()
    }
  }

  get events() {
    return this._events;
  }

  calendar: Calendar
  _events: Event[] = []
  calendarOptions: CalendarOptions;
  error: any;

  constructor(
    public http: HttpClient,
    private eventService: EventCalendarService
  ) {
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: '1',
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();

    }
  }

  deleteEvent(id: number) {
    this.eventService.remove(id).subscribe((data: any) => {});
  }

  ngAfterViewInit(): void {
    this.calendar = new Calendar(this.calendarRef.nativeElement, {

        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        initialView: 'dayGridMonth',
        selectable: true,
        editable: true,
        select: this.handleDateSelect.bind(this),
        events: this.events,
        eventClick: this.handleEventClick.bind(this)
      }
    )
  }
}
