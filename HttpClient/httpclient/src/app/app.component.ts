import { Component } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

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
//this.http.get(this.url).subscribe(data => console.log(data));
   this.http.get<DataResponse> (this.url).subscribe(data =>
  
  {
       console.log("Fruit : "   + data.fruit);
       console.log("Address:" + data.size);
       console.log ("phone: " + data.color);
       this.result = data;

  },

  (err : HttpErrorResponse) => {
        if(err.error instanceof Error) {
          console.log("Client error:  " + JSON.stringify(err));
        }else {

          console.log("server error: " + JSON.stringify(err));
          console.log("err.message= " + err.message);
        }
    
  }
  
  
  );
}
}

interface DataResponse {
  fruit : string;
  size : string;
  color: string
}

// this.http.get<MyJsonResponse> (this.url, {observe : 'response'})
//    .subscribe(resp => {


//           console.log("Fruit : "   + resp.body.fruit);
//           console.log("Address:" + resp.body.size);
//            console.log ("phone: " + resp.body.color);
//            console.log(resp.headers.get('X-Custome-Header'));


//    }
  
  
  
//   );
// }
// }
