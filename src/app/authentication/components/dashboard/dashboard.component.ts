import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { IHotel } from '../hotel/hotel.interface';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
declare const swal: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  form: FormGroup;
  formRoom: FormGroup;

  show: boolean = false;
  showID: boolean = false;

  profileData: Observable<any>;
  roomData: Observable<any>;
  dishMenu: Observable<any>;

  dataHotel: IHotel;
  dataroomId: IddataRoom;
  dataRoom: IRoom;


  idRoom: any;
  room: any[] = Array();
  roomId: any;
  activeteb: '0';
  drop: any;
  name: string = 'สถานะ';
  statud: number;
  dataRoomNg: any;


  constructor(
    private angularFireDatabase: AngularFireDatabase,
    private builder: FormBuilder
  ) {
    this.dishMenu = this.angularFireDatabase
      .object(`roomID`)
      .valueChanges();
    this.dishMenu.subscribe(data => {
      this.dataroomId = data;
      console.log('---', this.dataroomId)
    });

    this.profileData = this.angularFireDatabase
      .object('hotel')
      .valueChanges();

    this.profileData.subscribe(data => {
      this.dataHotel = data;
      // for (let index = 1; index <= Number(this.dataHotel.cout); index++) {
      //   const data1 = '0' + index
      //   if (index === 10) return this.room.push(String(index));
      //   const data = data1
      //   this.room.push(data);
      // }
    });

    this.roomId;
    this.drop;
    this.statud;
    this.initialCreateFomrData();
    this.initialCreateRoomID();
  }

  setValue(data: string, baht: number, id: string) {
    this.name = data;
    this.statud = baht;
    this.form.patchValue({
      status: data
    });
    if (data === 'จอง') {
      const statudID = 'warning';
      console.log('data: ', data)
      this.angularFireDatabase.object(`roomID/${id}`).set({ roomid: id, color: statudID });
    } else {
      const statudID = 'danger';
      this.angularFireDatabase.object(`roomID/${id}`).set({ roomid: id, color: statudID });
    }
  }

  ngOnInit() {
    var header = document.getElementById("myDIV");
    var btns = header.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active1");
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active1", "");
        }
        this.className += " active1";
      });
    }
  }

  onRoomid() {
    if (!this.showID) {
      this.showID = true;
    } else if (this.showID === true) {
      this.showID = false;
    }
  }

  onSubmitRoom(model) {
    this.formRoom.patchValue({
      roomid: model,
      color: 'success'
    });
    this.dataRoomNg = null;
    this.angularFireDatabase.object(`roomID/${model}`).set(this.formRoom.value);
  }

  onHotel(item) {
    if (!this.show) {
      this.show = true;
      this.roomId = item;
      this.activeteb = item;
      this.roomData = this.angularFireDatabase.object(`room/${this.roomId}`).valueChanges();
      this.roomData.subscribe(data => {
        this.dataRoom = data;
        this.name = this.dataRoom.status;
        this.form.patchValue({
          fname: this.dataRoom.fname,
          lname: this.dataRoom.lname,
          address: this.dataRoom.address,
          tel: this.dataRoom.tel,
          status: this.dataRoom.status,
        });
      });
    } else if (this.show === true) {
      this.show = false;
      this.activeteb = '0';
      this.statud = null;
      this.name = 'สถานะ';
      this.form.patchValue({
        fname: null,
        lname: null,
        address: null,
        tel: null,
        status: null,
      });
    }
  }

  onSubmit(id) {
    if (this.form.invalid) return swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: "OK",
    })
    this.angularFireDatabase
      .object(`room/${id}`)
      .set(this.form.value)
      .then(res => {
        swal({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
          button: "OK",
        }).then(

        );
      }).catch(err => alert(err));

  }

  dropdown() {
    this.drop = 'Good job!';
  }

  private initialCreateFomrData() {
    this.form = this.builder.group({
      lname: ['', [Validators.required]],
      fname: ['', [Validators.required]],
      address: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      status: ['', [Validators.required]],
    });
  }

  private initialCreateRoomID() {
    this.formRoom = this.builder.group({
      roomid: ['', [Validators.required]],
      color: ['', [Validators.required]],
    });
  }

}

export interface IRoom {
  lname: string;
  fname: string;
  address: string;
  tel: string;
  status: string;
}

export interface IddataRoom {
  id?: string;
  roomid: string;
  color: string;
}