import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginPageContainerComponent} from './login-page/login-page.container.component';
import {UsersContainerComponent} from './users-page/users-page.container';
import {CreateUserPageComponent} from './create-user-page/create-user-page.component';
import {UserContainerComponent} from './user-page/user-page.container';

const UserRoutes: Routes = [
  {
    path: 'login',
    component: LoginPageContainerComponent,
  },
  {
    path: '',
    component: UsersContainerComponent,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreateUserPageComponent,
    pathMatch: 'full'
  },
  {
    path: ':id',
    component: UserContainerComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(UserRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
