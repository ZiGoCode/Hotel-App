import { Injectable } from "@angular/core";
import { ILogin } from 'src/app/components/login/login.interface';
import { IHotel } from 'src/app/authentication/components/hotel/hotel.interface';

@Injectable()

export class AccountServices {

    private mockUserAccount: IAccount[] = [
        {
            id: '1',
            firstname: 'Naluebet',
            lastname: 'Manpati',
            email: 'ap@gmail.com',
            password: '123456',
            position: 'Frontend Developer',
        }
    ];

    private mockHotel: IHotel[] = [

    ]

    getUserLogin(accessToken: string) {
        return new Promise<IAccount>((resolve, reject) => {
            const userLogin = this.mockUserAccount.find(m => m.id === accessToken);
            if (!userLogin) return reject({ Message: 'accessToken ไม่ถูกต้อง' });
            resolve(userLogin);
        });
    }

    onLogin(model: ILogin) {
        return new Promise<{ accessToken: string }>((resolve, reject) => {
            const userLogin = this.mockUserAccount.find(item => item.email === model.email && item.password === model.password);
            if (!userLogin) return reject({ Message: 'ชื้อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง' });
            resolve({
                accessToken: userLogin.id
            });
        });
    }

    onHotel(model: IHotel){
        const accessKey = 'accessToken!';
        model['id'] = localStorage.getItem(accessKey);
        return new Promise((resolve, reject) => {
            this.mockHotel.push(model);
            resolve(model);
        });
    }

}

export interface IAccount {
    firstname: string;
    lastname: string;
    email: string;
    password: string;

    id?: any;
    position?: string;
    image?: string;
    created?: Date;
    updated?: Date;
}
