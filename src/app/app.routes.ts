import { Routes } from '@angular/router';
import { Home } from './features/home/home.component';
import { Select } from './features/select/select.component';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'select', component: Select },
];
