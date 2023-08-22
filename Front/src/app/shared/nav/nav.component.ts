import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  public user$ = this._userServices.authState$.pipe(
    filter((state) => (state ? true : false))
  );

  constructor(
    private _userServices: UserService,
    private _router: Router,
  ) {}

  ngOnInit(): void {}

  onClick() {
    this._userServices.getLogout().then(() => {
      this._router.navigate(['/login']);
    });
  }
}
