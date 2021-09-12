import { ContactInterface } from './../../shared/interfaces/contact.interface';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersInterface } from 'src/app/shared/interfaces/users.interface';

@Injectable()
export class ManageContactsService {

  private $apiBase: string;

  /**
   * Dependencies Injection
   * @param http : HttpClient
   */
  constructor(
    private http: HttpClient
  ) {
    this.$apiBase = environment.BASE_API;
  }

  saveUserDetails(userDetails: UsersInterface): Observable<HttpResponse<UsersInterface>> {
    return this.http.post<UsersInterface>(
      this.$apiBase + 'contacts', userDetails, {
        observe: 'response'
      });
  }

  getAllContactsByCompanyId(companyId): Observable<HttpResponse<UsersInterface[]>> {
    let params = new HttpParams();
    params = params.append('companyId', companyId);
    return this.http.get<UsersInterface[]>(this.$apiBase + 'users', {
      params,
      observe: 'response'
    });
  }
}
