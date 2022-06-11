import { Injectable } from '@angular/core';
import { CommunicationData } from '../interfaces/food.interface'
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  // hey : any
  // jey : any

  // public foodData = new Subject<any>();

  constructor() { }

//  loadFood(drinks: any) {
//     this.jey = this.foodData.next(drinks);
//     console.log(this.jey)
//   }

//   getFood(): Observable<any> {
//     this.hey = this.foodData.asObservable();
//     console.log(this.hey)
//     return this.hey
//   }

private $data = new Subject<any>();
public dataReceivedEvent = this.$data.asObservable();

public setDataToSend(data: any): void {
    this.$data.next(data);
}

}
