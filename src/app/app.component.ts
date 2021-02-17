import {Component} from '@angular/core';
import {UsersService} from './user/shared/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public service: UsersService) {
  }


  logout(event: Event): void {
    this.service.logOut();
  }
}
