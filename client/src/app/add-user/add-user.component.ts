import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../services/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})


export class AddUserComponent implements OnInit {

  user = {
    name: '',
    email: '',
    password: '',
    role: ''
  };
  submitted = false

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  saveUser(): void {
    const data = {
      name: this.user.name,
      email: this.user.email,
      password: this.user.password,
      role: this.user.role
    };

    this.userService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        }
      );
  }

  newUser(): void {
    this.submitted = false;
    this.user = {
      name: '',
      email: '',
      password: '',
      role: ''
    };
  }

}
