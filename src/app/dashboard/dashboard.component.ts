import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service'; // <-- import CustomerService

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  totalClients: number = 0; // <-- new property for total clients
  activeClients: number = 0; // <-- new property for active clients
  leadClients: number = 0; // <-- new property for lead clients

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.loadClientCounts(); // <-- call new method on init
  }

  loadClientCounts(): void {
  this.customerService.getCustomers()
    .subscribe(customers => {
      this.totalClients = customers.length;
      this.activeClients = customers.filter(c => c.status === 'Active').length;
      this.leadClients = customers.filter(c => c.status === 'Prospect').length;
    });

  }}
  