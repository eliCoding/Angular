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
    { "id": 1, "category": "Available", "caption": "xyz", "url": "/assets/image/projectPic.jpg" },
    { "id": 2, "category": "Sold", "caption": "xyz", "url": "/assets/image/projectPic.jpg" },
    { "id": 3, "category": "Available", "caption": "xyz", "url": "/assets/image/projectPic.jpg" },
    { "id": 4, "category": "Available", "caption": "xyz", "url": "/assets/image/projectPic.jpg" },
    { "id": 5, "category": "Available", "caption": "xyz", "url": "/assets/image/projectPic.jpg" },
    { "id": 6, "category": "Available", "caption": "xyz", "url": "/assets/image/projectPic.jpg" },
    { "id": 7, "category": "Available", "caption": "xyz", "url": "/assets/image/projectPic.jpg" },
    { "id": 8, "category": "Available", "caption": "xyz", "url": "/assets/image/projectPic.jpg" },
    { "id": 9, "category": "Sold", "caption": "xyz", "url": "/assets/image/projectPic.jpg" },
    { "id": 10, "category": "Available", "caption": "xyz", "url": "/assets/image/projectPic.jpg" },
    { "id": 11, "category": "Available", "caption": "xyz", "url": "/assets/image/projectPic.jpg" },
    { "id": 12, "category": "Sold", "caption": "xyz", "url": "/assets/image/projectPic.jpg" },
    { "id": 13, "category": "Available", "caption": "xyz", "url": "/assets/image/projectPic.jpg" },
    { "id": 14, "category": "Available", "caption": "xyz", "url": "/assets/image/projectPic.jpg" },
    { "id": 15, "category": "Available", "caption": "xyz", "url": "/assets/image/projectPic.jpg" }
]