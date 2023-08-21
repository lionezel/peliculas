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

  constructor(
    private _userServices: UserService,
    private _router: Router,
    private _firestore: UserService
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  register() {
    this._userServices.getRegister(this.formReg.value).then((response) => {
      const collecion = this._firestore.addUser(this.formReg.value);
      console.log(response);
      console.log(collecion);
      this._router.navigateByUrl('/');
    });
  }
}
