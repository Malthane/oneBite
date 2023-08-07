import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  faMagnifyingGlass,
  faBars,
  faXmarkCircle,
} from '@fortawesome/free-solid-svg-icons';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  faMagnifyingGlass = faMagnifyingGlass;
  faBars = faBars;
  faTimes = faXmarkCircle;
  menuDrawer: boolean = false;
  isLoggedIn: any;
  searchInput = ''

  @Output() searchValue: EventEmitter<string> = new EventEmitter<string>()
  
  constructor(
    private route: Router,
    ) {}

  ngOnInit(): void {
   this.getData()
  }

  getData() {
    this.route.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((res: any) => {
      if (res.url) {
        this.isLoggedIn = localStorage.getItem('token')
      }
    })
  }

  login() {
    this.route.navigate(['']);
  }

  Logout() {
    localStorage.removeItem('token');
  }

  openMenu() {
    // this.menuDrawer = !this.menuDrawer
  }                   

  getValueByInput() {
    this.searchValue.emit(this.searchInput)
  }
}
