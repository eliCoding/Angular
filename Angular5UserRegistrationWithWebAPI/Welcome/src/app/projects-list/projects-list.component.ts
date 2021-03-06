import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { ImageService } from '../shared/image.service';


@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  userClaims: any;

  @Input() filterBy?: string = 'all';
  visibleImages: any[] = [];
  constructor(private router: Router, private userService: UserService, private imageService: ImageService) {
    
  }

  // ngOnChanges() {
  //   this.visibleImages = this.imageService.getImages();
  // }

  ngOnInit() {

    this.userService.getUserClaims().subscribe((data: any) => {

      this.userClaims = data;

    });



    // Operation based on the role
    if (this.userService.roleMatch(['Admin'])) {
      //ToDo: 
      //Show Developers List


    }

    if (this.userService.roleMatch(['Developer'])) {
      //ToDo: 
      this.visibleImages = this.imageService.getImages();
    }

  }




  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }


}
