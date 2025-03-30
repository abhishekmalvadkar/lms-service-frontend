import { Component } from '@angular/core';
import { LoadingService } from './shared/loading.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  loading = false;
  items: MenuItem[] | undefined;

  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingService.loading.subscribe(state => {
      console.log(`Loading state changed to ${state}`);
      this.loading = state;
    });
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
      }
    ]
  }
}
