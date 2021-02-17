import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersContainerComponent} from './users-page/users-page.container';
import {UsersPageComponent} from './users-page/users-page.component';
import {RouterModule} from '@angular/router';
import {UserContainerComponent} from './user-page/user-page.container';
import {UserPageComponent} from './user-page/user-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {LoginPageComponent} from './login-page/login-page.component';
import {LoginPageContainerComponent} from './login-page/login-page.container.component';
import {CreateUserPageComponent} from './create-user-page/create-user-page.component';
import {UsersService} from './shared/services/users.service';
import {UserRoutingModule} from './user-routing.module';

@NgModule({
  declarations: [
    UsersContainerComponent,
    UsersPageComponent,
    UserContainerComponent,
    UserPageComponent,
    LoginPageComponent,
    LoginPageContainerComponent,
    CreateUserPageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    UserRoutingModule
  ],
  providers: [
    UsersService
  ]
})
export class UserModule { }
