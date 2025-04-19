// import { TestBed } from '@angular/core/testing';

// import { WeatherService } from './weather.service';

// describe('WeatherService', () => {
//   let service: WeatherService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(WeatherService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

 
import { TestBed } from '@angular/core/testing';
import { WeatherService } from './weather.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService]
    });

    service = TestBed.inject(WeatherService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch current temperature from OpenWeatherMap', () => {
    const dummyResponse = {
      main: { temp: 25 },
      weather: [{ icon: '01d' }]
    };

    service.getCurrentTemperature('Toronto').subscribe((data) => {
      expect(data.main.temp).toBe(25);
    });

    const req = httpMock.expectOne((r) => r.url.includes('Toronto')); 
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });
});
