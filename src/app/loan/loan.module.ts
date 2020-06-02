import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InvestmentBalanceComponent} from './components/investment-balance/investment-balance.component';
import {LoanListContainerComponent} from './containers/loan-list-container/loan-list-container.component';
import {LoanItemComponent} from './components/loan-item/loan-item.component';


@NgModule({
  declarations: [
    LoanListContainerComponent,
    LoanItemComponent,
    InvestmentBalanceComponent
  ],
  exports: [
    LoanListContainerComponent
  ],
  imports: [
    CommonModule
  ],
})
export class LoanModule {
}
