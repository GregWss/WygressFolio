import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ISSTrackerCarouselComponent } from './isstracker-carousel.component';

describe('ISSTrackerCarouselComponent', () => {
  let component: ISSTrackerCarouselComponent;
  let fixture: ComponentFixture<ISSTrackerCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ISSTrackerCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ISSTrackerCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
