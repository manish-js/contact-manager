import { NumberOnlyDirective } from './../../shared/directives/number-only.directive';
import { EllipsisDirective } from './../../shared/directives/ellipse.directive';
import { ManageContactsService } from './manage-contacts.service';
import { ManageContactsRoutingModule } from './manage-contacts.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactsManagerComponent } from './contacts-manager/contacts-manager.component';
import { ManageCompaniesService } from './manage-companies.service';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyComponent } from './company/company.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [ContactsManagerComponent, CompaniesComponent,
    CompanyComponent, EllipsisDirective, NumberOnlyDirective, ContactListComponent],
  imports: [
    CommonModule,
    ManageContactsRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [ManageContactsService, ManageCompaniesService]
})
export class ManageContactsModule { }
