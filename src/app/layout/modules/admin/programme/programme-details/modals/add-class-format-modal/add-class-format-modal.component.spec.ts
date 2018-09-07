import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassFormatModalComponent } from './add-class-format-modal.component';

describe('AddClassFormatModalComponent', () => {
  let component: AddClassFormatModalComponent;
  let fixture: ComponentFixture<AddClassFormatModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClassFormatModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClassFormatModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
