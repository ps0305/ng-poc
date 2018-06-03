import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../../services/dashboard.service';
import { Observable } from 'rxjs/observable';
import {HttpErrorResponse} from '@angular/common/http';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    private _result:any;
  constructor(private _service:DashboardService) { }

  ngOnInit() {
    this._service.aboutData().subscribe(res=>this._result=res,
    (err:HttpErrorResponse)=>{
      if(err.error instanceof Error){
        console.log("4XX Error");
      }else{
        console.log("5XX Error");
      }
    })
  }

}
