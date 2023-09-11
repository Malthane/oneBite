import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faUser,
  faLock,
  faAnglesRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  isAlert: boolean;
  loginData: any;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faChevronCircleRight = faAnglesRight;
  faUser = faUser;
  faLock = faLock;

  constructor(private AuthService: AuthService, private route: Router) {}

  ngOnInit(): void {}

  onLogin() {
    const loginData = {
      next: (res: any) => {
        if (res != null) {
          this.loginData = res;
          localStorage.setItem('token', this.loginData.idToken);
          this.route.navigate(['']);
        }
      },
      error: (err: any) => {
        console.log(err);
        if ((err.error.error.code = 400)) {
          this.isAlert = true;
        }
        setTimeout(() => {
          this.isAlert = false;
        }, 4000);
      },
    };
    this.AuthService.proceedLogin(this.loginForm.value).subscribe(loginData);
  }

  onSubmit() {}
}
