import {Component, OnInit} from '@angular/core';
import {LoanService} from '../../loan.service';
import {Loan} from '../../models/loan';

@Component({
  selector: 'app-loan-list-container',
  templateUrl: './loan-list-container.component.html',
  styleUrls: ['./loan-list-container.component.css']
})
export class LoanListContainerComponent implements OnInit {
  loans: Loan[];

  constructor(private loanService: LoanService) {
  }

  ngOnInit() {
    this.getList();
  }

  getList(): void {
    this.loanService.getList()
      .subscribe((loans) => this.loans = loans);
  }

}
