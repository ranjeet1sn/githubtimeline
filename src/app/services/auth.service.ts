import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticate = new Subject<any>();
  private tokenTimer: any;
  isAuthenticated = false;
  constructor(
    private authService: SocialAuthService,
    private router: Router
  ) { }

  signInWithGoogle() {
    return this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

  }

  signOut(): void {
    this.authService.signOut().then().catch(error=>{  });
  }

  getAuthState() {
    return this.authService.authState.pipe(map((res) => {
      if (res) {
        const token = res.idToken;
        const expireDuration: any = 3600;
        this.setAuthTime(expireDuration);
        const now = new Date();
        this.isAuthenticated = true;
        this.isAuthenticate.next(true);
        this.router.navigate(['/home']);
        const expire = new Date(now.getTime() + expireDuration * 1000);
        this.setAuthData(token, expire);
      }
    }))
  }

  setAuthTime(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.onLogout();
    }, duration * 1000);
  }

  setAuthData(token: string, expireIn: Date) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expireIn.toISOString());
  }

  clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
  }

  onLogout() {
    this.clearAuthData();
    clearTimeout(this.tokenTimer);
    this.signOut();
    this.isAuthenticated = false;
    this.isAuthenticate.next(false);
    this.router.navigate(['/login']);
  }
  autoAuthUser() {
    const authInfo = this.getAuthData();
    if (!authInfo) {
      return
    }
    const now = new Date();
    const isFuture = authInfo.expiresInDate.getTime() - now.getTime();
    if (isFuture > 0) {
      this.setAuthTime(isFuture / 1000);
      this.isAuthenticated = true;
      this.isAuthenticate.next(true)
      // this.router.navigate(['/home']);
    }
    else {
      this.onLogout();
    }
  }

  getAuthenticate() {
    return this.isAuthenticate.asObservable();
  }

  getAuthData() {
    const token = localStorage.getItem('token');
    const expiresInDate = localStorage.getItem('expiration')
    if (!token && !expiresInDate) {
      return;
    }
    return {
      token: token,
      expiresInDate: new Date(expiresInDate)
    }
  }

}

