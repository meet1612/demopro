import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Login } from './login/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url:string="http://localhost:3000/user/";
  constructor(private _http:HttpClient) { }
  getlogById(item:Login){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+item.Email_Id,body,{headers:head1});
  }
  getUserById(id:string){
    return this._http.get(this.url+id);
  }
  updateUser(item:Login){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+item.Email_Id,body,{headers:head1});
  }
  addUser(item:Login){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
  changepass(item:Login){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url,body,{headers:head1});
  }
}
