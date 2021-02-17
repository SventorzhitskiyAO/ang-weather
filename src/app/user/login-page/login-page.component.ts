import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../shared/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{
  @Output()
  submitLog: EventEmitter<UsersService> = new EventEmitter<UsersService>();

  myForm: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      login: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  login(): void{
    this.submitLog.emit(this.myForm.value);
  }
}
