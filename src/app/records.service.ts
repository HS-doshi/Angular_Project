import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  info1: string[] = ["Heet Doshi", '20', "diyu@gmail.com"]
  info2: string[] = ["Diyu Doshi", "21", "vishudhhims@gmail.com"]
  info3: string[] = ["Shefali Doshi", "44", "shefalisd@gmai.com"]

  getinfo1(): string[] {
    return this.info1
  }
  getinfo2(): string[] {
    return this.info2
  }
  getinfo3(): string[] {
    return this.info3
  }
  constructor() { }
}
