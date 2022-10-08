import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpservice : HttpService,private router : Router) { }

  isAuthencated : boolean = false;
  status :any ;

  getVerify(Data:any){
    const details =  this.httpservice.login(Data).subscribe((res)=>{
      console.log("result",res);
      localStorage.setItem("token",res.token)
      if(res.status == 'success'){
       this.isAuthencated = true
       this.router.navigate(['home'])
      }else{
      this.errmsg(res)
       this.isAuthencated = false
      }
    })
  }

  errmsg(res:any){
    console.log('res',res)
  return res
  }

 Logout(){
  this.isAuthencated = false
  this.router.navigate([''])
  }

}
