import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { Neighborhood } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  
  constructor(private http: HttpClient) { }

  getNeighborhoodsList(): Observable<Neighborhood[]>{
    // return this.http.get('');
    return of([
      { name: 'Nou Barris', points: 15, id: 0, x: 0, y: 0 },
      { name: 'Les Corts', points: 5, id: 1, x: 0, y: 0 },
      { name: 'Sants', points: 10, id: 2, x: 0, y: 0 },
      { name: 'Sants', points: 10, id: 2, x: 0, y: 0 },
      { name: 'Sants', points: 10, id: 2, x: 0, y: 0 },
      { name: 'Sants', points: 10, id: 2, x: 0, y: 0 },
      { name: 'Sants', points: 10, id: 2, x: 0, y: 0 },
    ]);
  }

}