import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'lms-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrl: './verify-account.component.css'
})
export class VerifyAccountComponent {

   verifyMsg : any;
  constructor(private authService: AuthService,private route : ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (param)=> {
        console.log(param['email']);
        console.log(param['token']);
        this.authService.verifyAccount({email:param['email'],token:param['token']}).subscribe(
          (response)=>{
           this.verifyMsg = response.data;
          }
        )
      }
    )

  }

}
