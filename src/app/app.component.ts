import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'TareaOpenID';

  constructor(
    private router: Router,
    public oidcSecurityService: OidcSecurityService
  ) {}

  ngOnInit() {
    this.oidcSecurityService.checkAuth().subscribe((auth) => {
      console.log('auth', auth);
      console.log('is authenticated', auth.isAuthenticated);
      if (auth.errorMessage) {
        console.log('error', auth.errorMessage);
      }
      if (auth.isAuthenticated) {
        this.router.navigate(['profile']);
      } else {
        this.router.navigate(['home']);
      }
    });
  }
}
