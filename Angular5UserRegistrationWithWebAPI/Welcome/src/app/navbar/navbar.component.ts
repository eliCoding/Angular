import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService) { }
  userClaims:any;
  ngOnInit() {

    this.userService.getUserClaims().subscribe((data: any) => {
    
      this.userClaims = data;
  }

}
