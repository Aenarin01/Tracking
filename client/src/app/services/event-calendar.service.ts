import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {Event, User} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class EventCalendarService {

  constructor(
    private http: HttpClient,
    public router: Router
  ) { }

  getAll(): Observable<Event[]> {
    return this.http.get<Event[]>('api/event');
  }

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>('api/event/all');
  }

  get(id: string | null): Observable<any> {
    return this.http.get(`api/event/${id}`);
  }

  create(event:Event): Observable<any> {
    return this.http.post('api/event', event);
  }

  update(event:Event): Observable<any> {
    return this.http.put(`api/event/${event.id}`, event);
  }

  remove(id:number): Observable<any> {
    return this.http.delete(`api/event/${id}`);
  }
}
