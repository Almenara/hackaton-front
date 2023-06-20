import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable, switchMap, map } from 'rxjs';

import { Neighborhood } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  
  constructor(private http: HttpClient) { }

  getNeighborhoodsList(): Observable<any>{
    // return this.http.get('');
    return this.http.get('https://teamxiii-tech4good-production.up.railway.app/api/stats/all-hoods');
    
  
  }

  eliminaDuplicats(array:any) {
    const codis = new Set();
    return array.filter((obj:any) => {
        if (!codis.has(obj.neighborhoodCode)) {
            codis.add(obj.neighborhoodCode);
            return true;
        }
        return false;
    });
}


}