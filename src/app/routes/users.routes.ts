import {Routes} from '@angular/router';
import {UsersContainerComponent} from '../user/users/users.container';
import {CreateUserComponent} from '../user/create-user/create-user.component';
import {UserContainerComponent} from '../user/user/user.container';
import {LoginContainerComponent} from '../user/login/login.container.component';
import {UserAuthGuard} from '../user/user-auth.guard';

export const userRoutes: Routes = [
  {
    path: 'users/login',
    component: LoginContainerComponent,
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersContainerComponent,
    pathMatch: 'full'
  },
  {
    path: 'users/create',
    component: CreateUserComponent,
    pathMatch: 'full'
  },
  {
    path: 'users/:id',
    component: UserContainerComponent,
    pathMatch: 'full',
    canActivate: [UserAuthGuard]
  },
  // { path: '**', redirectTo: '' }
];
