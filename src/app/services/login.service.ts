import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL: string = "https://yps-academy-42ea4-default-rtdb.firebaseio.com/";

  constructor(private _http: HttpClient) { }



  registerUser(user: IUser) {
    console.log("new user details",user);    
    return  this._http.post(this.baseURL + "users.json", user)
  }


  loginUser(user: IUser) {
    console.log("existing user details",user);  
    const mesg = true;
    return mesg;  
    // this._http.get(this.baseURL + "users.json").subscribe((res:any) => {
    //   console.log(res);
    //   for(let key in res){
    //     if(res[key].email === user.email && res[key].password === user.password){
    //       alert("user logged in");
    //     }else{
    //       alert("user not found");
    //     }
    //   }
    // })
  }
}
