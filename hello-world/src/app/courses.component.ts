


import {Component} from '@angular/core'
import { coursesService } from './courses.service';


//first step
@Component({
      selector:'courses',
      template: `
      
      
      <h2>{{title}}</h2>
      <ul>
            <li   *ngFor="let course of courses">
                    {{ course }}       
            </li>

      </ul>
      
      
      `


})



export class CoursesComponent {

      title = "List of courses";
      courses;
// to get the service
      constructor() {

            let service = new coursesService();
            this.courses = service.getCourses();
      }


      
}