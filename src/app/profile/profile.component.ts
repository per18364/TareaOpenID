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

  ngOnInit() {
    this.oidcSecurityService
      .checkAuth()
      .subscribe(({ isAuthenticated, userData, accessToken }) => {
        if (isAuthenticated) {
          // El usuario está autenticado y el accessToken está disponible para su uso.
          console.log('userData', userData);
          console.log('accessToken', accessToken);
        } else {
          // Manejar el caso cuando el usuario no está autenticado.
          console.log('El usuario no está autenticado');
        }
      });
  }

  return() {
    this.authService.logout();
    // this.router.navigate(['home/']);
  }
}
