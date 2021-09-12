import { UsersInterface } from './../../../shared/interfaces/users.interface';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator, PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, AfterViewInit {

  dataSource: MatTableDataSource<UsersInterface>;
  gridData: UsersInterface[] = [] as UsersInterface[];
  displayedColumns = ['id', 'firstName', 'email', 'age'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.initialiseDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  /**
   * Method to initialise Data Source
   */
   initialiseDataSource(): void {
    this.dataSource = new MatTableDataSource<UsersInterface>(this.gridData);
  }

  setDataSource(contactList: UsersInterface[]): void {
    this.gridData = contactList;
    this.dataSource.data = this.gridData;
  }
}
