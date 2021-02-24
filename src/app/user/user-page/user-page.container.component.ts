import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

import {AppState} from '../../store/state/app.state';
import {Store} from '@ngrx/store';
import {GetUser, IsAuth} from '../../store/actions/user.action';
import {authMe, selectSelectedUser} from '../../store/selectors/user.selectors';

@Component({
  selector: 'app-user-container',
  template: `<app-user *ngIf="user$ | async as user" [user]="user" [me]="me$ | async"></app-user>`,
})
export class UserContainerComponent implements OnInit, OnDestroy{
  id: string;
  private subscription: Subscription;
  user$ = this.store.select(selectSelectedUser);
  me$ = this.store.select(authMe);

  constructor(
    private activateRoute: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.subscription = this.activateRoute.params.subscribe(params => this.id = params.id);
    this.store.dispatch(new GetUser(this.id));
    this.store.dispatch(new IsAuth());
  }

  ngOnDestroy(): void {
    if (!!this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
