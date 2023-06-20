import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private userService: UserService){}

  title = 'hackaton-front';

  ngOnInit() {
    this.userService.getLocalStorageUser();
  }

}
