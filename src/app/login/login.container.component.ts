import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

// import {UserInterface} from '../interfaces/user.interface';
import {UsersService} from '../users.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-login-container',
  template: `<app-login (submitLog)="login($event)"></app-login>`,
})
export class LoginContainerComponent {
  id: number;

  constructor(
    private usersService: UsersService,
    private activateRoute: ActivatedRoute,
    private route: ActivatedRoute, private router: Router
  ) {}

  login(body): void{
    this.usersService.login(body)
      .pipe(
        map((data) => {
          localStorage.setItem('token',  data.token);
          this.router.navigate([`users/${data.user._id}`]).then();
        })
      ).subscribe();
  }
}
