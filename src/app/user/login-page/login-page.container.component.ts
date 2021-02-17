import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../shared/services/users.service';
import {map} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login-container',
  template: `<app-login (submitLog)="login($event)"></app-login>`,
})
export class LoginPageContainerComponent implements OnInit, OnDestroy{
  id: number;
  private subscription: Subscription;

  constructor(
    private usersService: UsersService,
    private activateRoute: ActivatedRoute,
    private route: ActivatedRoute, private router: Router
  ) {}

  login(body): void{
    this.subscription = this.usersService.login(body)
      .pipe(
        map((data) => {
          localStorage.setItem('token',  data.token);
          this.router.navigate([`users/`, `${data.user._id}`]);
        })
      ).subscribe();

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (!!this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
