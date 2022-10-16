import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeasonsService {
  url= "http://ergast.com/api/f1/"

  constructor(private http: HttpClient) { }

  getAllSeasons(){
    return this.http.get(this.url + "seasons.json?limit=90")
  }

}
