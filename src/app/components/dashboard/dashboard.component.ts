import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor() {

  }

  detailsArr = [
    { id: 1, ownerName: 'Celeritas', vehicleNumber: 'mh12aa1111' },
    { id: 2, ownerName: 'Magneta', vehicleNumber: 'mh12aa2222' },
    { id: 3, ownerName: 'RubberMan', vehicleNumber: 'mh12aa3333' },
    { id: 4, ownerName: 'Dynama', vehicleNumber: 'mh12aa4444' },
    { id: 5, ownerName: 'Tornado', vehicleNumber: 'mh12aa5555' }
  ];

}
