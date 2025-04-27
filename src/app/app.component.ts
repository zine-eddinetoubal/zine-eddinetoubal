import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { environment } from '../environments/environment';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {

  constructor(private title: Title) {
    this.title.setTitle(environment.siteTitle);
  }

  ngAfterViewInit(): void {
    this.updateFavicon(environment.faviconPath);
  }

  updateFavicon(faviconPath: string) {
    const link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (link) {
      link.href = faviconPath;
      link.type = 'image/jpg';
    }
  }
}
