import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  private resizeSubject = new Subject<Window>();

  constructor() {
    this.setupResizeListener();
  }

  private setupResizeListener() {
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        this.resizeSubject.next(window); 
      }
    });

    resizeObserver.observe(document.documentElement);
  }
  getResizeObservable(): Observable<Window> {
    return this.resizeSubject.asObservable();
  }
}
