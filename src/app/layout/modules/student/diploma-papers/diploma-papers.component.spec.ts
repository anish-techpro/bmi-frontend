import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomaPapersComponent } from './diploma-papers.component';

describe('DiplomaPapersComponent', () => {
  let component: DiplomaPapersComponent;
  let fixture: ComponentFixture<DiplomaPapersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiplomaPapersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplomaPapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
