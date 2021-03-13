import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
 matches:any;
  constructor(private router:Router,
    private matchService:MatchService) { }

  ngOnInit() {
   // this.matches=[
    //  {id:1,score1:'4',score2:'2',team1:'bvb',team2:'fcb',logoone:'assets/images/logo_1.png',logotwo:'assets/images/logo_1.png'},
     // {id:2,score1:'5',score2:'1',team1:'om',team2:'Ol',logoone:'assets/images/logo_1.png',logotwo:'assets/images/logo_1.png'},
     // {id:3,score1:'1',score2:'1',team1:'est',team2:'css',logoone:'assets/images/logo_1.png',logotwo:'assets/images/logo_1.png'},
     // {id:4,score1:'8',score2:'1',team1:'os',team2:'ca',logoone:'assets/images/logo_1.png',logotwo:'assets/images/logo_1.png'}
    //]
  }
  
  goToMatch(id){
    this.router.navigate([`displayMatch/${id}`]);
    alert('btn clicked '+id);

  }
  editMatch(id){
    this.router.navigate([`editmatch/${id}`]);

  }
  deleteMatch(id) {
    this.matchService.deleteMatch(id).subscribe(
      () =>{
        console.log('match deleted successfully');
        this.matchService.getAllMatches().subscribe(
          (data)=>{
            this.matches = data;
          }
        )
      }
    )
    
  }

}



