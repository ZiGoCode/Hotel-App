import { Component, OnInit } from '@angular/core';
declare const swal: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onHotel() {
    if (!this.show) {
      this.show = true;
    }
    else if (this.show === true) {
      this.show = false;
    }

    console.log('OK');

  }
  onSubmit() {
    swal({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
      button: "OK",
    });
  }

}
