import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { coursesService } from './courses.service';

@NgModule({
  declarations: [
    AppComponent,
    // step 2 : import the component
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule
  ],

  // we register our services here
  providers: [
    coursesService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
