import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilityProgrammeComponent } from './mobility-programme.component';

describe('MobilityProgrammeComponent', () => {
  let component: MobilityProgrammeComponent;
  let fixture: ComponentFixture<MobilityProgrammeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilityProgrammeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilityProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
