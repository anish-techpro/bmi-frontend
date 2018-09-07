import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeerEvaluationListComponent } from './peer-evaluation-list.component';

describe('PeerEvaluationListComponent', () => {
  let component: PeerEvaluationListComponent;
  let fixture: ComponentFixture<PeerEvaluationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeerEvaluationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeerEvaluationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
