import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public email: string = '';
  public password: string = '';

  constructor(private _userServices: UserService) {}

  login() {
    const user = { email: this.email, password: this.password };
    this._userServices.login(user).subscribe((data) => {
      console.log(data);
    });
  }
}
