import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeStudentListComponent } from './programme-student-list.component';

describe('ProgrammeStudentListComponent', () => {
  let component: ProgrammeStudentListComponent;
  let fixture: ComponentFixture<ProgrammeStudentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammeStudentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
