import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import {WeatherService} from './weather.service';
import {CityContainerComponent} from './city/city.container.component';
import {UserModule} from './user/user.module';

const appRoutes: Routes = [
  { path: 'weather', component: CityContainerComponent, pathMatch: 'full' },
  { path: 'users', loadChildren: () => import('./user/user.module').then(r => r)},
];

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    CityContainerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    UserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
