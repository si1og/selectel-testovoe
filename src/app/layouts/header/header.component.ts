import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MenuStateService } from '../../core/services/menu-state.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class Header {
  currentPage: string = '';

  constructor(
    public menuStateService: MenuStateService,
    private router: Router,
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.currentPage = this.getPageTitle(event.urlAfterRedirects);
      });
  }

  private getPageTitle(url: string): string {
    return url === '/select' ? 'Чеклист' : 'Главная';
  }

  readonly getCurrentPage = (): string => this.currentPage;
}
