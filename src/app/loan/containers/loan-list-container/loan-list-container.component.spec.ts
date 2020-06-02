import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanListContainerComponent } from './loan-container.component';

describe('LoanContainerComponent', () => {
  let component: LoanListContainerComponent;
  let fixture: ComponentFixture<LoanListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
