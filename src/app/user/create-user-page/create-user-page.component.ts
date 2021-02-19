import { Component, OnInit, OnDestroy} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../shared/services/users.service';
import {map} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/state/app.state';
import {CreateUser} from '../../store/actions/user.action';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user-page.component.html',
  styleUrls: ['./create-user-page.component.scss']
})
export class CreateUserPageComponent implements OnInit, OnDestroy{
  myForm: FormGroup;
  hide = true;
  subscription: Subscription;

  constructor(
    private usersService: UsersService,
    private store: Store<AppState>,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength( 3),
        Validators.maxLength(30)
      ]),
      login: new FormControl(null, [
        Validators.required,
          Validators.minLength( 3),
          Validators.maxLength(30)
      ], [ this.loginValidator ]),
      role: new FormControl('user', [
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9]{3,30}')
      ]),
      passwordConfirm: new FormControl(null, [
        Validators.required,
      ])
    },
      this.passwordMatchValidator
    );
  }

  submit(): void{
    this.store.dispatch(new CreateUser(this.myForm.value));
    this.router.navigate(['/users', 'login']);
  }

  loginValidator = (control: FormControl) => {
    return  this.usersService.getBoolLogin(control.value).pipe(
      map(response => {
        if (!!response) {
          return { login: true };
        }
      })
    );
  }

   passwordMatchValidator(control: FormGroup): {[s: string]: boolean} {
      if (control.get('password').value !== control.get('passwordConfirm').value) {
        return {passwordConfirm: true};
      }
  }

  ngOnDestroy(): void {
    if (!!this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
