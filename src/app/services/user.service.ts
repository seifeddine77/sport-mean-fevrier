import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl='http://localhost:3000';

 constructor(private httpClient:HttpClient) { 
   //this.url=enviroment.defaultUrl;
 }

 signup(user:any) {
  return this.httpClient.post<{message:string}>(`${this.userUrl}/api/singup`,user);
}

login(user: any) {
  return this.httpClient.post<{message:string,user:any}>(`${this.userUrl}/api/login`,user);
}
}
