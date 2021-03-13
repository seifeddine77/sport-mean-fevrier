import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.component.html',
  styleUrls: ['./joueurs.component.css']
})
export class JoueursComponent implements OnInit {
  
  constructor() { }
  @Input() player:any;
  
  ngOnInit() {
    
  }

}
