import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { NewsComponent } from './components/news/news.component';
import { WorldcupComponent } from './components/worldcup/worldcup.component';
import { ScoreComponent } from './components/score/score.component';
import { MatchesComponent } from './components/matches/matches.component';
import { HomeComponent } from './components/home/home.component';
import { AddplayerComponent } from './components/addplayer/addplayer.component';
import { AddteamComponent } from './components/addteam/addteam.component';
import { AddmatchComponent } from './components/addmatch/addmatch.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PlayerComponent } from './components/player/player.component';
import { TeamComponent } from './components/team/team.component';
import { MatchComponent } from './components/match/match.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PartiesComponent } from './components/parties/parties.component';
import { JoueursComponent } from './components/joueurs/joueurs.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayTeamComponent } from './components/display-team/display-team.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { EditplayerComponent } from './components/editplayer/editplayer.component';
import { EditmatchComponent } from './components/editmatch/editmatch.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    NewsComponent,
    WorldcupComponent,
    ScoreComponent,
    MatchesComponent,
    HomeComponent,
    AddplayerComponent,
    AddteamComponent,
    AddmatchComponent,
    AdminComponent,
    LoginComponent,
    SignupComponent,
    PlayerComponent,
    TeamComponent,
    MatchComponent,
    PartiesComponent,
    JoueursComponent,
    DisplayPlayerComponent,
    DisplayMatchComponent,
    DisplayTeamComponent,
    EditplayerComponent,
    EditmatchComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   // InMemoryWebApiModule.forRoot(DataService),
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
