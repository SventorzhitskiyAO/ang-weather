import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../shared/services/users.service';
import {map, switchMap, tap} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/state/app.state';
import {Login} from '../../store/actions/user.action';
import {selectSelectedUser} from '../../store/selectors/user.selectors';
import {UserInterface} from '../shared/interfaces/user.interface';

@Component({
  selector: 'app-login-container',
  template: `<app-login (submitLog)="login($event)"></app-login>`,
})
export class LoginPageContainerComponent implements OnInit, OnDestroy{
  id: number;
  private subscription: Subscription;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  login(body): void{
    this.store.dispatch(new Login(body));
    this.subscription = this.store.select(selectSelectedUser)
      .pipe(
        map((data: UserInterface) => {
          if (data !== null){
            this.router.navigate([`users/`, `${data._id}`]);
          }
        })
      )
      .subscribe();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (!!this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
