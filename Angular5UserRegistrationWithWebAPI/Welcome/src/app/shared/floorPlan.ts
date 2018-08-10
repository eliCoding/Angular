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
    { "id": 1,"url": "/assets/image/floorPlan/ProjectA/fp1.png" },
    { "id": 2,"url": "/assets/image/floorPlan/ProjectA/fp2.png" },
    { "id": 3,"url": "/assets/image/floorPlan/ProjectA/fp3.png" },
    { "id": 4,"url": "/assets/image/floorPlan/ProjectA/fp4.png" },
    { "id": 5,"url":"/assets/image/floorPlan/ProjectA/fp5.png" },
    { "id": 6,"url": "/assets/image/floorPlan/ProjectA/fp6.png"}


]


