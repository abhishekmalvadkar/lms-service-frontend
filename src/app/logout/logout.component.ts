import { Router } from '@angular/router';
import { LocalStorageService } from './../shared/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { ToasterService } from '../shared/toaster.service';

@Component({
  selector: 'lms-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {

  constructor(private localStorageService : LocalStorageService,
    private router : Router,
    private toaster: ToasterService
  ){}

  ngOnInit(): void {
    this.localStorageService.clear();
    this.toaster.success('Logged out successfully')
    this.router.navigate(['/sign-in']);
  }

}
