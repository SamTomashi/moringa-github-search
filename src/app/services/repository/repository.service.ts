import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private baseUrl = environment.BASE_URL;
  private token = environment.gitAccessToken;
  private headers = new HttpHeaders();

  constructor(private httpClient: HttpClient) { 
    this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8')
    .set('Accept', 'application/json');
  }
  
  getRepositories(username: String){
    const endpoint = 'users';
    return this.httpClient.get<any[]>(`${this.baseUrl}/${endpoint}/${username}/repos`,{}).toPromise()
  }

  getRepository(username: String, repository: String){
    const endpoint = 'repos';
    return this.httpClient.get<any[]>(`${this.baseUrl}/${endpoint}/${username}/${repository}`,{}).toPromise()
  }
  
}
