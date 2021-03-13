import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.css']
})
export class PartiesComponent implements OnInit {
  matches:any;
  constructor() { }

  ngOnInit() {
    this.matches=[
      {id:1,score1:'4',score2:'2',team1:'bvb',team2:'fcb',logoone:'assets/images/logo_1.png',logotwo:'assets/images/logo_1.png'},
      {id:2,score1:'5',score2:'1',team1:'om',team2:'Ol',logoone:'assets/images/logo_1.png',logotwo:'assets/images/logo_1.png'},
      {id:3,score1:'1',score2:'1',team1:'est',team2:'css',logoone:'assets/images/logo_1.png',logotwo:'assets/images/logo_1.png'},
      {id:4,score1:'8',score2:'1',team1:'os',team2:'ca',logoone:'assets/images/logo_1.png',logotwo:'assets/images/logo_1.png'}
    ]
  }

}
