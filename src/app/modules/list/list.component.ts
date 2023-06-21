import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { Neighborhood, User } from 'src/app/models/interfaces';
import { MainService } from 'src/app/services/main.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  updateNeighborhoodsList = new BehaviorSubject<any[] | null>([]);
  updateNeighborhoodsList$ = this.updateNeighborhoodsList.asObservable();
  neighborhoodsList: any[] | null = [];
  user$: Observable<User | null>;
  user;
  
  updateUser = new BehaviorSubject<User|null>(null);
  updateUser$ = this.updateUser.asObservable();

  constructor(private listService: ListService, private userService: UserService,
    private mainService: MainService) {
    //Current user from user.service, to display user features
    //UNA D'AQUESTES DUES OPCIONS; CREC QUE LA SEGONA, Q ÉS MÉS SIMPLE, VA BÉ SI
    // A USERSERVICE LA FUNCIÓ UPDATEneighborhood ACTUALITZA L'USUARI
    //LLAVORS TAMBÉ PODRIA SIMPLIFICAR FUNCIONS REJECTneighborhood I ADDneighborhood (TREURE EL SUBSCRIBE)
    // this.user$ = this.updateUser$.pipe(switchMap(() => this.userService.updateUser$); o this.userService.user$
    this.user$ = this.userService.updateUser$;
    this.user = this.userService.currentUser;
    // this.user$ = of({ name: 'Jaume', surname: 'Miret', email: 'jaume@a.com', neighborhoods: [1], id: 1, points: 5 });
    //Neighbours list-array that will be shown in template
    this.listService.getNeighborhoodsList().subscribe(res => {
      this.neighborhoodsList = res.hoods
      this.neighborhoodsList?.map((hood: any) =>{
          return hood.totalScore = 50 - Math.round(hood.totalScore);
      })
    })
  }

  checkNeighborhoodCode(nbCode: number) {
    return this.user!.neighborhoods.includes(nbCode.toString());
  }

  logout() {
    this.userService.logout();
  }

  rejectNeighborhood(neighborhoodId: number, points: number) {
    this.userService.updateNeighborhoods(neighborhoodId, points, 1);
  }

  addNeighborhood(neighborhoodId: number, points: number) {
  //   updateNeighbours afegirà o traurà zona de user.neighbours segons si l'últim valor és 0 o 1 
  //   i després actualitzarà amb post
    this.userService.updateNeighborhoods(neighborhoodId, points, 0);
  }

  ngOnInit() {
  }

}
