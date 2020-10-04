import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CdsDefaultComponent } from './cds-default/cds-default.component';
import { CdsOnpushComponent } from './cds-onpush/cds-onpush.component';
import { CdsOnpushFixedComponent } from './cds-onpush-fixed/cds-onpush-fixed.component';
import { ReuseComponent } from './reuse/reuse.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CdsDefaultComponent,
    CdsOnpushComponent,
    CdsOnpushFixedComponent,
    ReuseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
