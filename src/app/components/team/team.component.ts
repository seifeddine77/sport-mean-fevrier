import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teams:any;

  constructor(private router:Router) { }

  ngOnInit() {
    this.teams=[
      {id:1,name:'RMD',foundation:'1902',stadium:'bernabiu',country:'spain'},
      {id:1,name:'liv',foundation:'1902',stadium:'bernabiu',country:'uk' },
     {id:1,name:'atl',foundation:'1902',stadium:'bernabiu',country:'spain'}
    ]
  }
  goToTeam(id){
    this.router.navigate([`displayteam/${id}`]);
    alert('btn clicked '+id);

  }

}
