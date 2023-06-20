import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  toggleMenu(event: Event) {
    event.stopPropagation();
  }


  get menuIsOpen() {
    return false;
  }

  logOut(){
    
  }
}
