import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {ToastrService} from 'ngx-toastr'
import { User } from '../../shared/user.model';
import { UserService } from '../../shared/user.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  user:User;

  // inject the Userservice class into the signup Component constructor
  constructor(private userService: UserService , private toastr : ToastrService) { }

  ngOnInit() {

   //call the reset fomrm inInit
   this.resetForm();

  }


    

  resetForm(form?:NgForm) 
  {
    if(form != null)
        form.reset();
        this.user = {
           UserName:'',
           Password:'',
           Email:'',
           FirstName:'',
           LastName:''
        
        }
      }

   OnSubmit (form : NgForm) {
                               //retrieve the values of each property from the user
   this.userService.registerUser(form.value)
   .subscribe((data :any) => {
        if(data.Succeeded == true)
        {
         this.resetForm(form);
         this.toastr.success('User registration successful');
        }

        else 
        this.toastr.error(data.Errors[0]);
        
   }) ;
  
   }



}
