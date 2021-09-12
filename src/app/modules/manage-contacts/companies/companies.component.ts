import { CompanyInterface } from './../../../shared/interfaces/company.interface';
import { UnsubscribeService } from 'src/app/core/services/unsubscrib.service';
import { FormGroup } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ManageCompaniesService } from '../manage-companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit, OnDestroy {
  private companiesSubscriber$: Subscription;
  companies: CompanyInterface[];

  constructor(
    private $companiesService: ManageCompaniesService,
    private $unsubscriber: UnsubscribeService,
  ) { }

  ngOnInit(): void {
    this.getAllCompanies();
  }

  private getAllCompanies(): void {
    this.companiesSubscriber$ = this.$companiesService.getAllCompanies().subscribe(
      res => {
        if (res && Array.isArray(res.body) && (res.body.length)) {
          this.$companiesService.companiesListUpdate(res.body);

          this.companies = this.$companiesService.getCompanies();
        }
      },
      err => alert('Something went wrong!')
    );
  }

  ngOnDestroy(): void {
    this.$unsubscriber.unsubscribeObservable(
      [ this.companiesSubscriber$ ]
    );
  }

}
