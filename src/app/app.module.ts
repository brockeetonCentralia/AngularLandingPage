import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BodyComponent } from './body/body.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { MissionstatementComponent } from './missionstatement/missionstatement.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BodyComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    ProductComponent,
    ProductdetailComponent,
    MissionstatementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
