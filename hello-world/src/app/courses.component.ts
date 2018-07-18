


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
      
      <button class="btn btn-primary"  [class.active] = "isActive">Save</button>
      
      <button [style.backgroundColor] = "isActive ? 'blue'  : white">Save</button>

      <button (click) = "onSave($event)">Save</button>
      `


})



export class CoursesComponent {

     
       isActive = false;

       onSave($event) {
console.log ("button was clicked");

       }

      
}