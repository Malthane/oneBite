import { Component, OnInit } from '@angular/core';
import {
  faMagnifyingGlass,
  faTimes,
  faBars,
  faXmarkCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { DataService } from '../../Services/data.service'
import { FoodService } from '../../Shared/services/food.service';

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
  localData : any;
  extraData : any;
  localVal : any

  constructor(
    private route: Router,
    private authService: AuthService,
    private DataService: DataService,
    private FoodService: FoodService,
    ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.getToken();
  }

  login() {
    this.route.navigate(['']);
  }

  Logout() {
    localStorage.removeItem('token');
  }

  openMenu() {
    this.menuDrawer = !this.menuDrawer;
  }

  // getFoodData() {
  //   this.FoodService.userInfo$.subscribe(data => {
  //     this.localData = data;
  //     this.extraData = this.localData;
  //   })
  //   console.log(this.localData)
  //   console.log(this.extraData)
  // }

  // getFoodData() {
  //   this.DataService.loadData().subscribe((user) => {
  //     this.localData = user
  //   })
  //   console.log(this.localData)
  // }
}
