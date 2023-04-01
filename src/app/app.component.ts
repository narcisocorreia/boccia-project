import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kaban';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe((user) => {
      console.log(user);
      if (user !== null) {
        if (user?.emailVerified) this.router.navigate(['/analyses']);
        else this.router.navigate(['/emailVerificationRoute']);
      }
    });
  }
}
