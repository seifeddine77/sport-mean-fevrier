import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  players:any;
  constructor() { }
  

  ngOnInit() {
    this.players=[
      {id:1,name:'ramos',poste:'milieu',numero:'4',age:'34',description:'new'},
      {id:2,name:'seif',poste:'milieu',numero:'4',age:'34',description:'new'},
      {id:3,name:'ronaldo',poste:'milieu',numero:'4',age:'34',description:'new'},
      {id:4,name:'karim',poste:'milieu',numero:'4',age:'34',description:'new'}
    ]                               
  }

}
