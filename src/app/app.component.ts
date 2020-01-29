import { Component, OnInit, NgModule} from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'WygressFolio';
  selectedDot = 0; // always start at first dot (for now)

  constructor() { }

  ngOnInit() {
    AOS.init({
      duration: 1200,
      delay: 200,
      once: true
    });

    // run on init to know where we are
    this.isCurrent(this.selectedDot);
  }

  // TODO: check and update to inform where we are on the page
  isCurrent(newValue) {
    if (this.selectedDot !== newValue) {
      this.selectedDot = newValue;
    }
  }

  // Updating the dot navigation when reaching a div
  action(event : any) {
    console.log('It works here');
  }
}
