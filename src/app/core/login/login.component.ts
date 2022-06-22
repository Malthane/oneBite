import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
// import { retry, catchError } from 'rxjs/operators';
import { faInstagram, faFacebook, faTwitter,faLinkedin,faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faChevronCircleRight, faUser, faLock, faPerson, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
// import { } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  loginData: any;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faWhatsapp = faWhatsapp;
  faChevronCircleRight = faAnglesRight;
  faUser = faUser;
  faLock = faLock;

  constructor(private AuthService: AuthService, private route: Router) {}

  ngOnInit(): void {
  }

  onLogin() {
    if (this.loginForm.valid)
      this.AuthService.proceedLogin(this.loginForm.value).subscribe((res) => {
        if(res!=null) {
          this.loginData = res;
          // console.log(this.loginData)
          localStorage.setItem('token', this.loginData.idToken)
          this.route.navigate([''])
        }
      });
  }

  onSubmit() {}
}
