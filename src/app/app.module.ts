import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import {WeatherService} from './weather.service';
import {CityContainerComponent} from './city/city.container.component';
import { UsersComponent } from './users/users.component';
import {UsersService} from './users.service';
import {UsersContainerComponent} from './users/users.container';
import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import {LoginComponent} from './login/login.component';
import {appRoutes} from './routes/users.routes';
import {UserContainerComponent} from './user/user.container';
import {LoginContainerComponent} from './login/login.container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    CityContainerComponent,
    UsersContainerComponent,
    UsersComponent,
    UserComponent,
    CreateUserComponent,
    LoginComponent,
    LoginContainerComponent,
    UserContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    WeatherService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
