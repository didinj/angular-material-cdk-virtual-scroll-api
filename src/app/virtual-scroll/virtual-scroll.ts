import { Component } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-virtual-scroll',
  imports: [ScrollingModule, MatCardModule, MatListModule, MatIconModule],
  templateUrl: './virtual-scroll.html',
  styleUrl: './virtual-scroll.scss'
})
export class VirtualScroll {
  items = Array.from({ length: 10000 }).map((_, i) => `Item #${i}`);
}
