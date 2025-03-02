import { Component } from '@angular/core';
import { Profil } from '../../core/models/profil.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '../../core/config/config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profil',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss'
})
export class ProfilComponent {
  profil!: Profil; 

  constructor(private http: HttpClient) { 
    this.getProfil().subscribe(data => {
      this.profil = data.profil; 
    });
  }

  getProfil(): Observable<{ profil: Profil }> {
    const jsonUrl = Config.jsonUrl;
    return this.http.get<{ profil: Profil }>(jsonUrl); 
  }
}