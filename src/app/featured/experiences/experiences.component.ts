import { Component } from '@angular/core';
import { Experiences } from '../../core/models/experiences.model';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '../../core/config/config';
import { DataPortfolio } from '../../core/models/dataPortfolio.model';

@Component({
  selector: 'app-experiences',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  experiences: Experiences[] = [];

  constructor(private http: HttpClient) {
    this.getExperiences().subscribe(data => {
      this.experiences = data.dataPortfolio.experiences ?? [];
    });
  }

  getExperiences(): Observable<{ dataPortfolio: DataPortfolio }> {
    const dataUrl = Config.dataUrl;
    return this.http.get<{ dataPortfolio: DataPortfolio }>(dataUrl);
  }

  transform(value: string): string {
    return value ? value.replace(/\n/g, '<br>') : '';
  }
}