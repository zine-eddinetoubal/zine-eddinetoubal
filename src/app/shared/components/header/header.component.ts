import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../../core/service/scroll.service';
import { Header } from '../../../core/models/header.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Config } from '../../../core/config/config';
import { Router } from '@angular/router';
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
  header!: Header;

  constructor(private scrollService: ScrollService, private http: HttpClient, private router: Router) {
    this.getHeader().subscribe(data => {
      this.header = data.header;
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollToAbout() {
    this.scrollService.triggerScrollToAbout();
  }

  scrollToHome() {
    this.router.navigate(['/']);
  }

  navigateToFormation() {
    this.router.navigate(['/formation']);
  }

  scrollToContact() {
    this.scrollService.triggerScrollToContact();
  }

  scrollToExperiences() {
    this.scrollService.triggerScrollToExperiences();
  }

  getHeader(): Observable<{ header: Header }> {
    const dataUrl = Config.constantsUrl;
    return this.http.get<{ header: Header }>(dataUrl);
  }
}