import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeClassFormatComponent } from './programme-class-format.component';

describe('ProgrammeClassFormatComponent', () => {
  let component: ProgrammeClassFormatComponent;
  let fixture: ComponentFixture<ProgrammeClassFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammeClassFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeClassFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
