import {Injectable} from '@angular/core';
import {Loan} from './models/loan';
import {LOANS} from './loans.mock';
import {BehaviorSubject, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  loans: Loan[];

  availableBalance$ = new BehaviorSubject(0);

  constructor() {
    this.loans = LOANS;

    this.calculateAvailableBalance();
  }

  getList(): Observable<Loan[]> {
    return of(this.loans);
  }

  getById(id: number): Observable<Loan> {
    return of(this.loans.find((item) => item.id === id));
  }

  invest(loanId, amount: number) {
    this.loans = this.loans.map((loan) => {
      if (loan.id === loanId) {
        loan.available -= amount;
      }

      return loan;
    });

    this.calculateAvailableBalance();
  }

  calculateAvailableBalance(): void {
    const balance = this.loans.reduce((acc, {available}) => acc + available, 0);

    this.availableBalance$.next(balance);
  }
}
