import { Component, OnInit } from '@angular/core';
import {LoanService} from '../../loan.service';

@Component({
  selector: 'app-investment-balance',
  templateUrl: './investment-balance.component.html',
  styleUrls: ['./investment-balance.component.css']
})
export class InvestmentBalanceComponent implements OnInit {
  balance: number;
  constructor(private loanService: LoanService) { }

  // TODO @@@dr add unsubscribe
  ngOnInit() {
    this.loanService.availableBalance$.subscribe(balance => this.balance = balance);
  }

}
