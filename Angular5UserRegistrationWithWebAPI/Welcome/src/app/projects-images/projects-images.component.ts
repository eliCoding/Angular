import { Component, OnInit,OnChanges } from '@angular/core';
import { ImageService } from '../shared/image.service';
import {ActivatedRoute} from '@angular/router'
import { FloorPlanService } from '../shared/floorPlan';

@Component({
  selector: 'app-projects-images',
  templateUrl: './projects-images.component.html',
  styleUrls: ['./projects-images.component.css']
})
export class ProjectsImagesComponent implements OnInit,OnChanges{

    image:any
 
    visibleFloorPlan: any[] =[];
  constructor(private imageService: ImageService, private route : ActivatedRoute, private floorPlanService:FloorPlanService) { 

     this.visibleFloorPlan = this.floorPlanService.getFloorPlans();
  }


  ngOnChanges() {
    this.visibleFloorPlan = this.floorPlanService.getFloorPlans();
  }
  

  ngOnInit() {

        this.image =this.imageService.getImage(

         +this.route.snapshot.params['id']
        )



  }

}
