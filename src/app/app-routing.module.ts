import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionshipComponent } from './components/championship/championship.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { HomeComponent } from './components/home/home.component';
import { RacesComponent } from './components/races/races.component';

const routes: Routes = [
  { path: 'drivers', component: DriversComponent},
  { path: 'races', component: RacesComponent},
  { path: 'championship', component: ChampionshipComponent},
  { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
