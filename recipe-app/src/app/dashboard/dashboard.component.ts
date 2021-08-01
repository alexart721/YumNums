import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  //Next on my todo: 
  //1)create a wrapper componet on my html here that will tell the dashboard whats supposed to be displayed next denpending on the 'state' on the app

  constructor() { }

  ngOnInit(): void {
  }
  

  
}
