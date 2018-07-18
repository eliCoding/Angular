import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authors;
   
  constructor(service : AuthorsService) {
       this.authors = service.getAuthors();

   }

  ngOnInit() {
  }

}
