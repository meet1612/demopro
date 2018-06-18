import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Login } from './login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Email_Id:string;
  Password:string;
  arr:Login[]=[];

  constructor(private _xyz:LoginService,private _abc:Router) { }

  ngOnInit() {
  }
  onLogin(){
    this._xyz.getlogById(new Login(this.Email_Id,this.Password)).subscribe(
      (data:Login[])=>{
        console.log(data);
        if(data.length>0){
          alert("successfully login");
          this._abc.navigate(['/viewpro',data[0].Email_Id]);
        }
        else{
          alert("id and password doesn't match");
        }

      }
    );
  }
   onClickup(){
     this._abc.navigate(['/signup']);
   }
   onForget(){
     this._abc.navigate(['/forget']);
   }
}
