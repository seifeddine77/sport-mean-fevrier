import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  constructor() { }
  @Input() match:any;

  ngOnInit() {
   

  }
  color(x:number,y:number){
    if(x<y)
    {return ['red',0,'loss'];}
    else if (x>y)
    {return['red',1,'win'] ;}
    else{
      return ['blue',2,'draw'];
    }
  }
 // result(x:number,y:number){
  //  if (x<y)
   // {return '0'}
   // else if (x>y)
   // { return'1'}
  //  else 
  //  {return'2' };
  
 // }

}
