import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {


  title = "list of courses";

  courses;

  constructor(courses:CoursesService) {

             this.courses = courses.getCourses();

   }

  ngOnInit() {
  }

}
