import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    private detailKey = "detailData";
    constructor(private http: HttpClient) { }

    getDetails() {
        let localData = localStorage.getItem(this.detailKey);
        if (localData) {
            return JSON.parse(localData);
        }
        return [];
    }

    saveDetails(details: any) {
        localStorage.setItem(this.detailKey, JSON.stringify(details));
    }

    addDetails(detail: any) {
        let arr = this.getDetails();
        arr.push(detail);
        this.saveDetails(arr);
    }

}
