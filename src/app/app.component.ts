import { Component } from '@angular/core';
import { User } from '../types/UserType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userListCNI: User[] = [];

  onReceivedCNI(event: User) {
    this.userListCNI.push(event);
  }
}
