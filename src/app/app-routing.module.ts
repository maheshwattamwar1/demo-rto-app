import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailFormComponent } from './components/detail-form/detail-form.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail-form', component: DetailFormComponent },
  { path: '**', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
