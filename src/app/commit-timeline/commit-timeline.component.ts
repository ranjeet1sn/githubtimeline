import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-commit-timeline',
  templateUrl: './commit-timeline.component.html',
  styleUrls: ['./commit-timeline.component.css']
})
export class CommitTimelineComponent implements OnInit {
  commits: any = [];
  isShow = false;
  subscription:Subscription[] =[];
  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService,
    private spinner:NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000)

    this.route.queryParams.subscribe(res => {
      if (Object.keys(res).length > 0) {
        this.githubService.getRepoCommit(res['name'], res['repo']).subscribe(res => {
          this.commits = res;
          this.isShow = true;
        },
        (error=>{
          this.isShow =true;
        }));
      }
    })
  }
  ngOnDestroy() {
    this.subscription.forEach(subscription=>subscription.unsubscribe());
    this.isShow =false
 }


}
