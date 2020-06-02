import {Component, Input, OnInit} from '@angular/core';
import {Loan} from '../../models/loan';
import {LoanService} from '../../loan.service';

@Component({
  selector: 'app-loan-item',
  templateUrl: './loan-item.component.html',
  styleUrls: ['./loan-item.component.css']
})
export class LoanItemComponent implements OnInit {

  @Input()
  loan: Loan;

  constructor(private loanService: LoanService) { }

  ngOnInit() {
    // console.log('this >>', this.loan);
  }

  invest(loanId: number, amount: number){
    this.loanService.invest(loanId, amount);
  }
}
