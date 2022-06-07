import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from 'src/app/Services/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  })
  signUpData : any

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
}
