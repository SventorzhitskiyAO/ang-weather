import {Component, OnInit} from '@angular/core';

import { Store} from '@ngrx/store';
import {AppState} from '../../store/state/app.state';
import {selectUserList} from '../../store/selectors/user.selectors';
import {GetUsers} from '../../store/actions/user.action';

@Component({
  selector: 'app-user-container',
  template: `<app-users [users]="users$ | async"></app-users>`,
})
export class UsersContainerComponent implements OnInit{
  users$ = this.store.select(selectUserList);

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new GetUsers());
  }
}

