import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private auth: AuthService,
              private router: Router) {
  }

  signOut(event: Event) {
    event.preventDefault()
    this.auth.logout()
    this.router.navigate(['/auth/login'])
  }
}
