import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomaPaperComponent } from './diploma-paper.component';

describe('DiplomaPaperComponent', () => {
  let component: DiplomaPaperComponent;
  let fixture: ComponentFixture<DiplomaPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiplomaPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplomaPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
