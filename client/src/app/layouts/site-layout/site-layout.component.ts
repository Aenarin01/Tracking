import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent implements OnInit {
constructor(private auth: AuthService,
            private router: Router) {
}
  opened = true;
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav | undefined;

  ngOnInit() {
    console.log(window.innerWidth)
    if (window.innerWidth < 768) {
      // @ts-ignore
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      // @ts-ignore
      this.sidenav.fixedTopGap = 55;
      this.opened = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
    if (event.target.innerWidth < 768) {
      // @ts-ignore
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      // @ts-ignore
      this.sidenav.fixedTopGap = 55
      this.opened = true;
    }
  }

  isBiggerScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 768) {
      return true;
    } else {
      return false;
    }
  }

  logout(event: Event) {
    event.preventDefault()
    this.auth.logout()
    this.router.navigate(['/login'])
  }

}
