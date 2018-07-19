import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { coursesService } from './courses.service';
import { AuthorComponent } from './author/author.component';
import { AuthorsService } from './authors.service';

@NgModule({
  declarations: [
    AppComponent,
    // step 2 : import the component
    CoursesComponent,
    CourseComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule
  ],

  // Step 3 :we register our services here
  providers: [
    coursesService,
    AuthorsService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
