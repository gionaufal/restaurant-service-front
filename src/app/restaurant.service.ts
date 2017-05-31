import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RestaurantService {
  constructor(private jsonp: Jsonp, private http: Http) { }

  private url = 'https://restaurantsystemapi.herokuapp.com/';

  getRestaurant(id){
    return this.jsonp.get(this.url + 'restaurants/' + id)
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
  return this.http.post(this.url + 'restaurants/', {'restaurant': restaurant})
    .map(res => res.json());
  }

  updateRestaurant(restaurant){
    return this.jsonp.put(this.url + 'restaurants/' + restaurant.id, {'restaurant': restaurant})
      .map(res => res.json());
  }

  deleteRestaurant(id){
    return this.jsonp.delete(this.url + '/' + id)
      .map(res => res.json());
  }
}
