import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from '../../types/UserType';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Output()
  createdUser: EventEmitter<User> = new EventEmitter();

  userForm = this.fb.group({
    firstname: [''],
    lastname: [''],
  });

  constructor(private fb: FormBuilder) {}

  sendUser() {
    const user = this.userForm.value as User;
    this.createdUser.emit(user);
  }
}
