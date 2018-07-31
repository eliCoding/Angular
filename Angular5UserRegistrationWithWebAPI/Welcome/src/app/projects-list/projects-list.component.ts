import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  Logout() {
    //remove the user token from the web browser
    localStorage.removeItem('userToken');
    this.router.navigate(['/login'])
  }

}
