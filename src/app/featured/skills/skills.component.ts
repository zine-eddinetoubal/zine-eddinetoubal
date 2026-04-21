import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../../core/models/skills.model';
import { Config } from '../../core/config/config';
import { Data } from '@angular/router';
import { DataPortfolio } from '../../core/models/dataPortfolio.model';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  competences!: Skills;

  constructor(private http: HttpClient) {
    this.getCompetences().subscribe(data => {
      this.competences = data.dataPortfolio.competences!;
    });
  }

  getCompetences(): Observable<{ dataPortfolio: DataPortfolio }> {
    const dataUrl = Config.dataUrl;
    return this.http.get<{ dataPortfolio: DataPortfolio }>(dataUrl);
  }

  objectKeys(obj: Record<string, number>): string[] {
    return obj ? Object.keys(obj) : [];
  }

}
