import { Component, computed } from '@angular/core';
import { MenuStateService } from '../../core/services/menu-state.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class Select {
  menuItems = computed(() => this.menuStateService.getItems());

  constructor(public menuStateService: MenuStateService) {}
}
