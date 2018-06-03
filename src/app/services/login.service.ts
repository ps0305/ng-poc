import { Injectable } from '@angular/core';
import { http ,Response} from '@angular/http'; //http=>to hit the server,Response=>response will be of Response type
import 'rxjs/Rx'; //map,catch and throw function
import { Observable } from 'rxjs/observable';//Observable=> to throw the error

@Injectable()
export class LoginService {


  constructor(private _service:LoginService) { }
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