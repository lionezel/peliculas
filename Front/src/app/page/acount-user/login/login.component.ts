import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  public formLogin: FormGroup;

  constructor(private _userServices: UserService, private _router: Router) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  logins() {
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

  login() {
    this._userServices.getLogin(this.formLogin.value).then((response) => {
      console.log(response);
    });
  }

  onClick() {
    this._userServices.getLoginWhithGoogle().then((response) => {
      console.log(response);
    });
  }
}
