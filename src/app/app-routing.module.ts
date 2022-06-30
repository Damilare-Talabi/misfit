import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { TourComponent } from './tour/tour.component';
import { AboutComponent } from './about/about.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { LoginComponent } from './login/login.component';
import { MarketComponent } from './market/market.component';


const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: HomepageComponent},
  {path: 'tour', component: TourComponent,
children:[{component:AboutComponent, path: 'about'},
          {component: ReviewsComponent, path: 'reviews' },
          {component: LoginComponent, path: 'login' },
          {component: MarketComponent, path: 'market' },
        ]},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
