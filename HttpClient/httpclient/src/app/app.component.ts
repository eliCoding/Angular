import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app';
  // url = 'http://angularorange.io/json/httpclientdata.json';
  url= "assets/app.json"
  result: any;

// inject httpClient object into the appComponent
constructor(private http: HttpClient) {}

ngOnInit(): void {
  //json data will be converted to an object and we can see it on the console
this.http.get(this.url).subscribe(data => console.log(data));

}
}