import { Circuit } from "./circuit";
import { Result } from "./result";

export class Race{

  date: Date
  Circuit: Circuit
  results: Result[]
  round: number
  raceName: string


  constructor(
    date: Date,
    circuit: Circuit,
    results: Result[],
    round: number,
    raceName: string,
  ){
    this.date = date,
    this.Circuit = circuit,
    this.results = results
    this.round = round,
    this.raceName = raceName
  }


}
