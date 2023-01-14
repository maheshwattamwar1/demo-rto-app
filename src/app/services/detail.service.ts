import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  detailsArr = [
    { ownerName: 'Celeritas', carNumber: 'mha111' },
    { ownerName: 'Magneta', carNumber: 'mha222' },
    { ownerName: 'RubberMan', carNumber: 'mha333' },
    { ownerName: 'Dynama', carNumber: 'mha444' },
    { ownerName: 'Tornado', carNumber: 'mha555' }
  ];

  constructor() { }

  saveDetails(detail:any) {
    console.log(detail);
  }

  getAllRecords() {
    return this.detailsArr;
  }

}
