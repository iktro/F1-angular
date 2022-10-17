import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectYearService {


  currentYear: Subject<number>

  constructor() {
    this.currentYear = new Subject<number>()
  }

  updateYear(year: number) {
    return this.currentYear.next(year)
  }
 }
