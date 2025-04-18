import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

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

  constructor() {
    setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);
  }
}
