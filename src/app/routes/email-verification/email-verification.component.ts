import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss'],
})
export class EmailVerificationComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe((user) => {
      if (user?.emailVerified) {
        this.router.navigate(['/analyses']);
      } else {
        this.authService.verifyEmail();
      }
    });
  }

  resendEmail() {
    this.authService.verifyEmail().pipe(
      this.toast.observe({
        success: 'A new email was sended',
        loading: 'Sending ...',
        error: ({ message }) => `$message`,
      })
    );
  }
}
