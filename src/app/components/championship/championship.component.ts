import { Component, OnInit } from '@angular/core';
import { Championship } from 'src/app/models/championship';
import { ChampionshipAdapter } from 'src/app/models/championship-adapter';
import { Season } from 'src/app/models/season';
import { SeasonsAdapter } from 'src/app/models/seasons-adapter';
import { ChampionshipService } from 'src/app/services/championship.service';
import { SeasonsService } from 'src/app/services/seasons.service';
import { SelectYearService } from 'src/app/services/select-year.service';

@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.scss']
})
export class ChampionshipComponent implements OnInit {

  constructorChampionship?: Championship[]
  driverChampionship?: Championship[]
  isConstructorChampionship: boolean = false
  selectedYear: number = new Date().getFullYear()

  constructor(
    private championshipService: ChampionshipService, private championshipAdapter: ChampionshipAdapter,
    private selectYearService: SelectYearService
  ) { }

  ngOnInit(): void {
    this.selectYearService.currentYear.subscribe(res => {
      this.selectedYear = res
      this.setChampionshipByYear(this.selectedYear)
    })
    this.setChampionshipByYear(this.selectedYear)
  }

  setChampionshipByYear(year: number){
    if(this.isConstructorChampionship){
      this.championshipService.getConstructorChampionshipByYear(year.toString()).subscribe(
        result => {
          this.constructorChampionship = this.championshipAdapter.adapt(result)
        }
      )
    } else {
      this.championshipService.getDriverChampionshipByYear(year.toString()).subscribe(
        result => {
          this.driverChampionship = this.championshipAdapter.adapt(result)
        }
      )
    }
  }

}
