import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiEndpoints } from '../shared/api-enspoints';

export interface NewContact {
  id?: any,
  FirstName: string,
  LastName: string,
  MobilePhone: string,
  Email: string,
  WorkPhone: string
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  saveContact(newContact: NewContact) {
    return this.http.post(ApiEndpoints.contact_save, { Contact: newContact }, { params: { apikey: ApiEndpoints.apiKey } });
  }

  getContacts() {
    return this.http.post(ApiEndpoints.contact_search, {}, { params: { apikey: ApiEndpoints.apiKey } }).pipe(
      map((res: any) => res.Response.List)
    );
  }
}
