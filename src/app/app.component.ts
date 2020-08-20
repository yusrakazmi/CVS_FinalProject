import { Component, OnInit } from '@angular/core';
import { Account } from './account';
import { AccountService } from './account.services';
import { sortDirection } from './shared/enums';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Account Details';
  accounts: Account[] = [];
  errorMessage: string = "";
  pageNumber: number = 1;
  recordsExist: boolean = true;

  // Default Sorting is by Available Cash Ascending
  isAsc: boolean = true;
  column: string = 'availableCash';
  direction: sortDirection = sortDirection.ascending;

  // We have account services that would communicate with server side and provide data
  constructor(private accountService: AccountService) { }

  // When the component is initialized, we would display the results for first page in default sort order
  ngOnInit(): void {
    this.pageNumber = 1;
    this.accountService.loadAccountData(this.pageNumber, this.column, this.direction).subscribe({
      next: accounts => {
        this.accounts = accounts;
        console.log(accounts);
      },
      error: err => this.errorMessage = err
    });
  }

  // When the user clicks the load more button, we will fetch the data from the server and display. We will maintain the sort order 
  loadMore(): void {
    // Increment the page number everytime user clicks Load More. 
    this.pageNumber++;
    let moreRecords: Account[] = [];
    this.direction = this.isAsc ? sortDirection.ascending : sortDirection.descending;
    this.accountService.loadAccountData(this.pageNumber, this.column, this.direction).subscribe({
      next: accounts => {
        moreRecords = accounts;
        console.log(accounts);
      },
      error: err => this.errorMessage = err
    });

    // When we are using the server call to pull in data, we would ideally get a response data that would keep track of the page number and
    // remainin page numbers for data. Everytime we do a server call, we would be able to directly bind our load more button with a check
    // of if more records exists. For now, I am showing a warning if user clicks when there are no more data available to load and then hiding
    // the load more button. This would also help keep track of the page number correctly.
    if (moreRecords.length === 0) {
      this.recordsExist = false;
      this.pageNumber--;
    }
    moreRecords.forEach(element => {
      this.accounts.push(element);
    });
  }

  sort(property) {
    this.column = property;
    this.isAsc = !this.isAsc; //change the direction       
    this.direction = this.isAsc ? sortDirection.ascending : sortDirection.descending;

    this.accountService.sortAccountData(this.pageNumber, this.column, this.direction).subscribe({
      next: accounts => {
        this.accounts = accounts;
        console.log(accounts);
      },
      error: err => this.errorMessage = err
    });
  };
}



