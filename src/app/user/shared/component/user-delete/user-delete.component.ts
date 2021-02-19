import {Component, EventEmitter, Output} from '@angular/core';
import {UserInterface} from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent {
  @Output()
  submitDelete: EventEmitter<UserInterface> = new EventEmitter<UserInterface>();

  subDelete(): void {
    this.submitDelete.emit();
  }
}
