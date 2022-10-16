import { Constructor } from "./constructor"
import { Driver } from "./driver"

export class Result {

  grid: number
  laps: number
  points: number
  position: number
  Constructor: Constructor
  Driver: Driver

  constructor(
    grid: number,
    laps: number,
    points: number,
    position: number,
    constructor_: Constructor,
    driver: Driver,
  ){
    this.grid = grid,
    this.laps = laps
    this.points = points
    this.position = position
    this.Constructor = constructor_
    this.Driver = driver
  }

}
