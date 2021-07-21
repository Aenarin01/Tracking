import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../interfaces";

@Component({
  selector: 'app-users-display',
  templateUrl: './users-display.component.html',
  styleUrls: ['./users-display.component.css']
})
export class UsersDisplayComponent implements OnInit {

  users: User[]=[];
  currentUser:User = {name: "", password: "", email: "",role: ""} ;
  currentIndex = -1;
  name = '';

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.userService.getAll()
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  refreshList(): void {
    this.retrieveUsers();
    this.currentUser = {email: "", name: "", password: "",role: ""};
    this.currentIndex = -1;
  }

  setActiveTUser(user: User, index: number): void {

    this.currentUser = user;
    this.currentIndex = index;
  }

}
