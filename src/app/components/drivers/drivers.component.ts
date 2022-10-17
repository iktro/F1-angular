import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/models/driver';
import { DriverAdapter } from 'src/app/models/driver-adapter';
import { Season } from 'src/app/models/season';
import { SeasonsAdapter } from 'src/app/models/seasons-adapter';
import { DriversService } from 'src/app/services/drivers.service';
import { SeasonsService } from 'src/app/services/seasons.service';
import { SelectYearService } from 'src/app/services/select-year.service';
import { SelectYearComponent } from '../select-year/select-year.component';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit{

  drivers?: Driver[]
  seasons?: Season[]
  selectedYear: number = new Date().getFullYear()
  page = 1
  seasonsNumber = 0

  constructor(
    private driversService: DriversService, private driverAdapter: DriverAdapter,
    private selectYearService: SelectYearService,
    ) {
  }

  ngOnInit(): void {
    this.selectYearService.currentYear.subscribe(res => {
      this.selectedYear = res
      this.setDriversByYear(this.selectedYear)
    })
    this.setDriversByYear(this.selectedYear)
  }

  setDriversByYear(year: number){
    this.driversService.getDriversByYear(year).subscribe(
      result => {
        this.drivers = this.driverAdapter.adapt(result)
      }
    )
  }

}
