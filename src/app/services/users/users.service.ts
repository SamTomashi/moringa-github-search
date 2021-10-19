import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = environment.BASE_URL;
  private token = environment.gitAccessToken;
  private headers = new HttpHeaders();


  constructor(private httpClient: HttpClient) { 
    this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8')
    .set('Accept', 'application/json');
  }
  
  getUsers(username: String){
    const endpoint = 'users';
    return this.httpClient.get<any[]>(`${this.baseUrl}/${endpoint}/${username}`,{}).toPromise()
  }
  
}
