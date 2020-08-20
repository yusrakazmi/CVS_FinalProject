import { Injectable} from '@angular/core'
import {Observable, throwError, observable, of} from 'rxjs'

import {Account} from './account-list.component';

@Injectable({
    providedIn: 'root'
  })
  
export class AccountService {

 getAccountData(): Observable<Account[]> {
    const accountData: Account[] = [];
    const account: Account = {
        accountNumber: 'IRA-200',
        amountToday: 1000,
        amountYesterday: 1100,
        dateToday: Date.now(),
        percentageChange: 0.01
    }

    accountData.push(account);
    return of(accountData);
}
}

