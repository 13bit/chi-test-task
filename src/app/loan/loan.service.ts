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

  invest(loanId, amount: number): Promise<void> {
    return new Promise((resolve, reject) => {
        const updatedLoan = this.loans.find((loan) => loan.id === loanId);

        if (updatedLoan.available < amount) {
          return reject('Not enough available amount in Loan');
        }
        updatedLoan.available -= amount;


        this.loans = this.loans.map((loan) => {
          if (loan.id === updatedLoan.id) {
            loan = updatedLoan;
          }

          return loan;
        });

        this.calculateAvailableBalance();

        resolve();
      }
    );

  }

  calculateAvailableBalance(): void {
    const balance = this.loans.reduce((acc, {available}) => acc + available, 0);

    this.availableBalance$.next(balance);
  }
}
