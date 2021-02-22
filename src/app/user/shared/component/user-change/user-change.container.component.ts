import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {selectSelectedUser} from '../../../../store/selectors/user.selectors';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../store/state/app.state';
import {ChangeUser} from '../../../../store/actions/user.action';

@Component({
  selector: 'app-user-change-container',
  template: `<app-user-change *ngIf="user$ | async as user" [user]="user" (submitUpdate)="change($event)"></app-user-change>`,
})
export class UserChangeContainerComponent implements OnInit, OnDestroy{
  id: string;
  private subscription: Subscription;
  user$ = this.store.select(selectSelectedUser);

  constructor(
    private activateRoute: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.subscription = this.activateRoute.params.subscribe(params => this.id = params.id);
  }

  change(body): void{
    for (const key in body) {
      if (!body[key]) {
        delete body[key];
      }
    }
    body.id = this.id;
    this.store.dispatch(new ChangeUser(body));
    this.user$ = this.store.select(selectSelectedUser);
  }

  ngOnDestroy(): void {
    if (!!this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

