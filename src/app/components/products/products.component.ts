import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor( private service : HttpService) { }

  ngOnInit(): void {

  
  }

  userdata : any

  getData(){
    // this.service.getuser().subscribe(res=>{
    //   console.log("res",res.result)
    //   this.userdata = res.result
    // })
  }

}
