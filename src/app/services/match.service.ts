import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  matchUrl='api/matches';

  constructor(private httpClient:HttpClient) { }
  addmatch(match:any){
    return this.httpClient.post(this.matchUrl,match);

  }
  getAllMatches()
  {
    return this.httpClient.get(this.matchUrl);
  }
  getMatchById(id) {
    return this.httpClient.get(`${this.matchUrl}/${id}`);
  }
  deleteMatch(id){
    return this.httpClient.delete(`${this.matchUrl}/${id}`);
  }
  editMatch(match:any){
    return this.httpClient.put(`${this.matchUrl}/${match.id}`,match);
  }
}
