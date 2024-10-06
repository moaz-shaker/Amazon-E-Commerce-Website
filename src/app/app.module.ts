import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { CheckoutSubtotalComponent } from './components/checkout-subtotal/checkout-subtotal.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckoutProductsComponent } from './components/checkout-products/checkout-products.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HeaderComponent } from './components/header/header.component';
import { firebaseConfig } from './config/firebase.config';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProductdetailsComponent,
    CheckoutSubtotalComponent,
    CheckoutProductsComponent,
    CheckoutComponent,
  ],  
  imports: [
    LoginComponent,
    BrowserModule,
    HeaderComponent,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule, 
    HeaderComponent, 
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

