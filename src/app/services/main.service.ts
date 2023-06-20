import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { User } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  // currentUser: User | null = null;
  // private currUser = new BehaviorSubject<User | null>(null);
  // currUser$ = this.currUser.asObservable();
  // subscUser: Subscription = this.currUser$.subscribe(res => this.currentUser = res)

constructor() { }

}
