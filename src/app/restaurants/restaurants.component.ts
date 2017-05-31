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

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurants = this.restaurantService.listRestaurants();
  }

  deleteRestaurant(restaurant) {
    if (confirm("Você tem certeza que quer deletar o restaurante " + restaurant.name + "?")) {
      this.restaurantService.deleteRestaurant(restaurant.id)
        .subscribe(null);
    }
  }
}
