import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
    isLoginError : boolean = false;
  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {
  }


  OnSubmit(userName,password) {
          //if the userAuthentication will be successfull for the given user name and password it will return Json object with acces_token | token_type | expires_in
          this.userService.userAuthentication(userName,password)
          .subscribe ((data : any) => {
           // store the access token in the client web browser 
            localStorage.setItem('userToken',data.access_token);
            
            // save roles array inside the local storage
            localStorage.setItem('userRoles',data.role);

            // navigate the user to the new component if the log in is successfull 
            this.router.navigate(['/projectslist'])
          },
          //handle 400 for wrong username and password
        (err : HttpErrorResponse) => {
              this.isLoginError = true;

        } );
        
       
          
         
  }



}
