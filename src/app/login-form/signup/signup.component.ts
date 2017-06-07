import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'lp-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public formSignupModel: FormGroup;

  constructor(
    private _fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.formSignupModel = this._fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4), this.nameValidator]],
      lastName: ['', [Validators.required, Validators.minLength(4), this.nameValidator]],
      email: ['', [Validators.required, Validators.minLength(5), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), this.passwordValidator]]
      // passwordGroup: this._fb.group({
      //   password: ['', [Validators.required, Validators.minLength(4)]],
      //   pconfirm: ['', [Validators.required, Validators.minLength(4)]]
      // }, {
      //   // asyncValidator: this.asyncEqualValidator
      // })
    });
  }

  public nameValidator(control: FormControl): { [key: string]: boolean } {
    const value: string = control.value || '';
    const valid: boolean = /^[a-zA-Z]*$/.test(value);
    return (valid ? null : { nospecial: true })
  }

  //TODO: Вынести в отдельный класс CustomValidators

  /**
   * (?=.*\d)		    #   must contains one digit from 0-9
   * (?=.*[a-z])		#   must contains one lowercase characters
   * (?=.*[A-Z])		#   must contains one uppercase characters
   * .{6,20}	      #   length at least 6 characters and maximum of 20
   * @param {FormControl} control
   * @returns {{ [key: string]: boolean }}
   *
   * @memberof LoginComponent
   */
  public passwordValidator(control: FormControl): { [key: string]: boolean } {
    const value: string = control.value || '';
    const valid: boolean = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20})/.test(value);
    return (valid ? null : { nospecial: true })
  }
}
