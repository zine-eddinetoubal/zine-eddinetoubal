import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ProfilComponent } from "../profil/profil.component";
import { ScrollService } from '../../core/service/scroll.service';
import { CurrentJobComponent } from "../currentjob/currentjob.component";
import { SkillsComponent } from "../skills/skills.component";
import { Btn } from '../../core/models/btn.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Config } from '../../core/config/config';
import { ExperiencesComponent } from "../experiences/experiences.component";
import { CvComponent } from '../cv/cv.component';

@Component({
  selector: 'app-home',
  imports: [
    MatButtonModule,
    ProfilComponent,
    CurrentJobComponent,
    SkillsComponent,
    HttpClientModule,
    ExperiencesComponent,
    ExperiencesComponent,
    CvComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  btn!: Btn;

  constructor(private scrollService: ScrollService, private http: HttpClient) {
    this.getBtn().subscribe(data => {
      this.btn = data.btn;
    });
  }

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

  getBtn(): Observable<{ btn: Btn }> {
    const dataUrl = Config.constantsUrl;
    return this.http.get<{ btn: Btn }>(dataUrl);
  }
}
