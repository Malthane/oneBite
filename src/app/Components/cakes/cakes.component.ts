import { Component, OnInit } from '@angular/core';
import { from, map } from 'rxjs';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css'],
})
export class CakesComponent implements OnInit {
  data: any;
  CakeData: any = [];
  images: any = ['/assets/images/x.jpg'];
  // '/assets/images/y.jpg',
  // '/assets/images/z.jpg',
  isSpinnerVisible : boolean = false

  constructor(private DataService: DataService) {}

  ngOnInit(): void {
    this.getAllCakes();
  }

  getAllCakes() {
    this.isSpinnerVisible = true
    this.DataService.loadData()
      .pipe(map((data) => data))
      .subscribe((res) => {
        this.data = res;
        this.CakeData = this.data.Cake.Cakes;
        this.isSpinnerVisible = false
        // console.log(this.CakeData);
        const dey = from(this.CakeData);   //converted array into observable stream
        dey.subscribe((res) => {
          console.log(res);
        });
      });
  }
}
