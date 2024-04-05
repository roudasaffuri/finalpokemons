import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PaymentComponent } from './payment/payment.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from "@angular/common/http";

const appRouting: Routes = [
 {path :'' , component : PokemonsComponent},
 {path:"payment", component : PaymentComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PaymentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouting),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
