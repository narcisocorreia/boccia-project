import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysesComponent } from './routes/analyses/analyses.component';
import { EmailVerificationComponent } from './routes/email-verification/email-verification.component';
import { LoginComponent } from './routes/login/login.component';
import { PlayerListComponent } from './routes/player-list/player-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'emailVerificationRoute', component: EmailVerificationComponent },
  { path: 'analyses', component: AnalysesComponent },
  { path: 'playerList', component: PlayerListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
