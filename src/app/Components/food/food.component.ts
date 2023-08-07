import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { faFilter, faStar } from '@fortawesome/free-solid-svg-icons';
import { FoodService } from 'src/app/Shared/services/food.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
})
export class FoodComponent implements OnInit {
  getInputVal = '';
  isSpinnerVisible: boolean = false;
  data: any;
  foodData: any;
  faStar = faStar;
  faFilter = faFilter;
  images: any = [
    '/assets/images/pasta/white_sauce.jpg',
    '/assets/images/pasta/red.jpg',
    '/assets/images/pasta/chees-mayo.jpg',
    '/assets/images/pasta/alfredo.jpg',
    '/assets/images/pasta/tomato.jpg',
  ];

  constructor(
    private route: Router,
    private DataService: DataService,
    private FoodService: FoodService,
    ) {}

  ngOnInit(): void {
   this.pastaAndPizza()
  }

  getInputSearch(innputVal: string) {
    this.getInputVal = innputVal;
    console.log(this.getInputVal);
    
  }

  pastaAndPizza() {
    this.isSpinnerVisible = true
    this.DataService.loadData().subscribe( user => {
    this.data = user;
    // console.log(this.data)
    this.foodData = this.data.foods.pasta;
    this.isSpinnerVisible = false
    // console.log(this.foodData)
  })
}

 addToCart() {
  this.route.navigate(['checkout'])
}

  onLowToHighClick() {
    this.foodData.sort(
      (a: { price: number }, b: { price: number }) => a.price - b.price
    );
  }

  onHighToLowClick() {
    this.foodData.sort(
      (a: { price: any }, b: { price: any }) => b.price - a.price
    );
  }

  onRatingClick() {
    this.foodData.sort(
      (a: { rating: number }, b: { rating: number }) =>
        Number(b.rating) - Number(a.rating)
    );
  }
}
