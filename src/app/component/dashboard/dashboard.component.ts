import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // create app instance to router using constructor
  constructor(private _router: Router) { }

  ngOnInit() {
  }
  public logout(): any {
    // to clear the Dashboard
    window.localStorage.removeItem("login_details");
    this._router.navigate(["/"])// to navigate back to login page
  }
}
