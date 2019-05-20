import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedsModule } from '../shareds/shareds.module';
import { AuthenticationRouting } from './authentication.routing';
import { IconComponent } from './components/icon/icon.component';
import { ButtonComponent } from './components/button/button.component';
import { TypographyComponent } from './components/typography/typography.component';
import { HotelComponent } from './components/hotel/hotel.component';


@NgModule({
  declarations: [
    DashboardComponent,
    IconComponent,
    ButtonComponent,
    TypographyComponent,
    HotelComponent,
  ],
  imports: [
    CommonModule,
    AuthenticationRouting,
    SharedsModule
  ]
})
export class AuthenticationModule { }
