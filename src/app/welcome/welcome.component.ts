import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name='';
  welcomeMessageFromService:string;

  constructor(private route:ActivatedRoute,private service:WelcomeDataService) { }

  ngOnInit(): void {
    //console.log();
    this.name=this.route.snapshot.params['name'];
  }
  getWelcomeMessage()
  {
    //console.log(this.service.excuteHelloWorldBeanService());
    this.service.excuteHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

  
    //console.log("get welcome message called");
  }
    
  handleErrorResponse(error) {
   this.welcomeMessageFromService=error.error.message;
  }

  handleSuccessfulResponse(response)
  {
    this.welcomeMessageFromService=response.message;
      //  console.log(response);
       // console.log(response.message);
  }

  getWelcomeMessageWithParameter()
  {
    //console.log(this.service.excuteHelloWorldBeanService());
    this.service.excuteHelloWorldBeanServicewithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

  
    //console.log("get welcome message called");
  }

}
