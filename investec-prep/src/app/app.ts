import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Item {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Investec Prep — Angular from basics to senior');

  // Writable signal: the source of truth for this piece of state.
  protected readonly count = signal(0);

  // Computed signal: derived state, recalculated lazily and memoised.
  protected readonly double = computed(() => this.count() * 2);

  protected readonly items = signal<Item[]>([
    { id: 1, name: 'Standalone components' },
    { id: 2, name: 'Signals' },
    { id: 3, name: 'New control flow' },
  ]);

  protected increment(): void {
    this.count.update((c) => c + 1);
  }

  protected reset(): void {
    this.count.set(0);
  }
}
