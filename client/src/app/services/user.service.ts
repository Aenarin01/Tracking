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

  getAll(): Observable<User[]> {
    return this.http.get<User[]>('api/user');
  }

  get(id: string | null): Observable<any> {
    return this.http.get(`api/user/${id}`);
  }

  create(data: { name: string; email: string; password: string; role: string }): Observable<any> {
    return this.http.post('api/user', data);
  }

  update(user:User): Observable<any> {
    return this.http.put(`api/user/${user.id}`, user);
  }

  delete(user:User): Observable<any> {
    return this.http.delete(`api/user/${user.id}`);
  }
}


