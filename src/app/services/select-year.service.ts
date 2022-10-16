import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectYearService {


  private year = new Subject()
  currentYear = this.year.asObservable();

  constructor() {

  }

  updateYear(year: string) {
    this.year.next(year)
  }
 }
