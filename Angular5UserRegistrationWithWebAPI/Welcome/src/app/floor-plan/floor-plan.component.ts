import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { FloorPlanService } from '../shared/floorPlan';

@Component({
  selector: 'app-floor-plan',
  templateUrl: './floor-plan.component.html',
  styleUrls: ['./floor-plan.component.css']
})
export class FloorPlanComponent implements OnInit {
   floorPlan:any;
  constructor(private floorPlanService: FloorPlanService, private route : ActivatedRoute) { }

  ngOnInit() {

    this.floorPlan =this.floorPlanService.getFloorPlan(

      +this.route.snapshot.params['id']
     )
  }

}
