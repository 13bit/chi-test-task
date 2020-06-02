import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentBalanceComponent } from './investment-balance.component';

describe('InvestmentBalanceComponent', () => {
  let component: InvestmentBalanceComponent;
  let fixture: ComponentFixture<InvestmentBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
