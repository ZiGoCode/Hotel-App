import { Component, OnInit } from '@angular/core';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from 'src/app/authentication/authentication.url';
import { AccountServices, IAccount } from '../../services/account.services';
import { AuthenService } from 'src/app/services/authen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  UserLogin: IAccount;

  AppURL = AppURL;
  AuthURL = AuthURL;
  
  constructor(
    private account: AccountServices,
    private authen: AuthenService,
    private router: Router
  ) {
    
    this.initialLoadUSerLogin();

  }

  ngOnInit() {
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
        this.router.navigate(['/', AppURL.Login]);
      });
  }

}
