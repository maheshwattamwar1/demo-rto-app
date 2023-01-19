import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DetailService } from 'src/app/services/detail.service';
import { StorageService } from 'src/app/services/storage.service';
import { DetailItem } from 'src/app/store/models/detailItem.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  detailsArr: any;
  detailArrSubscription: Subscription;
  constructor(private detailService: DetailService,
    private storageService: StorageService) {
    this.detailArrSubscription = this.detailService.getAllRecords().subscribe((data)=> {
      if(data) {
        this.detailsArr = this.storageService.getDetails();
        if(this.detailsArr && this.detailsArr.length == 0) {
          this.detailsArr=data;
          this.storageService.saveDetails(data);
        }
      }
    });
  }

  ngOnInit() {
    this.detailsArr = this.storageService.getDetails();
  }

  deleteRecord(record:DetailItem) {
    this.detailService.deleteRecord().subscribe((data) => {
      this.detailsArr = this.detailsArr.filter(function(value:any, index:any, arr:any){ 
        return value.ownerName != record.ownerName;
      });
      this.storageService.saveDetails(this.detailsArr);
    });
  }

  ngOnDestroy(): void {
    this.detailArrSubscription.unsubscribe();
  }
}
