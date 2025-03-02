import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollToAboutSubject = new Subject<void>();
  private scrollToSkillsSubject = new Subject<void>();

  scrollToAbout$ = this.scrollToAboutSubject.asObservable();
  scrollToSkills$ = this.scrollToSkillsSubject.asObservable();

  triggerScrollToAbout() {
    this.scrollToAboutSubject.next();
  }

  triggerScrollToSkills() {
    this.scrollToSkillsSubject.next();
  }
}
