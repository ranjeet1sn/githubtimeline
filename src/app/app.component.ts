import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit ,AfterViewInit{
  isAuthenticated = false;
  constructor(
    private authService: AuthService,
    private cdr:ChangeDetectorRef
    ) { }

  ngOnInit() {
    this.authService.autoAuthUser();
    this.isAuthenticated = this.authService.isAuthenticated;
    this.authService.getAuthenticate().subscribe(res => {
      if (res) {
        this.isAuthenticated = res;
      } else {
        this.isAuthenticated = res;
      }
    }, (error => {
    })
    )

  }
  onLogout() {
    setTimeout(()=>{
      this.authService.onLogout();      
    },2000)

  }
  ngAfterViewInit(){
    this.cdr.detectChanges();
  }
}
