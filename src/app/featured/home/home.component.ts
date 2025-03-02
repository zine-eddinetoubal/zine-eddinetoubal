import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ProfilComponent } from "../profil/profil.component";
import { ScrollService } from '../../core/service/scroll.service';
import { CurrentJobComponent } from "../currentjob/currentjob.component";
import { SkillsComponent } from "../skills/skills.component";

@Component({
  selector: 'app-home',
  imports: [
    MatButtonModule,
    ProfilComponent,
    CurrentJobComponent,
    SkillsComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    this.scrollService.scrollToAbout$.subscribe(() => {
      this.scrollToAbout();
    });

    this.scrollService.scrollToSkills$.subscribe(() => {
      this.scrollToSkills();
    });
  }

  scrollToAbout() {
    const aboutSection = document.getElementById('about-me');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToSkills() {
    const skillsSection = document.getElementById('competences');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
