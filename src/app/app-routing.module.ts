import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CdsDefaultComponent } from './pages/cds-default/cds-default.component';
import { CdsOnpushProblemsComponent } from './pages/cds-onpush-problems/cds-onpush-problems.component';
import { CdsOnpushComponent } from './pages/cds-onpush/cds-onpush.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'counter', component: CounterPageComponent },
  { path: 'default', component: CdsDefaultComponent },
  { path: 'onpush', component: CdsOnpushComponent },
  { path: 'onpush-problems', component: CdsOnpushProblemsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
