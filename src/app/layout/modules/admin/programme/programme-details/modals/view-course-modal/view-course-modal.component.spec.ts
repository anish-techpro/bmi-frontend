import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCourseModalComponent } from './view-course-modal.component';

describe('ViewCourseModalComponent', () => {
  let component: ViewCourseModalComponent;
  let fixture: ComponentFixture<ViewCourseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCourseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCourseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
