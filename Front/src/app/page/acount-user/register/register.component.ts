import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { UserRegister } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public name: string = '';
  public email: string = '';
  public password: string = '';
  public confirmPassword: string = '';
  public formReg: FormGroup;

  constructor(
    private _userServices: UserService,
    private _router: Router,
    private _firestore: UserService,
    private toastr: ToastrService
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      name: new FormControl(),
    });
  }

  register() {
    this._userServices
      .getRegister(this.formReg.value)
      .then((response) => {
        const collecion = this._firestore.addUser(this.formReg.value);
        console.log(response);
        console.log(collecion);
        this._router.navigateByUrl('/');
      })
      .catch((error) => {
        this.toastr.error(this.fireBaseError(error.code), 'Error') 
        console.log(error);
      });
  }

  fireBaseError(code: string) {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'El usuario ya existe';

      case 'auth/weak-password':
        return 'La contraseña es muy debil';

      case 'auth/invalid-email':
        return 'Correo invalido';

      default:
        return 'Erro';
    }
  }
}
