import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing } from './app.routes'
import { FilterData } from './filter-data';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RestaurantsComponent} from './restaurants/restaurants.component';
import { HomeComponent } from './home/home.component';
import { RestaurantService} from './restaurant.service';
import { Restaurant } from './restaurants/restaurant';
import { RestaurantFormComponent } from './restaurants/restaurant-form/restaurant-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RestaurantsComponent,
    HomeComponent,
    FilterData,
    RestaurantFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})

export class AppModule { }
