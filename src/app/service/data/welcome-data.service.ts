import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class HelloWorldBean 
{
  constructor(public message:string)
  {

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  excuteHelloWorldBeanService()
  {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }
  //hello-world/path-variable/in28minutes
  excuteHelloWorldBeanServicewithPathVariable(name)
  {
    // let basicAuthHeaderString=this.createBasicAuthenticationHeader();

    // let headers= new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })


    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,//{headers}
    );
  }

  // createBasicAuthenticationHeader()
  // {
  //   let username='in28Minutes';
  //   let password='dummy';
  //   let basicAuthHeaderString='Basic'+window.btoa(username+ ':' +password);
  //   return basicAuthHeaderString;
  // }
}
