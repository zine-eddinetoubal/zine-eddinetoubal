import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ProfilComponent } from "../profil/profil.component";
import { ScrollService } from '../../core/service/scroll.service';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, ProfilComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    this.scrollService.scrollToAbout$.subscribe(() => {
      this.scrollToAbout();
    });
  }

  scrollToAbout() {
    const aboutSection = document.getElementById('about-me');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
