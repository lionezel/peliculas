import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  email: any;
  password: any;
  confirmPassword: any;

  constructor() {}

  register() {
    console.log(this.email);
    console.log(this.password);
  }
}
