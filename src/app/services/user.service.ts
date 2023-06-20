import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap} from 'rxjs';
import { User } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  updateUser = new BehaviorSubject<User|null>(null);
  updateUser$ = this.updateUser.asObservable();


  constructor(private http: HttpClient) { }

   login(user: any): Observable<any> {
    return this.http.post<User>("", user).pipe(tap(res=>{this.updateUser.next(res)}));
   }

   register(user: any): Observable<any> {
    return this.http.post("", user);
   }
}
