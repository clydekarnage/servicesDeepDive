import { strict } from 'assert';

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

  // tslint:disable-next-line:typedef
  addAccount(name: string, status: string) {
    // tslint:disable-next-line:object-literal-shorthand
    this.accounts.push({name: name, status: status});
  }

  // tslint:disable-next-line:typedef
  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }
}
