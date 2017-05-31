import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RestaurantService {
  constructor(private jsonp: Jsonp, private http: Http) { }

  private url = 'https://restaurantsystemapi.herokuapp.com/';

  getRestaurant(id){
    console.log(id);
    return this.http.get(this.url + 'restaurants/' + id)
      .map(res => res.json());
  }

  listRestaurants(){
    const endPoint = 'restaurants';

    let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
      .get(this.url + endPoint, { search: params})
      .map(response => response.json())
  }

  addRestaurant(restaurant){
  return this.http.post(this.url + 'restaurants/', {'name': restaurant.name})
    .map(res => res.json());
  }

  updateRestaurant(restaurant){
    return this.http.put(this.url + 'restaurants/' + restaurant.id, {'name': restaurant.name})
      .map(res => res.json());
  }

  deleteRestaurant(id){
    console.log(this.url+'restaurants/'+id)
    return this.http.delete(this.url + 'restaurants/' + id)
      .map(res => res.json());
  }
}
