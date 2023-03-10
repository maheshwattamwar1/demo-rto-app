import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';
import { DetailItem } from '../store/models/detailItem.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  detailsArr:DetailItem[] = [];
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private storageService: StorageService) { }

  validateDetails(detail:any):boolean {

    this.detailsArr = this.storageService.getDetails();
    let hasDuplicate = false;

    // check if details already present
    if (this.detailsArr.find(e => (e.ownerName === detail.ownerName && e.carNumber === detail.carNumber))) {
      hasDuplicate=true;
    }
    return hasDuplicate;
  }

  getAllRecords() { 
    let apiUrl = this.baseUrl + "/getDetails";
    return this.http.get(apiUrl);
  }

  deleteRecord() {
    let apiUrl = this.baseUrl + "/deleteDetails";
    return this.http.get(apiUrl);
  }

  addDetails() {
    let apiUrl = this.baseUrl + "/addDetails";
    return this.http.get(apiUrl);
  }
  
}
