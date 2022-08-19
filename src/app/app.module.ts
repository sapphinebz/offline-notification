import { NgModule } from '@angular/core';
import {} from '@angular/animations';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfflineCardComponent } from './offline-card/offline-card.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    OfflineCardComponent,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
