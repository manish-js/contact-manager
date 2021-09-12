import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthStatusService {

  private authStatus = new BehaviorSubject(false);
  curentStatus = this.authStatus.asObservable();

  constructor() { }

  changeAuthStatus(authStatus: boolean): void {
    this.authStatus.next(authStatus);
  }
}
