import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../restaurant.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})

export class RestaurantFormComponent implements OnInit {
  title: string;

  restaurant: Restaurant = new Restaurant();

  constructor(
    private restaurantService : RestaurantService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Editar Restaurante' : 'Criar Restaurante';

      if (!id)
        return;

      this.restaurantService.getRestaurant(id)
        .subscribe(
          restaurant => this.restaurant = restaurant,
          response => {});
    });
  }

  save() {
    var result;

    if (this.restaurant.id){
      result = this.restaurantService.updateRestaurant(this.restaurant);
    } else {
      result = this.restaurantService.addRestaurant(this.restaurant);
    }
console.log(result);

    result.subscribe(data => this.router.navigate(['/restaurants']));
  }
}
