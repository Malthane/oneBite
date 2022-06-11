import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private _foodDataSource = new Subject<any>()
  // allFoodData$ = this._foodDataSource.asObservable();

  constructor(private Http : HttpClient) { }


  loadData() {
    return this.Http.get(config.Api_url)
  }
}
