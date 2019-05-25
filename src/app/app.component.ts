import { Component } from '@angular/core';
import { AuthenService } from './services/authen.service';
import { Router } from '@angular/router';
import { AccountServices, IAccount } from './shareds/services/account.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-pill';
  UserLogin: IAccount;
  constructor(
    private authen: AuthenService,
    private router: Router,
    private account: AccountServices,
  ) {
    this.getToken();
  }

  getToken() {
    this.account
      .getUserLogin(this.authen.getAuthenticated())
      .then(userLogin => {
        this.UserLogin = userLogin;
        // console.log(userLogin);
      })
      .catch(err => {
        this.authen.clearAuthenticated();
      });

  }
}
