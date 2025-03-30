import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../../shared/local-storage.service';

@Component({
  selector: 'lms-verify-signIn-otp',
  templateUrl: './verify-signIn-otp.component.html',
  styleUrl: './verify-signIn-otp.component.css'
})
export class VerifySigninacoountComponent implements OnInit {

  verifySignInOtp = '';
  email: any = '';

  constructor(private authSrvice: AuthService, private route: ActivatedRoute, private localStorageService: LocalStorageService, private router: Router) {

  }
  ngOnInit(): void {

    this.email = this.route.snapshot.queryParamMap.get('email');
    console.log(this.email);

  }

  onVerifySignInOtp() {
    console.log("verify======otp")
    this.authSrvice.verifySignInOtp({ email: this.email, otp: this.verifySignInOtp }).subscribe(
      (response) => {
        if (response.success) {
          console.log(response);
          this.localStorageService.set('metaDetails', response.data);
          const redirectUrl = this.localStorageService.getAsValue('redirectAfterLogin') || '/';
          this.localStorageService.remove('redirectAfterLogin'); // Clear stored route
          this.router.navigate([redirectUrl]);
        }
      }
    )
  }
}
