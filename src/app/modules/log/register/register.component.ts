import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email!: string;
  password!: string;
  confirmPassword!: string;
  passwordError!: boolean;

  constructor(public userService: UserService) {}

  register() {

    const user = { email: this.email, password: this.password };
    this.userService.register(user).subscribe((data) => {
      console.log(data);
    })

    console.log(this.email);
    console.log(this.password);
  }
}
