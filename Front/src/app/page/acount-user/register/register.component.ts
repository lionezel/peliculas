import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private _userServices: UserService, private _router: Router) {}

  register() {
    const user = { email: this.email, password: this.password };
    this._userServices.register(user).subscribe(
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
