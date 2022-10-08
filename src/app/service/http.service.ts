  import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // httpOption ={
  //   headers : new HttpHeaders({'content-type':'application/json'})
  // }

  constructor(private http : HttpClient) { }
  handleError(error:Error){
    return throwError(error || "somthing went wrong")
  }

  register(Data : any): Observable<any>{
    return this.http.post("http://localhost:3000/user/register",{Name : Data.Name, Mobile : Data.Mobile, Email :Data.Email, Gender:Data.Gender,Password:Data.Password}).pipe(catchError(this.handleError))
  }

  login(Data : any) : Observable<any>{
    return this.http.post('http://localhost:3000/user/login',{Email:Data.inputEmail,Password:Data.inputPassword}).pipe(catchError(this.handleError));
  }

}
