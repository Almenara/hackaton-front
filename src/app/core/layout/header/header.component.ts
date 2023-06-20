import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  // constructor() {
  //   currentUser$
  // }

  // currentUser$: Observable<User>;

  toggleMenu(event: Event) {
    event.stopPropagation();
  }


  get menuIsOpen() {
    return false;
  }

  logOut(){
    
  }
}
