import { AuthStatusService } from './../../shared/sevices/auth-status.service';
import { LoginService } from './../../core/services/login.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginInterface } from 'src/app/shared/interfaces/login.interface';
import { Subscription } from 'rxjs';
import { UnsubscribeService } from 'src/app/core/services/unsubscrib.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  private loginSubscription$: Subscription;

  constructor(
    private fb: FormBuilder,
    private $loginService: LoginService,
    private $unsubsciber: UnsubscribeService,
    private $router: Router,
    private $authStatus: AuthStatusService
  ) { }

  ngOnInit(): void {

    this.loginForm = this.generateForm();
  }

  generateForm(): FormGroup {
    return this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  /**
   * Fetching user data and calling service
   * Setting use auth status based on login auth API
   */
  login(): void {
    const userEnterdData: LoginInterface = this.loginForm.getRawValue();
    this.loginSubscription$ = this.$loginService.loginUser(userEnterdData).subscribe(
      res => {
        const userAuthStatus = (Array.isArray(res.body) && (res.body).length) ? true : false;
        if (userAuthStatus) {
          this.$authStatus.changeAuthStatus(true);
          this.$router.navigate(['/companies']);
        } else {
          alert('Invalid Credentials!');
        }
      },
      err => alert('Something went wrong!')
    );
  }

  ngOnDestroy(): void {
    this.$unsubsciber.unsubscribeObservable(
      [this.loginSubscription$]
    );
  }
}
