import { Component } from '@angular/core';
import { Experience, Experiences } from '../../core/models/experiences.model';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '../../core/config/config';

@Component({
  selector: 'app-experiences',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  experiences: Experience[] = [];

  constructor(private http: HttpClient) {
    this.getExperiences().subscribe(data => {
      this.experiences = data.experiences;
    });
  }

  getExperiences(): Observable<Experiences> {
    const dataUrl = Config.dataUrl;
    return this.http.get<Experiences>(dataUrl);
  }

  transform(value: string): string {
    return value ? value.replace(/\n/g, '<br>') : '';
  }
}