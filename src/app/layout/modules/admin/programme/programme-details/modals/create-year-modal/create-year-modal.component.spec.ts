import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateYearModalComponent } from './create-year-modal.component';

describe('CreateYearModalComponent', () => {
  let component: CreateYearModalComponent;
  let fixture: ComponentFixture<CreateYearModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateYearModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateYearModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
