import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent /*implements OnInit*/ {
  constructor(
    private router: Router,
    public oidcSecurityService: OidcSecurityService,
    private authService: AuthServiceService
  ) {}

  // ngOnInit() {
  //   this.oidcSecurityService
  //     .checkAuth()
  //     .subscribe((loginResponse: LoginResponse) => {
  //       const { isAuthenticated, userData, accessToken, idToken, configId } = loginResponse;
  //       console.log('is authenticated', loginResponse);
  //     });
  // }

  return() {
    this.authService.logout();
    // this.router.navigate(['home/']);
  }
}
