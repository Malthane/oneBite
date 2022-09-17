import {  AfterViewInit, Component, OnInit,  } from '@angular/core';
import { from, map } from 'rxjs';
import { DataService } from 'src/app/Services/data.service';
import { FoodService } from 'src/app/Shared/services/food.service';
import { faFilter} from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css'],
})
export class CakesComponent implements OnInit, AfterViewInit{

  getVal = 'got NEW val'
  val: string = 'test';
  isSpinnerVisible: boolean = false;
  faFilter = faFilter;
  faStar = faStar;
  data: any;
  CakeData: any = [];
  images: any = [
    '/assets/images/cakes/x.jpg',
    '/assets/images/cakes/y.jpg',
    '/assets/images/cakes/coffee.cake.jpg',
    '/assets/images/cakes/vanila.jpg',
    '/assets/images/cakes/z.jpg',
  ];
  constructor(
    private DataService: DataService,
    private shared: FoodService,
    private ActivateRoute: ActivatedRoute,
    private router: Router,
    ) {}

  ngOnInit(): void {
    this.getAllCakes();
  }

  peraValue(e:any) {
    console.log((e));

  }
  ngAfterViewInit() {

  }

  changeTitle () {

  }

  changeAlert () {

  }

  getAllCakes() {
    this.isSpinnerVisible = true;
    this.DataService.loadData()
      .pipe(map((data) => data))
      .subscribe((res) => {
        this.data = res;
        this.CakeData = this.data.Cake.Cakes;
        this.isSpinnerVisible = false;
        const dey = from(this.CakeData); //converted array into observable stream
        dey.subscribe((res) => {
        });
      });
  }

  onFilterClick() {}

  addToCart() {
    this.router.navigate(['checkout'])
  }

}
