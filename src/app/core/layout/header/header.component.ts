import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models/interfaces';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user = new BehaviorSubject<User|null>(null);
  updateUser$ = this.user.asObservable();

  constructor(private userService: UserService) {
    }
  // currentUser$: Observable<User>;

  toggleMenu(event: Event) {
    event.stopPropagation();
  }


  get menuIsOpen() {
    return false;
  }

  logOut(){
    this.userService.logout();
  }
}
