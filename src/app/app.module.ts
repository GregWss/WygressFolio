import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ISSTrackerCarouselComponent } from './isstracker-carousel/isstracker-carousel.component';
import { HellblazeInfosComponent } from './hellblaze-infos/hellblaze-infos.component';

@NgModule({
  declarations: [
    AppComponent,
    ISSTrackerCarouselComponent,
    HellblazeInfosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
