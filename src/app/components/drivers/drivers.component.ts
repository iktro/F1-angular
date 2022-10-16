import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/models/driver';
import { DriverAdapter } from 'src/app/models/driver-adapter';
import { Season } from 'src/app/models/season';
import { SeasonsAdapter } from 'src/app/models/seasons-adapter';
import { DriversService } from 'src/app/services/drivers.service';
import { SeasonsService } from 'src/app/services/seasons.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit{

  drivers?: Driver[]
  seasons?: Season[]
  selectedYear?: string
  page = 1
  seasonsNumber = 0

  constructor(
    private driversService: DriversService, private driverAdapter: DriverAdapter,
    private seasonService: SeasonsService, private seasonsAdapter: SeasonsAdapter,
    ) {
  }

  ngOnInit(): void {
    this.selectedYear = new Date().getFullYear().toString()

    this.setDriversByYear(this.selectedYear)
    this.seasonService.getAllSeasons().subscribe(
      seasonResult => {
        this.seasons = this.seasonsAdapter.adapt(seasonResult)
        this.seasonsNumber = this.seasons.length
        this.page = Math.floor(this.seasonsNumber /10 + 1)
      }
    )
  }

  setDriversByYear(year: string){
    this.driversService.getDriversByYear(year).subscribe(
      result => {
        this.drivers = this.driverAdapter.adapt(result)
      }
    )
  }

  get selectedContent(): Season[] | undefined {
    return this.seasons?.slice(this.page * 10 - 10, this.page * 10)
  }

  setSelectedYear(year: number){
    this.selectedYear = year?.toString()
    this.setDriversByYear(this.selectedYear)
  }

}
