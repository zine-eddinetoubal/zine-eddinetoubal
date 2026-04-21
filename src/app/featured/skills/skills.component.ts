import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../../core/models/skills.model';
import { Config } from '../../core/config/config';
import { DataPortfolio } from '../../core/models/dataPortfolio.model';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  competences!: Skills;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
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