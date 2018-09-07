import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewsModalComponent } from './create-news-modal.component';

describe('CreateNewsModalComponent', () => {
  let component: CreateNewsModalComponent;
  let fixture: ComponentFixture<CreateNewsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
