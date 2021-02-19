import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

import {UsersService} from '../shared/services/users.service';
import {AppState} from '../../store/state/app.state';
import {Store} from '@ngrx/store';
import {GetUser} from '../../store/actions/user.action';
import {selectSelectedUser} from '../../store/selectors/user.selectors';

@Component({
  selector: 'app-user-container',
  template: `<app-user *ngIf="user$ | async as user" [user]="user" (submitUpdate)="change($event)"></app-user>`,
})
export class UserContainerComponent implements OnInit, OnDestroy{
  id: string;
  private subscription: Subscription;
  private deleteSubscription: Subscription;
  user$ = this.store.select(selectSelectedUser);

  constructor(
    private usersService: UsersService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.subscription = this.activateRoute.params.subscribe(params => this.id = params.id);
    this.store.dispatch(new GetUser(this.id));
  }

  change(body): void{
    let key: string;
    for (key in body) {
      if (!body[key]) {
        delete body[key];
      }
    }
    this.user$ = this.usersService.change(this.id, body);
  }

  ngOnDestroy(): void {
    if (!!this.subscription) {
      this.subscription.unsubscribe();
    }

    if (!!this.deleteSubscription) {
      this.deleteSubscription.unsubscribe();
    }
  }
}

