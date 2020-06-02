import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanContainerComponent } from './container/loan-container/loan-container.component';
import { LoanItemComponent } from './components/loan-item/loan-item.component';
import { InvestmentBalanceComponent } from './components/investment-balance/investment-balance.component';



@NgModule({
  declarations: [LoanContainerComponent, LoanItemComponent, InvestmentBalanceComponent],
  imports: [
    CommonModule
  ]
})
export class LoanModule { }
