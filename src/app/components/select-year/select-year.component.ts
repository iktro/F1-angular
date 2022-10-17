import { Component, OnInit } from '@angular/core';
import { Season } from 'src/app/models/season';
import { SeasonsAdapter } from 'src/app/models/seasons-adapter';
import { SeasonsService } from 'src/app/services/seasons.service';
import { SelectYearService } from 'src/app/services/select-year.service';

@Component({
  selector: 'app-select-year',
  templateUrl: './select-year.component.html',
  styleUrls: ['./select-year.component.scss']
})
export class SelectYearComponent implements OnInit {

  selectedYear: number = new Date().getFullYear()
  page = 1
  seasonsNumber = 0
  seasons?: Season[]

  constructor(
    private seasonService: SeasonsService, private seasonsAdapter: SeasonsAdapter,
    private selectYearService : SelectYearService
  ) {

  }

  ngOnInit(): void {
    this.selectYearService.currentYear.subscribe(res =>  this.selectedYear = res)
    this.seasonService.getAllSeasons().subscribe(
      seasonResult => {
        this.seasons = this.seasonsAdapter.adapt(seasonResult)
        this.seasonsNumber = this.seasons.length
        this.page = Math.floor(this.seasonsNumber /10 + 1)
      }
    )
  }

  get selectedContent(): Season[] | undefined {
    return this.seasons?.slice(this.page * 10 - 10, this.page * 10)
  }


  setSelectedYear(year: number){
    this.selectedYear = year
    this.selectYearService.updateYear(year)
  }


}
