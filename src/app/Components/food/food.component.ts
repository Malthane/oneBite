import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs';
import { CommunicationData } from 'src/app/interfaces/food.interface';
import { DataService } from 'src/app/Services/data.service';
import { faFilter, faStar, } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  isSpinnerVisible : boolean = false
  data : any
  foodData : any
  faStar = faStar;

  images : any = [
    '/assets/images/pasta/white_sauce.jpg',
    '/assets/images/pasta/red.jpg',
    '/assets/images/pasta/chees-mayo.jpg',
    '/assets/images/pasta/alfredo.jpg',
    '/assets/images/pasta/tomato.jpg',
  ]

  constructor(private DataService : DataService) { }

  ngOnInit(): void {
    this.getAllFoods()
  }

  getAllFoods() {
    this.isSpinnerVisible = true;
    this.DataService.loadData()
    // .pipe(map( data => { data}))
      // .pipe(filter(response => response.price.length > 5),)
      .subscribe((res) => {
        this.data = res;
        this.foodData = this.data.foods.pasta;
        console.log(this.foodData)
        this.isSpinnerVisible = false;

        // const dey = from(this.CakeData); //converted array into observable stream
        // dey.subscribe((res) => {
          // console.log(res);
        // });
      });
  }
}
