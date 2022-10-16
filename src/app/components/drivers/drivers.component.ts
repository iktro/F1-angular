import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private driversService: DriversService, private driverAdapter: DriverAdapter,
    private seasonService: SeasonsService, private seasonsAdapter: SeasonsAdapter,
    private activatedRoute: ActivatedRoute,
    ) {
  }

  ngOnInit(): void {
    this.selectedYear = this.activatedRoute.snapshot.paramMap?.get('year') ?? new Date().getFullYear().toString()

    this.setDriversByYear(this.selectedYear)
    this.seasonService.getAllSeasons().subscribe(
      seasonResult => {
        console.log(this.seasonsAdapter.adapt(seasonResult))
        this.seasons = this.seasonsAdapter.adapt(seasonResult)
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



}
