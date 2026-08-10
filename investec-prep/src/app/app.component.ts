import { Component } from '@angular/core';

interface Item {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Investec Prep — Angular 16, basics to senior';

  count = 0;

  items: Item[] = [
    { id: 1, name: 'NgModules & component anatomy' },
    { id: 2, name: 'Template syntax & bindings' },
    { id: 3, name: 'Change detection (zone.js)' },
  ];

  // Derived state as a getter: recalculated on every change-detection pass.
  // (Contrast with signals' computed(), which is memoised — Lesson 4.)
  get double(): number {
    return this.count * 2;
  }

  increment(): void {
    this.count++;
  }

  reset(): void {
    this.count = 0;
  }

  // trackBy tells *ngFor how to identify rows so the DOM isn't rebuilt
  // when the array reference changes but the entities are the same.
  trackById(_index: number, item: Item): number {
    return item.id;
  }
}
