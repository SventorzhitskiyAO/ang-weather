import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

import {UserInterface} from '../shared/interfaces/user.interface';
import {UsersService} from '../shared/services/users.service';

@Component({
  selector: 'app-user-container',
  template: `<app-user *ngIf="user$ | async as user" [user]="user" (submitUpdate)="change($event)" (submitDelete)="delete()"></app-user>`,
})
export class UserContainerComponent implements OnInit, OnDestroy{
  id: string;
  private subscription: Subscription;
  private deleteSubscription: Subscription;
  user$: Observable<UserInterface>;

  constructor(
    private usersService: UsersService,
    private activateRoute: ActivatedRoute,
    private route: ActivatedRoute, private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.activateRoute.params.subscribe(params => this.id = params.id);
    this.user$ = this.usersService.getOneUser(this.id);
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

  delete(): void {
    this.usersService.delete(this.id).subscribe();
    this.router.navigate(['']).then(r => r);
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

