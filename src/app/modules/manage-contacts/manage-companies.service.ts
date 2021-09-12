import { CompanyInterface } from './../../shared/interfaces/company.interface';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ManageCompaniesService {

  private $apiBase: string;
  private $companies: CompanyInterface[];

  /**
   * Dependencies Injection
   * @param http : HttpClient
   */
  constructor(
    private http: HttpClient
  ) {
    this.$apiBase = environment.BASE_API;
  }

  /**
   * API call to get user detail
   * @param User: LoginInterface
   * @return Observable<UserInterface[]
   */
    getAllCompanies(): Observable<HttpResponse<CompanyInterface[]>> {
    return this.http.get<CompanyInterface[]>(this.$apiBase + '/companies', {
      observe: 'response'
    });
  }

  /**
   * Setting all companies fo later use
   * @param companiesList: CompanyInterface[]
   */
  companiesListUpdate(companiesList: CompanyInterface[]): void {
    this.$companies = companiesList;
  }

  getCompanies(): CompanyInterface[] {
    return this.$companies;
  }

}
