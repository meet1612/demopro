import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Login } from '../login/login';

@Component({
  selector: 'app-viewpro',
  templateUrl: './viewpro.component.html',
  styleUrls: ['./viewpro.component.css']
})
export class ViewproComponent implements OnInit {
  Email_Id:string;
  Username:string;
  Mobile:string;
  City:string;
  Gender:string;
  Address:string;
  id:string;
  constructor(private _acroute:ActivatedRoute,private _data:LoginService,private _send:Router) { }

  ngOnInit() {
    this.id=this._acroute.snapshot.params['id'];
    this._data.getUserById(this.id).subscribe(
      (data:Login[])=>{
        this.Email_Id=data[0].Email_Id;
        this.Username=data[0].Username;
        this.Mobile=data[0].Mobile;
        this.City=data[0].City;
        this.Gender=data[0].Gender;
        this.Address=data[0].Address;
      }
    );
    }
  onChange(){
    this._send.navigate(['/changepass',this.Email_Id]);
  }
  onEdit(){
    this._send.navigate(['/editpro',this.Email_Id]);
  }
  onLogout(){
    this._send.navigate(['']);
  }

}
