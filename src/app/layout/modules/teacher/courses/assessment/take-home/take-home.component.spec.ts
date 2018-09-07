import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeHomeComponent } from './take-home.component';

describe('TakeHomeComponent', () => {
  let component: TakeHomeComponent;
  let fixture: ComponentFixture<TakeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
