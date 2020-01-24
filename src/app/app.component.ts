import { Component, OnInit} from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'WygressFolio';

  constructor() { }

  ngOnInit() {
    AOS.init({
      duration: 1200,
      delay: 200,
      once: true
    });
  }

}
