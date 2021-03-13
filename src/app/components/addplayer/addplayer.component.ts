import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent implements OnInit {
  player:any={};
  playerForm:FormGroup;
  constructor(private fb:FormBuilder,
    private playerService:PlayerService,
    private router:Router) { }

  ngOnInit() {
    this.playerForm=this.fb.group({
      name:[''],
     poste:[''],
      age:[''],
      numero:[''],
      description:['']


    }) 
  }

    addPlayer(){
      this.playerService.addplayer(this.player).subscribe(
        ()=> {
          console.log('player added successfully');
          this.router.navigate(['admin']);
        }
      )
     
       }
  
 
  }


