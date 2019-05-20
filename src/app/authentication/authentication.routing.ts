import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AuthURL } from './authentication.url';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IconComponent } from './components/icon/icon.component';
import { ButtonComponent } from './components/button/button.component';
import { TypographyComponent } from './components/typography/typography.component';
import { HotelComponent } from './components/hotel/hotel.component';


const routes: Routes = [
    { path: '', redirectTo: AuthURL.Dashboard, pathMatch: 'full' },
    { path: AuthURL.Dashboard, component: DashboardComponent },    
    { path: AuthURL.Icon, component: IconComponent },    
    { path: AuthURL.Icon, component: IconComponent },    
    { path: AuthURL.Button, component: ButtonComponent },    
    { path: AuthURL.Typography, component: TypographyComponent },   
    { path: AuthURL.Hotel, component: HotelComponent },    

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class AuthenticationRouting { }