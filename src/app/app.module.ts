import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoanModule} from './loan/loan.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    LoanModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
