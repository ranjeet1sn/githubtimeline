import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {
  @Input() userRepos:any
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onRedirect(repo,name){
    this.router.navigate(['/commit'],{queryParams:{name:name,repo:repo}})
  }
}
