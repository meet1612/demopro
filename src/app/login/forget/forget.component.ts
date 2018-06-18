import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Login } from '../login';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
  flag:boolean=false;
  Email_Id:string;
  Mobile:string;
  Password:string;
  constructor(private _send:Router,private _data:LoginService) { }

  ngOnInit() {
  }
  onOkay(){
    this._data.getUserById(this.Email_Id).subscribe(
      (data:any[])=>{
        if(data.length>0){
          if(this.Mobile==data[0].Mobile){
            this.flag=true;
            this.Password=data[0].Password;
          }
          else{
            alert("Mobile no is invalid");
          }
        }
        else{
          alert("Inavalid email");
        }
      }
    );
  }
onBack(){
  this._send.navigate(['']);
}
}
