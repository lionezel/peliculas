import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public email: string = '';
  public password: string = '';
  public confirmPassword: string = '';

  constructor(private _userService: UserService) {}

  register() {
    const user = { email: this.email, password: this.password };
    this._userService.register(user).subscribe((data) => {
      console.log(data);
    });
  }
}
