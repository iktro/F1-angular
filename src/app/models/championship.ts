import { Driver } from "./driver";
import { Race } from "./race";

export class Championship{
  year: number
  pilot: Driver
  races: Race[]
  points: number
  bestFinish: string
  bestQualifying: string

  constructor(
    year: number,
    pilot: Driver,
    races: Race[],
    points: number,
    bestFinish: string,
    bestQualifying: string,
  ){
    this.year = year
    this.pilot = pilot
    this.races = races
    this.points = points
    this.bestFinish = bestFinish
    this.bestQualifying = bestQualifying
  }
}
