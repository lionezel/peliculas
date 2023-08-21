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
  public userData: any;

  constructor(private _userServices: UserService, private _router: Router) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  login() {
    this._userServices.getLogin(this.formLogin.value).then((response) => {
      this.userData = response.user;
      console.log(this.userData);
      this._router.navigateByUrl('/');
    });
  }

  onClick() {
    this._userServices.getLoginWhithGoogle().then((response) => {
      console.log(response);
      this._router.navigateByUrl('/');
    });
  }
}
