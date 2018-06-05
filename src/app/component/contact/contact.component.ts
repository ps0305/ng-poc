import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private _result:any;
  constructor(private _service:DashboardService) { }

  ngOnInit() {
    this._service.contactData().subscribe(res=>this._result=res,
      (err:HttpErrorResponse)=>{
        if(err.error instanceof Error){
          console.log("4XX Error");
        }else{
          console.log("5XX Error");
        }
      })
    }
  
  }
