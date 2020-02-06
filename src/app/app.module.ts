import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AccountComponent } from './pages/account/account.component';
import { WishListComponent } from './pages/wish-list/wish-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { WeaponsComponent } from './pages/weapons/weapons.component';
import { EquipmentComponent } from './pages/equipment/equipment.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrderCompleteComponent } from './pages/order-complete/order-complete.component';
import { DisplayCardComponent } from './components/display-card/display-card.component';
import { CartCardComponent } from './components/cart-card/cart-card.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    routingComponents,
    AccountComponent,
    WishListComponent,
    CartComponent,
    WeaponsComponent,
    EquipmentComponent,
    ToolsComponent,
    CheckoutComponent,
    OrderCompleteComponent,
    DisplayCardComponent,
    CartCardComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
