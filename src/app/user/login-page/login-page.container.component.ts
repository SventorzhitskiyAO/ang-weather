import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/state/app.state';
import {Login} from '../../store/actions/user.action';
import {selectSelectedUser} from '../../store/selectors/user.selectors';
import {UserInterface} from '../shared/interfaces/user.interface';

@Component({
  selector: 'app-login-container',
  template: `
    <app-login (submitLog)="login($event)"></app-login>`,
})
export class LoginPageContainerComponent implements OnInit, OnDestroy {
  id: number;
  private subscription: Subscription;

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('token')){
      return; // если есть токен то на страницу пользователя, нету - на страницу логина(ничего не происходит) как это реализовать на сервере?
    }
  }

  login(body): void {
    this.store.dispatch(new Login(body));
    this.subscription = this.store.select(selectSelectedUser)
      .pipe(
        map((data: UserInterface) => {
          if (data !== null) {
            this.router.navigate([`users/`, `${data._id}`]);
          }
        })
      ).subscribe();
  }

  ngOnDestroy(): void {
    if (!!this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
