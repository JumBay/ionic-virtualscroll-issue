import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  template: `
  <ion-header>
  <ion-toolbar>
    <ion-title>
      Tab One
    </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-virtual-scroll [items]="items">
    <ion-item *virtualItem="let item">
      <div>{{item}}</div>
    </ion-item>
  </ion-virtual-scroll>
</ion-content>
  `,

  styles: [
    `div {
      background: rgb(59, 59, 199);
      width: 60px;
      height: 60px;
      text-align: center;
      color: white;
    }`
  ]
})
export class Tab2Page {

  items = [];

  constructor() {
    for (let i = 0; i < 1000; i++) {
      this.items.push(i);
    }
  }

}
