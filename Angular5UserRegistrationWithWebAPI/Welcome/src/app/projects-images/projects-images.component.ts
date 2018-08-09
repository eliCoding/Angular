import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-projects-images',
  templateUrl: './projects-images.component.html',
  styleUrls: ['./projects-images.component.css']
})
export class ProjectsImagesComponent implements OnInit {

    image:any
 


  constructor(private imageService: ImageService, private route : ActivatedRoute) { }

  ngOnInit() {

        this.image =this.imageService.getImage(

         +this.route.snapshot.params['id']
        )

  }

}
