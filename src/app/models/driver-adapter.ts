import { Injectable } from "@angular/core";
import { ModelAdapter } from "../contracts";
import { Driver } from "./driver";

@Injectable({
  providedIn: 'root'
})
export class DriverAdapter implements ModelAdapter<any, Driver[]> {

  adapt(item: any): Driver[] {
    let driversList: Driver[] = []
    let driverItems = item.MRData.DriverTable.Drivers
    for(let driver of driverItems){
      driversList.push(
        new Driver(
          driver?.code,
          driver?.dateOfBirth,
          driver?.familyName,
          driver?.givenName,
          driver?.nationality,
          driver?.permanentNumber
        )
      );
    }
    return driversList
  }
}
