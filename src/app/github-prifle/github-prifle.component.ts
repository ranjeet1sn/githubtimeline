import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-github-prifle',
  templateUrl: './github-prifle.component.html',
  styleUrls: ['./github-prifle.component.css']
})
export class GithubPrifleComponent implements OnInit {
  @Input() githubProfile:any;
  constructor() { }

  ngOnInit(): void {
  }

}
