// import { Component, OnInit } from '@angular/core';
// import { WeatherService } from '../../services/weather.service';


// @Component({
//   selector: 'app-weather',
//   templateUrl: './weather.component.html',
//   styleUrls: ['./weather.component.scss']
// })
// export class WeatherComponent implements OnInit {
//   temperature: number | null = null;
//   city = 'Toronto';

//   constructor(private weatherService: WeatherService) {}

//   ngOnInit(): void {
//     this.weatherService.getCurrentTemperature(this.city).subscribe(
//       data => {
//         this.temperature = data.main.temp;
//       },
//       error => {
//         console.error('Error fetching weather data:', error);
//       }
//     );
//   }
// }


import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  temperature: number | null = null;
  city = 'Toronto';
  isBrowser: boolean;

  constructor(
    private weatherService: WeatherService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.weatherService.getCurrentTemperature(this.city).subscribe({
        next: (data) => this.temperature = data.main.temp,
        error: (err) => console.error('Weather fetch error:', err)
      });
    }
  }
}
