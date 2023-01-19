import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DetailService } from 'src/app/services/detail.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailFormComponent {

  detailForm = this.formBuilder.group({
    ownerName: ['', Validators.required],
    carNumber: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder, 
    private detailService: DetailService, 
    private router: Router,
    private storageService: StorageService) {
    
  };

  onSubmit(): void {
    // Process detail form data here
    //console.warn('Your data has been submitted', this.detailForm.value);
    let detail = this.detailForm.value;
    if(this.detailService.validateDetails(detail)) {
      console.log("Details already present");
    }
    else {
      this.detailService.addDetails().subscribe(data=> {
        this.storageService.addDetails(detail);
        console.log("Details added successfully");
      });
    }
    this.detailForm.reset();
    this.router.navigate(['/dashboard']);
  }

}
