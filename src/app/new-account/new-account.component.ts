import { AccountsService } from './../accounts.service';
import { LoggingService } from './../logging.service';
import { Component } from '@angular/core';
import { stat } from 'fs';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService,
              private accountService: AccountsService) {
    this.accountService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );

  }

  // tslint:disable-next-line:typedef
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
