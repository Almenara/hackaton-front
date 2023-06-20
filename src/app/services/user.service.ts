import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, Subscription, tap} from 'rxjs';
import { User } from '../models/interfaces';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  updateUser = new BehaviorSubject<User|null>(null);
  updateUser$ = this.updateUser.asObservable();
  //afegeixo user com a objecte perquè sigui més intuïtiu i fàcil
  //per a la funció updateNeighbours
  currentUser: User | null = null;
  subscUser: Subscription = this.updateUser$.subscribe(res => this.currentUser = res);



  constructor(private http: HttpClient) { }

    login(user: any): Observable<any> {
      const URLService = "http://localhost:8080/api/auth/login";
      const body = user; 
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      return this.http.post<any>(URLService, body, {headers}).pipe(
        tap(res=>{
          this.updateUser.next(res)
          localStorage.setItem('auth_token', res.token);
        })
        );
    }

    register(user: any): Observable<any> {
      
      const URLService = "http://localhost:8080/api/auth/register";
      const body = user; 
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      return this.http.post<any>(URLService, user, {headers}).pipe(
        tap(res=>{
          localStorage.setItem('auth_token', res.token);
        })
      );
    }
  
  updateNeighbours(neighbourId: number, addOrReject: 0 | 1) { //0 to add, 1 to reject
    if (addOrReject == 0) {
      this.currentUser!.neighbours.push(neighbourId);  //aquesta funció només es pot cridar amb user loggejat
    } else {
      let indexToRemove: number = this.currentUser!.neighbours.indexOf(neighbourId);
      this.currentUser!.neighbours.splice(indexToRemove); //idem
    }
    this.http.post<User>("", this.currentUser!.neighbours) //idem
      .subscribe(res => { this.updateUser.next(res) });
  }
}
