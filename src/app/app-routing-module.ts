import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgreementsComponent } from './features/agreements/pages/agreements';

const routes: Routes = [
  { path: 'agreements', component: AgreementsComponent },
  { path: '', redirectTo: 'agreements', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
