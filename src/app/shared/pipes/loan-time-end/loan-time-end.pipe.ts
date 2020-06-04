import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'loanTimeEnd'
})
export class LoanTimeEndPipe implements PipeTransform {

  transform(termRemainingInSeconds: number, ...args: any[]): any {
    const duration = moment.duration(termRemainingInSeconds, 'seconds');
    const months = duration.months();
    const days = duration.days();

    let result = '';

    if (months) {
      result += `${months} month`;
    }

    if (days) {
      result += `${days} days`;
    }

    return result;
  }

}
