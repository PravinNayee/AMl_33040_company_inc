import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  temperature: number | null = null;
  city = 'Toronto';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getCurrentTemperature(this.city).subscribe(
      data => {
        this.temperature = data.main.temp;
      },
      error => {
        console.error('Error fetching weather data:', error);
      }
    );
  }
}
