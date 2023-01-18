import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailFormComponent } from './components/detail-form/detail-form.component';
import { DetailReducer } from './store/reducers/detail.reducer';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
