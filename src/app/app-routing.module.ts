import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriversComponent } from './components/drivers/drivers.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'drivers', component: DriversComponent},
  { path: 'drivers/:year', component: DriversComponent},
  { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
