import { Component } from '@angular/core';
import { Footer } from '../../../core/models/footer.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Config } from '../../../core/config/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footer?: Footer;

  constructor(private http: HttpClient, private router: Router) {
    this.getFooter().subscribe(data => {
      this.footer = data.footer;
    });
  }

  getFooter(): Observable<{ footer: Footer }> {
    const dataUrl = Config.constantsUrl;
    return this.http.get<{ footer: Footer }>(dataUrl);
  }

  navigateToMentionsLegales() {
    this.router.navigate(['/mentions-legales']);
  }
}
