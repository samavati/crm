import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FormFieldErrorMessage {

    constructor() { }

    logger(field: AbstractControl | null, fieldName: string): string {
        if (field?.hasError('required')) {
            return `${fieldName} باید وارد شود`;
        }
        if (field?.hasError('email')) {
            return `${fieldName} وارد شده صحیح نمیباشد`;
        }
        if (field?.hasError('phoneNumberInvalid')) {
            return `${fieldName} وارد شده صحیح نمیباشد`;
        }
        if (field?.hasError('mobileNumberInvalid')) {
            return `${fieldName} وارد شده صحیح نمیباشد`;
        }
        return '';
    }
}
