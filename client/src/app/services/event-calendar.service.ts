import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {Events, User} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class EventCalendarService {

  constructor(
    private http: HttpClient,
    public router: Router
  ) { }

  getAll(): Observable<Events[]> {
    return this.http.get<Events[]>('api/event');
  }

  get(id: string | null): Observable<any> {
    return this.http.get(`api/event/${id}`);
  }

  create(event:Events): Observable<any> {
    return this.http.post('api/event', event);
  }

  remove(id:number): Observable<any> {
    return this.http.delete(`api/event/${id}`);
  }
}
