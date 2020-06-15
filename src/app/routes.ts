import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const allAppRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'details/:id/:code', component: WeatherComponent },
  { path: 'detail', component: WeatherComponent },

];