import { AuthStatusService } from './shared/sevices/auth-status.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isUserLoggedIn: boolean;

  constructor(
    private $authService: AuthStatusService
    ) { }

  ngOnInit(): void {
    this.checkUserAuthStatus();
  }

  /**
   * Method to check if current user is logged in or not
   */
  checkUserAuthStatus(): void {
    this.$authService.curentStatus.subscribe(status => this.isUserLoggedIn = status);
  }
}
