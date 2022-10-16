import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChampionshipService {

  url = "http://ergast.com/api/f1/"

  constructor(private http: HttpClient) { }

  getDriverChampionshipByYear(year: string){
    return this.http.get(this.url + year + "/driverStandings.json")
  }

  getConstructorChampionshipByYear(year: string){
    return this.http.get(this.url + year + "/constructorStandings.json")
  }


}
