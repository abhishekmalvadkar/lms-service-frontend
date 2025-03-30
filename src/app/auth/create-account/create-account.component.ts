import { ToasterService } from './../../shared/toaster.service';
import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
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
    private toaster: ToasterService,
    private loadingService: LoadingService){

  }

  OnaddAccount(){
    this.loadingService.show();
    this.authService.createAccount(this.createAccountReq).subscribe(
      (response)=>{
        this.loadingService.hide();
        if (response.success == true) {
          console.log(response.data);
        this.toaster.success(response.message);
        } else {
          console.log(`error`, response.errors);
          this.toaster.fail(response.errors[0]);
        }

      }
    )
  }

}
