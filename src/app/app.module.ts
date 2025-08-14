import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomersComponent } from './customers/customers.component';
import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddClientComponent } from './add-client/add-client.component';
import { CustomerDisplayComponent } from './customer-display/customer-display.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
  ],
  declarations: [
    AppComponent,
    
    DashboardComponent,
    CustomersComponent,
    CustomerDetailComponent,
    MessagesComponent,
    CustomerSearchComponent,
    SidebarComponent,
    AddClientComponent,
    
    CustomerDisplayComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }