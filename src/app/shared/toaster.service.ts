import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private messageService: MessageService) { }

  success(message: string){
    this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
  }

  fail(message: string){
    this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
  }

}
