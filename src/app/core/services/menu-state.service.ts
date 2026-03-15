import { Injectable, signal, computed } from '@angular/core';

export interface MenuItem {
  id: number;
  name: string;
  value: number;
  selected: boolean;
}

@Injectable({ providedIn: 'root' })
export class MenuStateService {
  private items = signal<MenuItem[]>([]);

  setItems(items: MenuItem[]) {
    this.items.set(items);
  }

  toggleItem(id: number) {
    this.items.update((items) =>
      items.map((item) => (item.id === id ? { ...item, selected: !item.selected } : item)),
    );
  }

  readonly selectedItemsNumber = computed(() => {
    return this.items().filter((item) => item.selected).length;
  });

  readonly selectedItemsTotalValue = computed(() => {
    return this.items()
      .filter((item) => item.selected)
      .reduce((sum, item) => sum + item.value, 0);
  });

  readonly getItems = computed(() => {
    return this.items();
  });

  showItems() {
    console.log('Items in the state service:');
    this.items().forEach((item) => {
      console.log(item);
    });
  }
}
