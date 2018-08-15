import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  userList : User[];
  constructor(private userService : UserService) { }

  ngOnInit() {

  // Get All Roles
  this.userService.getAllUsers().subscribe(
    (data: any) => {
      // display all roles 
      data.forEach(obj => obj.selected = false);
      this.userList = data;
    }

  );


    
  }

}
