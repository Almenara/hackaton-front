import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { PopupService } from './popup.service';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  //park: string = 'https://hackaton-parks.herokuapp.com/park/getAll';
  centre: string = './assets/dummy/data-map.json';
  /*$.getJSON("test.json",function(data){
    L.geoJson(data).addTo(newMap);
    });*/
    

  constructor(private http: HttpClient,
    private popupService: PopupService) { }

    makeCentreMarkers(map: L.Map): void {
      console.log("centre" + this.centre);
      this.http.get(this.centre).subscribe((res: any) => {
        for (const c of res) {
  
          const geoXPart1 = c.geo_epgs_4326_x.replace(/\.+/g, '');
          const geoYPart1 = c.geo_epgs_4326_y.replace(/\.+/g, '');
  
          const geoXDots = geoXPart1.substring(0, 2) + "." + geoXPart1.substring(2, geoXPart1.length);
          const geoYDots = geoYPart1.substring(0, 1) + "." + geoYPart1.substring(1, geoYPart1.length);
  
          const lat = parseFloat(geoXDots);
          const lon = parseFloat(geoYDots);
  
          const marker = L.marker([lat, lon]);
          
          marker.bindPopup(this.popupService.makeCentresPopup(c));
  
          marker.addTo(map);
        }
      });
     }
}
