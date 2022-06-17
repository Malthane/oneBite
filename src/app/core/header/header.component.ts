import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass, faTimes, faBars, faXmarkCircle} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faMagnifyingGlass = faMagnifyingGlass;
  faBars = faBars;
  faTimes = faXmarkCircle;
  menuDrawer: boolean = false;

  isLoggedIn: any;

  constructor(private route: Router, private authService : AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.getToken()
    // console.log(this.isLoggedIn)
  }

  login() {
    this.route.navigate([''])
  }

  Logout() {
    localStorage.removeItem('token')
  }

  openMenu() {
    this.menuDrawer = !this.menuDrawer;
  }
}
