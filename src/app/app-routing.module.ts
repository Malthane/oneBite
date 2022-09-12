import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeveragesComponent } from './Components/beverages/beverages.component';
import { CakesComponent } from './Components/cakes/cakes.component';
import { ValComponent } from './Components/cakes/val/val.component';
import { FoodComponent } from './Components/food/food.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './core/login/login.component';
import { SignUpComponent } from './core/sign-up/sign-up.component';
import { AuthGuard } from './Services/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'sign-ui', component: SignUpComponent},
  { path: 'home', component: HomeComponent},
  { path: 'val', component: ValComponent},
  { path: 'food', component: FoodComponent, canActivate: [AuthGuard]},
  { path: 'beverages', component: BeveragesComponent, canActivate: [AuthGuard]},
  { path: 'cakes', component: CakesComponent, canActivate: [AuthGuard]},
  {
    path: 'checkout',
    loadChildren: () =>
     import('../app/checkout/checkout.module').then((m) => m.CheckoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
