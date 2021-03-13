import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'


@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let  players =  [
    { id:1,name:'ramos',poste:'DC',numero:'4',age:'34',description:'new'},
    { id:2,name:'karim',poste:'MD',numero:'4',age:'34',description:'new'},
    { id:3,name:'marcello',poste:'LB',numero:'4',age:'34',description:'new'},
    { id:4,name:'slimen',poste:'FW',numero:'4',age:'34',description:'new'}
   ];

   

   let matches=[
    {id:1,score1:'4',score2:'2',team1:'bvb',team2:'fcb',logoone:'assets/images/logo_1.png',logotwo:'assets/images/logo_1.png'},
    {id:2,score1:'5',score2:'1',team1:'om',team2:'Ol',logoone:'assets/images/logo_1.png',logotwo:'assets/images/logo_1.png'},
    {id:3,score1:'1',score2:'1',team1:'est',team2:'css',logoone:'assets/images/logo_1.png',logotwo:'assets/images/logo_1.png'},
    {id:4,score1:'8',score2:'1',team1:'os',team2:'ca',logoone:'assets/images/logo_1.png',logotwo:'assets/images/logo_1.png'}
  ];
  return{matches,players};

  }
  

}