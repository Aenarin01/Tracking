import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersDisplayComponent} from "./users-display/users-display.component";
import {UserInfoComponent} from "./user-info/user-info.component";
import {AddUserComponent} from "./add-user/add-user.component";

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersDisplayComponent },
  { path: 'users/:id', component: UserInfoComponent },
  { path: 'add', component: AddUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}

