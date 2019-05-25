import { Component, OnInit } from '@angular/core';
import { IHotelComponent } from './hotel.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from '../../authentication.url';
declare const swal: any;

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit, IHotelComponent {
  Url: any;
  form: FormGroup;
  AppURL = AppURL;
  AuthURL = AuthURL

  

  constructor(
    private builder: FormBuilder,
    private angularFireDatabase: AngularFireDatabase,
    private router: Router
  ) { }

  ngOnInit() {
    this.initialCreateFomrData();
  }

  onSubmit(): void {
    // console.log(this.form.value);
    if (this.form.invalid) {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: "OK",
      })
    } else {
      this.angularFireDatabase
        .object(`hotel`)
        .set(this.form.value)
        .then(res => {
          swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            button: "OK",
          }).then(res => this.router.navigate(['/', AppURL.Authen, AuthURL.Dashboard]))
        })
        .catch(err => alert(err));
    }
  }

  private initialCreateFomrData() {
    this.form = this.builder.group({
      hotel: ['', [Validators.required]],
      couthotel: ['', [Validators.required]],
      cout: ['', [Validators.required]],
      address: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      Water: ['', [Validators.required]],
      electricity: ['', [Validators.required]],
      insurance: ['', [Validators.required]],
      ratesday: ['', [Validators.required]],
      rates: ['', [Validators.required]],
    });
  }

}
