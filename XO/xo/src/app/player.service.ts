import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  showResult() {

    return "x,O";
  }

  constructor() { }
}
