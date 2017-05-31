import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantsComponent} from './restaurants/restaurants.component'
import { RestaurantFormComponent} from './restaurants/restaurant-form/restaurant-form.component'
import { HomeComponent} from './home/home.component'

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'restaurants/:id', component: RestaurantFormComponent },
  { path: 'restaurants/new', component: RestaurantFormComponent },
  { path: 'restaurants/:id/edit', component: RestaurantFormComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
