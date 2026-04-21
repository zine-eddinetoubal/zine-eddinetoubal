import { Component } from '@angular/core';
import { Profil } from '../../core/models/profil.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '../../core/config/config';
import { CommonModule } from '@angular/common';
import { LineBreakPipe } from '../../helper/lineBreakPipe';
import { Constants } from '../../core/models/constants.model';

@Component({
  selector: 'app-profil',
  imports: [HttpClientModule, CommonModule, LineBreakPipe],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss'
})
export class ProfilComponent {
  profil?: Profil;

  constructor(private http: HttpClient) {
    this.getProfil().subscribe(data => {
      this.profil = data.constants.profil;
    });
  }

  getProfil(): Observable<{ constants: Constants }> {
    const dataUrl = Config.dataUrl;
    return this.http.get<{ constants: Constants }>(dataUrl);
  }
}