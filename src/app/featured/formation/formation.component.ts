import { Component } from '@angular/core';
import { Formation } from '../../core/models/formation.models';
import { Certification } from '../../core/models/certification.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Config } from '../../core/config/config';
import { CommonModule } from '@angular/common';

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
      this.formations = data.formations;
    });

    this.getCertifications().subscribe(data => {
      this.certifications = data.certifications;
    });
  }

  getFormations(): Observable<{ formations: Formation[] }> {
    return this.http.get<{ formations: Formation[] }>(this.dataUrl);
  }

  getCertifications(): Observable<{ certifications: Certification[] }> {
    return this.http.get<{ certifications: Certification[] }>(this.dataUrl);
  }
}