import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { MessageService } from 'primeng/api';
import { LoadingService } from '../../shared/loading.service';

@Component({
  selector: 'lms-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {

  loading = false;

  createAccountReq = {
    firstName:'',
    lastName:'',
    email:''
  }

  constructor(private authService : AuthService,
    private messageService: MessageService,
    private loadingService: LoadingService){

  }

  showSuccess(message : string) {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
  }

  showError(message : string) {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
  }

  OnaddAccount(){
    this.loadingService.show();
    this.authService.createAccount(this.createAccountReq).subscribe(
      (response)=>{
        this.loadingService.hide();
        if (response.success == true) {
          console.log(response.data);
        this.showSuccess(response.message);
        } else {
          console.log(`error`, response.errors);
          this.showError(response.errors[0]);
        }

      }
    )
  }

}
