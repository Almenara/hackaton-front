import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { Zone, User } from 'src/app/models/interfaces';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  zonesList$: Observable<Zone[]|null>;
  user$: Observable<User | null>;
  
  updateUser = new BehaviorSubject<User|null>(null);
  updateUser$ = this.updateUser.asObservable();

  constructor(private listService: ListService, private mainService: MainService) {
    //Current user from user.service, to display user features
    // this.user$ = this.updateUser$.pipe(switchMap(() => this.userService.getUser())); o this.userService.user$
    this.user$ = of({ name: 'Jaume', surname: 'Miret', email: 'jaume@a.com', zones: [1], id: 1, points: 5 });
    // this.user$ = this.userService.user$;
    //Zones list-array that will be shown in template
    this.zonesList$ = this.listService.getZonesList();
  }

  // rejectZone(zoneId: number) {
    // this.userService.updateZones(this.userService.user.id, zoneId, 1).subscribe(() => {
    //   this.updateUser.next(null)
  //   });
  // }

  // addZone(zoneId: number) {
  //   updateZones afegirà o traurà zona de user.zones segons si l'últim valor és 0 o 1 
  //   i després actualitzarà amb post
  //       this.userService.updateZones(this.userService.user.id, zoneId, 0).subscribe(() => {
  //     this.updateUser.next(null)
  //   });
  // }

  ngOnInit() {
  }

}
