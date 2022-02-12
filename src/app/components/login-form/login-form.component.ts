import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HotToastService } from '@ngneat/hot-toast';

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && confirmPassword !== password) {
      return {
        passwordsDontMatch: true,
      };
    }

    return null;
  };
}

type FormType = 'LongIn' | 'SingIn';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  formType: FormType = 'LongIn';

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  singInForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
    },
    { validators: passwordMatchValidator() }
  );

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {}

  // ** Forms Gets

  get email() {
    if (this.formType === 'SingIn') {
      return this.singInForm.get('email');
    }
    return this.loginForm.get('email');
  }

  get password() {
    if (this.formType === 'SingIn') {
      return this.singInForm.get('password');
    }
    return this.loginForm.get('password');
  }

  get confirmPassword() {
    return this.singInForm.get('confirmPassword');
  }

  get name() {
    return this.singInForm.get('name');
  }

  // ** Forms Submit

  loginSubmit() {
    if (!this.loginForm.valid) return;

    const { email, password } = this.loginForm.value;

    this.authService
      .login(email, password)
      .pipe(
        this.toast.observe({
          success: 'Logged in successfully!',
          loading: 'Logging ...',
          error: 'Could not login!',
        })
      )
      .subscribe((result) => {
        const { user } = result;
        console.log(user.emailVerified);

        if (!user.emailVerified) {
          this.router.navigate(['/emailVerificationRoute']);
        } else {
          this.router.navigate(['/kabanRoute']);
        }
      });
  }

  singInSubmit() {
    if (!this.singInForm.valid) return;

    const { email, password, name } = this.singInForm.value;

    this.authService
      .singUp(name, email, password)
      .pipe(
        this.toast.observe({
          success: 'Congrats your account was created',
          loading: 'Creating account ...',
          error: ({ message }) => `$message`,
        })
      )
      .subscribe(() => {
        this.router.navigate(['/emailVerificationRoute']);
      });
  }

  changeFormType(newType: FormType) {
    this.formType = newType;
  }
}
