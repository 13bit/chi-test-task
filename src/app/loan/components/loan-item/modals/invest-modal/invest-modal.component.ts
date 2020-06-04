import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Loan} from '../../../../models/loan';
import {LoanService} from '../../../../loan.service';

@Component({
  selector: 'app-invest-modal',
  templateUrl: './invest-modal.component.html',
  styleUrls: ['./invest-modal.component.css']
})
export class InvestModalComponent implements OnInit {
  @Input()
  loan: Loan;

  investmentAmount: number;

  error: string;

  constructor(private loanService: LoanService, public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  async invest(amount: number) {
    try {
      await this.loanService.invest(this.loan.id, amount);

      return this.activeModal.close(this.loan);
    } catch (e) {
      this.error = e;
    }
  }

}
