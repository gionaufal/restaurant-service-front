import { Component, OnInit, Input } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Restaurant } from './restaurant';

@Component({
  selector: 'content',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {
  title = 'Restaurantes';

  private restaurants: Restaurant[] = []

  constructor(
    private restaurantService: RestaurantService,
    private router : Router
  ) { }

  ngOnInit() {
    this.restaurantService.listRestaurants()
      .subscribe(data => this.restaurants = data)
  }

  deleteRestaurant(restaurant) {
    if (confirm("Você tem certeza que quer deletar o restaurante " + restaurant.name + "?")) {
      var index = this.restaurants.indexOf(restaurant);
      this.restaurants.splice(index, 1);

      this.restaurantService.deleteRestaurant(restaurant.id)
        .subscribe(data => this.router.navigate(['/restaurants']));
    }
  }
}
