import { Injectable } from "@angular/core";
import { ModelAdapter } from "../contracts";
import { Championship } from "./championship";

@Injectable({
  providedIn: 'root'
})
export class ChampionshipAdapter implements ModelAdapter<any, Championship[]> {

  adapt(item: any): Championship[] {
    let championshipList: Championship[] = []
    item = item.MRData.StandingsTable
    item = item.StandingsLists[0]
    let season = item.season
    item = item.DriverStandings ?? item.ConstructorStandings
    for(let championship of item){
      championshipList.push(new Championship(season, championship?.Driver, championship.points, championship.wins, championship.Constructor, championship.position))
    }
    return championshipList
  }
}

