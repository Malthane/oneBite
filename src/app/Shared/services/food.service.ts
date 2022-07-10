import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { DataService } from '../../Services/data.service'

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  userInfo$ = new BehaviorSubject<any>(null);
  private userInfo : any;

  constructor ( private DataService: DataService)
  {
    this.DataService.loadData().subscribe((res) => {
      this.userInfo = res;
      // console.log(this.userInfo)

    this.userInfo$.next(this.userInfo);
   }
  )}
}
