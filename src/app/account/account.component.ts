import { AccountsService } from './../accounts.service';
import { Component, Input } from '@angular/core';
import { LoggingService } from './../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService, AccountsService]
})
export class AccountComponent {
  @Input()
  account!: { name: string; status: string; };
  @Input()
  id!: number;

  constructor(private loggingService: LoggingService,
              private accountService: AccountsService) {

  }

  // tslint:disable-next-line:typedef
  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    this.loggingService.logStatusChange(status);
  }
}
