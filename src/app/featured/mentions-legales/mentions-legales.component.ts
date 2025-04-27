import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-mentions-legales',
  imports: [],
  templateUrl: './mentions-legales.component.html',
  styleUrl: './mentions-legales.component.scss'
})
export class MentionsLegalesComponent {
  name: string;
  adresse: string;
  email: string;
  website: string;

  constructor() {
    this.name = environment.siteOwner;
    this.adresse = environment.adresse;
    this.email = environment.contactEmail;
    this.website = environment.website;
  }
}
