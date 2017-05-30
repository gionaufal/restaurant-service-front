import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RestaurantService {
  constructor(private jsonp: Jsonp) { }

  private url = 'https://restaurantsystemapi.herokuapp.com/';

  listRestaurants(){
    const endPoint = 'restaurants';

    let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
      .get(this.url + endPoint, { search: params})
      .map(response => response.json())
  }

}
