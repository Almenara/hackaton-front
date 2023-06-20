import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email!: string;
  password!: string;

  loginForm = new FormGroup ({
    email: new FormControl ('', [Validators.required, Validators.email]),
    password: new FormControl ('', [Validators.required, Validators.minLength(8)])
  })

  constructor(public userService: UserService) {}

  login() {
    const user = { email: this.email, password: this.password }
    this.userService.login(user).subscribe((data) => {
      console.log(data);
    })

  }
}