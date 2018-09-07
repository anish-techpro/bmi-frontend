import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleAndCourseComponent } from './module-and-course.component';

describe('ModuleAndCourseComponent', () => {
  let component: ModuleAndCourseComponent;
  let fixture: ComponentFixture<ModuleAndCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleAndCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleAndCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
