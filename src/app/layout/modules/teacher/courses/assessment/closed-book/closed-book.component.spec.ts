import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedBookComponent } from './closed-book.component';

describe('ClosedBookComponent', () => {
  let component: ClosedBookComponent;
  let fixture: ComponentFixture<ClosedBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
