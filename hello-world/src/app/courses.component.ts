


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
   <div (click) = "onDivClicked()">
      <button (click) = "onSave($event)">Save</button>
      </div>

      <input [value]= "email" (keyup.enter) = "email = $event.target.value;   onKeyUp()"/>
      `


})



export class CoursesComponent {

     
       isActive = false;

       onDivClicked() {
             console.log("Div Clicked");
       }

       onSave($event) {

            //To avoid event bubbling
             $event.stopPropagation();
            console.log ("button was clicked", $event);

       }

       email ="me@example.com";
       onKeyUp(email) {

             console.log(this.email); 
       }

      
}