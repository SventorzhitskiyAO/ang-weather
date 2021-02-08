import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import {FormsModule} from '@angular/forms';
import {WeatherService} from './weather.service';
import {CityContainerComponent} from './city/city.container.component';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    CityContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
