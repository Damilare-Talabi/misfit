import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MarketComponent } from './market/market.component';
import { LoginComponent } from './login/login.component';
import { TourComponent } from './tour/tour.component';
import { BodyComponent } from './body/body.component';
import { AboutComponent } from './about/about.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AngularFireModule } from '@angular/fire/compat';
import { FirebaseService } from './services/firebase.service';




@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    SidebarComponent,
    MarketComponent,
    LoginComponent,
    TourComponent,
    BodyComponent,
    AboutComponent,
    ReviewsComponent,
    
 
  ],
  imports: [
    NgxPageScrollCoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBjEe0oiO4Ammi05uMaC7Bouq3QtmqZQDA",
      authDomain: "the-misfit-market.firebaseapp.com",
      projectId: "the-misfit-market",
      storageBucket: "the-misfit-market.appspot.com",
      messagingSenderId: "254603342345",
      appId: "1:254603342345:web:12476f17d621262923fed8"
    }),

   
    
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
