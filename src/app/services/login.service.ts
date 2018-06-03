import { Injectable } from '@angular/core';
import { Http ,Response } from '@angular/http'; //http=>to hit the server,Response=>response will be of Response type
import 'rxjs/Rx'; //map,catch and throw function
import { Observable } from 'rxjs/Observable';//Observable=> to throw the error

@Injectable()
export class LoginService {


  constructor(private _http:Http) { }
  public authenticate(obj):any{
    return this._http.post("http://localhost:8080/login",obj)
    .map((res:Response)=>{
        return res.json();
    }).catch(this._handleError);
  }
  public _handleError(error){
  console.log(error);
  return Observable.throw(error || "Internal Server Error");
  }
}