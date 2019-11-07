import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    console.log(this.isUserLoggedIn());
    if (username === "niewoq" && password === "123") {
      sessionStorage.setItem('authenticaterUser',username);
      return true;
    }
    return false;
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user===null);
  }
  logout(){
    sessionStorage.removeItem('authenticaterUser');
  }
}