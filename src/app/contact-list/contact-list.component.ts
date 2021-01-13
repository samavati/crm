import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ContactService } from '../contact/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  displayedColumns: string[] = ['DisplayName', 'MobilePhone', 'Email'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  isSeraching = true;

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      if (this.dataSource && this.paginator) this.dataSource.paginator = this.paginator;
      this.isSeraching = false
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
