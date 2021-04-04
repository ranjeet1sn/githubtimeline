import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-commit-timeline',
  templateUrl: './commit-timeline.component.html',
  styleUrls: ['./commit-timeline.component.css']
})
export class CommitTimelineComponent implements OnInit {
  commits: any = [];
  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(res => {
      if (Object.keys(res).length > 0) {
        this.githubService.getRepoCommit(res['name'], res['repo']).subscribe(res => {
          this.commits = res;
        })
      }
    })
  }

}
