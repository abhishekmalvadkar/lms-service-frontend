import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
    private localStorageService : LocalStorageService
  ) { }

  private createAccountUrl = 'http://localhost:9093/api/auth/create-account';
  private verifyAccontUrl = 'http://localhost:9093/api/auth/verify-account';
  private signIntUrl = 'http://localhost:9093/api/auth/sign-in';
  private verifySignInOtpUrl = 'http://localhost:9093/api/auth/verify-otp';

  createAccount(creatAccountReq: {}): Observable<any> {
    return this.httpClient.post(this.createAccountUrl, creatAccountReq);
  }

  verifyAccount(verifyAccountReq: any): Observable<any> {
    return this.httpClient.post(this.verifyAccontUrl, verifyAccountReq)
  }

  signIn(signInRequest: any): Observable<any> {
    return this.httpClient.post(this.signIntUrl, signInRequest);
  }

  verifySignInOtp(verifySignInOtpReq: any): Observable<any> {
    const headers = this.prepareHeaders();
    return this.httpClient.post(this.verifySignInOtpUrl, verifySignInOtpReq, {
      headers ,
      observe: 'response' // This allows you to access headers
    }).pipe(
      tap(response => {
        const token = response.headers.get('Authorization'); // Get JWT token
        if (token) {
          this.localStorageService.set('token', token); // Store it in localStorage
        }
      }),
      map(response => response.body) // Extract the actual response body
    );
  }

  private prepareHeaders(): any {
    return new HttpHeaders({
      'device': 'web'
    });
  }
}
