import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LoginService } from '../../login.service';
import { Login } from '../../login/login';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit {
  Email_Id:string;
  Password:string;
  Pass1:string;
  Pass2:string;
  id:string;
  arr:Login[]=[];
  constructor(private _send:Router,private _acroute:ActivatedRoute,private _data:LoginService) { }

  ngOnInit() {
    this.Email_Id=this._acroute.snapshot.params['id'];
    this._data.getUserById(this.Email_Id).subscribe(
      (data:any[])=>{
          this.arr=data;
      }
    );
  }
  onSave(){
    if((this.Password==this.arr[0].Password) && (this.Pass1==this.Pass2)){
      console.log("hi");
        this._data.changepass(new Login(this.Email_Id,this.Pass1)).subscribe(
          (data:any)=>{
            this._send.navigate(['/viewpro',this.Email_Id]);
          }
        );
    }
    else{
      alert("Invalid Password");
    }
  }
  onCancel(){
    this._send.navigate(['']);
  }
}
