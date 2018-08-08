import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-projects-images',
  templateUrl: './projects-images.component.html',
  styleUrls: ['./projects-images.component.css']
})
export class ProjectsImagesComponent implements OnInit {

  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }

}
