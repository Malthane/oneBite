import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FoodService } from 'src/app/Shared/food.service';
import { CakesComponent } from '../cakes/cakes.component';
// import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent implements OnInit, AfterViewInit {
  // @Input() beverageValue : any
  // Beverage : any
  // @ViewChild(CakesComponent) beverage !: CakesComponent;

  constructor(private shared: FoodService,) { }

  ngOnInit(): void {
    // this.getBeverages()
    // console.log(this.beverageValue)
    // console.log(this.beverage.cakeValue)
    // this.shared.dataReceivedEvent.subscribe(res => {
    //   console.log(res)
    // })

  }

  ngAfterViewInit() {
    // console.log(this.Beverage)
  }
  // getBeverages(){
  //   this.shared.getFood().subscribe(res => {
  //     // console.log(res);
  //     this.Beverage = res
  //     console.log(this.Beverage);
  //   })
  // }



}
