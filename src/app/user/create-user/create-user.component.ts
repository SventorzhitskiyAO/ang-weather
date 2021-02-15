import { Component, OnInit, OnDestroy} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../users.service';
import {map} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit, OnDestroy{
  myForm: FormGroup;
  hide = true;
  subscription: Subscription;
  constructor(private usersService: UsersService) {}

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
    this.subscription = this.usersService.create(this.myForm.value).subscribe();
    return alert('User registered');
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