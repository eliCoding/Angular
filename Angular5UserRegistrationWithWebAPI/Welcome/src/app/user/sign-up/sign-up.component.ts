import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ToastrService } from 'ngx-toastr'
import { User } from '../../shared/user.model';
import { UserService } from '../../shared/user.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  user: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  roles: any[];

  // inject the Userservice class into the signup Component constructor
  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {

    //call the reset form inInit
    this.resetForm();

    // Get All Roles
    this.userService.getAllRoles().subscribe(
      (data: any) => {
        // display all roles 
        data.forEach(obj => obj.selected = false);
        this.roles = data;
      }

    );


  }





  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      UserName: '',
      Password: '',
      Email: '',
      FirstName: '',
      LastName: ''

    }

    if (this.roles)
      this.roles.map(x => x.selected = false);

  }

  OnSubmit(form: NgForm) {
    //filter the role
  var x = this.roles.filter(x => x.selected).map(y => y.Name);
    //retrieve the values of each property from the user
    this.userService.registerUser(form.value , x)
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
          this.resetForm(form);
          this.toastr.success('User registration successful');
        }

        else
          this.toastr.error(data.Errors[0]);

      });

  }



  updateSelectedRoles(index) {
    this.roles[index].selected = !this.roles[index].selected;

  }



}
