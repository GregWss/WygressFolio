import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Carousels import
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Checking if a div is in viewport
import { InViewportModule } from 'ng-in-viewport';
import 'intersection-observer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    InViewportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
