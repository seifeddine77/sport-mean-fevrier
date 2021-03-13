import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddmatchComponent } from './components/addmatch/addmatch.component';
import { AddplayerComponent } from './components/addplayer/addplayer.component';
import { AddteamComponent } from './components/addteam/addteam.component';
import { AdminComponent } from './components/admin/admin.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { DisplayTeamComponent } from './components/display-team/display-team.component';
import { EditmatchComponent } from './components/editmatch/editmatch.component';
import { EditplayerComponent } from './components/editplayer/editplayer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchComponent } from './components/match/match.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PartiesComponent } from './components/parties/parties.component';
import { PlayerComponent } from './components/player/player.component';
import { ScoreComponent } from './components/score/score.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
 {path:'signup',component:SignupComponent}, 
  {path:'addteam',component:AddteamComponent},
  {path:'addplayer',component:AddplayerComponent},
  {path:'addmatch',component:AddmatchComponent},
  {path:'admin',component:AdminComponent},
 {path:'matches',component:MatchesComponent},
  {path:'player',component:PlayerComponent},
  {path:'parties',component:PartiesComponent},
  {path:'score',component:ScoreComponent},
  {path:'displayPlayer/:id',component:DisplayPlayerComponent},
  {path:'displayMatch/:id',component:DisplayMatchComponent},
  {path:'displayteam/:id',component:DisplayTeamComponent},
  {path:'editPlayer/:id',component:EditplayerComponent},
  {path:'editmatch/:id',component:EditmatchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
