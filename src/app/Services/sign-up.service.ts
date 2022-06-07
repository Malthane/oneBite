import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config';
import { AuthResponse } from '../interfaces/signUp-interface';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor( private Http: HttpClient) { }

  // signUp(credential: any) {
  //   return this.Http.post('http://localhost:8000/auth/register', credential)
  // }

  signUp(credential: any) {
    return this.Http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+config.Api_key, credential, {
      params: { returnSecureToken: true },
    })
  }
}
