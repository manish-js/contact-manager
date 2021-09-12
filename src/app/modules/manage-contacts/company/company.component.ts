import { SessionStorageService } from './../../../core/services/session-storage.service';
import { CompanyInterface } from './../../../shared/interfaces/company.interface';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  @Input() companyDetail: CompanyInterface;
  constructor(
    private $router: Router,
    private $sessionStorage: SessionStorageService
  ) { }

  ngOnInit(): void { }

  routeToContactsPage(company: CompanyInterface): void {
    this.$sessionStorage.setCompanyDetails(company);
    this.$router.navigate(['companies/contacts']);
  }

}
