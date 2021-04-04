import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {HttpClientModule} from '@angular/common/http'
import {
  GoogleLoginProvider,
} from 'angularx-social-login';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { GithubPrifleComponent } from './github-prifle/github-prifle.component';
import { GithubReposComponent } from './github-repos/github-repos.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ProfileDataComponent } from './profile-data/profile-data.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommitTimelineComponent } from './commit-timeline/commit-timeline.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GithubPrifleComponent,
    GithubReposComponent,
    ProfileCardComponent,
    ProfileDataComponent,
    CommitTimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider( '744258742594-aebgm9nk9kufg3st6mqld3ojbokaivp1.apps.googleusercontent.com')
          },
        ]
      } as SocialAuthServiceConfig,
    },
    AuthService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
