import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { HttpService } from 'src/app/service/http.service';


@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})


export class SingInComponent implements OnInit {


  constructor(private router : Router, public authService: AuthService) { }

  data : any ;
  pass : any ;

  errorMsg : any ;

  ngOnInit(): void {
    //  this.data = this.formBuilder.group({
    //   "inputEmail" : "",
    //   "inputPassword":""

    //  })
    this.data = new FormGroup({
      "inputEmail" : new FormControl(null,Validators.email),
      "inputPassword":new FormControl(null,Validators.required)
    })

  }





  // onSubmit(){
  //   this.pass = this.data.value
  //   console.log("userData",this.data.value)
    
  //   this.service.login(this.pass).subscribe({
  //     next(res){
  //       console.log("result",res);
  //       localStorage.setItem('status','true');
  //       window.location.reload();
  //     },
  //     error(err){
  //       console.log("err",err)
  //     },
      
  //   }
  //   )
  // }
  onSubmit(){
    this.pass = this.data.value    
    console.log("userData",this.data.value)
    this.authService.getVerify(this.pass);
    console.log("rest",this.authService.errmsg)
  }

}
