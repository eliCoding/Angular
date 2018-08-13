import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';



@Injectable()
export class FloorPlanService {

    visibleFloorPlan = [];

    getFloorPlans() {

        return this.visibleFloorPlan = FloorPlan.slice(0);
    }


    getFloorPlan(id: number) {

        return FloorPlan.slice(0).find(floorPlan => floorPlan.id == id)
    }
}


// TOdo : for now static image has to retrieve from Databae
const FloorPlan = [
    { "id": 1,"category": "ProjectA","url": "/assets/image/floorPlan/ProjectA/fp1.png" },
    { "id": 2,"category": "ProjectA","url": "/assets/image/floorPlan/ProjectA/fp2.png" },
    { "id": 3,"category": "ProjectA","url": "/assets/image/floorPlan/ProjectA/fp3.png" },
    { "id": 4,"category": "ProjectA","url": "/assets/image/floorPlan/ProjectA/fp4.png" },
    { "id": 5,"category": "ProjectA","url":"/assets/image/floorPlan/ProjectA/fp5.png" },
    { "id": 6,"category": "ProjectA","url": "/assets/image/floorPlan/ProjectA/fp6.png"},
    { "id": 7,"category": "ProjectB","url": "/assets/image/floorPlan/ProjectB/fp1.png" },
    { "id": 8,"category": "ProjectB","url": "/assets/image/floorPlan/ProjectB/fp2.png" },
    { "id": 9,"category": "ProjectB","url": "/assets/image/floorPlan/ProjectB/fp3.png" },
    { "id": 10,"category": "ProjectB","url": "/assets/image/floorPlan/ProjectB/fp4.png" },
    { "id": 11,"category": "ProjectB","url":"/assets/image/floorPlan/ProjectB/fp5.png" },
    { "id": 12,"category": "ProjectB","url": "/assets/image/floorPlan/ProjectB/fp6.png"}



]


