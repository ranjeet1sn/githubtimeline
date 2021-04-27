import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  userName: string;
  userProfile: any;
  userRepos = [];
  subscription: Subscription[] = [];
  constructor(
    private githubService: GithubService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    const name = localStorage.getItem('name');
    if (name) {
      this.userName = name;
      this.onGetProfile(name);
    }
  }

  onGetProfile(name?) {
    localStorage.setItem('name', this.userName);
    if (name) {
      this.userName = name;
    }
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000)
    this.subscription.push(this.githubService.getProfileDetail(this.userName).subscribe(res => {
      this.userProfile = res;
    }));
    this.subscription.push(this.githubService.getRepoDetails(this.userName).subscribe(res => {
      this.userRepos = res;
    }));
  }

  ngOnDestroy() {
     this.subscription.forEach(subscription=>subscription.unsubscribe())
  }
}
