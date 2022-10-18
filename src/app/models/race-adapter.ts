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

@Injectable({
  providedIn: 'root'
})
export class RacesAdapter implements ModelAdapter<any, Race[]>{

  adapt(item: any): Race[] {
    let raceItem = item.MRData.RaceTable.Races
    let races = []
    for(let race of raceItem){
      races.push(new Race(
        race.date,
        race.Circuit,
        race.Results,
        race.round,
        race.raceName
      ))
    }
    return races
  }


}
