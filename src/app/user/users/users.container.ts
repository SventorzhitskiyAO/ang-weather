import {Component} from '@angular/core';
import {Observable} from 'rxjs';

import {UserInterface} from '../../interfaces/user.interface';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-user-container',
  template: `<app-users [users]="users$ | async"></app-users>`,
})
export class UsersContainerComponent {

  constructor(private usersService: UsersService) {
  }

  users$: Observable<UserInterface[]> = this.usersService.getUsers();
}

