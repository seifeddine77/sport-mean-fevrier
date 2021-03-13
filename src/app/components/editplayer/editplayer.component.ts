import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-editplayer',
  templateUrl: './editplayer.component.html',
  styleUrls: ['./editplayer.component.css']
})
export class EditplayerComponent implements OnInit {
  player:any={};
  id:any;
  playerForm:FormGroup;
  constructor(private fb:FormBuilder,
    private playerService:PlayerService,
    private router:Router,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.playerService.getPlayerById(this.id).subscribe(
      (data)=>{
        this.player = data;
      }
    )
    this.playerForm=this.fb.group({
      name:[''],
     poste:[''],
      age:[''],
      numero:[''],
      description:['']


    }) 
  }

    editPlayer(){
      this.playerService.editPlayer(this.player).subscribe(
        ()=> {
          console.log('player edited successfully');
          this.router.navigate(['admin']);
        }
      )
     
       }
  
 
  }