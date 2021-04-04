import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  client_id = '9a873554a6442f3ce25f';
  client_secret = 'b04e771b01a5ea67e7bc8740009963fa45595355 '
  constructor(private http:HttpClient) { }

  getProfileDetail(user){
    let url=`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
    return this.http.get(url)
  }

  getRepoDetails(user):Observable<any>{
    let url=`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`;
    return this.http.get(url)
  }

  getRepoCommit(name,repo){
    let url=`https://api.github.com/repos/${name}/${repo}/commits?client_id=${this.client_id}&client_secret=${this.client_secret}`
    return this.http.get(url)
  }
}
