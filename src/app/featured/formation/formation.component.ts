import { Component } from '@angular/core';
import { Formation } from '../../core/models/formation.models';
import { Certification } from '../../core/models/certification.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Config } from '../../core/config/config';
import { CommonModule } from '@angular/common';
import { Data } from '@angular/router';
import { DataPortfolio } from '../../core/models/dataPortfolio.model';

@Component({
  selector: 'app-formation',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.scss'
})
export class FormationComponent {
  formations: Formation[] = [];
  certifications: Certification[] = [];
  dataUrl = Config.dataUrl;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getFormations().subscribe(data => {
      this.formations = data.dataPortfolio.formations ?? [];
    });

    this.getCertifications().subscribe(data => {
      this.certifications = data.dataPortfolio.certifications ?? [];
    });
  }

  getFormations(): Observable<{ dataPortfolio: DataPortfolio }> {
    return this.http.get<{ dataPortfolio: DataPortfolio }>(this.dataUrl);
  }

  getCertifications(): Observable<{ dataPortfolio: DataPortfolio }> {
    return this.http.get<{ dataPortfolio: DataPortfolio }>(this.dataUrl);
  }
}