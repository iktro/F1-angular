import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RacesService {
  url= "http://ergast.com/api/f1/"

  constructor(private http: HttpClient) {}

  getLastRacesResults() {
    return this.http.get(this.url + "current/last/results.json")
  }

}
