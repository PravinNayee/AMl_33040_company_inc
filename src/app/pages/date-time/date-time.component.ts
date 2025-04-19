import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule,isPlatformBrowser, DatePipe } from '@angular/common';


@Component({
  selector: 'app-date-time',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.scss'],
  providers: [DatePipe]
})
export class DateTimeComponent {
  currentDateTime: Date = new Date();
  intervalId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Only run the interval on the browser
    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = setInterval(() => {
        this.currentDateTime = new Date();
      }, 1000);
    }
  }
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
