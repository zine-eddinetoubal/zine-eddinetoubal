import { Component } from '@angular/core';
import { CurrentJob } from '../../core/models/currentJob.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '../../core/config/config';
import { DataPortfolio } from '../../core/models/dataPortfolio.model';

@Component({
  selector: 'app-currentjob',
  imports: [],
  templateUrl: './currentjob.component.html',
  styleUrl: './currentjob.component.scss'
})
export class CurrentJobComponent {
  currentJob?: CurrentJob;

  constructor(private http: HttpClient) {
    this.getCurrentJob().subscribe(data => {
      this.currentJob = data.dataPortfolio.currentJob;
    });
  }

  getCurrentJob(): Observable<{ dataPortfolio: DataPortfolio }> {
    const dataUrl = Config.dataUrl;
    return this.http.get<{ dataPortfolio: DataPortfolio }>(dataUrl);
  }
}
