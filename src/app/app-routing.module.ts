import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KabanComponent } from './routes/kaban/kaban.component';
import { KabanListComponent } from './routes/kaban-list/kaban-list.component';
import { EmailVerificationComponent } from './routes/email-verification/email-verification.component';
import { LoginComponent } from './routes/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'emailVerificationRoute', component: EmailVerificationComponent },
  { path: 'kabanRoute', component: KabanComponent },
  { path: 'kabanListRoute', component: KabanListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
