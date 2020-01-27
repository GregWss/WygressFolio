import { Component, OnInit, NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ISSTrackerCarouselComponent],
  imports: [NgbModule]
})
@Component({
  selector: 'app-isstracker-carousel',
  templateUrl: './isstracker-carousel.component.html',
  styleUrls: ['./isstracker-carousel.component.scss']
})
export class ISSTrackerCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
