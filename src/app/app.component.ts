import { AccountsService } from './accounts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  accounts: {name: string, status: string}[] = [];

  constructor(private accountService: AccountsService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }
}
