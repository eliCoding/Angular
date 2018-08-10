import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';



@Injectable()
export class ImageService {

    visibleImages = [];

    getImages() {

        return this.visibleImages = IMAGES.slice(0);
    }


    getImage(id: number) {

        return IMAGES.slice(0).find(image => image.id == id)
    }
}


// TOdo : for now static image has to retrieve from Databae
const IMAGES = [
    { "id": 1, "category": "Available", "url": "/assets/image/projectImages/p1.jpg" },
    { "id": 2, "category": "Sold", "url": "/assets/image/projectImages/p2.jpg" },
    { "id": 3, "category": "Available", "url": "/assets/image/projectImages/p3.jpg" },
    { "id": 4, "category": "Available", "url": "/assets/image/projectImages/p4.jpg" },
    { "id": 5, "category": "Available", "url": "/assets/image/projectImages/p5.jpg" },
    { "id": 6, "category": "Available", "url": "/assets/image/projectImages/p6.jpg" },
    { "id": 7, "category": "Available", "url": "/assets/image/projectImages/p7.jpg" },
    { "id": 8, "category": "Available", "url": "/assets/image/projectImages/p8.jpg" },
    { "id": 9, "category": "Sold", "url": "/assets/image/projectImages/p9.jpg" },
    { "id": 10, "category": "Available", "url": "/assets/image/projectImages/p10.jpg" },
    { "id": 11, "category": "Available", "url": "/assets/image/projectImages/p11.jpg" },
    { "id": 12, "category": "Sold", "url": "/assets/image/projectImages/p12.jpg" },
    { "id": 13, "category": "Available", "url": "/assets/image/projectImages/p13.jpeg" },
    { "id": 14, "category": "Available", "url": "/assets/image/projectImages/p14.jpg" },
    { "id": 15, "category": "Available", "url": "/assets/image/projectImages/p15.jpg" }
]


const FLOORPLAN = [
       {}




]