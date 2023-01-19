import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { DetailService } from 'src/app/services/detail.service';
import { NotificationService } from 'src/app/services/notification.service';
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
    private storageService: StorageService,
    private notificationService: NotificationService) {
    
  };

  onSubmit(): void {
    // Process detail form data here
    //console.warn('Your data has been submitted', this.detailForm.value);
    let detail = this.detailForm.value;
    if(this.detailService.validateDetails(detail)) {
      this.notificationService.showError("Details already present !!", "");
    }
    else {
      this.detailService.addDetails()
      .pipe(
        finalize(() => {
          this.storageService.addDetails(detail);
        })
      )
      .subscribe(data=> {
        this.notificationService.showSuccess("Details added successfully","");
      });
    }
    this.detailForm.reset();
    this.router.navigate(['/dashboard']);
  }

}
