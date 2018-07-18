import { Component, OnInit } from '@angular/core';
import { coursesService } from '../courses.service';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {


  courses;
  // to get the service we create the constructor
  //dependency Injection (DI) : injecting or providing dependency of the class into its constructor
  constructor(service : coursesService) {
  this.courses = service.getCourses();
}

  ngOnInit() {
  }

}
