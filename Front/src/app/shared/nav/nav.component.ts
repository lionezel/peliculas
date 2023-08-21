import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  public token: any;

  constructor() {
    this.token = localStorage.getItem('token');
    console.log(this.token)
    
  }
}
