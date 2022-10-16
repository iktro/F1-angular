import { Race } from "./race";
import { Injectable } from "@angular/core";
import { ModelAdapter } from "../contracts";

@Injectable({
  providedIn: 'root'
})
export class RaceAdapter implements ModelAdapter<any, Race> {

  adapt(item: any): Race {
    let raceItem = item.MRData.RaceTable
    return new Race(
      raceItem.Races[0].date,
      raceItem.Races[0].Circuit,
      raceItem.Races[0].Results,
      raceItem.round,
      raceItem.Races[0].raceName
    )
  }
}

