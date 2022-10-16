import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  url= "http://ergast.com/api/f1/"

  constructor(private http: HttpClient) { }

  getDriversByYear(year: string) {
    return this.http.get(this.url +  year + "/2/drivers.json")
  }

}
