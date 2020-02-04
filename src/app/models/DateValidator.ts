import {AbstractControl} from '@angular/forms';
import * as moment from 'moment';

//https://stackoverflow.com/questions/51185265/angular-5-validation-date-field-using-form-builder
export class DateValidator {
    static dateValidator(AC: AbstractControl) {
      if (AC && AC.value && !moment(AC.value, 'DD-MM-YYYY',true).isValid()) {
        return {'dateValidator': true};
      }
      return null;
    }
  }

