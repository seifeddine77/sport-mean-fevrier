import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-addteam',
  templateUrl: './addteam.component.html',
  styleUrls: ['./addteam.component.css']
})
export class AddteamComponent implements OnInit {
   team:any={};
   teamForm:FormGroup;
  constructor(private fb:FormBuilder,
    teamService:TeamService,
    router:Router) { }

  ngOnInit() {
    this.teamForm=this.fb.group({
      name:[''],
      country:[''],
      foundation:[''],
      stadium:['']
    })
  }
  addTeam(){
  this.team.Service.addTeam(this.team).subscribe(
    ()=> {
      console.log('Team added successfully');
      //this.router.navigate(['admin']);
    }
  )
}

}
