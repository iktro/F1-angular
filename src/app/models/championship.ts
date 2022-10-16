import { Constructor } from "./constructor";
import { Driver } from "./driver";

export class Championship{
  year: number
  driver: Driver | undefined
  Constructor: Constructor
  points: number
  wins: number
  position: number

  constructor(
    year: number,
    driver: Driver | undefined,
    points: number,
    wins: number,
    Constructor: Constructor,
    position: number
  ){
    this.year = year
    this.driver = driver
    this.Constructor = Constructor
    this.points = points
    this.wins = wins
    this.position = position
  }
}
