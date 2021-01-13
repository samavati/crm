import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormFieldErrorMessage } from '../shared/modules/validators/errorMessage';
import { mobileNumberValidator } from '../shared/modules/validators/mobileNumberValidation';
import { phoneNumberValidator } from '../shared/modules/validators/phoneNumberValidator';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  isSending = false;

  constructor(
    private contactService: ContactService,
    private snackBar: MatSnackBar,
    public errMessage: FormFieldErrorMessage
  ) { }

  form: FormGroup = new FormGroup({
    name: new FormControl(null),
    familyName: new FormControl(null, Validators.required),
    mobile: new FormControl(null, mobileNumberValidator),
    coPhone: new FormControl(null, phoneNumberValidator),
    email: new FormControl(null, Validators.email),
  });

  submitForm(formDirective: FormGroupDirective): void {
    this.isSending = true;
    this.contactService.saveContact({
      FirstName: this.form.get('name')?.value,
      LastName: this.form.get('familyName')?.value,
      MobilePhone: this.form.get('mobile')?.value,
      WorkPhone: this.form.get('coPhone')?.value,
      Email: this.form.get('email')?.value
    }).subscribe(
      res => {
        this.isSending = false;
        this.snackBar.open('شخص مورد نظر با موفقیت ثبت شد', 'باشه', {
          duration: 2000,
        });
        this.form.reset();
        formDirective.resetForm();
      },
      error => {
        this.isSending = false;
        this.snackBar.open('در ذخیره درخواست شما خطایی پیش آمده لطفا مجدد تلاش نمایید', 'باشه', {
          duration: 2000,
        });
      });
  }

}
