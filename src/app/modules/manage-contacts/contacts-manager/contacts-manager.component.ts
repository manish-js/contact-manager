import { ContactInterface } from './../../../shared/interfaces/contact.interface';
import { SessionStorageService } from './../../../core/services/session-storage.service';
import { CompanyInterface } from './../../../shared/interfaces/company.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UnsubscribeService } from './../../../core/services/unsubscrib.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ManageContactsService } from '../manage-contacts.service';
import { ContactListComponent } from '../contact-list/contact-list.component';

@Component({
  selector: 'app-contacts-manager',
  templateUrl: './contacts-manager.component.html',
  styleUrls: ['./contacts-manager.component.css']
})
export class ContactsManagerComponent implements OnInit, OnDestroy {
  private $addUserSubscription: Subscription;
  private $getContactsSubsciber: Subscription;
  contactForm: FormGroup;
  companyDetail: CompanyInterface;

  @ViewChild('contactListGrid') contactListGrid: ContactListComponent;

  constructor(
    private $contactService: ManageContactsService,
    private $unsubscriber: UnsubscribeService,
    private fb: FormBuilder,
    private $sessionService: SessionStorageService
  ) { }

  ngOnInit(): void {
    this.contactForm = this.generateForm();
    this.companyDetail = this.$sessionService.getCompanyDetails();
    this.getContactList();
  }

  generateForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  addContact(): void {
    const userDetails = this.contactForm.getRawValue();
    this.$addUserSubscription = this.$contactService.saveUserDetails(userDetails).subscribe(
      res => {
        if (res && res.status === 201 && Array.isArray(res.body)) {
          this.resetForm();
          this.getContactList();
        }
      },
      err => alert('Something went wrong!')
    );
  }

  getContactList(): void {
    const companyId = this.$sessionService.getCompanyDetails().id;
    this.$getContactsSubsciber = this.$contactService.getAllContactsByCompanyId(companyId).subscribe(
      res => {
        if (res && res.body && res.body.length) {
          this.contactListGrid.setDataSource(res.body);
        }
      },
      err => alert('Something went wrong!')
    );
  }

  resetForm(): void {
    this.contactForm.reset();
  }

  ngOnDestroy(): void {
    this.$unsubscriber.unsubscribeObservable(
      [this.$addUserSubscription, this.$getContactsSubsciber]
    );
  }

}
