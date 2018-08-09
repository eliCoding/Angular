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
    { "id": 1, "category": "Available", "caption": "xyz", "url": "/assets/image/p1.jpg" },
    { "id": 2, "category": "Sold", "caption": "xyz", "url": "/assets/image/p2.jpg" },
    { "id": 3, "category": "Available", "caption": "xyz", "url": "/assets/image/p3.jpg" },
    { "id": 4, "category": "Available", "caption": "xyz", "url": "/assets/image/p4.jpg" },
    { "id": 5, "category": "Available", "caption": "xyz", "url": "/assets/image/p5.jpg" },
    { "id": 6, "category": "Available", "caption": "xyz", "url": "/assets/image/p6.jpg" },
    { "id": 7, "category": "Available", "caption": "xyz", "url": "/assets/image/p1.jpg" },
    { "id": 8, "category": "Available", "caption": "xyz", "url": "/assets/image/p2.jpg" },
    { "id": 9, "category": "Sold", "caption": "xyz", "url": "/assets/image/p3.jpg" },
    { "id": 10, "category": "Available", "caption": "xyz", "url": "/assets/image/p4.jpg" },
    { "id": 11, "category": "Available", "caption": "xyz", "url": "/assets/image/p5.jpg" },
    { "id": 12, "category": "Sold", "caption": "xyz", "url": "/assets/image/p6.jpg" },
    { "id": 13, "category": "Available", "caption": "xyz", "url": "/assets/image/p2.jpg" },
    { "id": 14, "category": "Available", "caption": "xyz", "url": "/assets/image/p3.jpg" },
    { "id": 15, "category": "Available", "caption": "xyz", "url": "/assets/image/p1.jpg" }
]