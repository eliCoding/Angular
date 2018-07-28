import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response} from "@angular/http";
import 'rxjs/add/operator/map';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {


    //Create the base url from webapi
  readonly rootUrl = "http://localhost:55400/"

  constructor(private http:HttpClient) { }

registerUser (user:User) {
  
}

}
