import { AuthStatusService } from './../../shared/sevices/auth-status.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isUserLoggedIn: boolean;

  constructor(
    private $router: Router,
    private $authService: AuthStatusService
  ) {}

  ngOnInit(): void {
    this.$authService.curentStatus.subscribe(status => this.isUserLoggedIn = status);
  }

  navigateTo(url): void {
    this.$router.navigate([url]);
  }
 }
