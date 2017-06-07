import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'lp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLoginModel: FormGroup;

  constructor(
    private _fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.formLoginModel = this._fb.group({
      email: ['', [Validators.required, Validators.minLength(5), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), this.passwordValidator]]
    });
  }


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
