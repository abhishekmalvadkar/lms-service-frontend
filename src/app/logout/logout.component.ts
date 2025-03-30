import { Router } from '@angular/router';
import { LocalStorageService } from './../shared/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'lms-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {

  constructor(private localStorageService : LocalStorageService,
    private router : Router,
    private messageService: MessageService
  ){}

  ngOnInit(): void {
    this.localStorageService.clear();
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Logged out successfully' });
    this.router.navigate(['/sign-in']);
  }

}
