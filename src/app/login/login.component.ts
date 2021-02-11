import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Output()
  submitLog: EventEmitter<UsersService> = new EventEmitter<UsersService>();

  myForm: FormGroup;
  constructor(){
    this.myForm = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login(): void{
    this.submitLog.emit(this.myForm.value);
  }
}
