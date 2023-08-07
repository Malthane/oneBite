import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile = new FormGroup({
    firstName: new FormControl('',[Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.email])
  })
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.profile.value);
    
  }
}
















