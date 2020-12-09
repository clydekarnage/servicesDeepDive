import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private logginService: LoggingService) {}

  // tslint:disable-next-line:typedef
  addAccount(name: string, status: string) {
    // tslint:disable-next-line:object-literal-shorthand
    this.accounts.push({name: name, status: status});
    this.logginService.logStatusChange(status);
  }

  // tslint:disable-next-line:typedef
  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.logginService.logStatusChange(status);
  }
}
