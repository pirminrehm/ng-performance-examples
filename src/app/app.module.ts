import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdsOnpushProblemsComponent } from './pages/cds-onpush-problems/cds-onpush-problems.component';
import { CardOnpushComponent } from './components/card-onpush/card-onpush.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { CardComponent } from './components/card/card.component';
import { CdCounterComponent } from './components/cd-counter/cd-counter.component';
import { ProfilerComponent } from './components/profiler/profiler.component';
import { CdsDefaultComponent } from './pages/cds-default/cds-default.component';
import { CdsOnpushComponent } from './pages/cds-onpush/cds-onpush.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CdsDefaultComponent,
    CdsOnpushComponent,
    CardComponent,
    CardOnpushComponent,
    ProfilerComponent,
    CdCounterComponent,
    CdsOnpushProblemsComponent,
    CounterPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
