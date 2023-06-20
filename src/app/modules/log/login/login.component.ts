import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  public loginForm: FormGroup = this.fb.group({
    email:        ['seed1@test.com', [Validators.required, Validators.email]],
    password:     ['123456', [Validators.required]],
  })

  constructor(

    private fb: FormBuilder, 
    public userService: UserService
    ) {}

  login() {
    const user = { email: this.loginForm.value.email, password: this.loginForm.value.password }
    this.userService.login(user).subscribe((data) => {
      console.log(data);
    })

  }
}