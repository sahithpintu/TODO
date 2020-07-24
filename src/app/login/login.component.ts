import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='in28Minutes';
  password='';
  errorMessage='Invalid Credentials';
  invalidLogin=false;
  constructor(private router:Router,private hardcodedAuthentication:HardcodedAuthenticationService,private basicAuthentication:BasicAuthenticationService) 
  { }

  ngOnInit(): void {
  }

  handleLogin(){
    //console.log(this.username);
    //if(this.username === 'in28Minutes' && this.password === 'dummy')
    if(this.hardcodedAuthentication.authenticate(this.username,this.password))
    {
      //redirecting to another component
      this.router.navigate(['welcome',this.username]);
      this.invalidLogin=false;
    }
    else{
      this.invalidLogin=true;
    }
  }

  handleBasicAuthLogin(){
    //console.log(this.username);
    //if(this.username === 'in28Minutes' && this.password === 'dummy')
    this.basicAuthentication.excuteAuthenticationService(this.username,this.password).subscribe(
      data=> {
        console.log(data);
        this.router.navigate(['welcome',this.username]);
        this.invalidLogin=false;
      },
      error=>{
        console.log(error);
        this.invalidLogin=true;
      }
    )
    
      //redirecting to another component  
  }

  handleJWTAuthLogin(){
    this.basicAuthentication.excuteJWTAuthenticationService(this.username,this.password).subscribe(
      data=> {
        console.log(data);
        this.router.navigate(['welcome',this.username]);
        this.invalidLogin=false;
      },
      error=>{
        console.log(error);
        this.invalidLogin=true;
      }
    )
    
      //redirecting to another component  
  }
}
