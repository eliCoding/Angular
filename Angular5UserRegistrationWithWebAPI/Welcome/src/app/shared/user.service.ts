import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from './user.model';




@Injectable()
export class UserService {


  //Create the base url from webapi
  readonly rootUrl = "http://localhost:55400"
 

  //inject the HttpClient into the copnstructor
  constructor(private http: HttpClient) { }

// Get User List 

getAllUsers() {
  var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  return this.http.get(this.rootUrl + '/api/GetAllUsers', { headers: reqHeader });

}


  // add the body part which is that is from the Form for each properties
  registerUser(user: User, roles: string[]) {
    //body of the request

    const body = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName,
      Roles: roles

    }
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/api/User/Register', body, { headers: reqHeader });



  }

  // this function makes token request to the web api project
  userAuthentication(userName, password) {
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });

  }

  // ToDO: (with Interceptors) 1)Append this Bearer access token to evrry webapi method which need Authorization
  //       2) beacause the TOken expires after x minuete we have to redirect the user to the login      
  getUserClaims() {

    return this.http.get(this.rootUrl + '/api/GetUserClaims');
  }



  getAllRoles() {
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.get(this.rootUrl + '/api/GetAllRoles', { headers: reqHeader });

  }


  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var userRoles: string[] = JSON.parse(localStorage.getItem('userRoles'));
    //  debugger;

    allowedRoles.forEach(element => {
      if (userRoles.indexOf(element) > -1) {
        isMatch = true;
        return false;

      }
    });

    return isMatch;
  }

     

}

