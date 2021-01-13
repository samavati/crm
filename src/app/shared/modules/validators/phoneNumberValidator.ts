import { AbstractControl } from '@angular/forms';
import parsePhoneNumber from 'libphonenumber-js';

export function phoneNumberValidator(number: AbstractControl | null): { [s: string]: boolean } | null {
    if (number?.value === null || number?.value === '') {
        return null;
    }
    const phoneNumber = parsePhoneNumber('' + number?.value);
    if (phoneNumber) {
        if (phoneNumber.isValid()) {
            return null;
        } else {
            return { 'phoneNumberInvalid': true };
        }
    }
    return { 'phoneNumberInvalid': true };
}