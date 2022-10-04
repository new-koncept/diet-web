import { FormGroup, ValidationErrors, Validators } from "@angular/forms";

export function nutrientsMax100Validator(): Validators {
    const keys = ['protein', 'carbohydrate', 'fat', 'fiber'];
    return (form: FormGroup): ValidationErrors | null => {
        let sum = keys.map( key => form.get(key)?.value || 0).reduce((prev, cur) => prev + cur)
        if (sum > 100 ) {
            return {weightMoreThan100: true};
        }
        return null;
    }
}