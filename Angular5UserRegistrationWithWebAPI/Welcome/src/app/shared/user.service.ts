import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response} from "@angular/http";
import { map } from 'rxjs/operators';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {


    //Create the base url from webapi
  readonly rootUrl = "http://localhost:55400/"


   //inject the HttpClient into the copnstructor
  constructor(private http:HttpClient) { }

  // add the body part which is that is from the Form for each properties
registerUser (user:User) {
    //body of the request

    const body: User = {
       UserName: user.UserName,
       Password:user.Password,
       Email : user.Email,
       FirstName: user.FirstName,
       LastName: user.LastName


    }

   return this.http.post(this.rootUrl + 'api/User/Register', body);
         
}

}
