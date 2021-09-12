import { CompanyInterface } from './../../shared/interfaces/company.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SessionStorageService {

  /**
   * Dependencies Injection
   * @param http : HttpClient
   */
  constructor( ) {}

  setCompanyDetails(company: CompanyInterface): void {
      sessionStorage.setItem('company', JSON.stringify(company));
  }

  getCompanyDetails(): CompanyInterface {
      return JSON.parse(sessionStorage.getItem('company'));
  }
}
