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


export class CalendarComponent implements OnInit, AfterViewInit {

  @ViewChild('infobox', {static: false}) calendarRef: ElementRef;

  @Input()

  set events(value) {
    this._events = value;
    console.log(value)

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
      events: value,
      eventClick: this.eventClick.bind(this)
    }
    if (this.calendar) {
      this.calendar.addEvent(value)
      console.log(this.calendar)
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

  handleDateClick(arg: any) {

  }

  onSelectx(event: any) {

  }

  ngOnInit() {

  }

  deleteEvent(id: number) {
    this.eventService.remove(id).subscribe((data: any) => {
    });
  }

  private eventClick(evetData: any) {
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
        this.deleteEvent(event_id);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }

    }).catch(() => {
      Swal.fire('Failed!', 'There was something went wrong.');
    });
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
        select: this.handleDateClick.bind(this),
        events: this.events,
        eventClick: this.eventClick.bind(this)
      }
    )
  }
}
