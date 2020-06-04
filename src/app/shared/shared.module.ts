import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoanTimeEndPipe} from './pipes/loan-time-end/loan-time-end.pipe';

@NgModule({
  declarations: [
    LoanTimeEndPipe
  ],
  imports: [
    CommonModule,
    NgbModule,
  ],
  providers: [
  ],
  exports: [
    LoanTimeEndPipe
  ]
})
export class SharedModule {
}
