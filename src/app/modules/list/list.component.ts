import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { Neighbour, User } from 'src/app/models/interfaces';
import { MainService } from 'src/app/services/main.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  neighboursList$: Observable<Neighbour[]|null>;
  user$: Observable<User | null>;
  
  updateUser = new BehaviorSubject<User|null>(null);
  updateUser$ = this.updateUser.asObservable();

  constructor(private listService: ListService, private userService: UserService,
    private mainService: MainService) {
    //Current user from user.service, to display user features
    //UNA D'AQUESTES DUES OPCIONS; CREC QUE LA SEGONA, Q ÉS MÉS SIMPLE, VA BÉ SI
    // A USERSERVICE LA FUNCIÓ UPDATENEIGHBOURS ACTUALITZA L'USUARI
    //LLAVORS TAMBÉ PODRIA SIMPLIFICAR FUNCIONS REJECTNEIGHBOUR I ADDNEIGHBOUR (TREURE EL SUBSCRIBE)
    // this.user$ = this.updateUser$.pipe(switchMap(() => this.userService.updateUser$); o this.userService.user$
    this.user$ = this.userService.updateUser$;
    // this.user$ = of({ name: 'Jaume', surname: 'Miret', email: 'jaume@a.com', neighbours: [1], id: 1, points: 5 });
    //Neighbours list-array that will be shown in template
    this.neighboursList$ = this.listService.getNeighboursList();
  }

  rejectNeighbour(neighbourId: number) {
    this.userService.updateNeighbours(neighbourId, 1)
  }

  addNeighbour(neighbourId: number) {
  //   updateNeighbours afegirà o traurà zona de user.neighbours segons si l'últim valor és 0 o 1 
  //   i després actualitzarà amb post
        this.userService.updateNeighbours(neighbourId, 0)
  }

  ngOnInit() {
  }

}
