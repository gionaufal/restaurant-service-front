import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantsComponent} from './restaurants/restaurants.component'
import { HomeComponent} from './home/home.component'

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'restaurants',
    component: RestaurantsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
