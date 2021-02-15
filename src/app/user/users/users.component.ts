import {Component, Input} from '@angular/core';
import {UserInterface} from '../../interfaces/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  @Input()
  users: UserInterface[];
}
