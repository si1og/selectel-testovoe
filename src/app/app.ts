import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuStateService, MenuItem } from './core/services/menu-state.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(
    private http: HttpClient,
    private menuStateService: MenuStateService,
  ) {
    this.http.get<MenuItem[]>('assets/data/menu-items.json').subscribe((items) => {
      this.menuStateService.setItems(items);
      this.menuStateService.showItems();
    });
  }
}
