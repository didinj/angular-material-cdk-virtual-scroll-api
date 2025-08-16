import { Routes } from '@angular/router';
import { VirtualScroll } from './virtual-scroll/virtual-scroll';

export const routes: Routes = [
  { path: '', redirectTo: 'virtual-scroll', pathMatch: 'full' },
  { path: 'virtual-scroll', component: VirtualScroll }
];
