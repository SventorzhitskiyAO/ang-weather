import {Routes} from '@angular/router';
import {CityContainerComponent} from '../city/city.container.component';
import {UsersContainerComponent} from '../users/users.container';
import {CreateUserComponent} from '../create-user/create-user.component';
import {UserContainerComponent} from '../user/user.container';
import {LoginContainerComponent} from '../login/login.container.component';

export const appRoutes: Routes = [
  { path: '', component: LoginContainerComponent, pathMatch: 'full' },
  { path: 'weather', component: CityContainerComponent, pathMatch: 'full' },
  { path: 'users', component: UsersContainerComponent, pathMatch: 'full' },
  { path: 'users/:id', component: UserContainerComponent },
  { path: 'create-user', component: CreateUserComponent, pathMatch: 'full' },
  // { path: '**', redirectTo: '' }
];

