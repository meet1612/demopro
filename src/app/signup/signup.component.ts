import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Login } from '../login/login';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  Email_Id:string;
  Password:string;
  Username:string;
  Mobile:string;
  City:string;
  rbtn1:string="male";
  Address:string;
  flag:boolean=true;
  constructor(private _acroute:ActivatedRoute,private _data:LoginService,private _send:Router) { }

  ngOnInit() {
    this._acroute.snapshot;
  }
  onSignup(){
    this._data.addUser(new Login(this.Email_Id,this.Password,this.Username,this.Mobile,this.City,this.rbtn1,this.Address)).subscribe(
      (data:any)=>{
        alert("successfully added");
        this._send.navigate(['']);
      }
    );
  }
  onBack(){
    this._send.navigate(['']);
  }
}
