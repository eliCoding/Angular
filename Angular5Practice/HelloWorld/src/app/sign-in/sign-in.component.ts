import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

   user : User;
  

   User = {}

  ngOnInit() {

     this.resetForm();
  }
  
  resetForm(form? :NgForm)
  {
    if(form != null)
   form.reset();
   this.user = {
    UserName :'',
    Passwoerd:''

   }
    
  }

}
