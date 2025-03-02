import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollToAboutSubject = new Subject<void>();

  scrollToAbout$ = this.scrollToAboutSubject.asObservable();

  triggerScrollToAbout() {
    this.scrollToAboutSubject.next();
  }
}
