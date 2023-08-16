import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public email: string = '';
  public password: string = '';

  constructor(private _userServices: UserService, private _router: Router) {}

  login() {
    const user = { email: this.email, password: this.password };
    this._userServices.login(user).subscribe(
      (data) => {
        this._userServices.setToken(data.token);
        this._router.navigateByUrl('/');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
