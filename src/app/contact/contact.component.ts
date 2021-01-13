import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  isSending = false;

  constructor(
    // private ticketService: TicketService,
    // private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  form: FormGroup = new FormGroup({
    issuer: new FormControl('ticketing', Validators.required),
    owner: new FormControl('customer@example.com', Validators.required),
    subject: new FormControl(null, Validators.required),
    content: new FormControl(null, Validators.required),
    metadata: new FormControl(null),
    importanceLevel: new FormControl(null, Validators.required)
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
