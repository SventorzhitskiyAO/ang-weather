import { Component, OnInit, OnDestroy} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit, OnDestroy{

  myForm: FormGroup;
  constructor(private usersService: UsersService){
    this.myForm = new FormGroup({

      name: new FormControl('', [Validators.required, this.userNameValidator]),
      login: new FormControl('', [
        Validators.required,
      ]),
      role: new FormControl('user', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9]{3,30}')
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9]{3,30}')
      ]),
      passwordConfirm: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9]{3,30}')
      ])
    });
  }

  ngOnInit(): void {
  }

  submit(): void{
    this.usersService.create(this.myForm.value).subscribe();
    return alert('User registered');
  }

  userNameValidator(control: FormControl): {[s: string]: boolean}{// Todo Доделать валидатор, заглушка
    if (control.value === 'kakashka'){
      return {userName: true};
    }
    return null;
  }

  ngOnDestroy(): void {
  }
}
