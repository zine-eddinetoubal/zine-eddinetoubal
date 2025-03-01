import { Routes } from '@angular/router';
import { HomeComponent } from './featured/home/home.component';
import { ContactComponent } from './featured/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: HomeComponent }
];
