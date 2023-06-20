import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, Subscription, tap} from 'rxjs';
import { User } from '../models/interfaces';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  updateUser = new BehaviorSubject<User|null>(null);
  updateUser$ = this.updateUser.asObservable();
  //afegeixo user com a objecte perquè sigui més intuïtiu i fàcil
  //per a la funció updateNeighborhoods
  currentUser: User | null = null;
  subscUser: Subscription = this.updateUser$.subscribe(res => this.currentUser = res);



  constructor(private http: HttpClient, private router: Router) { }

    login(user: any): Observable<any> {
      const URLService = "https://teamxiii-tech4good-production.up.railway.app/api/auth/login";
      const body = user; 
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      return this.http.post<any>(URLService, body, {headers}).pipe(
        tap(res => {
          //update new user (=log in)
          const newUser: User = {
            name: res.user.name,
            surname: res.user.surName, 
            email: res.user.email,
            neighborhoods: res.user.neighborhood,
            id: res.user.uid,
            points: res.user.points
          }
          this.updateUser.next(newUser);
          localStorage.setItem('user-local', JSON.stringify(res.user));
          this.router.navigate(['/list']);
        })
        );
    }

    register(user: any): Observable<any> {
      
      const URLService = "https://teamxiii-tech4good-production.up.railway.app/api/auth/register";
      const body = user; 
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      return this.http.post<any>(URLService, user, {headers}).pipe(
        tap(res => {
          console.log(res);
          localStorage.setItem('user-local', JSON.stringify(res.user));
          //update new user (=log in)
            const newUser: User = {
            name: res.userCreated.name,
            surname: res.userCreated.surName, 
            email: res.userCreated.email,
            neighborhoods: res.userCreated.neighborhood,
            id: res.userCreated.uid,
            points: res.userCreated.points
          }
          this.updateUser.next(newUser);
          this.router.navigate(['/list']);
          
        })
      );
  }
  
  logout() {
    this.updateUser.next(null);
    localStorage.removeItem('user-local');
    this.router.navigate(['login']);
    console.log("logout");
  }

  getLocalStorageUser() {
    if (!this.currentUser && localStorage.getItem("user-local") != undefined) {
      const localUser = JSON.parse(localStorage.getItem('user-local')!);
      console.log("Hi ha user a localstorage:" + localUser);
      this.updateUser.next(localUser);
      this.router.navigate(['/list']);
    } else {
      console.log("no hi ha user a localstorage");
    }
  }
  
  updateNeighborhoods(neighbourId: number, addOrReject: 0 | 1) { //0 to add, 1 to reject
    if (addOrReject == 0) {
      this.currentUser!.neighborhoods.push(neighbourId);  //aquesta funció només es pot cridar amb user loggejat
    } else {
      let indexToRemove: number = this.currentUser!.neighborhoods.indexOf(neighbourId);
      this.currentUser!.neighborhoods.splice(indexToRemove); //idem
    }
    this.http.post<User>("", this.currentUser!.neighborhoods) //idem
      .subscribe(res => { this.updateUser.next(res) });
  }
}
