import { Component, Input } from '@angular/core';
import { User } from '../../types/UserType';

@Component({
  selector: 'app-carte-identite',
  templateUrl: './carte-identite.component.html',
  styleUrl: './carte-identite.component.css',
})
export class CarteIdentiteComponent {
  @Input()
  infoUser!: User;
}
