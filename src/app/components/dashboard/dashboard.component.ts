import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DetailService } from 'src/app/services/detail.service';
import { DetailItem } from 'src/app/store/models/detailItem.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  detailsArr: any;
  detailArrSubscription: Subscription;
  constructor(private detailService: DetailService) {
    this.detailArrSubscription = this.detailService.getAllRecords().subscribe((data)=> {
      if(data) {
        let localData = localStorage.getItem("detailData");
        if(localData) {
          this.detailsArr = JSON.parse(localData);
        }
        else {
          this.detailsArr=data;
          localStorage.setItem("detailData",JSON.stringify(data));
        }
      }
    });
  }

  ngOnInit() {
    let localData = localStorage.getItem("detailData");
    if(localData) {
      this.detailsArr = JSON.parse(localData);
    }
  }

  deleteRecord(record:DetailItem) {
    this.detailService.deleteRecord().subscribe((data) => {
      this.detailsArr = this.detailsArr.filter(function(value:any, index:any, arr:any){ 
        return value.ownerName != record.ownerName;
      });
      localStorage.setItem("detailData",JSON.stringify(this.detailsArr));
    });
  }

  ngOnDestroy(): void {
    this.detailArrSubscription.unsubscribe();
  }
}
