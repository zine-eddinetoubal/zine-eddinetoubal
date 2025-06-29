import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { environment } from '../environments/environment';
import { Title } from '@angular/platform-browser';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor(
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.title.setTitle(environment.siteTitle);
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateFavicon(environment.faviconPath);
    }
  }

  private updateFavicon(faviconPath: string): void {
    let link = this.document.querySelector<HTMLLinkElement>("link[rel*='icon']");
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'icon');
      this.document.head.appendChild(link);
    }
    link.href = faviconPath;
    link.type = 'image/x-icon';
  }
}
