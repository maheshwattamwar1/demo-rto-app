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

    let hasDuplicate = false;

    // check if details already present
    if (this.detailsArr.find(e => (e.ownerName === detail.ownerName && e.carNumber === detail.carNumber))) {
      hasDuplicate=true;
    }

    // add detail only if not duplicate
    if(hasDuplicate == false) {
      this.detailsArr.push(detail);
    }

    console.log(detail);

  }

  getAllRecords() {
    return this.detailsArr;
  }

  deleteRecord(record: any) {
    throw new Error('Method not implemented.');
  }
}
