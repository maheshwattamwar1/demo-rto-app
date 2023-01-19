import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppInterceptor } from '../app/app-interceptor.interceptor';

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
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({
     
    }),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
