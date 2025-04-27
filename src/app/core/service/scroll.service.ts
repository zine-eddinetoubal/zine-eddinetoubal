import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollToAboutSubject = new Subject<void>();
  private scrollToContactSubject = new Subject<void>();
  private scrollToExperiencesSubject = new Subject<void>();

  scrollToAbout$ = this.scrollToAboutSubject.asObservable();
  scrollToContact$ = this.scrollToContactSubject.asObservable();
  scrollToExperiences$ = this.scrollToExperiencesSubject.asObservable();

  triggerScrollToAbout() {
    this.scrollToAboutSubject.next();
  }

  triggerScrollToContact() {
    this.scrollToContactSubject.next();
  }

  triggerScrollToExperiences() {
    this.scrollToExperiencesSubject.next();
  }
}
