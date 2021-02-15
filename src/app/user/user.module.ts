import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersContainerComponent} from './users/users.container';
import {UsersComponent} from './users/users.component';
import {RouterModule} from '@angular/router';
import {UserContainerComponent} from './user/user.container';
import {UserComponent} from './user/user.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {LoginComponent} from './login/login.component';
import {LoginContainerComponent} from './login/login.container.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {UsersService} from './users.service';
import {userRoutes} from '../routes/users.routes';

@NgModule({
  declarations: [
    UsersContainerComponent,
    UsersComponent,
    UserContainerComponent,
    UserComponent,
    LoginComponent,
    LoginContainerComponent,
    CreateUserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild(userRoutes),
  ],
  providers: [
    UsersService
  ]
})
export class UserModule { }
