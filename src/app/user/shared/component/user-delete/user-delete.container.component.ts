import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-user-delete-container',
  template: `<app-user-delete (submitDelete)="delete()"></app-user-delete>`,
})
export class UserDeleteContainerComponent implements OnInit, OnDestroy{
  id: string;
  private subscription: Subscription;
  private deleteSubscription: Subscription;

  constructor(
    private usersService: UsersService,
    private activateRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.subscription = this.activateRoute.params.subscribe(params => this.id = params.id);

  }

  delete(): void {
    this.deleteSubscription = this.usersService.delete(this.id).subscribe();
    this.router.navigate(['/users', 'login']);
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

