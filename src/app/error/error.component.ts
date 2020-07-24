import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage='Some Error Happened!! Contact and Reach Support team  sahithcricketer@gmail.com';
  constructor() { }

  ngOnInit(): void {
  }

}
