import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { Observable, of } from 'rxjs';
import { Zone, User } from 'src/app/models/interfaces';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  zonesList$: Observable<Zone[]|null>;
  user$: Observable<User|null>;

  constructor(private listService: ListService, private mainService: MainService) {
    this.user$ = of({ name: 'Jaume', surname: 'Miret', email: 'jaume@a.com', zones: [1], id: 1, points: 5 });
    // this.user$ = this.mainService.getUser();
    this.zonesList$ = this.listService.getZonesList();
  }


  ngOnInit() {
  }

}
