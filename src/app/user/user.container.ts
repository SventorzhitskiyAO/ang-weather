import {Component, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

import {UserInterface} from '../interfaces/user.interface';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-user-container',
  template: `<app-user [user]="user$ | async" (submitUpdate)="change($event)" (submitDelete)="delete()"></app-user>`,
})
export class UserContainerComponent implements OnInit{
  id: number;
  private subscription: Subscription;
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
}
