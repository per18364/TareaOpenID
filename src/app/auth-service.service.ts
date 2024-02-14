import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private oidcSecurityService: OidcSecurityService) {}

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService.logoff().subscribe((res) => {
      console.log('successful logoff', res);
    });
  }

  isAuthenticated() {
    return this.oidcSecurityService.isAuthenticated$;
  }
}
