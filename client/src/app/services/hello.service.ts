import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HelloService {

  constructor(private httpClient: HttpClient) { }

   getName(): Observable<any>{
    return this.httpClient.get('http://localhost:3020/hello');
  }
}
