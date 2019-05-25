import { Component, OnInit } from '@angular/core';
import { AccountServices, IAccount } from '../../services/account.services';
import { AuthenService } from 'src/app/services/authen.service';
import { plus, iuputbox } from './full.js';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  UserLogin: IAccount;
  
  constructor(
    private account: AccountServices,
    private authen: AuthenService,
  ) {
    this.initialLoadUSerLogin();

  }

  ngOnInit() {
    plus();
    iuputbox();
  }

  private initialLoadUSerLogin() {
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
