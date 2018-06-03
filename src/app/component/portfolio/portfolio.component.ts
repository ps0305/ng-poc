import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Observable } from 'rxjs/observable';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

    private _result:any;
  constructor(private _service:DashboardService) { }

  ngOnInit() {
    this._service.portfolioData().subscribe(res=>this._result=res,
      (err:HttpErrorResponse)=>{
        if(err.error instanceof Error){
          console.log("4XX Error");
        }else{
          console.log("5XX Error");
        }
      })
    }
  
  }
