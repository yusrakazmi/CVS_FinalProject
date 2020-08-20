import { Injectable } from '@angular/core'
import { Observable, throwError, observable, of } from 'rxjs'
import { Account } from './account';
import { sortDirection } from './shared/enums';

@Injectable({
  providedIn: 'root'
})

// Basically this class is responsible for communicating with the server and making HTTP calls to fetch data.
// for the purpose of this assignment, I have hardcoded server response.
export class AccountService {

  loadAccountData(pageNumber: number, sortingKey: string, sortOrder: sortDirection): Observable<Account[]> {
    let accountData: Account[] = [];

    if (sortingKey === "accountNumber") {
      if (sortOrder === sortDirection.ascending) {
        accountData = this.loadDataSortedByAccountAsc(pageNumber);
      }
      else {
        accountData = this.loadDataSortedByAccountDesc(pageNumber);
      }
    }
    else if (sortingKey === "availableCash") {
      if (sortOrder === sortDirection.ascending) {
        accountData = this.loadDataSortedByCashAsc(pageNumber);
      }
      else {
        accountData = this.loadDataSortedByCashDesc(pageNumber);
      }
    }
    return of(accountData);
  }

  sortAccountData(pageNumber: number, sortingKey: string, sortOrder: sortDirection): Observable<Account[]> {
    let accountData: Account[] = [];

    if (sortingKey === "accountNumber") {
      if (sortOrder === sortDirection.ascending) {
        accountData = this.sortDataByAccountAsc(pageNumber);
      }
      else {
        accountData = this.sortDataByAccountDesc(pageNumber);
      }
    }
    else if (sortingKey === "availableCash") {
      if (sortOrder === sortDirection.ascending) {
        accountData = this.sortDataByCashAsc(pageNumber);
      }
      else {
        accountData = this.sortDataByCashDesc(pageNumber);
      }
    }
    return of(accountData);
  }

  private loadDataSortedByAccountAsc(pageNumber: number) {
    let accountData: Account[] = [];
    switch (pageNumber) {
      case 1:
        accountData.push(
          {
            accountNumber: 'AAA-0029',
            availableCash: 39160334.42,
            todaysChange: 31435.87,
            percentageChange: -0.0007
          },
          {
            accountNumber: 'IRA-0146',
            availableCash: 15884302.39,
            todaysChange: 7430.83,
            percentageChange: 0.0003
          },
          {
            accountNumber: 'AAA-1812',
            availableCash: 2010926.10,
            todaysChange: 38881.63,
            percentageChange: 0.0021
          }
        );
        return accountData;
      case 2:
        accountData.push(
          {
            accountNumber: 'REG-2019',
            availableCash: 13465679.34,
            todaysChange: 0,
            percentageChange: 0.0000
          },
          {
            accountNumber: 'AAA-3810',
            availableCash: 10050054.07,
            todaysChange: 8916.69,
            percentageChange: 0.0007
          },
          {
            accountNumber: 'IRA-5200',
            availableCash: 5763.36,
            todaysChange: 8916.69,
            percentageChange: -0.0008
          },
        );
        return accountData;

      default:
        return accountData
    }

  }

  private loadDataSortedByAccountDesc(pageNumber: number) {
    let accountData: Account[] = [];

    switch (pageNumber) {
      case 1:
        accountData.push(
          {
            accountNumber: 'AAA-1812',
            availableCash: 2010926.10,
            todaysChange: 38881.63,
            percentageChange: 0.0021
          },
          {
            accountNumber: 'IRA-0146',
            availableCash: 15884302.39,
            todaysChange: 7430.83,
            percentageChange: 0.0003
          },
          {
            accountNumber: 'AAA-0029',
            availableCash: 39160334.42,
            todaysChange: 31435.87,
            percentageChange: -0.0007
          },
        );
        return accountData;
      case 2:
        accountData.push(
          {
            accountNumber: 'IRA-5200',
            availableCash: 5763.36,
            todaysChange: 8916.69,
            percentageChange: -0.0008
          },
          {
            accountNumber: 'AAA-3810',
            availableCash: 10050054.07,
            todaysChange: 8916.69,
            percentageChange: 0.0007
          },
          {
            accountNumber: 'REG-2019',
            availableCash: 13465679.34,
            todaysChange: 0,
            percentageChange: 0.0000
          },
        );
        return accountData;
      default:
        return accountData
    }


  }

  private loadDataSortedByCashAsc(pageNumber: number) {
    let accountData: Account[] = [];
    switch (pageNumber) {
      case 1:
        accountData.push(
          {
            accountNumber: 'IRA-5200',
            availableCash: 5763.36,
            todaysChange: 8916.69,
            percentageChange: -0.08
          },
          {
            accountNumber: 'AAA-1812',
            availableCash: 2010926.10,
            todaysChange: 38881.63,
            percentageChange: 0.21
          },
          {
            accountNumber: 'AAA-3810',
            availableCash: 10050054.07,
            todaysChange: 8916.69,
            percentageChange: 0.07
          },
        );
        return accountData;
      case 2:
        accountData.push(
          {
            accountNumber: 'REG-2019',
            availableCash: 13465679.34,
            todaysChange: 0,
            percentageChange: 0.00
          },
          {
            accountNumber: 'IRA-0146',
            availableCash: 15884302.39,
            todaysChange: 7430.83,
            percentageChange: 0.03
          },
          {
            accountNumber: 'AAA-0029',
            availableCash: 39160334.42,
            todaysChange: 31435.87,
            percentageChange: -0.07
          }
        );
        return accountData;
      default:
        return accountData
    }
  }

  private loadDataSortedByCashDesc(pageNumber: number) {
    let accountData: Account[] = [];
    switch (pageNumber) {
      case 1:
        accountData.push(
          {
            accountNumber: 'AAA-0029',
            availableCash: 39160334.42,
            todaysChange: 31435.87,
            percentageChange: -0.07
          },
          {
            accountNumber: 'IRA-0146',
            availableCash: 15884302.39,
            todaysChange: 7430.83,
            percentageChange: 0.03
          },
          {
            accountNumber: 'REG-2019',
            availableCash: 13465679.34,
            todaysChange: 0,
            percentageChange: 0.00
          },
        );
        return accountData;
      case 2:
        accountData.push(
          {
            accountNumber: 'AAA-3810',
            availableCash: 10050054.07,
            todaysChange: 8916.69,
            percentageChange: 0.07
          },
          {
            accountNumber: 'AAA-1812',
            availableCash: 2010926.10,
            todaysChange: 38881.63,
            percentageChange: 0.21
          },
          {
            accountNumber: 'IRA-5200',
            availableCash: 5763.36,
            todaysChange: 8916.69,
            percentageChange: -0.08
          }
        );
        return accountData;
      default:
        return accountData
    }
  }

  private sortDataByAccountAsc(pageNumber: number) {
    let accountData: Account[] = [];
    switch (pageNumber) {
      case 1:
        accountData.push(
          {
            accountNumber: 'AAA-0029',
            availableCash: 39160334.42,
            todaysChange: 31435.87,
            percentageChange: -0.0007
          },
          {
            accountNumber: 'IRA-0146',
            availableCash: 15884302.39,
            todaysChange: 7430.83,
            percentageChange: 0.0003
          },
          {
            accountNumber: 'AAA-1812',
            availableCash: 2010926.10,
            todaysChange: 38881.63,
            percentageChange: 0.0021
          }
        );
        return accountData;
      case 2:
        accountData.push(
          {
            accountNumber: 'AAA-0029',
            availableCash: 39160334.42,
            todaysChange: 31435.87,
            percentageChange: -0.0007
          },
          {
            accountNumber: 'IRA-0146',
            availableCash: 15884302.39,
            todaysChange: 7430.83,
            percentageChange: 0.0003
          },
          {
            accountNumber: 'AAA-1812',
            availableCash: 2010926.10,
            todaysChange: 38881.63,
            percentageChange: 0.0021
          },
          {
            accountNumber: 'REG-2019',
            availableCash: 13465679.34,
            todaysChange: 0,
            percentageChange: 0.0000
          },
          {
            accountNumber: 'AAA-3810',
            availableCash: 10050054.07,
            todaysChange: 8916.69,
            percentageChange: 0.0007
          },
          {
            accountNumber: 'IRA-5200',
            availableCash: 5763.36,
            todaysChange: 8916.69,
            percentageChange: -0.0008
          },
        );
        return accountData;

      default:
        return accountData
    }

  }

  private sortDataByAccountDesc(pageNumber: number) {
    let accountData: Account[] = [];

    switch (pageNumber) {
      case 1:
        accountData.push(
          {
            accountNumber: 'AAA-1812',
            availableCash: 2010926.10,
            todaysChange: 38881.63,
            percentageChange: 0.0021
          },
          {
            accountNumber: 'IRA-0146',
            availableCash: 15884302.39,
            todaysChange: 7430.83,
            percentageChange: 0.0003
          },
          {
            accountNumber: 'AAA-0029',
            availableCash: 39160334.42,
            todaysChange: 31435.87,
            percentageChange: -0.0007
          },
        );
        return accountData;
      case 2:
        accountData.push(
          {
            accountNumber: 'AAA-1812',
            availableCash: 2010926.10,
            todaysChange: 38881.63,
            percentageChange: 0.0021
          },
          {
            accountNumber: 'IRA-0146',
            availableCash: 15884302.39,
            todaysChange: 7430.83,
            percentageChange: 0.0003
          },
          {
            accountNumber: 'AAA-0029',
            availableCash: 39160334.42,
            todaysChange: 31435.87,
            percentageChange: -0.0007
          },
          {
            accountNumber: 'IRA-5200',
            availableCash: 5763.36,
            todaysChange: 8916.69,
            percentageChange: -0.0008
          },
          {
            accountNumber: 'AAA-3810',
            availableCash: 10050054.07,
            todaysChange: 8916.69,
            percentageChange: 0.0007
          },
          {
            accountNumber: 'REG-2019',
            availableCash: 13465679.34,
            todaysChange: 0,
            percentageChange: 0.0000
          },
        );
        return accountData;
      default:
        return accountData
    }


  }

  private sortDataByCashAsc(pageNumber: number) {
    let accountData: Account[] = [];
    switch (pageNumber) {
      case 1:
        accountData.push(
          {
            accountNumber: 'IRA-5200',
            availableCash: 5763.36,
            todaysChange: 8916.69,
            percentageChange: -0.08
          },
          {
            accountNumber: 'AAA-1812',
            availableCash: 2010926.10,
            todaysChange: 38881.63,
            percentageChange: 0.21
          },
          {
            accountNumber: 'AAA-3810',
            availableCash: 10050054.07,
            todaysChange: 8916.69,
            percentageChange: 0.07
          },
        );
        return accountData;
      case 2:
        accountData.push(
          {
            accountNumber: 'IRA-5200',
            availableCash: 5763.36,
            todaysChange: 8916.69,
            percentageChange: -0.08
          },
          {
            accountNumber: 'AAA-1812',
            availableCash: 2010926.10,
            todaysChange: 38881.63,
            percentageChange: 0.21
          },
          {
            accountNumber: 'AAA-3810',
            availableCash: 10050054.07,
            todaysChange: 8916.69,
            percentageChange: 0.07
          },
          {
            accountNumber: 'REG-2019',
            availableCash: 13465679.34,
            todaysChange: 0,
            percentageChange: 0.00
          },
          {
            accountNumber: 'IRA-0146',
            availableCash: 15884302.39,
            todaysChange: 7430.83,
            percentageChange: 0.03
          },
          {
            accountNumber: 'AAA-0029',
            availableCash: 39160334.42,
            todaysChange: 31435.87,
            percentageChange: -0.07
          }
        );
        return accountData;
      default:
        return accountData
    }
  }

  private sortDataByCashDesc(pageNumber: number) {
    let accountData: Account[] = [];
    switch (pageNumber) {
      case 1:
        accountData.push(
          {
            accountNumber: 'AAA-0029',
            availableCash: 39160334.42,
            todaysChange: 31435.87,
            percentageChange: -0.07
          },
          {
            accountNumber: 'IRA-0146',
            availableCash: 15884302.39,
            todaysChange: 7430.83,
            percentageChange: 0.03
          },
          {
            accountNumber: 'REG-2019',
            availableCash: 13465679.34,
            todaysChange: 0,
            percentageChange: 0.00
          },
        );
        return accountData;
      case 2:
        accountData.push(
          {
            accountNumber: 'AAA-0029',
            availableCash: 39160334.42,
            todaysChange: 31435.87,
            percentageChange: -0.07
          },
          {
            accountNumber: 'IRA-0146',
            availableCash: 15884302.39,
            todaysChange: 7430.83,
            percentageChange: 0.03
          },
          {
            accountNumber: 'REG-2019',
            availableCash: 13465679.34,
            todaysChange: 0,
            percentageChange: 0.00
          },
          {
            accountNumber: 'AAA-3810',
            availableCash: 10050054.07,
            todaysChange: 8916.69,
            percentageChange: 0.07
          },
          {
            accountNumber: 'AAA-1812',
            availableCash: 2010926.10,
            todaysChange: 38881.63,
            percentageChange: 0.21
          },
          {
            accountNumber: 'IRA-5200',
            availableCash: 5763.36,
            todaysChange: 8916.69,
            percentageChange: -0.08
          }
        );
        return accountData;
      default:
        return accountData
    }
  }
}

/*
export class PagingDataParams{

  private _pageNumber : string;
  public get PageNumber() : string {
    return this._pageNumber;
  }

  public set PageNumber(v : string) {
    this._pageNumber = v;
  }

  private _pageSize : string;
  public get PageSize() : string {
    return this._pageSize;
  }
  public set PageSize(v : string) {
    this._pageSize = v;
  }

  private _sortBy : string;
  public get SortBy() : string {
    return this._sortBy;
  }
  public set SortBy(v : string) {
    this._sortBy = v;
  }

  private _sortOrder : string;
  public get SortOrder() : string {
    return this._sortOrder;
  }
  public set SortOrder(v : string) {
    this._sortOrder = v;
  }
}

export class PagingData{

  private _pageNumber : string;
  public get PageNumber() : string {
    return this._pageNumber;
  }
  public set PageNumber(v : string) {
    this._pageNumber = v;
  }

  private _sortBy : string;
  public get SortBy() : string {
    return this._sortBy;
  }
  public set SortBy(v : string) {
    this._sortBy = v;
  }
}

  export class PagedResponseDataObject
  {
      private _pagingData : PagingData;
      public get PagingData() : PagingData {
        return this._pagingData;
      }
      public set PagingData(v : PagingData) {
        this._pagingData = v;
      }

      private _accountData : Observable<IAccount>;
      public get AccountData() : Observable<IAccount> {
        return this._accountData;
      }
      public set AccountData(v : Observable<IAccount>) {
        this._accountData = v;
      }
  }

*/
