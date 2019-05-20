import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILoginComponent } from './login.interface';
import { AccountServices } from 'src/app/shareds/services/account.services';
import { AuthenService } from 'src/app/services/authen.service';
import { Router } from '@angular/router';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from 'src/app/authentication/authentication.url';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, ILoginComponent {
  Url: any;
  form: FormGroup;

  constructor(
    private builder: FormBuilder,
    private account: AccountServices,
    private authen: AuthenService,
    private router: Router

  ) {
    this.initialCreateFomrData();
  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.account.onLogin(this.form.value).then(res => {
      this.authen.setAuthenticated(res.accessToken);
      this.router.navigate(['/', AppURL.Authen, AuthURL.Dashboard]);
    }
    ).catch(err => alert('กรุณากรอกข้อมูลให้ถูกต้อง'));
  }

  private initialCreateFomrData() {
    this.form = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      remember: [true]
    });
  }

}
