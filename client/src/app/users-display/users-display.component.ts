import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../interfaces";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
@Component({
  selector: 'app-users-display',
  templateUrl: './users-display.component.html',
  styleUrls: ['./users-display.component.css']
})

export class UsersDisplayComponent implements OnInit{

  users: User[] = []
  dataSource!: MatTableDataSource<User>;
  displayedColumns = ['_id','name','email', 'role','actions'];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.retrieveUsers()
  }

  retrieveUsers(): void {
    this.userService.getAll()
      .subscribe(
        data => {
          this.dataSource = new MatTableDataSource(data);
        },
        error => {
          console.log(error);
        }
      );
  }


  addData() {

  }

  addNew() {

  }

  startEdit() {

  }

  deleteItem() {

  }

  refresh() {

  }
}

