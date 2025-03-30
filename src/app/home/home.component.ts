import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'lms-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: 'link-list'
      },
      {
        label: 'Links',
        icon: 'pi pi-link',
        routerLink: 'link-list'
      },
      {
        label: 'Tags',
        icon: 'pi pi-tag',
        routerLink: 'tag-list'
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        routerLink: 'logout'
      }
    ]
  }


}
