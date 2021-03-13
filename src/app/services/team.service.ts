import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamUrl='http://localhost:3000';

  constructor(private httpClient:HttpClient) { }
  addTeam(team:any){
    return this.httpClient.post(`${this.teamUrl}/addTeam`,team);

  }
  getAllteams()
  {
    return this.httpClient.get<{allteams:any}>(`${this.teamUrl}/getAllTeams`);
  }
  getteamById(id) {
    return this.httpClient.get(`${this.teamUrl}/getTeamById/${id}`);
  }
  deleteteam(id){
    return this.httpClient.delete(`${this.teamUrl}/deleteTeam/${id}`);
  }
  editteam(team:any){
    return this.httpClient.put(`${this.teamUrl}/editTeam/${team.id}`,team);
  }
}