import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormFieldErrorMessage } from '../shared/modules/validators/errorMessage';
import { mobileNumberValidator } from '../shared/modules/validators/mobileNumberValidation';
import { phoneNumberValidator } from '../shared/modules/validators/phoneNumberValidator';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  isSending = false;

  constructor(
    // private ticketService: TicketService,
    // private dialog: MatDialog,
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

  submitForm(): void {
    this.isSending = true;
    // this.ticketService.newTicket({
    //   issuer: this.form.get('issuer').value,
    //   owner: this.form.get('owner').value,
    //   subject: this.form.get('subject').value,
    //   content: this.form.get('content').value,
    //   metadata: this.form.get('metadata').value,
    //   importanceLevel: this.form.get('importanceLevel').value
    // }).subscribe(
    //   res => {
    //     this.isSending = false;
    //     this.openDialog();
    //   },
    //   error => {
    //     this.isSending = false;
    //     this.snackBar.open('در ذخیره تیکت شما خطایی پیش آمده لطفا مجدد تلاش نمایید', 'باشه', {
    //       duration: 2000,
    //     });
    //   });
  }

  // openDialog(): void {
  //   this.dialog.open(SuccessDialogComponent, {
  //     width: 'auto',
  //   });
  // }

}
