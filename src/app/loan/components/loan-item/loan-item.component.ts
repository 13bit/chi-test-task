import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Loan} from '../../models/loan';
import {LoanService} from '../../loan.service';
import {InvestModalComponent} from './modals/invest-modal/invest-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-loan-item',
  templateUrl: './loan-item.component.html',
  styleUrls: ['./loan-item.component.css']
})
export class LoanItemComponent implements OnInit {

  @Input()
  loan: Loan;

  @Output()
  invested: EventEmitter<Loan> = new EventEmitter<Loan>();

  constructor(private loanService: LoanService, private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  invest() {
    const modalRef = this.modalService.open(InvestModalComponent);
    modalRef.componentInstance.loan = this.loan;

    modalRef.result.then(
      (investedLoan) => {
        investedLoan.isInvested = true;
        this.loan = investedLoan;
        this.invested.emit(investedLoan);
      },
      (reason) => reason
    );
  }
}
