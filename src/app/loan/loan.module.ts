import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InvestmentBalanceComponent} from './components/investment-balance/investment-balance.component';
import {LoanListContainerComponent} from './containers/loan-list-container/loan-list-container.component';
import {LoanItemComponent} from './components/loan-item/loan-item.component';
import {SharedModule} from '../shared/shared.module';
import {InvestModalComponent} from './components/loan-item/modals/invest-modal/invest-modal.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    LoanListContainerComponent,
    LoanItemComponent,
    InvestmentBalanceComponent,
    InvestModalComponent,
  ],
  exports: [
    LoanListContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  entryComponents: [
    InvestModalComponent
  ],
  providers: [
  ]
})
export class LoanModule {
}
