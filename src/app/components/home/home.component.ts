import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  matchObj:any;
  constructor() { }

  ngOnInit() {
    this.matchObj=[
    {id:1,name:'ramos',poste:'milieu',numero:'4',age:'34',description:'new'},
  ]
    
  }

}
