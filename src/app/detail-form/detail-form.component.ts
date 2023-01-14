import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailFormComponent {

  detailForm = this.formBuilder.group({
    inputOwnerName: ['', Validators.required],
    inputCarNumber: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) {
    
  };

  onSubmit(): void {
    // Process detail form data here
    //this.items = this.cartService.clearCart();
    console.warn('Your data has been submitted', this.detailForm.value);
    this.detailForm.reset();
  }

}
