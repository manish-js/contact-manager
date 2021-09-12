import { LoginInterface } from './../../shared/interfaces/login.interface';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersInterface } from 'src/app/shared/interfaces/users.interface';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
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

  /**
   * API call to get user detail
   * @param User: LoginInterface
   * @return Observable<UserInterface[]
   */
  loginUser(userFilledData: LoginInterface): Observable<HttpResponse<UsersInterface[]>> {

    let params = new HttpParams();
    params = params.append('firstName', userFilledData.userName);
    params = params.append('email', userFilledData.password);

    return this.http.get<UsersInterface[]>(this.$apiBase + '/users', {
      params,
      observe: 'response'
    });
  }

}
