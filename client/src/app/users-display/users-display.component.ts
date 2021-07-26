import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../interfaces";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-users-display',
  templateUrl: './users-display.component.html',
  styleUrls: ['./users-display.component.css']
})


export class UsersDisplayComponent implements OnInit, AfterViewInit {

  currentUser: User;
  users: User[] = []
  dataSource!: MatTableDataSource<User>;
  displayedColumns = ['_id', 'name', 'role', 'email', 'actions'];
  displayedRoles = ['basic', 'supervisor', 'admin', 'user'];

  isEditMode: boolean = false

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('studentForm', {static: false})
  userForm: NgForm;

  constructor(private userService: UserService,
              private router: Router) {
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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  ChangeMode() {
    this.isEditMode = !this.isEditMode
  }

  applyFilter($event: KeyboardEvent) {
    // @ts-ignore
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addNew() {

  }

  deleteItem(user: User) {

  }

  editUser(user: User) {

  }

  onSubmit() {

  }

  cancelEdit() {

  }
}

