export class Driver{

  code: string
  dateOfBirth: Date
  familyName: string
  givenName: string
  nationality: string
  permanentNumber: string

  constructor(
    code: string,
    dateOfBirth: Date,
    familyName: string,
    givenName: string,
    nationality: string,
    permanentNumber: string,
  ){
    this.code = code
    this.dateOfBirth = dateOfBirth
    this.familyName = familyName
    this.givenName = givenName
    this.nationality = nationality
    this.permanentNumber = permanentNumber
  }

}
