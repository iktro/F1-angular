import { Component, OnInit } from '@angular/core';
import { Championship } from 'src/app/models/championship';
import { ChampionshipAdapter } from 'src/app/models/championship-adapter';
import { Season } from 'src/app/models/season';
import { SeasonsAdapter } from 'src/app/models/seasons-adapter';
import { ChampionshipService } from 'src/app/services/championship.service';
import { SeasonsService } from 'src/app/services/seasons.service';

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
  page = 1
  seasonsNumber = 0
  seasons?: Season[]

  constructor(
    private championshipService: ChampionshipService, private championshipAdapter: ChampionshipAdapter,
    private seasonService: SeasonsService, private seasonsAdapter: SeasonsAdapter,
  ) { }

  ngOnInit(): void {
    this.setChampionshipByYear(this.selectedYear)
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

  setSelectedYear(year: number){
    this.selectedYear = year
    this.setChampionshipByYear(year)
  }

}
