import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersContainerComponent} from './users-page/users-page.container';
import {UsersPageComponent} from './users-page/users-page.component';
import {UserContainerComponent} from './user-page/user-page.container.component';
import {UserPageComponent} from './user-page/user-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {LoginPageComponent} from './login-page/login-page.component';
import {LoginPageContainerComponent} from './login-page/login-page.container.component';
import {CreateUserPageComponent} from './create-user-page/create-user-page.component';
import {UsersService} from './shared/services/users.service';
import {UserRoutingModule} from './user-routing.module';
import {AuthGuard} from '../shared/guards/auth.guard';
import {IsAuthGuard} from '../shared/guards/isAurhLogin.guard';
import { UserDeleteComponent } from './shared/component/user-delete/user-delete.component';
import { UserChangeComponent } from './shared/component/user-change/user-change.component';
import {UserDeleteContainerComponent} from './shared/component/user-delete/user-delete.container.component';
import {UserChangeContainerComponent} from './shared/component/user-change/user-change.container.component';

@NgModule({
  declarations: [
    UsersContainerComponent,
    UsersPageComponent,
    UserContainerComponent,
    UserPageComponent,
    LoginPageComponent,
    LoginPageContainerComponent,
    CreateUserPageComponent,
    UserDeleteComponent,
    UserChangeComponent,
    UserDeleteContainerComponent,
    UserChangeContainerComponent
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
    UsersService,
    AuthGuard,
    IsAuthGuard
  ]
})
export class UserModule { }
