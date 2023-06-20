import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  

  
  public registerForm: FormGroup = this.fb.group({
    name:           ['Peter',           [Validators.required]],
    surName:        ['Parker',          [Validators.required]],
    email:          ['seed1@test.com',  [Validators.required, Validators.email]],
    password:       ['123456',          [Validators.required, Validators.minLength(6)]],
    confirmPassword:['123456',          [Validators.required, Validators.minLength(6)]],
  })


  constructor(
    private fb: FormBuilder, 
    public userService: UserService
    ) {}

  register() {

    const user = { 
      name: this.registerForm.value.name, 
      surName: this.registerForm.value.surName,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      neighborhood: [],
      confirmPassword: this.registerForm.value.password 
    };
    this.userService.register(user).subscribe((data) => {
      
    })
  }
}
