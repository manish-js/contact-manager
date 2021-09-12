import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorService {
  private errors = new BehaviorSubject<string[]>([]);

  constructor() { }

  showError(error: string): void {
    alert(error);
  }
}
