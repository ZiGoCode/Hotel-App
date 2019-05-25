import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthenticationRouting } from '../authentication/authentication.routing';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AccountServices } from './services/account.services';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../../environments/environment'

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    AccountServices
  ]
})
export class SharedsModule { }
