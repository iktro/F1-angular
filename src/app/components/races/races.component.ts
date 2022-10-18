import { Component, OnInit } from '@angular/core';
import { Race } from 'src/app/models/race';
import { RacesAdapter } from 'src/app/models/race-adapter';
import { RacesService } from 'src/app/services/races.service';
import { SelectYearService } from 'src/app/services/select-year.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss']
})
export class RacesComponent implements OnInit {

  racesResults: Race[] = []
  racesNumber = 0
  selectedYear: number = new Date().getFullYear()
  page = 1
  raceResult?: Race

  constructor(
    private racesService: RacesService, private racesAdapter: RacesAdapter,
    private selectYearService: SelectYearService) {
  }

  ngOnInit(): void {
    this.selectYearService.currentYear.subscribe(res => {
      this.selectedYear = res
    })
    this.getSeasonResult(this.selectedYear)
  }

  getSeasonResult(year: number){
    console.log("getSeasonResult")
    this.racesService.getSeasonResults(year).subscribe(
      raceResult => {
        this.racesResults = this.racesAdapter.adapt(raceResult)
        this.racesNumber = this.racesResults.length
        this.changeRace(0)
      }
    );
  }

  changeRace(page: number){
    this.raceResult = this.racesResults[page]
  }

}
