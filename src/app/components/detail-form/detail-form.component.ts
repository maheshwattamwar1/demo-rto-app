import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DetailService } from 'src/app/services/detail.service';

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

  constructor(private formBuilder: FormBuilder, private detailService: DetailService) {
    
  };

  onSubmit(): void {
    // Process detail form data here
    //this.items = this.cartService.clearCart();
    console.warn('Your data has been submitted', this.detailForm.value);
    this.detailService.saveDetails(this.detailForm.value);
    this.detailForm.reset();
  }

}
