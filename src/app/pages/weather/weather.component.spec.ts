// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { WeatherComponent } from './weather.component';

// describe('WeatherComponent', () => {
//   let component: WeatherComponent;
//   let fixture: ComponentFixture<WeatherComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [WeatherComponent]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(WeatherComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherComponent } from './weather.component';
import { WeatherService } from '../../services/weather.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  let weatherService: WeatherService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherComponent],
      providers: [
        provideHttpClientTesting(),
        WeatherService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    weatherService = TestBed.inject(WeatherService);
  });

  xit('should create the component', () => {
    expect(component).toBeTruthy();
  });

  xit('should fetch and set temperature on init', () => {
    const mockData = {
      main: { temp: 22 }
    };

    spyOn(weatherService, 'getCurrentTemperature').and.returnValue(of(mockData));

    component.ngOnInit();

    expect(weatherService.getCurrentTemperature).toHaveBeenCalledWith('Toronto');
    expect(component.temperature).toBe(25);
  });
});
