import {Injectable} from '@angular/core';
import {Loan} from './models/loan';
import {LOANS} from './loans.mock';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  loans: Loan[];

  constructor() {
  }

  getList(): Observable<Loan[]> {
    return of(LOANS);
  }

  getById(id: number): Observable<Loan> {
    return of(LOANS.find((item) => item.id === id));
  }
}
