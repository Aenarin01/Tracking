import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-site-layout',
  templateUrl: './adminer.component.html',
  styleUrls: ['./adminer.component.css']
})

export class AdminerComponent implements OnInit {
  links = [
    {url: '/add', name: 'Add'},
    {url: '/users', name: 'Users'}
  ];

  constructor(private auth: AuthService,
              private router: Router) {
  }


  ngOnInit() {
  }

  signOut(event: Event) {
    event.preventDefault()
    this.auth.logout()
    this.router.navigate(['/auth/login'])
  }
}
