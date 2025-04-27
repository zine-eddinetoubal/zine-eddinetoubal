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
import { ContactComponent } from "../contact/contact.component";
import { environment } from '../../../environments/environment';
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
    CvComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  btn!: Btn;
  name: string;

  constructor(private scrollService: ScrollService, private http: HttpClient) {
    this.getBtn().subscribe(data => {
      this.btn = data.btn;
    });
    this.name = environment.siteOwner;
  }

  ngOnInit() {
    this.scrollService.scrollToAbout$.subscribe(() => {
      this.scrollToAbout();
    });

    this.scrollService.scrollToExperiences$.subscribe(() => {
      this.scrollToExperiences();
    });

    this.scrollService.scrollToContact$.subscribe(() => {
      this.scrollToContact();
    });
  }

  scrollToAbout() {
    const aboutSection = document.getElementById('about-me');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }


  scrollToContact() {
    const skillsSection = document.getElementById('contact');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToExperiences() {
    const skillsSection = document.getElementById('experiences');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  getBtn(): Observable<{ btn: Btn }> {
    const dataUrl = Config.constantsUrl;
    return this.http.get<{ btn: Btn }>(dataUrl);
  }
}
