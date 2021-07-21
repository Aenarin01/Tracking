import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {User} from '../interfaces'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<User> {
    return this.http.get<User>('api/user');
  }

  get(id: string): Observable<User> {
    return this.http.get<User>(`api/user/${id}`);
  }

  create(data: User): Observable<User> {
    return this.http.post<User>('api/user', data);
  }

  update(id: string, data: string): Observable<User> {
    return this.http.put<User>(`api/user/${id}`, data);
  }

  delete(id: string): Observable<User> {
    return this.http.delete<User>(`api/user/${id}`);
  }
}


