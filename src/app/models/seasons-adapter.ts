import { Injectable } from "@angular/core";
import { ModelAdapter } from "../contracts";
import { Season } from "./season";

@Injectable({
  providedIn: 'root'
})
export class SeasonsAdapter implements ModelAdapter<any, Season[]> {

  adapt(item: any): Season[] {
    let seasonsList: Season[] = []
    for(let season of item.MRData.SeasonTable.Seasons){
      seasonsList.push(new Season(season.season, season.url))
    }
    return seasonsList
  }
}
