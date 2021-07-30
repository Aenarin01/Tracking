import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../interfaces";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {NgForm} from "@angular/forms";
import { cloneDeep } from 'lodash';


@Component({
  selector: 'app-users-display',
  templateUrl: './users-display.component.html',
  styleUrls: ['./users-display.component.css']
})


export class UsersDisplayComponent implements OnInit, AfterViewInit {

  tmpUser: User;
  users: User[] = []
  dataSource: MatTableDataSource<User> =new MatTableDataSource<User>([]);
  displayedColumns = ['_id', 'name', 'role', 'email', 'actions'];
  displayedRoles = ['basic', 'supervisor', 'admin', 'user'];

  isEditMode: boolean = false

  user = {
    name: '',
    email: '',
    password: '',
    role: ''
  };
  submitted = false

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
          this.dataSource.data = data;
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


  applyFilter($event: KeyboardEvent) {
    // @ts-ignore
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  saveUser(): void {
    this.userService.create(this.user).subscribe((response: any) => {
      this.dataSource.data.push({ ...response })
      this.dataSource.data = this.dataSource.data.map(o => {
        return o;
      })
    });
    this.submitted = false;
    this.user = {
      name: '',
      email: '',
      password: '',
      role: ''
    };
  }

  deleteItem(id:number) {
    this.userService.delete(id).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.filter((o: User) => {
        return o.id !== id ? o : false;
      })

      console.log(this.dataSource.data);
    });
  }
  editUser(user: User) {
    this.tmpUser = cloneDeep(user);
    this.isEditMode = true;
  }

  cancelEdit(user: User) {
    this.isEditMode = false;
    user = cloneDeep(this.tmpUser)
  }

  updateUser(user:User) {
    this.userService.update(this.tmpUser).subscribe((response: any) => {

      this.dataSource.data = this.dataSource.data.map((o: User) => {
        if (o.id === response.id) {
          o = response;
        }
        return o;
      })
      this.cancelEdit(user)

    });
  }

  onSubmit() {
    this.saveUser();
  }
}

// import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
// import {UserService} from "../../services/user.service";
// import {User} from "../../interfaces";
// import {MatTableDataSource} from "@angular/material/table";
// import {Router} from "@angular/router";
// import {MatPaginator} from "@angular/material/paginator";
// import {MatSort} from "@angular/material/sort";
// import {NgForm} from "@angular/forms";
// import {cloneDeep} from 'lodash';
//
//
// @Component({
//   selector: 'app-users-display',
//   templateUrl: './users-display.component.html',
//   styleUrls: ['./users-display.component.css']
// })
//
//
// export class UsersDisplayComponent implements OnInit, AfterViewInit {
//
//   tmpUser: User;
//   users: User[] = []
//   dataSource: MatTableDataSource<User> = new MatTableDataSource<User>([]);
//   displayedColumns = ['_id', 'name', 'role', 'email', 'actions'];
//   displayedRoles = ['basic', 'supervisor', 'admin', 'user'];
//
//   isEditMode: boolean = false
//   isAddMode: boolean = false
//
//   user = {
//     name: '',
//     email: '',
//     password: '',
//     role: ''
//   };
//   submitted = false
//
//   @ViewChild(MatPaginator) paginator: MatPaginator;
//   @ViewChild(MatSort) sort: MatSort;
//   @ViewChild('studentForm', {static: false})
//   userForm: NgForm;
//
//   constructor(private userService: UserService,
//               private router: Router) {
//   }
//
//   ngOnInit() {
//     this.retrieveUsers()
//   }
//
//
//   retrieveUsers(): void {
//     this.userService.getAll()
//       .subscribe(
//         data => {
//           this.dataSource.data = data;
//         },
//         error => {
//           console.log(error);
//         }
//       );
//   }
//
//   ngAfterViewInit() {
//     this.dataSource.paginator = this.paginator
//     this.dataSource.sort = this.sort
//   }
//
//
//   applyFilter($event: KeyboardEvent) {
//     // @ts-ignore
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();
//
//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }
//
//   saveUser(user:User): void {
//     const emptyUser = {
//       id: -1,
//       name: '',
//       email: '',
//       password: '',
//       role: ''
//     };
//     this.dataSource.data = [this.user, ...this.dataSource.data]
//     // this.userService.create(this.user).subscribe((response: any) => {
//     //   this.dataSource.data = this.dataSource.data.map(o => {
//     //     return o;
//     //   })
//     // });
//     this.submitted = false;
//     this.editUser(this.dataSource.data[0])
//
//   }
//
//   deleteItem(id: number) {
//     this.userService.delete(id).subscribe((response: any) => {
//       this.dataSource.data = this.dataSource.data.filter((o: User) => {
//         return o.id !== id ? o : false;
//       })
//       console.log(this.dataSource.data);
//     });
//   }
//
//   editUser(user: User) {
//     this.tmpUser = cloneDeep(user);
//     this.isEditMode = true;
//   }
//
//   cancelEdit(user: User) {
//     this.isEditMode = false;
//     if (user.id === -1) {
//       this.dataSource.data.splice(0, 1);
//       return ;
//     }
//     user = cloneDeep(this.tmpUser)
//   }
//
//   updateUser(user: User) {
//     this.userService.update(this.tmpUser).subscribe((response: any) => {
//       this.dataSource.data = this.dataSource.data.map((o: User) => {
//         if (o.id === response.id) {
//           o = response;
//         }
//         return o;
//       })
//       this.cancelEdit(user)
//
//     });
//   }
//
//   onSubmit() {
//     this.saveUser(this.tmpUser);
//   }
// }
//
