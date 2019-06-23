import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  cards = [];
  activeCards = [];

  constructor() {
    this.cards = [
      {name: '#card10', id: 10},
      {name: '#card11', id: 11},
      {name: '#card12', id: 12},
      {name: '#card13', id: 13},
      {name: '#card14', id: 14}
    ];
    this.activateAll();
  }

  onClickHecho(idex: number) {
    this.activeCards[idex] = false;
  }

  reponer(){
    this.activateAll();
  }

  activateAll() {
    this.activeCards = this.cards.map(() => true);
  }
}
