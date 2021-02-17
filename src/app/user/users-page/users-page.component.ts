import {Component, Input} from '@angular/core';
import {UserInterface} from '../shared/interfaces/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent {

  @Input()
  users: UserInterface[];
}
