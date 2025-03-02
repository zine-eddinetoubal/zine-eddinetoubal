import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../../core/service/scroll.service';
@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = false;

  constructor(private scrollService: ScrollService) {}
  
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollToAbout() {
    this.scrollService.triggerScrollToAbout();
  }
}