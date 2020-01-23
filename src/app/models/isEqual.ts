import { FormGroup } from '@angular/forms';

// validateur personnalisé pour vérification password dans registerForm
export function isEqual(controlName: string, equalControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const equalControl = formGroup.controls[equalControlName];

        if (equalControl.errors && !equalControl.errors.mustMatch) {
            //return si un autre validateur a deja trouve une erreur 
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== equalControl.value) {
            equalControl.setErrors({ mustMatch: true });
        } else {
            equalControl.setErrors(null);
        }
    }
}