import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfCollapserComponent } from './lf-collapser.component';

describe('LfCollapserComponent', () => {
  let component: LfCollapserComponent;
  let fixture: ComponentFixture<LfCollapserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfCollapserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfCollapserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
