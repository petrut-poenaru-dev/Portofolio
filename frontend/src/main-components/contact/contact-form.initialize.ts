import {FormControl, FormGroup, Validators} from "@angular/forms";

export interface ContactFormGroup {
  name: FormControl<string>;
  email: FormControl<string>;
  message: FormControl<string>;
}

export class ContactFormInitializeClass{
  public static buildContactFormGroup(): FormGroup<ContactFormGroup> {
    return new FormGroup<ContactFormGroup>({
      name: new FormControl<string>('' ,{ nonNullable: true }),
      email: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.email],
      }),
      message: new FormControl<string>('' , { nonNullable: true })
    });
  }
}
