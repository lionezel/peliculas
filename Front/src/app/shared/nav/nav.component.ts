import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  public userData: User[] = [];

  constructor(private _userServices: UserService, private _router: Router) {}

  ngOnInit(): void {
    this._userServices.getUser().subscribe((response) => {
      this.userData = response;
      console.log(this.userData);
    });
  }

  onClick() {
    this._userServices.getLogout().then(() => {
      this._router.navigate(['/login']);
    });
  }
}
