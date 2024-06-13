import { Component } from '@angular/core';

import { InfiniteScrollCustomEvent } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  items:any = [];

  constructor() {
  }

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
      const count = this.items.length + 1;
          for (let i = 0; i < 5; i++) {
          this.items.push(`Item ${count + i}`);
      }
  }

  onIonInfinite(ev:any) {
      this.generateItems();
      setTimeout(() => {
          (ev as InfiniteScrollCustomEvent).target.complete();
      }, 500);
  }

}

