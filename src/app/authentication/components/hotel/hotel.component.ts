import { Component, OnInit } from '@angular/core';
import { IHotelComponent } from './hotel.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit, IHotelComponent {
  Url: any;
  form: FormGroup;

  constructor(
    private builder: FormBuilder
  ) { }

  ngOnInit() {
    this.initialCreateFomrData();
  }

  onSubmit(): void {
    console.log(this.form.value);
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
