import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-auth-layouts',
  templateUrl: './auth-layouts.component.html',
  styleUrls: ['./auth-layouts.component.css']
})
export class AuthLayoutsComponent implements OnInit {
  opened = true
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav | undefined;
  constructor() { }

  ngOnInit() {
  }

}
