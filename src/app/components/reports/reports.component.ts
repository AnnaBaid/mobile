import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {
  public report = [
    {
      id: 1,
      icon: 'person',
      title: 'Astro- psychological report',
      desc: 'Some short description of this type of report.'
    },
    {
      id: 2,
      icon: 'calendar_today',
      title: 'Monthly prediction report',
      desc: 'Some short description of this type of report.'
    },
    {
      id: 3,
      icon: 'domain_verification',
      title: 'Daily Prediction',
      desc: 'Some short description of this type of report.'
    },
    {
      id: 4,
      icon: 'favorite_border',
      title: 'Love report',
      desc: 'Some short description of this type of report.'
    }
  ]
}
