import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-addmatch',
  templateUrl: './addmatch.component.html',
  styleUrls: ['./addmatch.component.css']
})
export class AddmatchComponent implements OnInit {
match:any={};
matchForm:FormGroup;
  constructor( private fb:FormBuilder) { }

  ngOnInit() {
    this.matchForm=this.fb.group({
      score1:[''],
      score2:[''],
      team1:[''],
      team2:[''],
      logo1:[''],
      logo2:['']
    })
  }
  addMatch(){
    alert('BTN clicked');
    console.log('here the match object',this.match); }

}



