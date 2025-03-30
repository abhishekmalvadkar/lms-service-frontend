import { Component } from '@angular/core';
import { LoadingService } from './shared/loading.service';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  loading = false;

  constructor(private loadingService: LoadingService, private router : Router) { }

  ngOnInit() {
    this.loadingService.loading.subscribe(state => {
      console.log(`Loading state changed to ${state}`);
      this.loading = state;
    });
  }
}
