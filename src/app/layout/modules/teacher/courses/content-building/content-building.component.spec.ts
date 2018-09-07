import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBuildingComponent } from './content-building.component';

describe('ContentBuildingComponent', () => {
  let component: ContentBuildingComponent;
  let fixture: ComponentFixture<ContentBuildingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentBuildingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
