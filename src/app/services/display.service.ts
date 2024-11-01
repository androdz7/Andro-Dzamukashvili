import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor() { }

  displayArray(a: any[]) {
    for (let u of a) {
      console.log(u);
    }
    console.log("Array is displayed by Display service");
  }
}
