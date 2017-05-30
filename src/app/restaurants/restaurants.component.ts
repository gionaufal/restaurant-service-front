import { Component, OnInit, Input } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Observable } from 'rxjs/Observable';
import { Restaurant } from './restaurant';

@Component({
  selector: 'content',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {
  title = 'Restaurantes';

  restaurants: Observable<string[]>;

  constructor(private restauratService: RestaurantService) { }

  ngOnInit() {
    this.restaurants = this.restauratService.listRestaurants();
  }
}
