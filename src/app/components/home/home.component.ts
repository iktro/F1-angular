import { Component, OnInit } from '@angular/core';
import { Race } from 'src/app/models/race';
import { RaceAdapter } from 'src/app/models/race-adapter';
import { RacesService } from 'src/app/services/races.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  raceResult? : Race

  constructor(private racesService: RacesService, private raceAdapter: RaceAdapter) {
  }

  ngOnInit(): void {
    this.racesService.getLastRacesResults().subscribe(
      raceResult => {
        this.raceResult = this.raceAdapter.adapt(raceResult)
      }
    );
  }

}
