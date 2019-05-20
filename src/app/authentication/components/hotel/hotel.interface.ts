import { FormGroup } from '@angular/forms';

export interface IHotelComponent {
    Url: any;
    form: FormGroup;
    onSubmit(): void;
}

export interface IHotel {
    hotel: string;
    couthotel: string;
    cout: string;
    address: string;
    tel: string;

    Water: string;
    electricity: string;

    insurance: string;
    ratesday: string;
    rates: string;

    id?: any;
    image?: string;
    created?: Date;
    updated?: Date;

}