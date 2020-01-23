import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HellblazeInfosComponent } from './hellblaze-infos.component';

describe('HellblazeInfosComponent', () => {
  let component: HellblazeInfosComponent;
  let fixture: ComponentFixture<HellblazeInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HellblazeInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HellblazeInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
