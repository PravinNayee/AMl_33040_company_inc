import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { OurCustomersComponent } from './pages/our-customers/our-customers.component';
import { DateTimeComponent } from './pages/date-time/date-time.component';
import { WeatherComponent } from './pages/weather/weather.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'our-services', component: OurServicesComponent },
  { path: 'our-customers', component: OurCustomersComponent },
  { path: 'date-time', component: DateTimeComponent },
  { path: 'weather', component: WeatherComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'about-us' }
];


// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }