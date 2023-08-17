import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgPrimeModule } from 'src/app/ng-prime/ng-prime.module';
import { EmailVerificationComponent } from './email-verification/email-verification.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, EmailVerificationComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    NgPrimeModule,
    RouterModule,
  ],
  providers: [CookieService],
})
export class AcountUserModule {}
