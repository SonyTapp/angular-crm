import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const customers = [
      {
        id: 1,
        name: 'Alice Johnson',
        companyName: 'BrightTech Solutions',
        jobtitle: 'Project Manager',
        email: 'alice.johnson@brighttech.com',
        phoneNumber: '555-1001',
        address: '123 Maple St, Springfield',
        notes: 'Interested in upgrading to premium plan.',
        status: 'Active',
        createdDate: '2025-07-15'
      },
      {
        id: 2,
        name: 'Bob Smith',
        companyName: 'Evergreen Supplies',
        jobtitle: 'Purchasing Agent',
        email: 'bob.smith@evergreen.com',
        phoneNumber: '555-1002',
        address: '456 Oak Ave, Rivertown',
        notes: 'Requested bulk discount pricing.',
        status: 'Active',
        createdDate: '2025-06-21'
      },
      {
        id: 3,
        name: 'Carol Lee',
        companyName: 'Urban Design Co.',
        jobtitle: 'Lead Architect',
        email: 'carol.lee@urban-design.com',
        phoneNumber: '555-1003',
        address: '789 Pine Rd, Metro City',
        notes: 'Potential long-term partnership.',
        status: 'Prospect',
        createdDate: '2025-08-01'
      },
      {
        id: 4,
        name: 'David Kim',
        companyName: 'NextGen Robotics',
        jobtitle: 'CTO',
        email: 'david.kim@nextgenrobotics.com',
        phoneNumber: '555-1004',
        address: '321 Birch Blvd, Techville',
        notes: 'Demo scheduled for September.',
        status: 'Active',
        createdDate: '2025-07-05'
      },
      {
        id: 5,
        name: 'Eva Martinez',
        companyName: 'GreenEarth Landscaping',
        jobtitle: 'Operations Manager',
        email: 'eva.martinez@greenearth.com',
        phoneNumber: '555-1005',
        address: '654 Cedar Ln, Lakeside',
        notes: 'Looking for eco-friendly materials.',
        status: 'Inactive',
        createdDate: '2025-05-30'
      },
      {
        id: 6,
        name: 'Frank Brown',
        companyName: 'Alpha Logistics',
        jobtitle: 'Logistics Coordinator',
        email: 'frank.brown@alphalogistics.com',
        phoneNumber: '555-1006',
        address: '987 Spruce Dr, Hilltown',
        notes: 'Has recurring orders every quarter.',
        status: 'Active',
        createdDate: '2025-04-18'
      },
      {
        id: 7,
        name: 'Grace Wilson',
        companyName: 'Skyline Marketing',
        jobtitle: 'Marketing Director',
        email: 'grace.wilson@skylinemkt.com',
        phoneNumber: '555-1007',
        address: '159 Cherry St, River City',
        notes: 'Needs assistance with campaign tracking.',
        status: 'Prospect',
        createdDate: '2025-07-28'
      },
      {
        id: 8,
        name: 'Henry Clark',
        companyName: 'IronWorks Fabrication',
        jobtitle: 'Plant Manager',
        email: 'henry.clark@ironworksfab.com',
        phoneNumber: '555-1008',
        address: '753 Willow Rd, Industriville',
        notes: 'Interested in custom manufacturing solutions.',
        status: 'Active',
        createdDate: '2025-06-10'
      },
      {
        id: 9,
        name: 'Ivy Patel',
        companyName: 'BlueWave Software',
        jobtitle: 'Software Engineer',
        email: 'ivy.patel@bluewave.com',
        phoneNumber: '555-1009',
        address: '852 Ash Ct, Silicon Bay',
        notes: 'Requested API documentation.',
        status: 'Active',
        createdDate: '2025-08-03'
      }
    ];

    return { customers };
  }
  genId(customers: Customer[]): number {
  return customers.length > 0
    ? Math.max(...customers.map(customer => customer.id)) + 1
    : 1; // start at 1 if array is empty
}
}



  // Overrides the genId method to ensure that a customer always has an id.
  // If the customers array is empty,
  // the method below returns the initial number (11).
  // if the customers array is not empty, the method below returns the highest
  // customer id + 1.
  

