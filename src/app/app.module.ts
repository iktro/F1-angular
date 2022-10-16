import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RacesComponent } from './components/races/races.component';
import { ChampionshipComponent } from './components/championship/championship.component';
import { SelectYearComponent } from './components/select-year/select-year.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DriversComponent,
    RacesComponent,
    ChampionshipComponent,
    SelectYearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
