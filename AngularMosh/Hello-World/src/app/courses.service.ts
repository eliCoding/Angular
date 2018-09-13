import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
      getCourses(){
        return "[courese1,course2,course3]";
      }
  constructor() { }
}
