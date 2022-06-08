import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SignUpService } from 'src/app/Services/sign-up.service';
import { faChevronCircleRight, faUser, faLock, faPersonThroughWindow, faPersonWalkingArrowRight} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(4)])
  })
  signUpData : any
  faUser = faUser;
  faLock = faLock;
  faPersonThroughWindow = faPersonWalkingArrowRight;

  constructor(private signUp: SignUpService, private route: Router) { }

  ngOnInit(): void {
  }

  onSignUp() {
    if (this.signUpForm.valid) {
      this.signUp.signUp(this.signUpForm.value).subscribe((res => {
        this.signUpData = res
        // console.log(this.signUpData)
        this.route.navigate([''])
      }))
    }
  }

  onSubmit( ) {}

  get userEmail() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }




}
