import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  url: string = "https://api.github.com/search/users?q=";
  constructor(private http: HttpClient) { }
  
  getUser(name:string): Observable<any> { 
    return this.http.get(this.url + name);
  }

}
