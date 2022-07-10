import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/Shared/services/food.service';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent implements OnInit {
  Beverage : any

  constructor(private shared: FoodService,) { }

  ngOnInit(): void {
    this.beveragesData()
    }

    beveragesData() {
      this.shared.userInfo$.subscribe(user => {
        this.Beverage = user
        console.log(this.Beverage)
      })
    }



}
