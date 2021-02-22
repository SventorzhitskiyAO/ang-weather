import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserInterface} from '../../interfaces/user.interface';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-change',
  templateUrl: './user-change.component.html',
  styleUrls: ['./user-change.component.scss']
})
export class UserChangeComponent implements OnInit {
  @Output()
  submitUpdate: EventEmitter<UserInterface> = new EventEmitter<UserInterface>();

  @Input()
  user: UserInterface;

  myForm: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl(this.user.name),
      login: new FormControl(this.user.login),
      password: new FormControl('', Validators.pattern('[a-zA-Z0-9]{3,30}')),
      passwordConfirm: new FormControl('', Validators.pattern('[a-zA-Z0-9]{3,30}'))
    });
  }

  submit(): void{
    this.submitUpdate.emit(this.myForm.value);
  }

}
