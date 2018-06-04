import { Injectable } from '@angular/core';
import { Http,Response} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DashboardService {

  constructor(private _http:Http) { }

  public aboutData(){
    return this._http.post("http://localhost:8080/about",
    {'token':JSON.parse(window.localStorage.getItem("login_details")).token
    }).map((res:Response)=>{
      return res.json();
    }).catch(this._handleError);
  }


public portfolioData(){
  return this._http.post("http://localhost:8080/portfolio",{
    'token':JSON.parse(window.localStorage.getItem("login_details")).token
  }).map((res:Response)=>{
    return res.json();
  }).catch(this._handleError);

}

public contactData(){
  return this._http.post("http://localhost:8080/contact",{
    'token':JSON.parse(window.localStorage.getItem("login_details")).token
  }).map((res:Response)=>{
    return res.json();
  }).catch(this._handleError);

}
public _handleError(error){
  console.log(error);
  return Observable.throw(error || "Internal Server Error !");
  }
}
