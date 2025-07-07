import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '../../core/config/config';
import { Projets } from '../../core/models/projets.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
    imports: [CommonModule],
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projets: Projets[] = [];

  constructor(private http: HttpClient) {
    this.getProjets().subscribe(data => {
      this.projets = data.projets;
    });
  }

  getProjets(): Observable<{ projets: Projets[] }> {
    return this.http.get<{ projets: Projets[] }>(Config.dataUrl);
  }
}
