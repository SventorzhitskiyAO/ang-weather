import {Component} from '@angular/core';
import {UsersService} from './user/shared/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  UsersService =  UsersService;

  logout(): void {
    UsersService.logOut();
  }
}
