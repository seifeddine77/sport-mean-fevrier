import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-editmatch',
  templateUrl: './editmatch.component.html',
  styleUrls: ['./editmatch.component.css']
})
export class EditmatchComponent implements OnInit {

  match:any={};
  id:any;
  matchForm:FormGroup;
    constructor( private fb:FormBuilder ,
                private matchService:MatchService,
                private router:Router,
                private activatedRoute:ActivatedRoute) { }
  
    ngOnInit() {
      this.id=this.activatedRoute.snapshot.paramMap.get('id');
      this.matchService.getMatchById(this.id).subscribe(
        (data)=>{
          this.match = data;
        }
      )
      this.matchForm=this.fb.group({
        score1:[''],
        score2:[''],
        team1:[''],
        team2:[''],
        logo1:[''],
        logo2:['']
      })
    }
   editMatch(){
    this.matchService.editMatch(this.match).subscribe(
      ()=> {
        console.log('matches edited successfully');
        this.router.navigate(['admin']);
      }
    )
  }
}
  
  