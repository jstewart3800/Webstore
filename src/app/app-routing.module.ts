import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AccountComponent } from './pages/account/account.component';
import { WishListComponent } from './pages/wish-list/wish-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { WeaponsComponent } from './pages/weapons/weapons.component';
import { EquipmentComponent } from './pages/equipment/equipment.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrderCompleteComponent } from './pages/order-complete/order-complete.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'}, // Reroutes the base URL to login
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  { path: 'wish-list', component: WishListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'weapons', component: WeaponsComponent },
  { path: 'equipment', component: EquipmentComponent },
  { path: 'tools', component: ToolsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'order-complete', component: OrderCompleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [  //add newly routed compnents here
  LoginComponent,
  HomeComponent,
  AccountComponent, 
  WishListComponent,
  CartComponent,
  WeaponsComponent,
  EquipmentComponent,
  ToolsComponent,
  CheckoutComponent,
  OrderCompleteComponent];