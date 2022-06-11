import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { from, map } from 'rxjs';
import { DataService } from 'src/app/Services/data.service';
import { FoodService } from 'src/app/Shared/food.service';
import { faFilter, faStar} from '@fortawesome/free-solid-svg-icons'
// import { BeveragesComponent } from '../beverages/beverages.component';
// import { DeadComponent } from './dead/dead.component';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css'],
})
export class CakesComponent implements OnInit {
  // @ViewChild(DeadComponent) cakeComp! : DeadComponent
  // cakeValue : any
  faFilter = faFilter
  faStar = faStar
  data: any;
  CakeData: any = [];
  images: any = ['/assets/images/x.jpg'];
  // '/assets/images/y.jpg',
  // '/assets/images/z.jpg',
  isSpinnerVisible: boolean = false;

  constructor(
    private DataService: DataService,
    private shared: FoodService,
    ) {}

  ngOnInit(): void {
    this.getAllCakes();
    // this.sharedData();
    // this.sendData();
  }

  getAllCakes() {
    this.isSpinnerVisible = true;
    this.DataService.loadData()
      .pipe(map((data) => data))
      .subscribe((res) => {
        this.data = res;

        // this.shared.setDataToSend(res);
        // this.shared.foodData.next(res)
        // this.shared.loadFood(res);
        // console.log(this.shared.foodData.value)
        // console.log(this.shared)

        this.CakeData = this.data.Cake.Cakes;
        this.isSpinnerVisible = false;
        // console.log(this.CakeData);
        const dey = from(this.CakeData); //converted array into observable stream
        dey.subscribe((res) => {
          // console.log(res);
        });
      });
  }

  onFilterClick() {

  }

  // sharedData() {
  //  this.ho = this.shared.loadFood(this.data);
  //  console.log(this.ho)
  // }

  //   sendData(): void {
  //   this.shared.setDataToSend(this.data);
  // }

}
