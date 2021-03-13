import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
players:any;
  constructor(private router:Router,
    private playerservice:PlayerService) { }

  ngOnInit() { this.playerservice.getAllPlayers().subscribe( 
    (data) => {
      this.players = data.allPlayers;
    }
  )
    

   // this.players=[
    //  {id:1,name:'ramos',poste:'milieu',numero:'4',age:'34',description:'new'},
    //  {id:2,name:'ramos',poste:'milieu',numero:'4',age:'34',description:'new'},
     // {id:3,name:'ramos',poste:'milieu',numero:'4',age:'34',description:'new'},
     // {id:4,name:'ramos',poste:'milieu',numero:'4',age:'34',description:'new'}
   // ]
  }
  goToPlayer(id){
    this.router.navigate([`displayPlayer/${id}`]);
    alert('btn clicked '+id);

  
  }
  editPlayer(id){
    this.router.navigate([`editPlayer/${id}`]);

  }
  deletePlayer(id) {
    this.playerservice.deletePlayer(id).subscribe(
      () =>{
        console.log('player deleted successfully');
        this.playerservice.getAllPlayers().subscribe(
          (data)=>{
            this.players = data.allPlayers;
          }
        )
      }
    )
    
  }

}
