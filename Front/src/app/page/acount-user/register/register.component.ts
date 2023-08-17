import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  public formReg: FormGroup;

  constructor(private _userServices: UserService, private _router: Router) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  registedr() {
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

  register() {
    this._userServices.getRegister(this.formReg.value).then((response) => {
      console.log(response);
    });
  }
}
