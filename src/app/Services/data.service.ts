import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private Http : HttpClient) { }

  loadData() {
    return this.Http.get(config.Api_url)
  }
}
