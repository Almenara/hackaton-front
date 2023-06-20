import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;

  constructor() {}

  register() {
    console.log(this.email);
    console.log(this.password);
  }
}
