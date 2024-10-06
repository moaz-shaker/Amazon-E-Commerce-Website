import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'checkout', component:CheckoutComponent}, // Fixed the error by changing CheckoutComponent to ProductsComponent
  {path:'product/:id', component:ProductdetailsComponent},
  {path:'cart', component:ProductsComponent},
  {path:'products', component:ProductsComponent},
  {path:'edit-product/:id', component:ProductdetailsComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
