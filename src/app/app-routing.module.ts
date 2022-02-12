import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KabanComponent } from './pages/kaban/kaban.component';
import { EmailVerificationComponent } from './pages/email-verification/email-verification.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'emailVerificationRoute', component: EmailVerificationComponent },
  { path: 'kabanRoute', component: KabanComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
