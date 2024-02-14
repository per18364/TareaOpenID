import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(
    private router: Router,
    private authService: AuthServiceService
  ) {}

  start() {
    this.authService.login();
    // this.router.navigate(['profile/']);
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
