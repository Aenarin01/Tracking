import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {User} from '../interfaces'
import {tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string | null = null;

  constructor(private http: HttpClient) {
  }

  register(user: User): Observable<User> {
    return this.http.post<User>('/api/auth/register', user)
  }

  login(user: User): Observable<{token: string}> {
    return this.http.post<any>('/api/auth/login', user)
      .pipe(
        tap(
          (token) => {
            console.log(token)
            localStorage.setItem('auth-token', token.token)
            localStorage.setItem('auth', token.token)
            this.setToken(token.token)
          }
        )
      )
  }

  setToken(token: string | null) {
    this.token = token
  }

  getToken(): string | null{
    return this.token
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  logout() {
    this.setToken(null)
    localStorage.clear()
  }
}
