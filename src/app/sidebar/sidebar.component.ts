import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  // Optional: menu items as array for easy expansion
  menuItems = [
    { name: 'Dashboard', route: '/dashboard' },
    { name: 'Clients', route: '/customers' },
    { name: 'Interactions', route: '/interactions' },
    { name: 'Tasks', route: '/tasks' },
    { name: 'Activity', route: '/messages' }
  ];
}





