import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private _result:any;
  constructor(private _service:LoginService,
              private _router:Router) { }

  ngOnInit() {
  }
  public login(obj):any{
    this._service.authenticate(obj).subscribe((res)=>{
      if (res.login == "success"){
        window.localStorage.setItem("login_details",JSON.stringify(res));
        this._router.navigate(["/dashboard"])
      }else{
        alert('Please Sign-up');
      } (err:HttpErrorResponse)=>{
        if(err.error instanceof Error){
        console.log("Client side error")
      }else{
        console.log("Server side error");
        }
      }
    })
  }
}
