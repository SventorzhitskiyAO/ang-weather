import { Component, OnInit, OnDestroy} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {UsersService} from '../shared/services/users.service';
import {filter, map, take, takeUntil} from 'rxjs/operators';
import {Observable, Subject, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/state/app.state';
import {CreateUser, GetUserLogin} from '../../store/actions/user.action';
import {Router} from '@angular/router';
import {selectLoginName} from '../../store/selectors/user.selectors';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user-page.component.html',
  styleUrls: ['./create-user-page.component.scss']
})
export class CreateUserPageComponent implements OnInit, OnDestroy{
  myForm: FormGroup;
  hide = true;
  subscription: Subscription;
  unsubscribe: Subject<void> = new Subject();

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

    this.myForm.get('login').valueChanges
      .pipe(
        takeUntil(this.unsubscribe)
      )
      .subscribe(value => {
      console.log(this.myForm);
    });
  }

  submit(): void{
    this.store.dispatch(new CreateUser(this.myForm.value));
    this.router.navigate(['/users', 'login']);
  }

  loginValidator = (control: FormControl): Observable<ValidationErrors> => {
    this.store.dispatch(new GetUserLogin(control.value));
    return this.store.select(selectLoginName).pipe(
      filter(value => !!value),
      take(1),
      map(res => {
        console.log(res);
        return {login: true};
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

    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
