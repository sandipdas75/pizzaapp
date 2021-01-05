import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from '../app/app.routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { OrderListsComponent } from './order-lists/order-lists.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrderService } from './order.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    RouterModule,
    CommonModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    OrderListsComponent,
    OrderDetailsComponent
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
