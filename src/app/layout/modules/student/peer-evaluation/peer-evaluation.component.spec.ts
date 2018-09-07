import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeerEvaluationComponent } from './peer-evaluation.component';

describe('PeerEvaluationComponent', () => {
  let component: PeerEvaluationComponent;
  let fixture: ComponentFixture<PeerEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeerEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeerEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
