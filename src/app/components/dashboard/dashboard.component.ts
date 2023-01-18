import { Component, OnInit } from '@angular/core';
import { DetailService } from 'src/app/services/detail.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  detailsArr: any;
  constructor(private detailService: DetailService) {
    
  }

  ngOnInit() {
    console.log("ngOnInit called");
    this.detailsArr = this.detailService.getAllRecords();
  }

  deleteRecord(record:any) {
    this.detailService.deleteRecord(record);
  }

}
