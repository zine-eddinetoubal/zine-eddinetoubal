import { Routes } from '@angular/router';
import { HomeComponent } from './featured/home/home.component';
import { ContactComponent } from './featured/contact/contact.component';
import { MentionsLegalesComponent } from './featured/mentions-legales/mentions-legales.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'mentions-legales', component: MentionsLegalesComponent },
    { path: '**', component: HomeComponent }
];
