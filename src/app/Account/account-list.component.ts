import { Component} from '@angular/core'

@Component({
    selector: 'pm-accounts',
    templateUrl: './account-list.component.html'
})

export class Account {
    accountNumber: string
    amountToday: number
    amountYesterday: number
    dateToday: number
    percentageChange: number
}

