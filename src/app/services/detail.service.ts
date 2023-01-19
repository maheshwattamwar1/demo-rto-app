import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

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
    let apiUrl = "http://localhost:3000/getDetails";
    return this.http.get(apiUrl);
  }

  deleteRecord() {
    let apiUrl = "http://localhost:3000/deleteDetails";
    return this.http.get(apiUrl);
  }

}
