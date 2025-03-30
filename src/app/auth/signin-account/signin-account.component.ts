import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'lms-signin-account',
  templateUrl: './signin-account.component.html',
  styleUrl: './signin-account.component.css'
})
export class SigninAccountComponent {

   signInRequest = {
    'email':''
   }

   constructor(private authService : AuthService, private router : Router){

   }

   onSignIn(){
    this.authService.signIn(this.signInRequest).subscribe(
      (response)=>{
        if(response.success===true){
          console.log(response.data);
          this.router.navigate(['verify-signIn'], { queryParams: { email: this.signInRequest.email } });
        }
      }
    )
   }




}
