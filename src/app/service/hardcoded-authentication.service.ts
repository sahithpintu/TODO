import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username,password)
  {
    //console.log('before message'+this.isUserLoggedin());
    if(username === 'in28Minutes' && password === 'dummy')
    {
      
      sessionStorage.setItem('authenticaterUser',username);
     // console.log('after message'+this.isUserLoggedin());
           return true;
    }
      return false;
  }

  isUserLoggedin()
  {
       let user= sessionStorage.getItem('authenticateruser');
       return !(user===null);
  }

  logout()
  {
    sessionStorage.removeItem('authenticateruser');
  }
}
